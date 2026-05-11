<template>
    <div style="background: white;">
        <section class="productDetail-area" style="padding-top: 17px;padding-bottom: 54px">
            <div class="container">
                <el-row id="big">
                    <div class="crumb-wrap" style="border-radius: 5px;">
                        <div class="w" style="  margin-left: 15px; margin-right: 15px;">
                            <!-- <div v-if="isFront" class="crumb" style="font-size: 14px;"> -->
                            <div class="crumb" style="font-size: 14px !important; color: black;">
                                {{ product.categoryPath }}
                            </div>
                            <div class="contact" style="height: 22px;">
                                <ul class="contact-ul">
                                    <li>
                                        <!-- <a href="#" style="font-size: 14px;color: black;">
                                            店鋪：{{ shopName }}
                                        </a> -->
                                        <span style="font-size: 14px; color: black;">
                                            店鋪：{{ shopName }}
                                        </span>

                                        <!-- <span class="contact-sp">
                                            <span class="contact-sp1">
                                                JD
                                            </span>
                                        </span> -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="Shop">
                        <el-row :span="24">
                            <div class="box">
                                <div class="box-one">
                                    <div class="boxx"
                                        style="border: none;border-radius: 5px;overflow: hidden;width: 38%;">
                                        <el-image class="img1" style="border-radius: 5px;width: 450px;height: 450px;"
                                            :src="currentImage" fit="contain" lazy>
                                        </el-image>
                                        <div class="box-lh">
                                            <div class="box-lh-one">
                                                <ul class="carouselImage">
                                                    <li v-for="(image, index) in images" :key="index"
                                                        @click="changeImage(index)"
                                                        :class="{ 'selected-image': index === currentIndex }">
                                                        <img :src="image" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div id="left" @click="prevImage">
                                                &lt;
                                            </div>
                                            <div id="right" @click="nextImage">
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-two">
                                        <div class="box-name">
                                            {{ this.product.name }}
                                        </div>

                                        <div class="box-summary clear">
                                            <ul style="padding-left: 0px;">
                                                <li v-if="isMyProduct" class="cost-price">
                                                    <span style="color: black;">成本價：</span>
                                                    <span>NT$ </span>
                                                    <span>{{ wholesalePrice }}</span>
                                                </li>

                                                <li>
                                                    <span v-if="isMyProduct" style="color: black;">售價：</span>
                                                    <span>NT$ </span>
                                                    <span>{{ price }}</span>
                                                </li>

                                            </ul>
                                        </div>

                                        <div class="box-attr-3">
                                            <div class="box-attr clear">
                                                <dl>
                                                    <div v-for="(specification, index) in specifications" :key="index">
                                                        <dt>{{ specification.propName }}</dt>
                                                        <div class="sku-row">
                                                            <div v-for="(value, valueIndex) in specification.values"
                                                                :key="valueIndex" class="sku-item">
                                                                <dd style="margin-bottom: 10px;border-radius: 5px;overflow: hidden;"
                                                                    v-if="value.propValueName"
                                                                    :class="{ 'selected-sku': value.propSortNum === selectedSkuProp[index] }"
                                                                    @click.prevent="updatePrice(index, value.propSortNum)">
                                                                    <a href="#"
                                                                        style="display: flex; align-items: center;">
                                                                        <el-image v-if="value.imageUrl"
                                                                            :src="value.imageUrl"
                                                                            :preview-src-list="[value.imageUrl]" lazy>
                                                                        </el-image>
                                                                        <span :title="value.propValueName"
                                                                            class="sku-text"
                                                                            :class="{ 'selected-text': value.propSortNum === selectedSkuProp[index] }"
                                                                            style="height: 40px;display: flex; align-items: center;color: black;padding-left: 5px;">{{
                                    value.propValueName }}</span>
                                                                    </a>
                                                                </dd>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>

                                        <div class="box-btns clear" v-if="isFront">
                                            <div class="quantityLine">
                                                <div><span class="countText">數量：</span>
                                                    <div class="countWrapper">
                                                        <div class="quantityBtn minusBtn"
                                                            :class="{ 'disabled': modelQuantityPurchased === 1 }"
                                                            @click="minusProductNum">
                                                            <span class="quantityBtnTextForPC">-</span>
                                                        </div>
                                                        <div class="countValueWrapper"><input class="countValueForPC"
                                                                height="0" autocomplete="false"
                                                                v-model="modelQuantityPurchased"></div>
                                                        <div class="quantityBtn addBtn" @click="addProductNum"><span
                                                                class="quantityBtnTextForPC">+</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="box-btns-two">

                                                <div class="Actions--root--hwEujgc BasicContent--actions--1co8sx8">
                                                    <div class="Actions--leftButtons--1M3KkF7">
                                                        <button
                                                            class="Actions--btn--3islUTb Actions--leftBtn--3kx8kg8  Actions--primaryBtn--1UPmwd4"
                                                            @click="buyProduct"
                                                            style="background: #e4393c; vertical-align: top;"><span
                                                                style="display: inline; font-size: 16px; font-weight: bold; color: rgb(255, 255, 255);">立即購買</span>
                                                        </button>
                                                        <button
                                                            class="Actions--btn--3islUTb  Actions--rightBtn--3Ma6IDT  Actions--primaryBtn--1UPmwd4"
                                                            @click="addToCart"
                                                            style="background: #ff6a00;vertical-align: top;"><span
                                                                style="display: inline; font-size: 16px; font-weight: bold; color: rgb(255, 255, 255);">加入購物車</span>
                                                        </button>
                                                    </div>
                                                    <div class="Actions--divider--2U8scvj"></div>
                                                    <div class="Actions--rightButtons--24uJGXt">
                                                        <button
                                                            class="Actions--btn--3islUTb Actions--collect--1Hewtdn  Actions--textBtn--2gV3XJs"
                                                            style="vertical-align: top;">
                                                            <!-- <img style="max-width: 22%; margin-right: 3px;" src="./img/favorite.png"> -->
                                                            <span style="margin-right: 5px; margin-left: 15px;"
                                                                @click="updateCollect">
                                                                <template v-if="isCollect">
                                                                    <i style="color: #ff6a00" class="ri-star-fill"></i>
                                                                </template>
                                                                <template v-if="!isCollect">
                                                                    <i class="ri-star-line"></i>
                                                                </template>
                                                            </span>
                                                            <span class="Actions--iconText--2UTH-0g"
                                                                style="display: inline; font-size: 15px; font-weight: normal; color: black">收藏</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-row>

                        <el-row :span="24">
                            <el-col :span="24">
                                <div class="ShopXiangqing">
                                    <!--商品介紹-->
                                    <div class="allquanbushop">
                                        <ul class="shopjieshao" style="border-radius: 10px;">
                                            <li class="jieshoa" :class="{ 'actives': activeTab === 'introduction' }"
                                                @click="changeTab('introduction')">
                                                <a href="##">商品詳情</a>
                                            </li>
                                            <li class="jieshoa" :class="{ 'actives': activeTab === 'packaging' }"
                                                @click="changeTab('packaging')">
                                                <a href="##">商品引數</a>
                                            </li>
                                        </ul>
                                        <!--商品詳情-->
                                        <div class="huawei" style="text-align: center;">
                                            <ul class="xuanxiangka">
                                                <li class="jieshoa" id="li1" v-if="activeTab === 'introduction'">
                                                    <div class="shanpinsssss"
                                                        style="display: flex; justify-content: center; ">
                                                        <div v-html.prevent="product.description" style="width: 80%;">
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="baozhuang" id="li2" v-else-if="activeTab === 'packaging'">
                                                    <div class="guiGebox">
                                                        <div class="guiGe">
                                                            <h3 style="font-size: 15px !important;">主要引數</h3>
                                                            <dl>
                                                                <div v-for="productAttributeValue in productAttributeValueList"
                                                                    :key="productAttributeValueIndex">
                                                                    <dt>{{ productAttributeValue.displayAttributeName }}
                                                                    </dt>
                                                                    <!-- <div v-for="attributeValue in productAttributeValue.xtAttributeValueList"
                                                                        :key="attributeValueIndex"> -->
                                                                    <dd>{{ productAttributeValue.rawValue }}{{
                                                                        productAttributeValue.rawUnit }}</dd>
                                                                    <!-- </div> -->
                                                                </div>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-row>
            </div>
        </section>
    </div>
