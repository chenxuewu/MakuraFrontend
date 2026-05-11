import request from '@/utils/request'

// 前台——获取首页板块列表（含商品数据，无需登录）
export function getHomeSections() {
  return request({
    url: '/purchase/homeSections',
    method: 'get'
  })
}

// ========== 管理接口（需登录）==========

export function listHomeSections() {
  return request({ url: '/system/homeSection/list', method: 'get' })
}

export function addHomeSection(data) {
  return request({ url: '/system/homeSection', method: 'post', data })
}

export function updateHomeSection(data) {
  return request({ url: '/system/homeSection', method: 'put', data })
}

export function deleteHomeSection(id) {
  return request({ url: `/system/homeSection/${id}`, method: 'delete' })
}

export function getSectionProducts(sectionId) {
  return request({ url: `/system/homeSection/${sectionId}/products`, method: 'get' })
}

export function addSectionProduct(sectionId, data) {
  return request({ url: `/system/homeSection/${sectionId}/products`, method: 'post', data })
}

export function deleteSectionProduct(id) {
  return request({ url: `/system/homeSection/products/${id}`, method: 'delete' })
}

export function updateSectionProductSort(sectionId, data) {
  return request({ url: `/system/homeSection/${sectionId}/products/sort`, method: 'put', data })
}
