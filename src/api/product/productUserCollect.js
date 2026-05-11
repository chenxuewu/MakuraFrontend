import request from '@/utils/request'

export function getProductUserCollectList(query) {
    return request({
      url: '/product/collect/list',
      method: 'get',
      params: query
    })
  }


  //收藏/取消收藏商品
export function collectProduct(formData) {
    return request({
      url: '/product/collect/collectProduct',
      method: 'post',
      data: formData,
    })
  }