</template>

<script>
import { getProduct, behindGetProductById } from "@/api/product/product";
import { collectProduct } from "@/api/product/productUserCollect";
import { addPurchase } from "@/api/cart/cart";

export default {
    name: "ProductDetail",
    props: {
        productId: {
            type: String,
            default: "",
        },
        isFront: {
            type: Boolean,
            default: false,
        },
        // true表示是查詢上級店鋪商品詳情，false表示查詢本店鋪商品詳情
        isMyProduct: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            activeTab: 'introduction', // 預設顯示商品介紹
            product: { // 商品詳情
                id: "",
                name: "",
                description: "",
                categoryPath: "",
                specifications: [],
            },
            productAttributeValueList: [], // 商品屬性值列表
            productSkuList: [], // sku列表
            specifications: [], // 規格列表
            modelQuantityPurchased: 1, // 購買數量
            shopName: "",
            shopLogo: "",
            images: [], // 商品主圖 只展示5張
            currentIndex: 0,
            price: 0, // 零售價
            wholesalePrice: 0, // 成本價
            selectedSkuId: null, // 選中的skuId
            selectedSku: null, // 選中的sku
            // 選中規格屬性，但是規格會有多個，所以是陣列
            selectedSkuProp: [],
            // 是否收藏
            isCollect: false,
        };
    },

    created() {
        this.product.id = this.productId;
        this.getDetail(this.product.id);
    },

    methods: {
        changeTab(tab) {
            this.activeTab = tab;
        },

        getDetail(id) {
            const fetchData = (response) => {
                this.shopName = response.data.shopName;
                this.shopLogo = response.data.shopLogo;
                this.product = response.data.xtProductVo;
                // 商品圖片，預設需要5張
                this.images = response.data.xtProductFileVos.slice(0, 5).map(item => item.fileUrl);
                this.productSkuList = response.data.xtProductSkuVos;
                this.productAttributeValueList = response.data.xtProductAttributeValueVos;
                this.product.specifications = JSON.parse(this.product.specifications);
                // 預設給selectedSkuId賦值第一個sku的id
                this.selectedSkuId = this.productSkuList[0].id;
                this.selectedSku = this.productSkuList[0];
                // 預設給price賦值第一個sku的價格
                // 零售價
                this.price = this.productSkuList[0].xtProductSkuPriceVo.price;
                // 成本價
                if (this.isMyProduct) {
                    this.wholesalePrice = this.productSkuList[0].xtProductSkuPriceVo.purchasePrice;
                }
                this.isCollect = response.data.isCollect;
                // 獲取product.specifications 轉成陣列，並且獲取第一個規格的值
                this.specifications = this.product.specifications;
                // 設定selectedSkuProp長度，並且給每個值設定為specifications遍歷的第一個
                this.selectedSkuProp = new Array(this.specifications.length);
                // 遍歷selectedSkuProp，並且都設定為1
                for (let i = 0; i < this.selectedSkuProp.length; i++) {
                    this.selectedSkuProp[i] = this.specifications[i].values[0].propSortNum;
                }
                // 更新sku
                this.updateSku();
            };
            if (this.isMyProduct) {
                // 查詢我的店鋪商品詳情
                behindGetProductById(id).then(fetchData);
            } else {
                // 查詢上級店鋪商品詳情
                getProduct(id).then(fetchData);
            }
        },

        // 修改sku的價格和修改sku
        updateSku() {
            // 選中的sku坐標
            let selectedSkuIndex = '';
            // 獲取specifications的全部值，並且組合成1,1,1類似這種，但是去掉最後一個"," 避免出現1,1,1,這種
            for (let i = 0; i < this.specifications.length; i++) {
                // 拼接selectedSkuIndex，最後一個不加","
                if (i === this.specifications.length - 1) {
                    selectedSkuIndex += this.selectedSkuProp[i];
                } else {
                    selectedSkuIndex += this.selectedSkuProp[i] + ",";
                }
            }
            // 遍歷sku，透過selectedSkuProp的值，找到對應的sku
            for (let i = 0; i < this.productSkuList.length; i++) {
                const sku = this.productSkuList[i];
                // 判斷tierIndex
                if (sku.tierIndex === selectedSkuIndex) {
                    this.selectedSkuId = sku.id;
                    this.selectedSku = sku;
                    // 當點選不同的sku時更新價格
                    this.price = sku.xtProductSkuPriceVo.price;
                    this.wholesalePrice = sku.xtProductSkuPriceVo.purchasePrice;
                }
            }
        },

        goCurrentCategory(categoryId) {
            this.$router.push({
                path: "./home",
                query: {
                    id: categoryId,
                },
            });
        },

        // 商品數量加
        addProductNum() {
            this.modelQuantityPurchased = this.modelQuantityPurchased + 1;
        },

        // 商品數量減
        minusProductNum() {
            if (this.modelQuantityPurchased > 1) {
                this.modelQuantityPurchased = this.modelQuantityPurchased - 1;
            }
        },

        changeImage(index) {
            this.currentIndex = index;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },

        // 選擇sku
        updatePrice(index, propSortNum) {
            // 設定selectedSkuProp的值
            this.$set(this.selectedSkuProp, index, propSortNum);
            // 更新sku
            this.updateSku();
        },

        // 收藏
        updateCollect() {
            this.isCollect = !this.isCollect;
            const formData = {};
            formData.productIds = this.product.id;
            formData.isCollect = this.isCollect;
            collectProduct(formData);
        },

        // 加入購物車
        addToCart() {
            const XtCartItem = {
                productId: this.product.id,
                skuId: this.selectedSkuId,
                quantity: this.modelQuantityPurchased,
                addPurchasePrice: this.price,
            };
            addPurchase(XtCartItem).then(response => {
                if (response.code === 200) {
                    this.$message({
                        message: "加入購物車成功",
                        type: "wrong",
                    });
                } else {
                    this.$message({
                        message: response.message,
                        type: "error",
                    });
                }
            });
        },

        // 立即購買
        buyProduct() {
            const buyProduct = {
                productId: this.product.id,
                skuId: this.selectedSkuId,
                quantity: this.modelQuantityPurchased,
                addPurchasePrice: this.price,
            };

            this.$router.push({
                path: "/settleAccounts",
                query: {
                    cartItem: JSON.stringify(buyProduct),
                },
            });
        },
    },

    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        },
    },

};
</script>

