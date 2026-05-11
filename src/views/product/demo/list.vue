<template>
  <div class="app-container">
    <!-- 平臺、地區、店鋪、訂單狀態、時間、快遞單號、訂單編號、sku、商品名、買家姓名、處理狀態 -->
    <vxe-form
      :data="searchForm"
      title-width="100"
      title-align="right"
      size="mini"
      @submit="searchEvent()"
    >
      <!-- <vxe-form-item
        field="processStatus"
        title="店鋪"
        span="24"
        v-if="buttonShow.visable"
      >
        <el-checkbox-group
          v-model="searchForm.selectedShopIds"
          size="mini"
          @change="shopButtonChange"
        >
          <el-checkbox-button
            v-for="shop in shopList"
            :label="shop.shopId"
            :key="shop.shopId"
            >{{ shop.anotherName }}</el-checkbox-button
          >
        </el-checkbox-group>
      </vxe-form-item> -->
      <vxe-form-item
        field="processStatus"
        title="訂單狀態"
        span="24"
        v-if="buttonShow.visable"
      >
        <el-radio-group
          v-model="searchForm.platformStatus"
          size="mini"
          @change="searchEvent()"
        >
          <el-radio-button
            v-for="platformStatus in platformStatusList"
            :label="platformStatus.value"
            :key="platformStatus.value"
            >{{ platformStatus.label }}</el-radio-button
          >
        </el-radio-group>
      </vxe-form-item>
      <vxe-form-item
        field="processStatus"
        title="處理狀態"
        span="24"
        v-if="buttonShow.visable"
      >
        <el-radio-group
          v-model="searchForm.processStatus"
          size="mini"
          @change="searchEvent()"
        >
          <el-radio-button :label="null">全部</el-radio-button>
          <el-radio-button :label="1">未處理</el-radio-button>
          <el-radio-button :label="24">自建倉揀貨中</el-radio-button>
          <el-radio-button :label="25">自建倉已發貨</el-radio-button>
          <el-radio-button :label="7">大陸倉待揀貨</el-radio-button>
          <el-radio-button :label="6">大陸倉已處理</el-radio-button>
          <el-radio-button :label="16">海外倉待揀貨</el-radio-button>
          <el-radio-button :label="15">海外倉已處理</el-radio-button>
          <el-radio-button :label="30">已完成</el-radio-button>
        </el-radio-group>
      </vxe-form-item>

      <!-- <vxe-form-item field="shopIds" title="店鋪" span="8">
        <el-cascader
          v-model="searchForm.shopIds"
          :options="shopOptions"
          :props="props"
          collapse-tags
          size="mini"
          filterable
          @change="shopSelectChange"
        ></el-cascader>
      </vxe-form-item> -->
      <!-- <vxe-form-item
        field="platformStatus"
        title="訂單狀態"
        span="8"
        :item-render="{ name: 'ElSelect', options: platformStatusList }"
      ></vxe-form-item> -->
      <!-- <vxe-form-item
        field="processStatus"
        title="處理狀態"
        span="8"
        :item-render="{ name: 'ElSelect', options: processStatusList }"
      ></vxe-form-item> -->
      <vxe-form-item field="ordersns" title="訂單編號" span="8">
        <el-input
          type="textarea"
          v-model="searchForm.ordersns"
          ref="ordersns"
          placeholder="請掃描或手動輸入訂單編號"
          size="mini"
          :autosize="{ minRows: 1, maxRows: 10 }"
          clearable
        ></el-input>
      </vxe-form-item>
      <vxe-form-item
        field="expressNum"
        title="快遞單號"
        span="8"
        folding
        :item-render="{ name: 'ElInput', props: { clearable: true } }"
      ></vxe-form-item>
      <vxe-form-item
        field="itemName"
        title="商品名稱"
        span="8"
        :item-render="{ name: 'ElInput', props: { clearable: true } }"
      ></vxe-form-item>
      <vxe-form-item
        field="itemSku"
        title="商品SKU"
        span="8"
        :item-render="{ name: 'ElInput', props: { clearable: true } }"
      ></vxe-form-item>
      <vxe-form-item
        field="recipientName"
        title="收件人"
        span="8"
        folding
        :item-render="{ name: 'ElInput', props: { clearable: true } }"
      ></vxe-form-item>
      <!-- <vxe-form-item
        field="country"
        title="地區"
        span="8"
        folding
        :item-render="{ name: 'ElSelect', options: countrySearchList }"
      ></vxe-form-item> -->
      <!-- <vxe-form-item
        field="platform"
        title="平臺"
        span="8"
        folding
        :item-render="{ name: 'ElSelect', options: platformSearchList }"
      ></vxe-form-item> -->
      <!-- <vxe-form-item field="sort" title="排序" span="8" folding>
        <el-select v-model="searchForm.sort" size="mini">
          <el-option-group
            v-for="group in sortList"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-option-group>
        </el-select>
      </vxe-form-item> -->
      <vxe-form-item
        field="bagNum"
        title="袋號"
        span="8"
        folding
        :item-render="{ name: 'ElInput', props: { clearable: true } }"
      ></vxe-form-item>
      <vxe-form-item field="createTime" title="訂單時間" span="8" folding>
        <el-date-picker
          v-model="searchForm.createTime"
          size="mini"
          type="datetimerange"
          unlink-panels
          range-separator="至"
          start-placeholder="開始日期"
          end-placeholder="結束日期"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </vxe-form-item>
      <vxe-form-item
        span="24"
        align="center"
        collapse-node
        :item-render="{
          name: 'ElButtons',
          children: [
            {
              content: '查詢',
              props: { type: 'primary', nativeType: 'submit' },
            },
            { content: '重置', props: { nativeType: 'reset' } },
            {
              content: buttonShow.str,
              events: { click: changeButtonShowType },
            },
          ],
        }"
      ></vxe-form-item>
    </vxe-form>

    <vxe-toolbar print custom size="mini">
      <template v-slot:buttons>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="syncOrder"
        >
          <i class="ti-cloud-down m-r-5"></i>同步訂單
        </el-button>
        <!-- <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="batchPrintTransfer"
        >
          <i class="ti-printer m-r-5"></i>中轉面單
        </el-button>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="batchPrintBarCodeTransfer"
        >
          <i class="ti-printer m-r-5"></i>二維碼面單
        </el-button>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="printPickBill"
        >
          <i class="ti-printer m-r-5"></i>揀貨單
        </el-button>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="batchPrintBill"
        >
          <i class="ti-printer m-r-5"></i>面單
        </el-button>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="logosticInit"
        >
          <i class="ti-cloud-up m-r-5"></i>初始化
        </el-button>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="showBagModal"
        >
          <i class="ti-package m-r-5"></i>裝袋
        </el-button>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="showConcentrateModal"
        >
          <i class="ti-truck m-r-5"></i>集包
        </el-button>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="changeOrderCompleteByUser"
        >
          <i class="ti-control-forward m-r-5"></i>轉完成
        </el-button>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="changeOrderNohandleByUser"
        >
          <i class="ti-control-backward m-r-5"></i>轉未處理
        </el-button>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="showCalculator"
        >
          <i class="ti-ruler m-r-5"></i>利潤
        </el-button> -->

        <!-- <download-excel
          class="export-excel-wrapper"
          style="float: right; margin-right: 12px"
          :data="exportData"
          :fields="exportFields"
          name="訂單資料.xls"
        >
          <el-button
            class="vxe-button type--button size--mini is--circle"
            size="mini"
            title="匯出"
            @click="exportEvent"
          >
            <i class="vxe-button--icon vxe-icon--download"></i>
          </el-button>
        </download-excel> -->
        <!-- <el-button class="dt-button" size="mini">
          <i class="ti-printer m-r-5"></i>揀貨單
        </el-button>-->
      </template>
    </vxe-toolbar>

    <vxe-table
      size="mini"
      border
      :scroll-y="{ gt: -1 }"
      keep-source
      highlight-hover-row
      ref="orderTableData"
      :align="allAlign"
      :loading="loading"
      :data="tableData"
      :checkbox-config="{ highlight: true }"
    >
      <vxe-table-column
        type="checkbox"
        fixed="left"
        width="55"
      ></vxe-table-column>
      <vxe-table-column title="店鋪資訊" type="html" min-width="55">
        <template v-slot="{ row }">
          <el-tooltip placement="top" popper-class="atooltip">
            <div slot="content">
              店鋪名稱：{{ row.shop.shopName }}
              <br />
              店鋪ID：{{ row.shopId }}
              <br />
              平臺：{{ getPlatformStr(row.shop.platform) }}
              <br />
              地區：{{ getCountryStr(row.shop.country) }}
            </div>
            <div>
              <a
                v-on:click.stop="openShop(row.shopId)"
                style="text-decoration: underline !important"
                >{{ row.shop.anotherName }}</a
              >
              <div v-html="getPlatformHtml(row.shop.platform)"></div>
              <div v-html="getCountryStr(row.shop.country)"></div>
            </div>
          </el-tooltip>
        </template>
      </vxe-table-column>
      <vxe-table-column title="訂單詳情" min-width="100">
        <template v-slot:header>
          <div class="header-cell-f">
            <div class="header-cell-s header-cell-s-left">訂單詳情</div>
            <div class="header-cell-s">
              <div class="header-cell-t border-bottom">編號</div>
              <div class="header-cell-t">總價</div>
            </div>
          </div>
        </template>
        <template v-slot="{ row }">
          <div>{{ row.ordersn }}</div>
          <div>{{ row.totalAmount }} / {{ row.currency }}</div>
        </template>
      </vxe-table-column>
      <vxe-table-column type="html" width="400">
        <template v-slot:header>
          <div class="header-cell-f">
            <div class="header-cell-s header-cell-s-left">商品詳情</div>
            <div class="header-cell-s">
              <div class="header-cell-t border-bottom">名稱</div>
              <div class="header-cell-t">規格</div>
            </div>
          </div>
        </template>
        <template v-slot="{ row }">
          <el-row
            v-for="(shopeeOrderItem, index) in row.shopeeOrderItems"
            :key="index"
            :class="
              row.shopeeOrderItems.length - 1 > index ? 'border-bottom' : ''
            "
          >
            <el-tooltip placement="top-start" popper-class="atooltip">
              <div slot="content">
                商品名稱：{{ shopeeOrderItem.itemName }}
                <br />
                商品規格：{{
                  shopeeOrderItem.modelId > 0
                    ? shopeeOrderItem.modelName
                    : "無規格"
                }}
                <br />
                商品數量：{{ shopeeOrderItem.amount }}
                <br />
                商品單價：{{ shopeeOrderItem.price }}
              </div>
              <div>
                <el-col :span="6">
                  <img
                    height="70px"
                    width="70px"
                    style="margin: 2px 0"
                    :src="shopeeOrderItem.modelUrl"
                  />
                </el-col>
                <el-col :span="14" style="text-align: left">
                  <a
                    class="item-name"
                    v-on:click="openItem(row.shopId, shopeeOrderItem.itemId)"
                    >{{ shopeeOrderItem.itemName }}</a
                  >
                  <div>
                    {{
                      shopeeOrderItem.modelId > 0
                        ? shopeeOrderItem.modelName
                        : "無規格"
                    }}
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="item-name item-num">
                    <i class="el-icon-close"></i>
                    {{ shopeeOrderItem.amount }}
                  </div>
                  <div>{{ shopeeOrderItem.price }}</div>
                </el-col>
              </div>
            </el-tooltip>
          </el-row>
        </template>
      </vxe-table-column>
      <vxe-table-column title="訂單狀態" min-width="55">
        <template v-slot="{ row }">
          <el-tooltip placement="top" popper-class="atooltip">
            <div slot="content">
              訂單狀態：{{ getPlatformStatusStr(row.platformStatus) }}
              <br />
              處理狀態：{{ getProcessStatusStr(row.processStatus) }}
              <br />
              發貨方式：{{ getHandleStr(row.handle) }}
            </div>
            <div>
              <div>{{ getPlatformStatusStr(row.platformStatus) }}</div>
              <div>{{ getProcessStatusStr(row.processStatus) }}</div>
              <div>{{ getHandleStr(row.handle) }}</div>
            </div>
          </el-tooltip>
        </template>
      </vxe-table-column>
      <vxe-table-column title="買家資訊" min-width="60">
        <template v-slot="{ row }">
          <el-tooltip placement="top" popper-class="atooltip">
            <div slot="content">
              買家帳號：{{ row.buyerUsername }}
              <br />
              買家留言：{{ row.messageToSeller }}
              <br />
              備註：{{ row.myNote }}
            </div>
            <div>
              <div>{{ row.buyerUsername }}</div>
              <div>{{ row.shippingCarrier }}</div>
              <div class="buyer-note">
                {{
                  row.messageToSeller
                    ? "買家留言：" + row.messageToSeller
                    : row.messageToSeller
                }}
              </div>
            </div>
          </el-tooltip>
        </template>
      </vxe-table-column>
      <vxe-table-column title="收件資訊" min-width="120">
        <template v-slot="{ row }">
          <el-tooltip placement="top" popper-class="atooltip">
            <div slot="content">
              收件人：{{ row.recipientAddress.name }}
              <br />
              手機號：{{ row.recipientAddress.phone }}
              <br />
              收件地址：{{ row.recipientAddress.fullAddress }}
              <br />
              裝袋號：{{ row.bagNum }}
            </div>
            <div class="recipient">
              <div>{{ row.recipientAddress.name }}</div>
              <div>{{ row.recipientAddress.phone }}</div>
              <div class="address">{{ row.recipientAddress.fullAddress }}</div>
            </div>
          </el-tooltip>
        </template>
      </vxe-table-column>
      <vxe-table-column title="訂單時間" width="150">
        <template v-slot="{ row }">
          <el-tooltip placement="top" popper-class="atooltip">
            <div slot="content">
              下單時間：{{ formatTime(row.platformCreateTime) }}
              <br />
              支付時間：{{ formatTime(row.payTime) }}
            </div>
            <div>
              <div>{{ formatTime(row.platformCreateTime) }}</div>
            </div>
          </el-tooltip>
        </template>
      </vxe-table-column>
      <vxe-table-column title="操作" width="70">
        <template v-slot="{ row }">
          <div>
            <el-tooltip
              content="訂單詳情"
              placement="left"
              popper-class="atooltip"
            >
              <a v-on:click.stop.prevent="detailEvent(row)">
                <i class="ti-receipt f-z-14"></i>
              </a>
            </el-tooltip>
            <el-tooltip
              content="處理訂單"
              placement="left"
              popper-class="atooltip"
            >
              <a v-on:click.stop.prevent="editEvent(row)" class="m-l-20">
                <i class="ti-pencil-alt f-z-14"></i>
              </a>
            </el-tooltip>
            <el-tooltip content="電商轉拍" placement="left" popper-class="atooltip">
              <a v-on:click.stop="editEvent(row,1)">
                <i class="ti-shopping-cart f-z-14"></i>
              </a>
            </el-tooltip>
            <el-tooltip content="集包直送" placement="left" popper-class="atooltip">
              <a v-on:click.stop="editEvent(row,2)" class="m-l-20">
                <i class="ti-truck f-z-14"></i>
              </a>
            </el-tooltip>
          </div>
          <div>
            <el-tooltip content="大陸倉" placement="left" popper-class="atooltip">
              <a v-on:click.stop="editEvent(row,3)">
                <i class="ti-home f-z-14"></i>
              </a>
            </el-tooltip>
            <el-tooltip content="海外倉" placement="left" popper-class="atooltip">
              <a v-on:click.stop="editEvent(row,4)" class="m-l-20">
                <i class="ti-world f-z-14"></i>
              </a>
            </el-tooltip>
          </div>
        </template>
      </vxe-table-column>
    </vxe-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="tablePage.currentPage"
      :page-sizes="[5, 10, 15, 20, 50, 100, 150, 200]"
      :page-size="tablePage.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tablePage.totalResult"
    ></el-pagination>

    <vxe-modal
      ref="xModal"
      v-model="showEdit"
      title="處理訂單"
      width="900"
      resize
      remember
      fullscreen
      destroy-on-close
    >
      <template v-slot>
        <div class="center">
          <div class="alert">
            <div class="card-header">
              <div class="card-header-right-icon"></div>
            </div>
            <div class="card-body">
              <div class="horizontal-form">
                <el-form
                  :model="orderForm"
                  class="form-horizontal order-form my_error"
                  ref="orderForm"
                  label-width="110px"
                >
                  <div class="form-group">
                    <el-form-item
                      label="店鋪名："
                      prop="anotherName"
                      class="col-lg-4"
                    >
                      <el-input
                        v-html="orderForm.shop.anotherName"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="平臺："
                      prop="platform"
                      class="col-lg-4"
                    >
                      <el-input
                        v-html="orderForm.shop.platform"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="地區："
                      prop="country"
                      class="col-lg-4"
                    >
                      <el-input
                        v-html="orderForm.shop.country"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item
                      label="訂單編號："
                      prop="ordersn"
                      class="col-lg-4"
                    >
                      <el-input
                        v-html="orderForm.ordersn"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="訂單總價："
                      prop="totalAmount"
                      class="col-lg-4"
                    >
                      <el-input
                        v-html="
                          orderForm.totalAmount + ' / ' + orderForm.currency
                        "
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="訂單狀態："
                      prop="platformStatus"
                      class="col-lg-4"
                    >
                      <el-input
                        v-html="orderForm.platformStatus"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group b-b-1">
                    <el-form-item label="收件人：" prop="name" class="col-lg-4">
                      <el-input
                        v-html="orderForm.recipientAddress.name"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="手機號："
                      prop="phone"
                      class="col-lg-4"
                    >
                      <el-input
                        v-html="orderForm.recipientAddress.phone"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="收件地址："
                      prop="fullAddress"
                      class="col-lg-4"
                    >
                      <el-input
                        v-html="orderForm.recipientAddress.fullAddress"
                        class="form-show address"
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="form-group">
                    <el-form-item
                      label="發貨方式："
                      prop="handle"
                      class="col-lg-6"
                    >
                      <el-select
                        v-model="orderForm.handle"
                        placeholder="必填，請選擇訂單發貨方式"
                        size="mini"
                        @change="handleTypeChange"
                        clearable
                      >
                        <el-option
                          v-for="item in handleTypeList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="備註：" prop="myNote" class="col-lg-6">
                      <el-input
                        type="textarea"
                        v-model="orderForm.myNote"
                        class="form-show"
                        size="mini"
                        :autosize="{ minRows: 1, maxRows: 3 }"
                        maxlength="100"
                        clearable
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item
                      label="處理狀態："
                      prop="processStatus"
                      class="col-lg-6"
                    >
                      <el-input
                        v-html="orderForm.processStatus"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="物流選擇："
                      prop="shipType"
                      class="col-lg-6 form-show"
                      v-if="orderForm.handle != Handle.OVERSEA"
                    >
                      <el-radio-group
                        v-model="orderForm.orderShip.shipType"
                        size="mini"
                      >
                        <el-radio :label="1">空運</el-radio>
                        <el-radio :label="2">海運</el-radio>
                        <el-radio :label="3">海快</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item
                      label="代貼單："
                      prop="needPrint"
                      class="col-lg-6 form-show"
                      v-if="
                        orderForm.handle == Handle.TRANSFER ||
                        orderForm.handle == Handle.CONCENTRATE
                      "
                    >
                      <el-radio-group
                        v-model="orderForm.orderShip.needPrint"
                        size="mini"
                      >
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item
                      label="代交店："
                      prop="needDelivery"
                      class="col-lg-6 form-show"
                    >
                      <el-radio-group
                        v-model="orderForm.orderShip.needDelivery"
                        size="mini"
                      >
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                  <div
                    class="form-group"
                    v-if="
                      orderForm.handle == Handle.TRANSFER ||
                      orderForm.handle == Handle.CONCENTRATE
                    "
                  >
                    <el-form-item
                      label="快遞單號："
                      prop="expresses"
                      class="col-lg-12 form-show my_required_label"
                    >
                      <el-row
                        v-for="(express, index) in orderForm.expresses"
                        :key="index"
                      >
                        <el-col :span="10">
                          <el-input
                            type="text"
                            v-model.trim="express.expressNum"
                            placeholder="必填"
                            size="mini"
                            maxlength="30"
                            @change="onExpressChange"
                            clearable
                          ></el-input>
                        </el-col>
                        <el-col :span="10">
                          <el-form-item
                            label="備註："
                            prop="expressNote"
                            class="col-lg-12 form-show no_required_label"
                          >
                            <el-input
                              type="text"
                              v-model="express.expressNote"
                              placeholder="選填"
                              size="mini"
                              maxlength="30"
                              clearable
                            ></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="2">
                          <el-button
                            icon="ti-plus"
                            size="mini"
                            class="btn-plus"
                            @click="plusExpress(index)"
                          ></el-button>
                        </el-col>
                        <el-col :span="2" v-if="orderForm.expresses.length > 1">
                          <el-button
                            icon="ti-minus"
                            size="mini"
                            class="btn-minus"
                            @click="minusExpress(index)"
                          ></el-button>
                        </el-col>
                      </el-row>
                    </el-form-item>
                  </div>
                  <!-- <div class="form-group">
                    <el-form-item
                      label="大陸倉SKU："
                      prop="platformList"
                      class="col-lg-12 form-show my_required_label"
                      v-if="orderForm.handle == Handle.MAINLAND"
                    >
                      <el-row
                        v-for="(mainland, index) in orderForm.mainlands"
                        :key="index"
                      >
                        <el-col :span="11">
                          <el-select
                            v-model="mainland.id"
                            placeholder="必填，請選擇"
                            size="mini"
                            filterable
                            clearable
                            @change="mainlandChange(mainland.id)"
                          >
                            <el-option
                              v-for="item in mainlandList"
                              :key="item.value"
                              :label="getStorageName(item)"
                              :value="item.id"
                              :disabled="setMainlandDisable(item.id)"
                            >
                              <span style="float: left">{{
                                getStorageName(item)
                              }}</span>
                              <span
                                style="
                                  float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                                >{{ item.availableStock }}</span
                              >
                            </el-option>
                          </el-select>
                        </el-col>
                        <el-col :span="9">
                          <label
                            for="amount"
                            class="col-md-5 el-form-item__label"
                            style="padding-left: 0px"
                            >數量：</label
                          >
                          <el-input
                            v-model="mainland.storageOrder.amount"
                            size="mini"
                            :placeholder="
                              mainland.availableStock == null
                                ? '必填'
                                : '可用數量：' + mainland.availableStock
                            "
                            class="col-md-7 el-form-item__content"
                            style="padding: 0"
                            oninput="value=value.replace(/[^\d]/g,'')"
                            @change="
                              checkedStock(
                                mainland.availableStock,
                                mainland.storageOrder.amount
                              )
                            "
                            clearable
                          ></el-input>
                        </el-col>
                        <el-col :span="2">
                          <el-button
                            icon="ti-plus"
                            size="mini"
                            class="btn-plus"
                            @click="plusMainland(index)"
                          ></el-button>
                        </el-col>
                        <el-col :span="2" v-if="orderForm.mainlands.length > 1">
                          <el-button
                            icon="ti-minus"
                            size="mini"
                            class="btn-minus"
                            @click="minusMainland(index)"
                          ></el-button>
                        </el-col>
                      </el-row>
                    </el-form-item>
                  </div> -->
                  <!-- <div class="form-group">
                    <el-form-item
                      label="海外倉SKU："
                      prop="platformList"
                      class="col-lg-12 form-show my_required_label"
                      v-if="orderForm.handle == Handle.OVERSEA"
                    >
                      <el-row
                        v-for="(oversea, index) in orderForm.overseas"
                        :key="index"
                      >
                        <el-col :span="11">
                          <el-select
                            v-model="oversea.id"
                            placeholder="必填，請選擇"
                            size="mini"
                            filterable
                            clearable
                            @change="overseaChange(oversea.id)"
                          >
                            <el-option
                              v-for="item in overseaList"
                              :key="item.value"
                              :label="getStorageName(item)"
                              :value="item.id"
                              :disabled="setOverseaDisable(item.id)"
                            >
                              <span style="float: left">{{
                                getStorageName(item)
                              }}</span>
                              <span
                                style="
                                  float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                                >{{ item.availableStock }}</span
                              >
                            </el-option>
                          </el-select>
                        </el-col>
                        <el-col :span="9">
                          <label
                            for="amount"
                            class="col-md-5 el-form-item__label"
                            style="padding-left: 0px"
                            >數量：</label
                          >
                          <el-input
                            v-model.trim="oversea.storageOrder.amount"
                            size="mini"
                            :placeholder="
                              oversea.availableStock == null
                                ? '必填'
                                : '可用數量：' + oversea.availableStock
                            "
                            class="col-md-7 el-form-item__content"
                            style="padding: 0"
                            oninput="value=value.replace(/[^\d]/g,'')"
                            @change="
                              checkedStock(
                                oversea.availableStock,
                                oversea.storageOrder.amount
                              )
                            "
                            clearable
                          ></el-input>
                        </el-col>
                        <el-col :span="2">
                          <el-button
                            icon="ti-plus"
                            size="mini"
                            class="btn-plus"
                            @click="plusOversea(index)"
                          ></el-button>
                        </el-col>
                        <el-col :span="2" v-if="orderForm.overseas.length > 1">
                          <el-button
                            icon="ti-minus"
                            size="mini"
                            class="btn-minus"
                            @click="minusOversea(index)"
                          ></el-button>
                        </el-col>
                      </el-row>
                    </el-form-item>
                  </div> -->
                  <div class="form-group">
                    <div
                      v-for="(
                        shopeeOrderItem, index
                      ) in orderForm.shopeeOrderItems"
                      :key="index"
                      class="b-b-1"
                      :class="index == 0 ? 'b-t-1' : ''"
                    >
                      <el-row>
                        <el-col :span="6">
                          <img
                            height="70px"
                            width="70px"
                            style="margin: 2px 0"
                            :src="shopeeOrderItem.modelUrl"
                          />
                        </el-col>
                        <el-col :span="14" style="text-align: left">
                          <a class="item-name">{{
                            shopeeOrderItem.itemName
                          }}</a>
                          <div>
                            {{
                              shopeeOrderItem.modelId > 0
                                ? shopeeOrderItem.modelName
                                : "無規格"
                            }}
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="item-name item-num">
                            <i class="el-icon-close"></i>
                            {{ shopeeOrderItem.amount }}
                          </div>
                          <div>{{ shopeeOrderItem.price }}</div>
                        </el-col>
                      </el-row>
                      <el-row v-if="orderForm.handle == Handle.TRANSFER">
                        <el-col :span="6">
                          <el-form-item
                            label="貨源平臺："
                            prop="source"
                            class="form-show"
                          >
                            <el-select
                              v-model="shopeeOrderItem.source"
                              placeholder="請選擇"
                              size="mini"
                            >
                              <el-option
                                v-for="item in sourceList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              ></el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item
                            label="貨源鏈結："
                            prop="sourceUrl"
                            class="form-show"
                          >
                            <el-input
                              v-model="shopeeOrderItem.sourceUrl"
                              size="mini"
                              clearable
                            ></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item
                            label="貨源價格："
                            prop="sourcePrice"
                            class="form-show p-r-15"
                          >
                            <el-input
                              v-model="shopeeOrderItem.sourcePrice"
                              size="mini"
                              clearable
                              onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/)"
                              onafterpaste="this.value=this.value.match(/\d+\.?\d{0,2}/)"
                            ></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="form-group m-t-10">
                    <div class="col-sm-12">
                      <button
                        type="submit"
                        class="btn btn-info btn-flat"
                        v-if="orderForm.handle == Handle.MAINLAND"
                      >
                        自動匹配SKU
                      </button>
                      <button
                        type="submit"
                        class="btn btn-success btn-flat m-l-10"
                        v-if="orderForm.handle == Handle.OVERSEA"
                      >
                        自動匹配SKU
                      </button>
                      <button
                        type="submit"
                        class="btn btn-primary btn-flat m-l-10"
                        v-on:click.stop.prevent="submitForm('orderForm')"
                        v-bind:disabled="dis"
                        v-if="
                          orderForm.processStatus == ProcessStatus.NOHANDLE ||
                          orderForm.processStatus ==
                            ProcessStatus.MAIN_WAIT_ARRIVE ||
                          orderForm.processStatus ==
                            ProcessStatus.MAIN_PART_ARRIVE ||
                          orderForm.processStatus ==
                            ProcessStatus.MAIN_ALL_ARRIVE ||
                          orderForm.processStatus ==
                            ProcessStatus.MAIN_WAIT_PICK ||
                          orderForm.processStatus ==
                            ProcessStatus.OVERSEA_WAIT_PICK
                        "
                      >
                        確認
                      </button>
                      <button
                        class="btn btn-info btn-flat m-l-10"
                        v-on:click.stop.prevent="closeForm"
                      >
                        取消
                      </button>
                    </div>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </template>
    </vxe-modal>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      loading: false,
      allAlign: "center",
      tableData: [],
      dis: false,
      // platformSearchList: platformSearchList,
      props: { multiple: true },
      shopList: [],
      shopOptions: [],
      // countrySearchList: countrySearchList,
      // sortList: sortList,
      platformStatusList: [
        {
          label: "全部",
          value: null,
        },
        {
          label: "待支付",
          value: 1,
        },
        {
          label: "待發貨",
          value: 2,
        },
        {
          label: "已處理",
          value: 3,
        },
        {
          label: "補發貨",
          value: 4,
        },
        {
          label: "已發貨",
          value: 5,
        },
        {
          label: "待收貨",
          value: 6,
        },
        {
          label: "取消中",
          value: 7,
        },
        {
          label: "已取消",
          value: 8,
        },
        {
          label: "待寄回",
          value: 9,
        },
        {
          label: "已完成",
          value: 10,
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一週",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      // processStatusList: processStatusList,
      // handleTypeList: handleTypeList,
      // sourceList: sourceList,
      orderForm: null,
      mainlandWarehouseList: null,
      overseaWarehouseList: null,
      formTpye: null, //彈框樣式，不同的操作模式彈框樣式不同
      mainlandList: null, //大陸倉SKU列表
      overseaList: null, //海外倉SKU列表
      tablePage: {
        currentPage: 1,
        pageSize: 10,
        totalResult: 0,
      },
      searchForm: {
        country: null,
        platform: null,
        shopIds: [],
        selectedShopIds: [],
        shopId: null,
        platformStatus: null,
        processStatus: null,
        sort: "desc-createTime",
        ordersns: null,
        ordersnList: [],
        expressNum: null,
        itemName: null,
        itemSku: null,
        bagNum: null,
        recipientName: null,
        createTime: null,
      },
      buttonShow: {
        str: "隱藏按鈕",
        visable: true,
      },
      // Handle: Handle,
      selectRow: null,
      showEdit: false,
      myLoading: null,
      // transferData: transferData,
      // barCodeTransferData: barCodeTransferData,
      // exportFields: orderExportFields,
      exportData: [],
      intShopIds: [],
      // ProcessStatus: ProcessStatus,
      // platformDetailData: platformDetailData,
      // pickBillData: pickBillData,
      showBag: false,
      bagForm: {
        num: null,
      },
      bagFormRules: {
        num: [
          { required: true, message: "請輸入裝袋編號", trigger: "change" },
          // { validator: validateBagNum, trigger: "change" },
        ],
      },
      showConcentrate: false,
      concentrateForm: {
        expresses: [{ expressNum: null, expressNote: null }],
        myNote: null,
        ordersns: [],
        shipType: 1,
        needPrint: true,
        needDelivery: true,
      },
      // calculatorData: calculatorData,
    };
  },
  created() {
    // this.intShopList();
    // var buttonShow = JSON.parse(sessionStorage.getItem("buttonShow"));
    // if (
    //   buttonShow != null &&
    //   buttonShow.str != null &&
    //   buttonShow.visable != null
    // ) {
    //   this.buttonShow = buttonShow;
    // }
  },

  mounted() {
    // this.getMainlandWarehouse();
    // this.getOverseaWarehouse();
  },

  methods: {
    //   //初始化訂單列表
    //   async initTable() {
    //     this.intShopIds = this.shopList.map((item) => {
    //       return item.shopId;
    //     });
    //     this.searchForm.selectedShopIds = this.intShopIds;
    //     this.getPlatformOrderList({
    //       orderType: orderTypePlatform,
    //       shopIds: this.searchForm.selectedShopIds,
    //       processStatus: this.searchForm.processStatus,
    //       desc: "createTime",
    //       pageSize: this.tablePage.pageSize,
    //       currentPage: this.tablePage.currentPage,
    //     });
    //   },

    //   //初始化訂單列表
    //   async getPlatformOrderList(data) {
    //     this.loading = true;
    //     await getPlatformOrderList(data).then((result) => {
    //       if (result.success == "true") {
    //         this.tableData = result.data.rows;
    //         this.tablePage.totalResult = result.data.total;
    //         console.info(this.tableData);
    //       }
    //     });
    //     this.loading = false;
    //   },

    //   //初始化獲取使用者的店鋪，並轉為下拉選擇框
    //   async intShopList() {
    //     var that = this;
    //     this.shopList = JSON.parse(sessionStorage.getItem("shopList"));
    //     if (this.shopList != null && this.shopList.length > 0) {
    //       that.shopOptions = getShopOptions(this.shopList);
    //       this.initTable();
    //     } else {
    //       const result = await getShopList();
    //       if (result.success == "true") {
    //         this.shopList = result.data;
    //         sessionStorage.setItem("shopList", JSON.stringify(this.shopList));
    //         that.shopOptions = getShopOptions(this.shopList);
    //         this.initTable();
    //       } else {
    //         that.$message({
    //           message: result.msg,
    //           type: "error",
    //         });
    //       }
    //     }
    //   },

    //   //獲取使用者的大陸倉庫列表
    //   async getMainlandWarehouse() {
    //     await getMainlandWarehouse(this);
    //   },

    //   //獲取使用者的海外倉庫列表
    //   async getOverseaWarehouse() {
    //     await getOverseaWarehouse(this);
    //   },

    //點選訂單詳情按鈕，彈出詳情框
    detailEvent(row) {
      // this.platformDetailData.orderForm = JSON.parse(JSON.stringify(row));
      // this.platformDetailData.showDetail = true;
      // //判斷物流方式是否為空，空則預設建立一個空物件
      // if (this.platformDetailData.orderForm.orderShip == null) {
      //   this.platformDetailData.orderForm.orderShip = {};
      // }
      // //判斷快遞號是否為空，則預設賦值一個空的快遞號進去，否則回顯異常
      // if (
      //   this.platformDetailData.orderForm.expresses == null ||
      //   this.platformDetailData.orderForm.expresses.length == 0
      // ) {
      //   this.platformDetailData.orderForm.expresses = [];
      //   this.platformDetailData.orderForm.expresses.push({
      //     expressNum: null,
      //     expressNote: null,
      //   });
      // }
      // //訂單為大陸倉時，獲取大陸倉SKU列表，初始化選擇框
      // if (
      //   this.platformDetailData.orderForm.handle != null &&
      //   this.platformDetailData.orderForm.handle == Handle.MAINLAND
      // ) {
      //   getMainLandList(this);
      // }
      // //訂單為海外倉時，獲取海外倉SKU列表，初始化選擇框
      // if (
      //   this.platformDetailData.orderForm.handle != null &&
      //   this.platformDetailData.orderForm.handle == Handle.OVERSEA
      // ) {
      //   getOverseaList(this);
      // }
      // this.platformDetailData.mainlandList = this.mainlandList; //大陸倉SKU列表
      // this.platformDetailData.overseaList = this.overseaList; //海外倉SKU列表
    },

    //點選處理訂單，訂單值的設定
    editEvent(row) {
      //清空之前的內容
      // this.orderForm = JSON.parse(JSON.stringify(row));
      // if (this.orderForm.handle == null || this.orderForm.handle == 0) {
      //   this.orderForm.handle = Handle.TRANSFER;
      // }
      // //判斷物流方式是否為空，空則預設賦值為1
      // if (this.orderForm.handle != Handle.OVERSEA) {
      //   if (this.orderForm.orderShip == null) {
      //     this.orderForm.orderShip = {
      //       shipType: 1,
      //       needDelivery: null,
      //       needPrint: null,
      //     };
      //   }
      //   if (this.orderForm.orderShip.shipType == null) {
      //     this.orderForm.orderShip.shipType = 1;
      //   }
      // }
      // if (
      //   this.orderForm.handle == Handle.TRANSFER ||
      //   this.orderForm.handle == Handle.CONCENTRATE
      // ) {
      //   //判斷物流方式、代打包、代貼單是否為空，空則預設賦值為1
      //   if (this.orderForm.orderShip.needDelivery == null) {
      //     this.orderForm.orderShip.needDelivery = true;
      //   }
      //   if (this.orderForm.orderShip.needPrint == null) {
      //     this.orderForm.orderShip.needPrint = true;
      //   }
      //   //判斷快遞號是否為空，則預設賦值一個空的快遞號進去，否則回顯
      //   if (
      //     this.orderForm.expresses == null ||
      //     this.orderForm.expresses.length == 0
      //   ) {
      //     this.orderForm.expresses = [];
      //     this.orderForm.expresses.push({
      //       expressNum: null,
      //       expressNote: null,
      //     });
      //   }
      //   this.showEdit = true;
      // }
      // //選擇大陸倉時，獲取大陸倉SKU列表，初始化選擇框
      // if (this.orderForm.handle == Handle.MAINLAND) {
      //   this.dis = !initMainlands(this);
      //   //根據商品的SKU 自動匹配大陸倉SKU 和數量
      //   this.showEdit = true;
      // }
      // //選擇海外倉時，獲取海外倉SKU列表，初始化選擇框
      // if (this.orderForm.handle == Handle.OVERSEA) {
      //   this.dis = !initOverseas(this);
      //   //海外倉預設代交店
      //   if (this.orderForm.orderShip == null) {
      //     this.orderForm.orderShip = {
      //       shipType: null,
      //       needDelivery: true,
      //       needPrint: null,
      //     };
      //   }
      //   if (this.orderForm.orderShip.needDelivery == null) {
      //     this.orderForm.orderShip.needDelivery = true;
      //   }
      //   this.showEdit = true;
      // }
    },

    //   handleTypeChange() {
    //     if (
    //       this.orderForm.handle == Handle.TRANSFER ||
    //       this.orderForm.handle == Handle.CONCENTRATE
    //     ) {
    //       //判斷快遞號是否為空，則預設賦值一個空的快遞號進去，否則回顯
    //       if (
    //         this.orderForm.expresses == null ||
    //         this.orderForm.expresses.length == 0
    //       ) {
    //         this.orderForm.expresses = [];
    //         this.orderForm.expresses.push({
    //           expressNum: null,
    //           expressNote: null,
    //         });
    //       }
    //     }
    //     //選擇大陸倉時，獲取大陸倉SKU列表，初始化選擇框
    //     if (this.orderForm.handle == Handle.MAINLAND) {
    //       this.dis = !initMainlands(this);
    //     }
    //     //選擇海外倉時，獲取海外倉SKU列表，初始化選擇框
    //     if (this.orderForm.handle == Handle.OVERSEA) {
    //       this.dis = !initOverseas(this);
    //     }
    //   },

    //切換狀態按鈕顯示或隱藏
    changeButtonShowType() {
      if (this.buttonShow.visable) {
        this.buttonShow.visable = false;
        this.buttonShow.str = "隱藏按鈕";
      } else {
        this.buttonShow.visable = true;
        this.buttonShow.str = "顯示按鈕";
      }
      sessionStorage.setItem("buttonShow", JSON.stringify(this.buttonShow));
    },

    //   closeForm() {
    //     this.showEdit = false;
    //     this.showBag = false;
    //     this.dis = false;
    //     this.showConcentrate = false;
    //   },
    //   //店鋪下拉選擇變化
    //   shopSelectChange() {
    //     //判斷店鋪選擇是否有值
    //     this.searchForm.selectedShopIds = [];
    //     if (
    //       this.searchForm.shopIds != null &&
    //       this.searchForm.shopIds.length > 0
    //     ) {
    //       this.searchForm.selectedShopIds = this.searchForm.shopIds.map(
    //         (item) => {
    //           if (item != null && item.length > 2) {
    //             return item[2];
    //           }
    //         }
    //       );
    //     }
    //   },
    //   //店鋪按鈕變化
    //   shopButtonChange() {
    //     //判斷店鋪選擇是否有值
    //     this.searchForm.shopIds = [];
    //     if (
    //       this.searchForm.selectedShopIds != null &&
    //       this.searchForm.selectedShopIds.length > 0
    //     ) {
    //       this.searchForm.shopIds = this.searchForm.selectedShopIds.map(
    //         (item) => {
    //           var shopId = [];
    //           this.shopList.forEach((shop) => {
    //             if (shop.shopId == item) {
    //               shopId[0] = shop.platform;
    //               shopId[1] = shop.country;
    //               shopId[2] = shop.shopId;
    //             }
    //           });
    //           return shopId;
    //         }
    //       );
    //     }
    //     this.searchEvent(this.tablePage.currentPage);
    //   },

    //篩選
    async searchEvent(currentPage) {
      // currentPage
      //   ? (this.tablePage.currentPage = currentPage)
      //   : (this.tablePage.currentPage = 1);
      // if (
      //   this.searchForm.selectedShopIds == null ||
      //   this.searchForm.selectedShopIds.length == 0
      // ) {
      //   this.searchForm.selectedShopIds = this.intShopIds;
      // }
      // //判斷時間選擇器是否有值
      // if (
      //   this.searchForm.createTime != null &&
      //   this.searchForm.createTime.length > 0
      // ) {
      //   var createTimeGte = this.searchForm.createTime[0];
      //   var createTimeLte = this.searchForm.createTime[1];
      // }
      // //判斷排序選擇是否有值
      // if (this.searchForm.sort != null) {
      //   if (
      //     this.searchForm.sort.split("-")[0] != null &&
      //     this.searchForm.sort.split("-")[0] == "desc"
      //   ) {
      //     var desc = this.searchForm.sort.split("-")[1];
      //   }
      //   if (
      //     this.searchForm.sort.split("-")[0] != null &&
      //     this.searchForm.sort.split("-")[0] == "asc"
      //   ) {
      //     var asc = this.searchForm.sort.split("-")[1];
      //   }
      // }
      // //清空之前的資料
      // //多訂單編號搜尋
      // this.searchForm.ordersnList = null;
      // if (this.searchForm.ordersns != null && this.searchForm.ordersns != "") {
      //   this.searchForm.ordersnList = await validateOrdersns(
      //     this.searchForm.ordersns,
      //     this
      //   );
      //   if (
      //     this.searchForm.ordersnList != null &&
      //     this.searchForm.ordersnList.length > 0
      //   ) {
      //     //剔除掉不合格的訂單編號後回顯至搜尋框
      //     this.searchForm.ordersns = textareaBackShow(
      //       this.searchForm.ordersnList
      //     );
      //   }
      // }
      // this.getPlatformOrderList({
      //   orderType: orderTypePlatform,
      //   country: this.searchForm.country,
      //   platform: this.searchForm.platform,
      //   shopIds: this.searchForm.selectedShopIds,
      //   platformStatus: this.searchForm.platformStatus,
      //   processStatus: this.searchForm.processStatus,
      //   ordersns: this.searchForm.ordersnList,
      //   expressNum: this.searchForm.expressNum,
      //   itemName: this.searchForm.itemName,
      //   itemSku: this.searchForm.itemSku,
      //   bagNum: this.searchForm.bagNum,
      //   createTimeGte: createTimeGte,
      //   createTimeLte: createTimeLte,
      //   recipientName: this.searchForm.recipientName,
      //   desc: desc,
      //   asc: asc,
      //   pageSize: this.tablePage.pageSize,
      //   currentPage: this.tablePage.currentPage,
      // });
    },

    //   //快遞單號變化時，提交按鈕變為可點選
    //   onExpressChange() {
    //     this.dis = false;
    //   },

    //提交儲存訂單操作
    submitForm() {},
    //單頁顯示數量變化
    handleSizeChange(pageSize) {
      this.tablePage.pageSize = pageSize;
      this.searchEvent(this.tablePage.currentPage);
    },
    //翻頁變化
    handleCurrentChange(currentPage) {
      this.tablePage.currentPage = currentPage;
      this.searchEvent(currentPage);
    },
    //手動同步訂單
    async syncOrder() {
      // const result = await syncOrder();
      // if (result.success == "true") {
      //   this.$message({
      //     message: result.msg,
      //     type: "success",
      //   });
      // } else {
      //   this.$message({
      //     message: result.msg,
      //     type: "error",
      //   });
      // }
    },
    //   //匯出EXCEL表格
    //   exportEvent() {
    //     exportEvent(this, this.$refs.orderTableData);
    //   },
    //   //訂單狀態由數字轉為中文
    //   getPlatformStatusStr(data) {
    //     return getPlatformStatusStr(data);
    //   },
    //   //將處理狀態由數字轉為中文
    //   getProcessStatusStr(data) {
    //     return getProcessStatusStr(data);
    //   },
    //   //打圖片頁面
    //   openImg(url) {
    //     window.open(url);
    //   },
    //   //開啟shopee店鋪頁面
    //   openShop(shopId) {
    //     window.open(urlShopeeShop + shopId);
    //   },
    //   //開啟shopee商品頁面
    //   openItem(shopId, itemId) {
    //     window.open(urlShopeeItem + shopId + "." + itemId);
    //   },
    //   //平臺由數字轉為html顯示
    //   getPlatformHtml(platform) {
    //     return getPlatformHtml(platform);
    //   },
    //   //平臺由數字轉為中文
    //   getPlatformStr(platform) {
    //     return getPlatformStr(platform);
    //   },
    //   //將訂單處理方式由數字換為中文
    //   getHandleStr(data) {
    //     return getHandleStr(data);
    //   },
    //   //地區由字母轉為中文
    //   getCountryStr(data) {
    //     return getCountryStr(data);
    //   },
    //格式化時間
    formatTime(time) {
      var oDate = new Date(time),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        oTime =
          oYear +
          "-" +
          getzf(oMonth) +
          "-" +
          getzf(oDay) +
          " " +
          getzf(oHour) +
          ":" +
          getzf(oMin) +
          ":" +
          getzf(oSen);
      return oTime;
    },
    //   //獲取剩餘發貨時間
    //   getDateDifference(time) {
    //     return getDateDifference(time);
    //   },
    //   //新增快遞單號輸入框
    //   plusExpress(index) {
    //     plusExpress(index, this);
    //   },
    //   //刪除快遞單號輸入框
    //   minusExpress(index) {
    //     minusExpress(index, this);
    //   },
    //   //新增大陸倉輸入框
    //   plusMainland(index) {
    //     plusMainland(index, this);
    //   },
    //   //刪除大陸倉輸入框
    //   minusMainland(index) {
    //     minusMainland(index, this);
    //   },
    //   //新增海外倉輸入框
    //   plusOversea(index) {
    //     this.orderForm.overseas.splice(index + 1, 0, {
    //       id: null,
    //       storageSku: null,
    //       storageOrder: { amount: null },
    //     });
    //   },
    //   //刪除海外倉輸入框
    //   minusOversea(index) {
    //     this.orderForm.overseas.splice(index, 1);
    //   },

    //   //判斷大陸倉的選項是否已被選，已被選，則該選項置為不可選
    //   setMainlandDisable(id) {
    //     return setMainlandDisable(id, this);
    //   },
    //   //判斷海外倉的選項是否已被選，已被選，則該選項置為不可選
    //   setOverseaDisable(id) {
    //     return setOverseaDisable(id, this);
    //   },

    //   //校驗快遞號格式格式
    //   validateExpress(values) {
    //     console.info("asdmin");
    //     return validateExpress(values, this);
    //   },
    //   // validateExpress(values) {
    //   //   let that = this;
    //   //   var result = true;
    //   //   var dreg = /^[A-Za-z0-9]{6,30}$/;
    //   //   values.forEach(function (value) {
    //   //     if (value.expressNum == null || value.expressNum === "") {
    //   //       that.$message({
    //   //         showClose: true,
    //   //         message: "快遞號不能為空",
    //   //         type: "error",
    //   //       });
    //   //       result = false;
    //   //       that.dis = true;
    //   //     } else if (!dreg.test(value.expressNum)) {
    //   //       value.expressNum = null;
    //   //       that.$message({
    //   //         showClose: true,
    //   //         message: "快遞號只能含有數字或字母,長度為6-30位",
    //   //         type: "error",
    //   //       });
    //   //       result = false;
    //   //       that.dis = true;
    //   //     }
    //   //   });
    //   //   return result;
    //   // },
    //   //校驗SKU庫存是否充足
    //   checkedStock(availableStock, num) {
    //     checkedStock(availableStock, num, this);
    //   },
    //   //獲取該大陸倉SKU可用庫存,並提示在輸入框中
    //   mainlandChange(id) {
    //     mainlandChange(id, this);
    //   },
    //   //獲取該海外倉SKU可用庫存,並提示在輸入框中
    //   overseaChange(id) {
    //     overseaChange(id, this);
    //   },

    //   //設定大陸倉庫id
    //   setMainlandWarehouseId(country) {
    //     return setMainlandWarehouseId(country, this);
    //   },
    //   //設定海外倉庫id
    //   setOverseaWarehouseId(country) {
    //     return setOverseaWarehouseId(country, this);
    //   },
    //   //批次列印中轉面單
    //   batchPrintTransfer() {
    //     batchPrintTransfer(this);
    //   },
    //    //批次列印二維碼面單
    //    batchPrintBarCodeTransfer() {
    //     batchPrintBarCodeTransfer(this);
    //   },
    //   //組合倉儲的商品名和規格
    //   getStorageName(item) {
    //     return getStorageName(item);
    //   },
    //   //校驗大陸倉和海外倉的SKU 選擇和輸入是否正確
    //   validateStorage(storages) {
    //     return validateStorage(storages, this);
    //   },
    //   //列印平臺面單
    //   batchPrintBill() {
    //     var that = this;
    //     that
    //       .$confirm("列印面單系統將開始記錄出貨時間，是否確認列印", "提示", {
    //         confirmButtonText: "列印",
    //         cancelButtonText: "取消",
    //         type: "warning",
    //         center: true,
    //       })
    //       .then(() => {
    //         let selectRecords = that.$refs.orderTableData.getCheckboxRecords();
    //         if (selectRecords.length > 0) {
    //           selectRecords.forEach((selectRecord) => {
    //             //剔除狀態取消中和已取消訂單
    //             if (selectRecord.orderType == OrderType.PLATFORM) {
    //               if (
    //                 selectRecord.platformStatus == PlatformStatus.IN_CANCEL ||
    //                 selectRecord.platformStatus == PlatformStatus.CANCELLED
    //               ) {
    //                 that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //               }
    //             }
    //           });
    //           let selectRecordsNew =
    //             that.$refs.orderTableData.getCheckboxRecords();
    //           if (selectRecordsNew.length > 0) {
    //             var ordersnList = selectRecordsNew.map((order) => {
    //               return order.ordersn;
    //             });
    //             const loading = that.$loading({
    //               lock: true,
    //               text: "Loading",
    //               spinner: "el-icon-loading",
    //               background: "rgba(0, 0, 0, 0.7)",
    //             });
    //             printBillByUser({
    //               ordersnList: ordersnList,
    //             }).then((result) => {
    //               if (result.success == "true") {
    //                 loading.close();
    //                 that.$message({
    //                   message: result.msg,
    //                   type: "success",
    //                 });
    //                 if (result.data != null && result.data.length > 0) {
    //                   for (var i = 0; i < result.data.length; i++) {
    //                     localStorage.removeItem("billHTML_" + i);
    //                     localStorage.setItem("billHTML_" + i, result.data[i]);
    //                     const { href } = that.$router.resolve({
    //                       path: "/bill",
    //                       query: { id: i },
    //                     });
    //                     window.open(href, "_blank");
    //                   }
    //                 }
    //               } else {
    //                 loading.close();
    //                 that.$message({
    //                   message: result.msg,
    //                   type: "error",
    //                 });
    //               }
    //             });
    //             setTimeout(() => {
    //               loading.close();
    //             }, 3000);
    //           } else {
    //             that.$message({
    //               message: "您選擇的訂單狀態不滿足，請重新選擇後再操作",
    //               type: "error",
    //             });
    //           }
    //         } else {
    //           this.$message({
    //             message: "您還未選擇需要列印的訂單，請選擇後再列印",
    //             type: "error",
    //           });
    //         }
    //       });
    //   },
    //   //批次初始化美拼面單
    //   logosticInit() {
    //     var that = this;
    //     that
    //       .$confirm("初始化系統將開始記錄出貨時間，是否確認初始化", "提示", {
    //         confirmButtonText: "確認",
    //         cancelButtonText: "取消",
    //         type: "warning",
    //         center: true,
    //       })
    //       .then(() => {
    //         let selectRecords = that.$refs.orderTableData.getCheckboxRecords();
    //         if (selectRecords.length > 0) {
    //           selectRecords.forEach((selectRecord) => {
    //             //剔除狀態取消中、已取消、已完成訂單
    //             if (selectRecord.orderType == OrderType.PLATFORM) {
    //               if (
    //                 selectRecord.platformStatus == PlatformStatus.IN_CANCEL ||
    //                 selectRecord.platformStatus == PlatformStatus.CANCELLED ||
    //                 selectRecord.platformStatus == PlatformStatus.COMPLETED
    //               ) {
    //                 that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //               }
    //             }
    //           });

    //           let selectRecordsNew =
    //             that.$refs.orderTableData.getCheckboxRecords();
    //           if (selectRecordsNew.length > 0) {
    //             var ordersnList = selectRecordsNew.map((order) => {
    //               return order.ordersn;
    //             });
    //             const loading = that.$loading({
    //               lock: true,
    //               text: "Loading",
    //               spinner: "el-icon-loading",
    //               background: "rgba(0, 0, 0, 0.7)",
    //             });
    //             logosticInitByUser({
    //               ordersnList: ordersnList,
    //             }).then((result) => {
    //               if (result.success == "true") {
    //                 loading.close();
    //                 that.$message({
    //                   message: result.msg,
    //                   type: "success",
    //                 });
    //               } else {
    //                 loading.close();
    //                 that.$message({
    //                   message: result.msg,
    //                   type: "error",
    //                 });
    //               }
    //             });
    //             setTimeout(() => {
    //               loading.close();
    //             }, 10000);
    //           } else {
    //             that.$message({
    //               message: "您選擇的訂單狀態不滿足，請重新選擇後再操作",
    //               type: "error",
    //             });
    //           }
    //         } else {
    //           this.$message({
    //             message: "您還未選擇需要初始化的訂單，請選擇後再操作",
    //             type: "error",
    //           });
    //         }
    //       });
    //   },
    //   //列印揀貨單
    //   printPickBill() {
    //     var that = this;
    //     let selectRecords = that.$refs.orderTableData.getCheckboxRecords();
    //     if (selectRecords.length > 0) {
    //       selectRecords.forEach((selectRecord) => {
    //         //剔除狀態不是待揀貨或者揀貨中的訂單
    //         if (
    //           selectRecord.processStatus != ProcessStatus.NOHANDLE &&
    //           selectRecord.processStatus != ProcessStatus.SELF_WAIT_PICK &&
    //           selectRecord.processStatus != ProcessStatus.SELF_PICKING
    //         ) {
    //           that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //         }
    //         //剔除狀態取消中和已取消訂單
    //         if (selectRecord.orderType == OrderType.PLATFORM) {
    //           if (
    //             selectRecord.platformStatus == PlatformStatus.IN_CANCEL ||
    //             selectRecord.platformStatus == PlatformStatus.CANCELLED
    //           ) {
    //             that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //           }
    //         }
    //       });

    //       let selectRecordsNew = that.$refs.orderTableData.getCheckboxRecords();
    //       if (selectRecordsNew.length > 0) {
    //         var ordersnList = [];
    //         selectRecordsNew.forEach((selectRecord) => {
    //           ordersnList.push(selectRecord.ordersn);
    //         });

    //         // 傳送請求修改狀態
    //         sellerPickOrder(ordersnList).then((result) => {
    //           if (result.success == "true") {
    //             //獲取當前列印日期
    //             var time = new Date();
    //             this.pickBillData.printPickBillDate = formatDate(time);
    //             that.pickBillData.pickBillOrders = selectRecordsNew;

    //             //先顯示列印的內容
    //             that.pickBillData.showPickBill = true;
    //             setTimeout(() => {
    //               that.$refs.pickBill.printPickBill();
    //               that.pickBillData.showPickBill = false;
    //               that.searchEvent(that.tablePage.currentPage);
    //             }, 100);
    //           }
    //         });
    //       } else {
    //         that.$message({
    //           message: "您選擇的訂單狀態不滿足，請重新選擇後再操作",
    //           type: "error",
    //         });
    //       }
    //     } else {
    //       that.$message({
    //         message: "您還未選擇操作的訂單，請選擇後再操作",
    //         type: "error",
    //       });
    //     }
    //   },
    //   //訂單轉為已完成
    //   changeOrderCompleteByUser() {
    //     var that = this;
    //     let selectRecords = that.$refs.orderTableData.getCheckboxRecords();
    //     if (selectRecords.length > 0) {
    //       //剔除狀態不是待處理的訂單
    //       selectRecords.forEach((selectRecord) => {
    //         if (selectRecord.processStatus != ProcessStatus.NOHANDLE) {
    //           that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //         }
    //       });

    //       let selectRecordsNew = that.$refs.orderTableData.getCheckboxRecords();
    //       if (selectRecordsNew.length > 0) {
    //         var ordersnList = [];
    //         selectRecordsNew.forEach((selectRecord) => {
    //           ordersnList.push(selectRecord.ordersn);
    //         });
    //         const loading = that.$loading({
    //           lock: true,
    //           text: "Loading",
    //           spinner: "el-icon-loading",
    //           background: "rgba(0, 0, 0, 0.7)",
    //         });
    //         // 傳送請求修改狀態
    //         changeOrderCompleteByUser({
    //           ordersnList: ordersnList,
    //         }).then((result) => {
    //           if (result.success == "true") {
    //             that.$message({
    //               message: result.msg,
    //               type: "success",
    //             });
    //             setTimeout(() => {
    //               loading.close();
    //               that.searchEvent(that.tablePage.currentPage);
    //             }, 1500);
    //           } else {
    //             loading.close();
    //             that.$message({
    //               message: result.msg,
    //               type: "error",
    //             });
    //           }
    //         });
    //         setTimeout(() => {
    //           loading.close();
    //         }, 3000);
    //       } else {
    //         that.$message({
    //           message: "您選擇的訂單狀態不滿足，請重新選擇後再操作",
    //           type: "error",
    //         });
    //       }
    //     } else {
    //       that.$message({
    //         message: "您還未選擇操作的訂單，請選擇後再操作",
    //         type: "error",
    //       });
    //     }
    //   },
    //   //訂單轉為未處理
    //   changeOrderNohandleByUser() {
    //     var that = this;
    //     let selectRecords = that.$refs.orderTableData.getCheckboxRecords();
    //     if (selectRecords.length > 0) {
    //       //剔除狀態不是自建倉待揀貨和揀貨中的訂單
    //       selectRecords.forEach((selectRecord) => {
    //         if (
    //           selectRecord.processStatus != ProcessStatus.MAIN_WAIT_ARRIVE &&
    //           selectRecord.processStatus != ProcessStatus.SELF_WAIT_PICK &&
    //           selectRecord.processStatus != ProcessStatus.SELF_PICKING &&
    //           selectRecord.processStatus != ProcessStatus.MAIN_WAIT_PICK &&
    //           selectRecord.processStatus != ProcessStatus.OVERSEA_WAIT_PICK &&
    //           selectRecord.processStatus != ProcessStatus.COMPLETE
    //         ) {
    //           that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //         }
    //       });

    //       let selectRecordsNew = that.$refs.orderTableData.getCheckboxRecords();
    //       if (selectRecordsNew.length > 0) {
    //         var ordersnList = [];
    //         selectRecordsNew.forEach((selectRecord) => {
    //           ordersnList.push(selectRecord.ordersn);
    //         });
    //         const loading = that.$loading({
    //           lock: true,
    //           text: "Loading",
    //           spinner: "el-icon-loading",
    //           background: "rgba(0, 0, 0, 0.7)",
    //         });
    //         // 傳送請求修改狀態
    //         changeOrderNohandleByUser({
    //           ordersnList: ordersnList,
    //         }).then((result) => {
    //           if (result.success == "true") {
    //             that.$message({
    //               message: result.msg,
    //               type: "success",
    //             });
    //             setTimeout(() => {
    //               loading.close();
    //               that.searchEvent(that.tablePage.currentPage);
    //             }, 1500);
    //           } else {
    //             loading.close();
    //             that.$message({
    //               message: result.msg,
    //               type: "error",
    //             });
    //           }
    //         });
    //         setTimeout(() => {
    //           loading.close();
    //         }, 3000);
    //       } else {
    //         that.$message({
    //           message: "您選擇的訂單狀態不滿足，請重新選擇後再操作",
    //           type: "error",
    //         });
    //       }
    //     } else {
    //       that.$message({
    //         message: "您還未選擇操作的訂單，請選擇後再操作",
    //         type: "error",
    //       });
    //     }
    //   },
    //   //彈出裝袋框
    //   showBagModal() {
    //     var that = this;
    //     let selectRecords = that.$refs.orderTableData.getCheckboxRecords();
    //     if (selectRecords.length > 0) {
    //       //剔除狀態不是自建倉揀貨中的訂單
    //       selectRecords.forEach((selectRecord) => {
    //         if (selectRecord.processStatus != ProcessStatus.SELF_PICKING) {
    //           that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //         }
    //       });
    //       var country = selectRecords[0].country;
    //       selectRecords.forEach((selectRecord) => {
    //         if (selectRecord.country != country) {
    //           that.$message({
    //             message: "存在地區不相同的訂單，已刪除地區不同的訂單",
    //             type: "warming",
    //           });
    //           that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //         }
    //       });

    //       let selectRecordsNew = that.$refs.orderTableData.getCheckboxRecords();
    //       if (selectRecordsNew.length > 0) {
    //         this.showBag = true;
    //       } else {
    //         that.$message({
    //           message: "您選擇的訂單狀態不滿足，請重新選擇後再操作",
    //           type: "error",
    //         });
    //       }
    //     } else {
    //       that.$message({
    //         message: "您還未選擇操作的訂單，請選擇後再操作",
    //         type: "error",
    //       });
    //     }
    //   },
    //   //彈出集包框
    //   showConcentrateModal() {
    //     var that = this;
    //     let selectRecords = that.$refs.orderTableData.getCheckboxRecords();
    //     if (selectRecords.length > 0) {
    //       //剔除狀態不是未處理、自建倉待檢貨、自建倉揀貨中的訂單
    //       selectRecords.forEach((selectRecord) => {
    //         if (
    //           selectRecord.processStatus != ProcessStatus.NOHANDLE &&
    //           selectRecord.processStatus != ProcessStatus.SELF_WAIT_PICK &&
    //           selectRecord.processStatus != ProcessStatus.SELF_PICKING
    //         ) {
    //           that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //         }
    //       });
    //       var country = selectRecords[0].country;
    //       selectRecords.forEach((selectRecord) => {
    //         if (selectRecord.country != country) {
    //           that.$message({
    //             message: "存在地區不相同的訂單，已刪除地區不同的訂單",
    //             type: "warming",
    //           });
    //           that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //         }
    //       });

    //       let selectRecordsNew = that.$refs.orderTableData.getCheckboxRecords();
    //       if (selectRecordsNew.length > 0) {
    //         //清空之前的資料
    //         that.concentrateForm.expresses = [
    //           { expressNum: null, expressNote: null },
    //         ];
    //         that.concentrateForm.ordersns = [];
    //         that.concentrateForm.myNote = null;
    //         that.concentrateForm.shipType = 1;
    //         that.concentrateForm.needPrint = true;
    //         that.concentrateForm.needDelivery = true;

    //         selectRecordsNew.forEach((selectRecord) => {
    //           if (selectRecord.country != country) {
    //             that.$message({
    //               message: "存在地區不相同的訂單，已刪除地區不同的訂單",
    //               type: "warming",
    //             });
    //             that.$refs.orderTableData.toggleCheckboxRow(selectRecord);
    //           }
    //           that.concentrateForm.ordersns.push(selectRecord.ordersn);
    //         });

    //         this.showConcentrate = true;
    //       } else {
    //         that.$message({
    //           message:
    //             "您選擇的訂單狀態不滿足，只能集包未處理、自建倉待檢貨、自建倉揀貨中的訂單，請重新選擇後再操作",
    //           type: "error",
    //         });
    //       }
    //     } else {
    //       that.$message({
    //         message: "您還未選擇操作的訂單，請選擇後再操作",
    //         type: "error",
    //       });
    //     }
    //   },
    //   //刪除集包的訂單編號
    //   handleClose(ordersn) {
    //     if (this.concentrateForm.ordersns.length > 1) {
    //       for (let i = 0; i < this.concentrateForm.ordersns.length; i++) {
    //         if (this.concentrateForm.ordersns[i] == ordersn) {
    //           this.concentrateForm.ordersns.splice(i, 1);
    //         }
    //       }
    //     } else {
    //       this.$message({
    //         message: "操作失敗，至少有一個訂單編！",
    //         type: "error",
    //       });
    //     }
    //   },
    //   //裝袋選定的訂單
    //   bagOrdersByUser(formName) {
    //     var that = this;
    //     let selectRecords = this.$refs.orderTableData.getCheckboxRecords();
    //     if (selectRecords.length > 0) {
    //       that.dis = true;
    //       that.$refs[formName].validate((valid) => {
    //         if (valid) {
    //           const loading = that.$loading({
    //             lock: true,
    //             text: "Loading",
    //             spinner: "el-icon-loading",
    //             background: "rgba(0, 0, 0, 0.7)",
    //           });
    //           var bagOrdersnList = [];
    //           selectRecords.forEach((selectRecord) => {
    //             bagOrdersnList.push(selectRecord.ordersn);
    //           });
    //           var data = {
    //             ordersns: bagOrdersnList,
    //             num: that.bagForm.num,
    //           };

    //           //設定大陸倉庫id
    //           var mainlandId = that.setMainlandWarehouseId(
    //             selectRecords[0].country
    //           );
    //           if (mainlandId) {
    //             data.mainlandId = mainlandId;
    //           } else {
    //             that.$message({
    //               message: "配置大陸倉失敗",
    //               type: "error",
    //             });
    //             return;
    //           }
    //           //設定海外倉庫id
    //           var overseaId = that.setOverseaWarehouseId(
    //             selectRecords[0].country
    //           );
    //           if (overseaId) {
    //             data.overseaId = overseaId;
    //           } else {
    //             that.$message({
    //               message: "配置海外倉失敗",
    //               type: "error",
    //             });
    //             return;
    //           }

    //           bagOrdersByUser(data).then((result) => {
    //             that.dis = false;
    //             that.loading = false;
    //             if (result.success == "true") {
    //               that.$message({
    //                 message: result.msg,
    //                 type: "success",
    //               });
    //               that.showBag = false;
    //               setTimeout(() => {
    //                 loading.close();
    //                 that.searchEvent(that.tablePage.currentPage);
    //               }, 1500);
    //             }
    //           });
    //         } else {
    //           console.log("error submit!!");
    //           return false;
    //         }
    //       });
    //     } else {
    //       this.$message({
    //         message: "您還未選擇打包的訂單，請選擇後再操作",
    //         type: "error",
    //       });
    //     }
    //   },
    //   onChange() {
    //     this.dis = false;
    //   },
    //   autoMatchMainlands() {
    //     autoMatchMainlands(this);
    //   },
    //   autoMatchOverseas() {
    //     autoMatchOverseas(this);
    //   },
    //   //新增集包快遞單號輸入框
    //   plusConcentrateExpress(index) {
    //     this.concentrateForm.expresses.splice(index + 1, 0, {
    //       expressNum: null,
    //       expressNote: null,
    //     });
    //   },
    //   //刪除集包快遞單號輸入框
    //   minusConcentrateExpress(index) {
    //     this.concentrateForm.expresses.splice(index, 1);
    //   },
    //   //集包所選訂單
    //   concentrate(formName) {
    //     var that = this;
    //     let selectRecords = this.$refs.orderTableData.getCheckboxRecords();
    //     if (selectRecords.length > 0) {
    //       that.dis = true;
    //       that.$refs[formName].validate((valid) => {
    //         if (valid) {
    //           const loading = that.$loading({
    //             lock: true,
    //             text: "Loading",
    //             spinner: "el-icon-loading",
    //             background: "rgba(0, 0, 0, 0.7)",
    //           });

    //           var data = {
    //             ordersns: this.concentrateForm.ordersns,
    //             expresses: [],
    //             myNote: this.concentrateForm.myNote,
    //             shipType: this.concentrateForm.shipType,
    //             needPrint: this.concentrateForm.needPrint,
    //             needDelivery: this.concentrateForm.needDelivery,
    //           };

    //           if (this.validateExpress(this.concentrateForm.expresses)) {
    //             data.expresses = this.concentrateForm.expresses;
    //           } else {
    //             return;
    //           }
    //           // var bagOrdersnList = [];
    //           // selectRecords.forEach((selectRecord) => {
    //           //   bagOrdersnList.push(selectRecord.ordersn);
    //           // });
    //           // var data = {
    //           //   ordersns: bagOrdersnList,
    //           //   num: that.bagForm.num,
    //           // };

    //           //設定大陸倉庫id
    //           var mainlandId = that.setMainlandWarehouseId(
    //             selectRecords[0].country
    //           );
    //           if (mainlandId) {
    //             data.mainlandId = mainlandId;
    //           } else {
    //             that.$message({
    //               message: "配置大陸倉失敗",
    //               type: "error",
    //             });
    //             return;
    //           }
    //           //設定海外倉庫id
    //           var overseaId = that.setOverseaWarehouseId(
    //             selectRecords[0].country
    //           );
    //           if (overseaId) {
    //             data.overseaId = overseaId;
    //           } else {
    //             that.$message({
    //               message: "配置海外倉失敗",
    //               type: "error",
    //             });
    //             return;
    //           }

    //           concentrate(data).then((result) => {
    //             that.dis = false;
    //             that.loading = false;
    //             if (result.success == "true") {
    //               that.$message({
    //                 message: result.msg,
    //                 type: "success",
    //               });
    //               that.showConcentrate = false;
    //               setTimeout(() => {
    //                 loading.close();
    //                 that.searchEvent(that.tablePage.currentPage);
    //               }, 1500);
    //             }
    //           });
    //         } else {
    //           console.log("提交錯誤!!");
    //           return false;
    //         }
    //       });
    //     } else {
    //       this.$message({
    //         message: "您還未選擇打包的訂單，請選擇後再操作",
    //         type: "error",
    //       });
    //     }
    //   },
    //   //展示訂單利潤彈窗
    //   showCalculator() {
    //     var that = this;
    //     let selectRecords = this.$refs.orderTableData.getCheckboxRecords();
    //     if (selectRecords.length <= 1) {
    //       that.calculatorData.showCalculator = true;
    //       that.calculatorData.amountForeign = selectRecords[0].totalAmount;
    //       that.calculatorData.rate = localStorage.getItem("rate")
    //         ? localStorage.getItem("rate")
    //         : selectRecords[0].country === "TW"
    //         ? 4.5
    //         : 1;
    //       that.calculatorData.shipType = selectRecords[0].shipType
    //         ? selectRecords[0].shipType
    //         : ShipType.AIR;
    //       that.calculatorData.handle = selectRecords[0].handle
    //         ? selectRecords[0].handle
    //         : Handle.TRANSFER;
    //       that.calculatorData.shippingCarrier = selectRecords[0].shippingCarrier;
    //       that.calculatorData.weight =
    //         selectRecords[0].orderShip && selectRecords[0].orderShip.weight
    //           ? selectRecords[0].orderShip.weight
    //           : 0;
    //       that.calculatorData.shipFee =
    //         selectRecords[0].orderShip && selectRecords[0].orderShip.shipFee
    //           ? selectRecords[0].orderShip.shipFee
    //           : 0;

    //       that.calculatorData.serviceCharge =
    //         Math.floor(that.calculatorData.amountForeign * 0.05 * 100) / 100;
    //       that.$refs.calculateProfit.shippingCarrierFee();
    //       that.$refs.calculateProfit.handleChange();
    //       that.$refs.calculateProfit.shipPrice();
    //       that.$refs.calculateProfit.onInComeChange();
    //     } else {
    //       that.$message({
    //         message: "選擇的訂單數量不能超過1個，請調整後再操作",
    //         type: "error",
    //       });
    //     }
    //   },
  },
};
</script>


<style scoped>
@import "~@a/backend/css/bootstrap.min.css";
@import "~@a/backend/css/font-awesome.min.css";
@import "~@a/backend/css/simdahs.css";
@import "~@a/backend/css/themify-icons.css";
@import "~@a/backend/css/style.css";

</style>
