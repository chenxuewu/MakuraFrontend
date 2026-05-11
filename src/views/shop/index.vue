<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="120px">
      <el-form-item label="店鋪名稱" prop="shopName">
        <el-input
          v-model="queryParams.shopName"
          placeholder="請輸入店鋪名稱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <!-- <el-form-item label="團長ID" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="請輸入團長ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <!-- <el-form-item label="所屬團ID" prop="deptId">
        <el-input
          v-model="queryParams.deptId"
          placeholder="請輸入所屬團ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item label="地區" prop="region">
        <el-input
          v-model="queryParams.region"
          placeholder="請輸入地區"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="店鋪狀態" prop="status">
        <el-select v-model="queryParams.status"
          placeholder="店鋪狀態"
          clearable
          @keyup.enter.native="handleQuery">
          <el-option label="正常" value="2" />
          <el-option label="凍結" value="1" />
          <el-option label="禁用" value="0" />
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="是否是跨境商店" prop="isCb">
        <el-select v-model="queryParams.isCb"
          placeholder="請輸入是否是跨境商店"
          clearable
          @keyup.enter.native="handleQuery">
          <el-option label="是" value="1" />
          <el-option label="否" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否升級到cbsc" prop="shopCbsc">
        <el-select v-model="queryParams.shopCbsc"
          placeholder="是否升級到cbsc"
          clearable
          @keyup.enter.native="handleQuery">
          <el-option label="是" value="1" />
          <el-option label="否" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否為3PF商店" prop="isThreepf">
        <el-select v-model="queryParams.isThreepf"
          placeholder="是否為3PF商店"
          clearable
          @keyup.enter.native="handleQuery">
          <el-option label="是" value="1" />
          <el-option label="否" value="0" />
        </el-select>
      </el-form-item> -->
      <!-- <el-form-item label="店鋪授權給合作伙伴時的時間戳" prop="authTime">
        <el-input
          v-model="queryParams.authTime"
          placeholder="請輸入店鋪授權給合作伙伴時的時間戳"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <!-- <el-form-item label="商店授權的到期日期" prop="expireTime">
        <el-input
          v-model="queryParams.expireTime"
          placeholder="請輸入商店授權的到期日期"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <!-- <el-form-item label="SIP主店或加盟店呼叫時，此欄位將返回“true”" prop="isSip">
        <el-input
          v-model="queryParams.isSip"
          placeholder="請輸入SIP主店或加盟店呼叫時，此欄位將返回“true”"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <!-- <el-form-item label="附屬商店的 ID" prop="affiShopid">
        <el-input
          v-model="queryParams.affiShopid"
          placeholder="請輸入附屬商店的 ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <!-- <el-form-item label="附屬商店的區域" prop="affiRegion">
        <el-input
          v-model="queryParams.affiRegion"
          placeholder="請輸入附屬商店的區域"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <!-- <el-form-item label="店鋪LOGO" prop="shopLogo">
        <el-input
          v-model="queryParams.shopLogo"
          placeholder="請輸入店鋪LOGO"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <!-- <el-form-item label="發票發行人" prop="invoiceIssuer">
        <el-input
          v-model="queryParams.invoiceIssuer"
          placeholder="請輸入發票發行人"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜尋</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <!-- <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['product:shop:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['product:shop:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['product:shop:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['product:shop:export']"
        >匯出</el-button>
      </el-col> -->
      <!-- <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar> -->
    </el-row>

    <el-table v-loading="loading" :data="shopList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <!-- <el-table-column label="店鋪ID" align="center" prop="shopId"   /> -->
      <el-table-column label="店鋪名稱" align="center" prop="shopName" />
      <el-table-column label="團長名稱" align="center" prop="userName" />
      <el-table-column label="所屬團名稱" align="center" prop="deptName" />
      <el-table-column label="地區" align="center" prop="region" />
      <el-table-column label="店鋪狀態" align="center" prop="status" >
        <template slot-scope="scope">
          {{enumStatus[scope.row.status]}}
        </template>
      </el-table-column>
      <!-- <el-table-column label="是否是跨境商店" align="center" prop="isCb" >
        <template slot-scope="scope">
          {{enumIsCb[scope.row.isCb]}}
        </template>
      </el-table-column>
      <el-table-column label="是否升級到cbsc" align="center" prop="shopCbsc" >
        <template slot-scope="scope">
          {{enumShopCbsc[scope.row.shopCbsc]}}
        </template>
      </el-table-column>
      <el-table-column label="是否為3PF商店" align="center" prop="isThreepf" >
        <template slot-scope="scope">
          {{enumIsThreepf[scope.row.isThreepf]}}
        </template>
      </el-table-column>
      <el-table-column label="店鋪授權給合作伙伴時的時間戳" align="center" prop="authTime" />
      <el-table-column label="商店授權的到期日期" align="center" prop="expireTime" /> -->
      <!-- <el-table-column label="SIP主店或加盟店呼叫時，此欄位將返回“true”" align="center" prop="isSip" /> -->
      <!-- <el-table-column label="附屬商店的 ID" align="center" prop="affiShopid" />
      <el-table-column label="附屬商店的區域" align="center" prop="affiRegion" /> -->
      <el-table-column label="店鋪LOGO" align="center" prop="shopLogoUrl" >
        <template slot-scope="scope">
        <img :src="scope.row.shopLogoUrl" alt="店鋪LOGO" style="max-width: 100%; max-height: 100px;" />
      </template>
      </el-table-column>
      <el-table-column label="店鋪描述" align="center" prop="description" />
      <!-- <el-table-column label="發票發行人" align="center" prop="invoiceIssuer" /> -->
      <el-table-column label="備註" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['product:shop:edit']"
          >修改</el-button>
          <!-- <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['product:shop:remove']"
          >刪除</el-button> -->
        </template>
      </el-table-column>
    </el-table>

      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      />

    <!-- 新增或修改店鋪對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" style="display: none" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="店鋪名稱" prop="shopName" >
          <el-input v-model="form.shopName" placeholder="請輸入店鋪名稱" disabled/>
        </el-form-item>
        <el-form-item label="團長名稱" prop="userName">
          <el-input v-model="form.userName" placeholder="請輸入團長名稱" disabled />
        </el-form-item>
        <el-form-item label="所屬團名稱" prop="deptName">
          <el-input v-model="form.deptName" placeholder="所屬團名稱" disabled />
        </el-form-item>
        <el-form-item label="地區" prop="region">
          <el-input v-model="form.region" placeholder="請輸入地區" disabled />
        </el-form-item>
        <el-form-item label="店鋪狀態" prop="status">
          <!-- <el-input v-model="form.isCb" placeholder="請輸入是否是跨境商店" /> -->
          <el-select v-model="form.status" placeholder="店鋪狀態" clearable>
            <el-option :value="2" label="正常"/>
            <el-option :value="1" label="凍結"/>
            <el-option :value="0" label="禁用"/>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="是否是跨境商店" prop="isCb">
          <el-select v-model="form.isCb" placeholder="是否是跨境商店" clearable>
            <el-option :value="0" label="否"/>
            <el-option :value="1" label="是"/>
          </el-select>
        </el-form-item>
        <el-form-item label="是否升級到cbsc" prop="shopCbsc">
          <el-select v-model="form.shopCbsc" placeholder="是否升級到cbsc" clearable>
            <el-option :value="'0'" label="否"/>
            <el-option :value="'1'" label="是"/>
          </el-select>
        </el-form-item>
        <el-form-item label="是否為3PF商店" prop="isThreepf">
          <el-select v-model="form.isThreepf" placeholder="是否為3PF商店" clearable>
            <el-option :value="0" label="否"/>
            <el-option :value="1" label="是"/>
          </el-select>
        </el-form-item>
        <el-form-item label="店鋪授權給合作伙伴時的時間戳" prop="authTime">
          <el-input v-model="form.authTime" placeholder="請輸入店鋪授權給合作伙伴時的時間戳" />
        </el-form-item>
        <el-form-item label="商店授權的到期日期" prop="expireTime">
          <el-input v-model="form.expireTime" placeholder="請輸入商店授權的到期日期" />
        </el-form-item> -->
        <!-- <el-form-item label="SIP主店或加盟店呼叫時，此欄位將返回“true”" prop="isSip">
          <el-input v-model="form.isSip" placeholder="請輸入SIP主店或加盟店呼叫時，此欄位將返回“true”" />
        </el-form-item> -->
        <!-- <el-form-item label="附屬商店的 ID" prop="affiShopid">
          <el-input v-model="form.affiShopid" placeholder="請輸入附屬商店的 ID" />
        </el-form-item> -->
        <!-- <el-form-item label="附屬商店的區域" prop="affiRegion">
          <el-input v-model="form.affiRegion" placeholder="請輸入附屬商店的區域" />
        </el-form-item> -->
        <el-form-item label="店鋪LOGO" prop="shopLogoUrl" >
          <!-- <el-input v-model="form.shopLogo" placeholder="請輸入店鋪LOGO" /> -->
          <div class="el-form-item-box">
              <ImageUpload :limit="1" :fileSize="10" :fileType="['png', 'jpg', 'jpeg', 'gif']"
                @fileList="handleUploadLogoSuccess" :displayFileList=this.shopLogoUrls disabled></ImageUpload>
            </div>
        </el-form-item>
        <el-form-item label="店鋪描述" prop="description" >
          <el-input v-model="form.description" type="textarea" placeholder="請輸入內容" disabled/>
        </el-form-item>
        <!-- <el-form-item label="發票發行人" prop="invoiceIssuer">
          <el-input v-model="form.invoiceIssuer" placeholder="請輸入發票發行人" />
        </el-form-item> -->
        <!-- <el-form-item label="刪除標誌" prop="delFlag">
          <el-input v-model="form.delFlag" placeholder="請輸入刪除標誌" />
        </el-form-item> -->
        <el-form-item label="備註" prop="remark" >
          <el-input v-model="form.remark" type="textarea" placeholder="請輸入內容" disabled/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">確 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listShop, getShop, delShop, addShop, updateShop } from "@/api/shop/shop";
import ImageUpload from "@c/ImageUpload";
export default {
  components:{
    ImageUpload
  },
  name: "Shop",
  data() {
    return {
      // 遮罩層
      loading: true,
      // 選中陣列
      ids: [],
      // 非單個禁用
      single: true,
      // 店鋪圖片
      shopLogoUrls: [],
      // 非多個禁用
      multiple: true,
      // 顯示搜尋條件
      showSearch: true,
      // 總條數
      total: 0,
      // 店鋪表格資料
      shopList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        shopName: null,
        userId: null,
        deptId: null,
        region: null,
        status: null,
        // isCb: null,
        // shopCbsc: null,
        // isThreepf: null,
        // authTime: null,
        // expireTime: null,
        // isSip: null,
        // affiShopid: null,
        // affiRegion: null,
        shopLogo: null,
        description: null,
        invoiceIssuer: null,
      },
      // 表單引數
      form: {},
      // 店鋪狀態 ：
      enumStatus: {
        0: '禁用',
        1: '凍結',
        2: '正常'
      },
       // 是否是跨境商店
      //  enumIsCb: {
      //   0: '否',
      //   1: '是'
      // },
       // 是否升級到cbs
      //  enumShopCbsc: {
      //   0: '否',
      //   1: '是'
      // },
        // 是否為3PF商店
        // enumIsThreepf: {
        //   0: '否',
        //   1: '是'
        // },

      // 表單校驗
      rules: {
        shopName: [
       { required: true, message: "店鋪名稱", trigger: "blur" }
        ],
        status: [
       { required: true, message: "店鋪狀態必選", trigger: "change" }
        ],
      }
    };
  },
  created() {
    this.getList();
    console.log(this.$store.state.user);
  },
  methods: {
    /** 查詢店鋪列表 */
    getList() {
      this.loading = true;
      listShop(this.queryParams).then(response => {
        this.shopList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按鈕
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表單重置
    reset() {
      this.shopLogoUrls = [];
      this.form = {
        shopId: null,
        shopName: null,
        userId: null,
        deptId: null,
        region: null,
        status: null,
        isCb: null,
        shopCbsc: null,
        isThreepf: null,
        authTime: null,
        expireTime: null,
        isSip: null,
        affiShopid: null,
        affiRegion: null,
        shopLogo: null,
        shopLogoUrl: null,
        description: null,
        invoiceIssuer: null,
        delFlag: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: null
      };
      this.resetForm("form");
    },

    handleUploadLogoSuccess(fileList) {
      console.info(fileList);
      //清空圖片地址
      this.form.shopLogoUrl = null;
      this.form.shopLogo = null;
      //商品圖片上傳成功後，將圖片地址賦值給imageUrls
      // this.form.imgUrls = fileList.map((item) => {
      //   return item.url;
      // });
      this.form.shopLogo =fileList[0].id;
      this.form.shopLogoUrl =fileList[0].url;
    },
    /** 搜尋按鈕操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按鈕操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多選框選中資料
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.shopId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按鈕操作 */
    // handleAdd() {
    //   this.reset();
    //   this.open = true;
    //   this.title = "新增店鋪";
    // },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const shopId = row.shopId || this.ids
      getShop(shopId).then(response => {
        this.form = response.data;
        if(response.data.shopLogoUrl){
          this.shopLogoUrls.push({ id: response.data.shopLogo, name:'',url: response.data.shopLogoUrl });
        }
        this.open = true;
        this.title = "修改店鋪";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.shopId != null) {
            updateShop(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            this.$modal.msgSuccess("暫時不支援新增");
            this.open = false;
            this.getList();
            //暫時不要新增
            // addShop(this.form).then(response => {
            //   this.$modal.msgSuccess("新增成功");
            //   this.open = false;
            //   this.getList();
            // });
          }
        }
      });
    },
    /** 刪除按鈕操作 */
    // handleDelete(row) {
    //   const shopIds = row.shopId || this.ids;
    //   this.$modal.confirm('是否確認刪除店鋪編號為"' + shopIds + '"的資料項？').then(function() {
    //     return delShop(shopIds);
    //   }).then(() => {
    //     this.getList();
    //     this.$modal.msgSuccess("刪除成功");
    //   }).catch(() => {});
    // },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('product/shop/export', {
        ...this.queryParams
      }, `shop_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

<style scoped>
@import "~@a/backend/css/bootstrap.min.css";
@import "~@a/backend/css/font-awesome.min.css";
@import "~@a/backend/css/simdahs.css";
@import "~@a/backend/css/themify-icons.css";
@import "~@a/backend/css/style.css";
::v-deep .el-form-item__error {
    color: #ff4949;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: auto;
    left: 0;
}
</style>