<style scoped lang="scss">
// @import "~@a/front/css/bootstrap.min.css";
@import "~@a/front/css/owl.theme.default.min.css";
@import "~@a/front/css/owl.carousel.min.css";
@import "~@a/front/css/remixicon.css";
@import "~@a/front/css/meanmenu.min.css";
@import "~@a/front/css/animate.min.css";
@import "~@a/front/css/style.css";
@import "~@a/front/css/responsive.css";
@import "~@a/front/css/product/shop.css";

.Shop .ShopXiangqing .allquanbushop {
    width: 100%;
}

.Shop .ShopXiangqing {
    width: 100%;
}

.Shop .ShopXiangqing .allquanbushop .shopjieshao {
    width: 100%;
}

.box .box-two .box-summary ul li:last-child {
    float: left;
}

.Actions--root--hwEujgc {
    position: relative;
}

.BasicContent--actions--1co8sx8 {
    margin-top: 38px;
}

.Actions--leftButtons--1M3KkF7 {
    display: inline-block;
}

.Actions--btn--3islUTb {
    outline: 0;
    font-family: PingFang SC;
    border: 0;
    cursor: pointer;
    height: 48px;
    line-height: 22px;
    text-align: center;
    background: transparent;
}

.Actions--primaryBtn--1UPmwd4.Actions--rightBtn--3Ma6IDT {
    border-top-right-radius: 34px;
    border-bottom-right-radius: 34px;
}

