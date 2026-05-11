// array.js
// 處理空的children
export function processEmptyChildren(data, childrenPropertyName) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if (
      item[childrenPropertyName] &&
      item[childrenPropertyName].length === 0
    ) {
      delete item[childrenPropertyName];
    } else if (
      item[childrenPropertyName] &&
      item[childrenPropertyName].length > 0
    ) {
      processEmptyChildren(
        item[childrenPropertyName],
        childrenPropertyName
      );
    }
  }
}


/** 獲取陣列下全部資料id，要求子陣列字名稱為children */
export function getChildrenIdList(currentCategoryIdList, children) {
  if (children !== null && children !== undefined && children.length > 0) {
    children.forEach((item) => {
      currentCategoryIdList.push(item.id);
      getChildrenIdList(currentCategoryIdList, item.children);
    });
  }
  return currentCategoryIdList;
}

