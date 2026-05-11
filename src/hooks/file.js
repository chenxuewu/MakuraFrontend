import { downCommonFile, uploadFile } from '@/api/file/index.js';
import { Loading, Message } from 'element-ui';
import { saveAs } from 'file-saver';

function use_loading(text = '正在上傳，請稍後') {
  return Loading.service({
    lock: true,
    text,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
}

/**
 * 共用檔案上傳方法 hook
 * @param {File} file
 * @returns {Promise<unknown>}
 */
export function useUploadFile(file) {
  let formData = new FormData();
  formData.append('file', file);
  const loading = use_loading();
  return uploadFile(formData)
    .then((res) => {
      const { url } = res.data;
      return { url };
    })
    .finally(() => {
      loading.close();
    });
}

/**
 * 共用檔案下載方法 hook
 * @param {string} fileName
 * @param {string|number} fileId
 * @returns {Promise<T>}
 */
export function useDownloadFile(fileName, fileId) {
  const data = {
    fileName,
    fileId
  };
  const loading = use_loading('正在下載，請稍後');
  return downCommonFile(data)
    .then(res => {
      const data = res.data?.data;
      if (data) {
        const fileDisposition = res.headers['content-disposition'].split('=');
        const fileName = decodeURIComponent(fileDisposition[1]);
        saveAs(data, fileName)
        Message.success('下載成功！');
      } else {
        throw new Error('下載失敗，請重試');
      }
    })
    .catch(e => {
      Message.error('下載失敗，請重試');
      throw e;
    })
    .finally(() => {
      loading.close();
    });
}
