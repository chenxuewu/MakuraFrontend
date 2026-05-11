<template>
  <div>
    <p>
      <button type="button" class="btn btn-primary btn-flat btn-addon m-b-5" @click="addShopee">
        <i class="ti-plus"></i>授權Shopee
      </button>
      <button type="button" class="btn btn-info btn-flat btn-addon m-b-5 m-l-25" @click="addLAZADA">
        <i class="ti-plus"></i>授權LAZADA
      </button>
    </p>

    <vxe-form
      :data="searchForm"
      title-width="120"
      title-align="right"
      size="mini"
      @submit="searchEvent()"
    >
      <vxe-form-item field="shopId" title="店鋪ID" span="8" :item-render="{name: 'ElInput'}"></vxe-form-item>
      <vxe-form-item field="shopName" title="店鋪名稱" span="8" :item-render="{name: 'ElInput'}"></vxe-form-item>
      <vxe-form-item field="anotherName" title="別名" span="8" :item-render="{name: 'ElInput'}"></vxe-form-item>
      <vxe-form-item
        field="platform"
        title="平臺"
        span="8"
        :item-render="{name: 'ElSelect', options: platformSearchList}"
      ></vxe-form-item>
      <vxe-form-item
        field="country"
        title="地區"
        span="8"
        :item-render="{name: 'ElSelect', options: countrySearchList}"
      ></vxe-form-item>
      <vxe-form-item
        field="tokenEnable"
        title="token有效"
        span="8"
        :item-render="{name: 'ElSelect', options: tokenEnableSearchList}"
      ></vxe-form-item>
      <vxe-form-item
        span="24"
        align="center"
        :item-render="{name: 'ElButtons', children: [{ content: '查詢', props: {type: 'primary', nativeType: 'submit'} }, { content: '重置', props: {nativeType: 'reset'} }]}"
      ></vxe-form-item>
    </vxe-form>

    <vxe-toolbar export print custom size="mini">
      <template v-slot:buttons>
        <download-excel
          class="export-excel-wrapper"
          :data="json_data"
          :fields="json_fields"
          name="匯出.xls"
        >
          <el-button class="dt-button" size="mini">
            <i class="ti-printer m-r-5"></i>Excel
          </el-button>
        </download-excel>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      resizable
      :scroll-y="{gt: -1}"
      keep-source
      highlight-hover-row
      export-config
      ref="xTable"
      :align="allAlign"
      :loading="loading"
      :data="tableData"
      size="mini"
      :checkbox-config="{highlight: true}"
    >
      <vxe-table-column type="seq" title="序號" width="60" fixed="left"></vxe-table-column>
      <vxe-table-column field="shopId" title="店鋪ID" min-width="140"></vxe-table-column>
      <vxe-table-column field="shopName" title="店鋪名稱" min-width="160"></vxe-table-column>
      <vxe-table-column field="anotherName" title="別名" min-width="160"></vxe-table-column>
      <vxe-table-column field="platformStr" title="平臺" type="html" min-width="140"></vxe-table-column>
      <vxe-table-column field="countryStr" title="地區" min-width="140"></vxe-table-column>
      <vxe-table-column field="status" title="狀態" min-width="140"></vxe-table-column>
        <vxe-table-column
        field="tokenEnable"
        title="token有效"
        width="100"
        :cell-render="{name: 'ElSwitch', props: {disabled: true}} "
      ></vxe-table-column>
      <vxe-table-column field="usernames" title="使用者" type="html" min-width="140"></vxe-table-column>
      <vxe-table-column
        field="authorizeTime"
        title="授權時間"
        width="150"
        :edit-render="{name: 'ElDatePicker', props: {type: 'date', format: 'yyyy/MM/dd'}}"
      ></vxe-table-column>
      <vxe-table-column
        field="expireTime"
        title="到期時間"
        width="150"
        :edit-render="{name: 'ElDatePicker', props: {type: 'date', format: 'yyyy/MM/dd'}}"
      ></vxe-table-column>
      <vxe-table-column title="操作" width="100" show-overflow>
        <template v-slot="{ row }">
          <vxe-button type="text" icon="fa fa-edit" @click="editEvent(row)"></vxe-button>
          <vxe-button type="text" icon="fa fa-trash-o" @click="deleteEvent(row)"></vxe-button>
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

    <vxe-modal ref="xModal" v-model="showEdit" title="修改店鋪" width="600" resize destroy-on-close>
      <template v-slot>
        <div class="center">
          <div class="alert">
            <div class="card-header">
              <div class="card-header-right-icon"></div>
            </div>
            <div class="card-body">
              <div class="horizontal-form">
                <el-form
                  :model="shopForm"
                  :rules="shopRules"
                  class="form-horizontal"
                  ref="shopForm"
                  label-width="100px"
                >
                  <div class="form-group">
                    <el-form-item label="店鋪ID：" prop="shopId">
                      <el-input v-html="shopForm.shopId" class="form-show"></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item label="店鋪名：" prop="shopName">
                      <el-input v-html="shopForm.shopName" class="form-show"></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item label="平臺：" prop="platformStr">
                      <el-input v-html="shopForm.platformStr" class="form-show"></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item label="地區：" prop="countryStr">
                      <el-input v-html="shopForm.countryStr" class="form-show"></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item label="別名：" prop="anotherName" required>
                      <el-input
                        v-model="shopForm.anotherName"
                        placeholder="請輸入別名"
                        @change="onChange"
                        clearable
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-12">
                      <button
                        type="submit"
                        class="btn btn-primary btn-flat"
                        @click="submitForm('shopForm')"
                        v-bind:disabled="dis"
                      >儲存</button>
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
// import {
//   getShopList,
//   updateShop,
//   getShopeeAuthToken,
//   getShopeeUnAuthToken
// } from "@/js/shop/shop.js";
// import {
//   platformShopee,
//   getCountryStr,
//   platformSearchList,
//   countrySearchList,
//   tokenEnableSearchList
// } from "@/js/common/constant.js";

