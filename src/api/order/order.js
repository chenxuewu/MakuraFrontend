import request from '@/utils/request'

// 超級管理員檢視整個平臺的訂單
export function listOrder(xtOrderParam) {
  return request({
    url: '/order/list?pageNum=' + xtOrderParam.pageNum + '&pageSize=' + xtOrderParam.pageSize,
    method: 'post',
    data: xtOrderParam
  })
}

// 獲取訂單詳細信
export function getOrder(orderId) {
  return request({
    url: '/order/' + orderId,
    method: 'get'
  })
}

// 下單
export function addOrder(data) {
  return request({
    url: '/order',
    method: 'post',
    data: data
  })
}

// 修改訂單
export function updateOrder(data) {
  return request({
    url: '/order',
    method: 'put',
    data: data
  })
}

// 刪除訂單
export function delOrder(orderProcedureIds) {
  return request({
    url: '/order/' + orderProcedureIds,
    method: 'delete'
  })
}


// 查詢我的訂單列表
export function myOrderList(xtOrderParam) {
  return request({
    url: '/order/myOrderList?pageNum=' + xtOrderParam.pageNum + '&pageSize=' + xtOrderParam.pageSize,
    method: 'post',
    data: xtOrderParam
  })
}


// 查詢訂單子流程的詳細資料
export function orderProcedureDetails(orderProcedureId, orderId, query) {
  return request({
    url: '/order/orderProcedureDetails/' + orderProcedureId,
    method: 'get',
    params: {
      orderId: orderId
    }
  })
}


// 查詢我待辦訂單列表（待確認、帶確認取消）
export function myToBeConfirmedOrderList(xtOrderParam) {
  return request({
    url: '/order/myToBeConfirmedOrderList?pageNum=' + xtOrderParam.pageNum + '&pageSize=' + xtOrderParam.pageSize,
    method: 'post',
    data: xtOrderParam
  })
}

// 查詢我已辦的訂單
export function myConfirmedOrderList(xtOrderParam) {
  return request({
    url: '/order/myConfirmedOrderList?pageNum=' + xtOrderParam.pageNum + '&pageSize=' + xtOrderParam.pageSize,
    method: 'post',
    data: xtOrderParam
  })
}


// 查詢我的團內訂單列表
export function myDeptOrderList(xtOrderParam) {
  return request({
    url: '/order/myDeptOrderList?pageNum=' + xtOrderParam.pageNum + '&pageSize=' + xtOrderParam.pageSize,
    method: 'post',
    data: xtOrderParam
  })
}


// 確認訂單
export function confirmOrder(xtOrderItemForms) {
  return request({
    url: `/order/confirm`,
    method: 'post',
    data: xtOrderItemForms
  });
}

//批次上報
export function batchEscalationOrder(xtOrderItemForms) {
  return request({
    url: '/order/batchEscalationOrder',
    method: 'post',
    data: xtOrderItemForms
  });
}

//批次確認和上報
export function batchConfirmAndescalationOrder(data) {
  return request({
    url: `/order/batchConfirmAndescalationOrder`,
    method: 'post',
    data: data
  });
}


// 拒絕訂單
export function rejectedOrder(orderOptionParam) {
  return request({
    url: `/order/rejected`,
    method: 'post',
    data: orderOptionParam
  });
}

// 訂單已發貨
export function processedOrder(orderOptionParam) {
  return request({
    url: `/order/processed`,
    method: 'post',
    data: orderOptionParam
  });
}

// 申請取消訂單
export function applyCancelledOrder(orderOptionParam) {
  return request({
    url: `/order/applyCancelled`,
    method: 'post',
    data: orderOptionParam
  });
}

// 審批申請取消
export function approvalCancellation(orderOptionParam) {
  return request({
    url: `/order/approvalCancellation`,
    method: 'post',
    data: orderOptionParam
  });
}


// 上級取消訂單
export function superiorCancelOrder(orderOptionParam) {
  return request({
    url: `/order/superiorCancel`,
    method: 'post',
    data: orderOptionParam
  });
}

// 訂單確認收貨
export function confirmReceiptOrder(orderOptionParam) {
  return request({
    url: `/order/confirmReceipt`,
    method: 'post',
    data: orderOptionParam
  });
}

// 查詢訂單詳情
export function getOrderDetails(orderId, orderProcedureId) {
  return request({
    url: `/order/orderDetails/${orderId}?orderProcedureId=${orderProcedureId}`,
    method: 'get',
  });
}


// 批次獲取訂單商品價格介面
export function batchFindSkuPriceBySkuId(xtOrderProcedureListVos) {
  return request({
    url: '/order/batchFindSkuPriceBySkuId',
    method: 'post',
    data: xtOrderProcedureListVos,
  });
}

//立即下單結算頁獲取商品下單資訊
export function immediatelyOrder(data) {
  return request({
    url: '/order/immediatelyOrder',
    method: 'post',
    data: data,
  });
}


//追加留言
export function addMessage(data) {
  return request({
    url: '/order/addMessage',
    method: 'post',
    data: data,
  });
}

// 修改訂單的 Line 狀態
export function updateLineStatus(data) {
  return request({
    url: '/order/updateLineStatus',
    method: 'post',
    data: data
  })
}


// 获取订单通知记录
export function orderMsgList(orderProcedureSn) {
  return request({
    url: '/order/orderMsgList',
    method: 'get',
    params: {
      orderProcedureSn: orderProcedureSn
    }
  })
}