.Actions--primaryBtn--1UPmwd4 {
    padding: 0 36px;
}

.Actions--divider--2U8scvj {
    display: inline-block;
    margin-left: 20px
}

.Actions--divider--2U8scvj:after {
    content: "";
    height: 18px;
    width: 1px;
    background-color: #eee;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.Actions--rightButtons--24uJGXt {
    width: 82px;
    display: inline-block;
}

.Actions--collect--1Hewtdn {
    height: 30px;
    border-radius: 20px;
    background: transparent;
    margin-top: 9px;
}

.Actions--textBtn--2gV3XJs {
    -webkit-box-shadow: none;
    box-shadow: none;
    width: auto;
    border: none;
}

.Actions--collect--1Hewtdn .Actions--icon--2tsRcFB,
.Actions--collect--1Hewtdn .Actions--iconText--2UTH-0g {
    line-height: 30px;
}

.Actions--icon--2tsRcFB {
    margin-right: 3px;
    vertical-align: top;
    font-family: taobao !important;
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    line-height: 48px;
}

.Actions--primaryBtn--1UPmwd4.Actions--leftBtn--3kx8kg8 {
    border-top-left-radius: 34px;
    border-bottom-left-radius: 34px;
}

.quantityLine {
    margin-top: 9px;
}

.skuWrapper,
.skuWrapper * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.countText {
    display: inline-block;
    height: 14px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: black;
    width: 75px;
    line-height: 14px;
    margin-top: 11px;
}

