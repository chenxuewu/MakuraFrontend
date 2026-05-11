<template>
  <div class="component-upload-image">
    <el-upload
      multiple
      :action="uploadImgUrl"
      :list-type="listType"
      :on-success="handleUploadSuccess"
      :before-upload="handleBeforeUpload"
      :limit="limit"
      :on-error="handleUploadError"
      :on-exceed="handleExceed"
      ref="imageUpload"
      :on-remove="handleDelete"
      :show-file-list="showFileList"
      :headers="headers"
      :file-list="fileList"
      :on-preview="handlePictureCardPreview"
      :disabled="disabled"
      :class="{
        hideUpload: this.fileList.length >= this.limit,
        [overClass]: !!overClass,
      }"
    >
      <el-button
        size="small"
        type="primary"
        v-if="showButton"
        :loading="loading"
      >
        {{ loading ? "上傳中" : "點選上傳" }}
      </el-button>
      <i class="el-icon-plus" v-else></i>
    </el-upload>

    <!-- 上傳提示 -->
    <div class="el-upload__tip" slot="tip" v-if="showTip">
      請上傳
      <template v-if="fileSize">
        大小不超過 <b style="color: #f56c6c">{{ fileSize }}MB</b>
      </template>
      <template v-if="fileType">
        格式為 <b style="color: #f56c6c">{{ fileType.join("/") }}</b>
      </template>
      的檔案
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      title="預覽"
      width="800"
      append-to-body
    >
      <img
        :src="dialogImageUrl"
        style="display: block; max-width: 100%; margin: 0 auto"
      />
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";

