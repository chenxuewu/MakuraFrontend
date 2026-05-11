const getRuleFormState = () => {
  return {
    id: null, // 商品id
    brandId: '', // 品牌id
    productCategoryId: '', // 商品分類ID
    categoryPath: '', // 商品分類名稱（全路徑）
    name: '', // 商品名稱
    publishStatus: '', // 上架狀態：0->下架；1->上架
    // new_status: '', // 新品狀態:0->不是新品；1->新品
    // recommand_status: '', // 推薦狀態；0->不推薦；1->推薦
    // sort: '', // 排序
    // sale: '', // 銷量
    // price: '', // 預設零售價格
    // purchase_proce: '', // 採購價格（平臺採購）
    // wholesale_proce: '', // 批發價格
    // sub_title: '', // 副標題
    description: '', // 商品描述
    // keywords: '', // 關鍵詞
    // detail_html: '', // 產品詳情網頁內容
    mainImages:[], // 商品主圖列表
    descriptionImages: [], // 商品描述圖片列表
    xtProductFiles: [],// 商品相關檔案，圖片或影片
    skuList: [], // sku列表
    attributes: [], // 屬性列表,
    specifications: [], // 規格列表
    xtProductAttributeValues: [], // 屬性值列表
    xtProductSkuForms: [], // sku表單列表
    productSourceAddress: '',
  };
};
export default {
  state: {
    ruleForm: getRuleFormState(),
    rules: {
      name: [{ required: true, message: '請輸入商品名稱', trigger: 'blur' }],
      mainImages: [{ required: true, message: '請上傳商品主圖', trigger: 'change' }],
      descriptionImages: [{ required: true, message: '請新增商品描述', trigger: 'change' }],
    },
  },
  actions: {},
  mutations: {

  }
};