.countWrapper,
.countWrapper>div {
    display: inline-block;
    vertical-align: top;
}

.quantityBtn.disabled,
.skuItem.disabled,
.skuServiceUniqItem.disabled {
    cursor: not-allowed;
    color: #ccc;
    background-color: rgba(0, 0, 0, .06);
}

.countWrapper>div {
    text-align: center;
    line-height: 36px;
}

.countWrapper,
.countWrapper>div {
    display: inline-block;
    vertical-align: top;
}

.minusBtn {
    border-top-left-radius: 5.645px;
    border-bottom-left-radius: 5.645px;
}

.quantityBtnTextForPC {
    font-size: 20px;
}

.countValueWrapper {
    width: 48.75px;
    margin: 0 2px;
    height: 36px;
    background-color: rgba(0, 0, 0, .06);
    overflow: hidden;
}

.countValueForPC {
    font-size: 16px;
}

.countValue,
.countValueForPC {
    outline: none;
    border: none;
    text-align: center;
    padding: 0 2px;
    width: 44px;
    background-color: transparent;
}

.addBtn {
    border-top-right-radius: 5.645px;
    border-bottom-right-radius: 5.645px;
}

.quantityBtn {
    height: 36px;
    width: 36px;
    background-color: rgba(0, 0, 0, .06);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.actives {
    background: #ff6a00 !important;
}

.actives a {
    color: white !important;
}

.selected-image {
    border: 2px solid red;
    /* 2px紅色邊框，你可以根據需要調整 */
}


.item-container {
    display: flex;
}

.item-link {
    display: flex;
    align-items: center;
    /* 垂直居中 */
}

.item-image {
    vertical-align: middle;
    /* 將圖片垂直居中 */
}

.selected-sku {
    border: 1px solid red !important;
}


#left,
#right {
    outline: none;
    user-select: none;
}

#left:focus,
#right:focus {
    outline: none;
    user-select: none;
}

.sku-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}


.sku-item {
    width: calc(33.33% - 10px);
    /* 33.33% 用於確保每行只有3列，10px是間距 */
    box-sizing: border-box;
    margin-bottom: 3px;
    /* 根據需要調整每個 SKU 之間的間距 */
    overflow: hidden;
    /* 防止圖片溢位 */
}

.sku-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 80%;
    /* 設定最大寬度為每列寬度的80% */
}

.selected-text {
    color: red !important;
}

.box,
.simple {
    height: auto !important;
}

.carouselImage {
    padding-left: 0rem !important;
}
</style>