export default {
  props: {
    value: [String, Object, Array],
    // 圖片數量限制
    limit: {
      type: Number,
      default: 5,
    },
    // 大小限制(MB)
    fileSize: {
      type: Number,
      default: 5,
    },
    // 檔案型別, 例如['png', 'jpg', 'jpeg']
    fileType: {
      type: Array,
      default: () => ["png", "jpg", "jpeg"],
    },
    // 是否顯示提示
    isShowTip: {
      type: Boolean,
      default: true,
    },
    overClass: {
      type: String,
      default: null,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 回顯檔案列表
    displayFileList: {
      type: Array,
      required: false,
      default: () => [],
    },
    //回傳的自定義引數
    backData: {
      required: false,
      default: null,
    },
    // 是否顯示檔案列表
    showFileList: {
      type: Boolean,
      default: true,
    },
    // 是否顯示上傳按鈕
    showButton: {
      type: Boolean,
      default: false,
    },
    listType: {
      type: String,
      default: "picture-card",
    },
    // 是否顯示載入
    showLoading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      number: 0,
      uploadList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      baseUrl: process.env.VUE_APP_BASE_API,
      uploadImgUrl: process.env.VUE_APP_BASE_API + "/system/file/fileUpload", // 上傳的圖片伺服器地址
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      fileList: [],
      loading: false,
    };
  },
  watch: {
    value: {
      handler(val) {
        if (val) {
          // 首先將值轉為陣列
          const list = Array.isArray(val) ? val : this.value.split(",");
          // 然後將陣列轉為物件陣列
          this.fileList = list.map((item) => {
            if (typeof item === "string") {
              if (item.indexOf(this.baseUrl) === -1) {
                item = { name: this.baseUrl + item, url: this.baseUrl + item };
              } else {
                item = { name: item, url: item };
              }
            }
            return item;
          });
        } else {
          this.fileList = [];
          return [];
        }
      },
      deep: true,
      immediate: true,
    },
    displayFileList: {
      handler(val) {
        if (val) {
          this.fileList = val.map((item) => {
            if (typeof item === "string") {
              item = { name: item, url: item };
            }
            return item;
          });
        } else {
          this.fileList = [];
          return [];
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    // 是否顯示提示
    showTip() {
      return this.isShowTip && (this.fileType || this.fileSize);
    },
  },
  methods: {
    // 上傳前loading載入
    handleBeforeUpload(file) {
      this.loading = true;
      let isImg = false;
      if (this.fileType.length) {
        let fileExtension = "";
        if (file.name.lastIndexOf(".") > -1) {
          fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
        }
        isImg = this.fileType.some((type) => {
          if (file.type.indexOf(type) > -1) return true;
          if (fileExtension && fileExtension.indexOf(type) > -1) return true;
          return false;
        });
      } else {
        isImg = file.type.indexOf("image") > -1;
      }

      if (!isImg) {
        this.$modal.msgError(
          `檔案格式不正確, 請上傳${this.fileType.join("/")}圖片格式檔案!`
        );
        return false;
      }
      if (this.fileSize) {
        const isLt = file.size / 1024 / 1024 < this.fileSize;
        if (!isLt) {
          this.$modal.msgError(`上傳頭像圖片大小不能超過 ${this.fileSize} MB!`);
          return false;
        }
      }
      if (this.showLoading) {
        this.$modal.loading("正在上傳圖片，請稍候...");
      }
      this.number++;
    },
    // 檔案個數超出
    handleExceed() {
      this.$modal.msgError(`上傳檔案數量不能超過 ${this.limit} 個!`);
    },
    // 上傳成功回撥
    handleUploadSuccess(res, file) {
      this.loading = false;
      if (res.code === 200) {
        this.uploadList.push({
          name: res.data.fileName,
          url: res.data.downloadAddress,
          fileId: res.data.id,
        });
        this.uploadedSuccessfully();
      } else {
        this.number--;
        if (this.showLoading) {
          this.$modal.closeLoading();
        }
        this.$modal.msgError(res.msg);
        this.$refs.imageUpload.handleRemove(file);
        this.uploadedSuccessfully();
      }
    },
    // 刪除圖片
    handleDelete(file) {
      const findex = this.fileList.map((f) => f.fileId).indexOf(file.fileId);
      if (findex > -1) {
        this.fileList.splice(findex, 1);
        this.$emit("input", this.listToString(this.fileList));
        this.$emit("fileList", this.fileList, this.backData);
      }
    },
    // 上傳失敗
    handleUploadError() {
      this.loading = false;
      this.$modal.msgError("上傳圖片失敗，請重試");
      if (this.showLoading) {
        this.$modal.closeLoading();
      }
    },
    // 上傳結束處理
    uploadedSuccessfully() {
      if (this.number > 0 && this.uploadList.length === this.number) {
        this.fileList = this.fileList.concat(this.uploadList);
        this.uploadList = [];
        this.number = 0;
        this.$emit("input", this.listToString(this.fileList));
        // 回傳自定義引數
        this.$emit("fileList", this.fileList, this.backData);
        if (this.showLoading) {
          this.$modal.closeLoading();
        }
      }
    },
    // 預覽
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 物件轉成指定字元串分隔
    listToString(list, separator) {
      let strs = "";
      separator = separator || ",";
      for (let i in list) {
        if (list[i].url) {
          strs += list[i].url.replace(this.baseUrl, "") + separator;
        }
      }
      return strs != "" ? strs.substr(0, strs.length - 1) : "";
    },
  },
};
</script>
<style scoped lang="scss">
// .el-upload--picture-card 控制加號部分
::v-deep .hideUpload .el-upload--picture-card {
  display: none;
}

// 去掉動畫效果
::v-deep .el-list-enter-active,
::v-deep .el-list-leave-active {
  transition: all 0s;
}

::v-deep .el-list-enter,
.el-list-leave-active {
  opacity: 0;
  transform: translateY(0);
}

//SKU 圖片上傳樣式調整，邊框和圖片縮小至60px
::v-deep .skuImg .el-upload--picture-card {
  width: 60px;
  height: 60px;
  line-height: 62px;
}

::v-deep .skuImg .el-upload-list__item-thumbnail,
::v-deep .skuImg .el-upload-list__item {
  width: 60px;
  height: 60px;
  line-height: 62px;
}

::v-deep .skuImg .el-upload--picture-card i {
  font-size: 20px;
}

//sku 圖片隱藏圖片狀態的右上角的對勾
::v-deep
  .skuImg
  .el-upload-list__item.is-success
  .el-upload-list__item-status-label {
  display: none;
}


</style>