export default {
  inject: ["reload"],

  data() {
    return {
      loading: false,
      allAlign: "center",
      tableData: [],
      dis: false,
      platformSearchList: platformSearchList,
      countrySearchList: countrySearchList,
      tokenEnableSearchList: tokenEnableSearchList,
      shopForm: {
        shopId: "",
        shopName: "",
        anotherName: "",
        tokenEnable:null
      },
      tablePage: {
        currentPage: 1,
        pageSize: 10,
        totalResult: 0
      },
      searchForm: {
        shopId: null,
        shopName: null,
        anotherName: null,
        platform: null,
        country: null,
        tokenEnable:null
      },
      selectRow: null,
      showEdit: false,
      shopRules: {
        anotherName: [
          { required: true, message: "請輸入別名", trigger: "blur" },
          { min: 2, max: 15, message: "長度在 2 到 15 個字元", trigger: "blur" }
        ]
      },
      json_fields: {
        "頭部-診斷名稱": "name", //常規欄位
        "頭部-聯絡電話": "phone.mobile", //支援巢狀屬性
        "頭部-損壞區域程式碼": {
          field: "phone.landline",
          //自定義回撥函式
          callback: value => {
            return `損壞區域程式碼 - ${value}`;
          }
        }
      },
      json_data: [
        {
          name: "損壞的元件一",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010"
          }
        },
        {
          name: "損壞的元件二",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244"
          }
        }
      ],
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ]
    };
  },
  created() {
    this.initTable({
      pageSize: this.tablePage.pageSize,
      currentPage: this.tablePage.currentPage
    });
  },

  mounted() {},

  methods: {
    //初始化子賬號列表
    async initTable(data) {
      await getShopList(data).then(result => {
        if (result.success == "true") {
          if (result.data.rows) {
            result.data.rows.map(item => {
              if (item.users) {
                if (item.users.length > 0) {
                  let usernames = "";
                  item.users.forEach(element => {
                    usernames = usernames + element.username + "</br>";
                  });
                  item.usernames = usernames;
                }
              }
              if (item.country) {
                //將地區由程式碼轉為中文
                item.countryStr = getCountryStr(item.country);
              }
              if (item.platform) {
                switch (item.platform) {
                  case 1:
                    item.platformStr =
                      "<span style='color:#f96332'>Shopee</span>";
                    break;
                  case 2:
                    item.platformStr =
                      "<span style='color:#03a9f4'>LAZADA</span>";
                    break;
                }
              }
            });
          }
          this.tableData = result.data.rows;
          this.tablePage.totalResult = result.data.total;
        }
      });
    },

    editEvent(row) {
      //清空之前的內容
      this.shopForm.shopId = row.shopId;
      this.shopForm.shopName = row.shopName;
      this.shopForm.platformStr = row.platformStr;
      this.shopForm.countryStr = row.countryStr;
      this.shopForm.anotherName = row.anotherName;
      this.selectRow = row;
      this.showEdit = true;
    },

    async deleteEvent(row) {
      if (row.platform == platformShopee) {
        const result = await getShopeeUnAuthToken();
        if (result.success == "true") {
          let cancel_auth_partner = result.data;
          let url =
            "https://partner.shopeemobile.com/api/v2/shop/cancel_auth_partner?";
          window.open(url + cancel_auth_partner, "_blank");

          this.$confirm(
            "已成功傳送解除授權請求，完成解除後請重新整理頁面",
            "提示",
            {
              confirmButtonText: "重新整理",
              cancelButtonText: "取消",
              type: "warning",
              center: true
            }
          ).then(() => {
            this.reload();
          });
        } else {
          this.$message({
            message: result.msg,
            type: "error"
          });
        }
      } else {
        this.$message({
          message: "店鋪為Lazada店鋪",
          type: "warning"
        });
      }
    },

    //篩選
    searchEvent(currentPage) {
      currentPage
        ? (this.tablePage.currentPage = currentPage)
        : (this.tablePage.currentPage = 1);
      this.initTable({
        shopId: this.searchForm.shopId,
        shopName: this.searchForm.shopName,
        anotherName: this.searchForm.anotherName,
        platform: this.searchForm.platform,
        country: this.searchForm.country,
        tokenEnable: this.searchForm.tokenEnable,
        pageSize: this.tablePage.pageSize,
        currentPage: this.tablePage.currentPage
      });
    },

    //設定提交按鈕狀態
    onChange() {
      this.dis = false;
    },

    submitForm(formName) {
      this.dis = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          updateShop({
            shopId: this.shopForm.shopId,
            anotherName: this.shopForm.anotherName
          }).then(result => {
            if (result.success == "true") {
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.reload();
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    handleSizeChange(pageSize) {
      this.tablePage.pageSize = pageSize;
      this.searchEvent(this.tablePage.currentPage);
    },
    handleCurrentChange(currentPage) {
      this.tablePage.currentPage = currentPage;
      this.searchEvent(currentPage);
    },

    async addShopee() {
      const result = await getShopeeAuthToken();
      if (result.success == "true") {
        let auth_partner = result.data;
        let url = "https://partner.shopeemobile.com/api/v2/shop/auth_partner?";
        window.open(url + auth_partner, "_blank");

        this.$confirm("已成功傳送授權請求，完成授權後請重新整理頁面", "提示", {
          confirmButtonText: "重新整理",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        }).then(() => {
          this.reload();
        });
      } else {
        this.$message({
          message: result.msg,
          type: "error"
        });
      }
    },
    addLAZADA() {
      alert("addLAZADA");
    },
    getCountryStr(data) {
      return getCountryStr(data);
    }
  }
};
</script>


<style scoped>
</style>
