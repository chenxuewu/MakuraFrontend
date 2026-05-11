<template>
  <el-form ref="form" :model="shop" :rules="rules" label-width="200px">
    <el-form-item label="店鋪名稱" prop="shopName">
          <el-input v-model="shop.shopName" placeholder="請輸入店鋪名稱" maxlength="30" show-word-limit/>
        </el-form-item>
        <el-form-item label="團長名稱" prop="userName">
          <el-input v-model="shop.userName" placeholder="請輸入團長名稱" show-word-limit disabled />
        </el-form-item>
        <el-form-item label="團名稱" prop="deptName">
          <el-input v-model="shop.deptName" placeholder="所屬團名稱" show-word-limit disabled />
        </el-form-item>
        <el-form-item label="地區" prop="region">
          <el-input v-model="shop.region" placeholder="請輸入地區" show-word-limit maxlength="30"/>
        </el-form-item>
        <el-form-item label="店鋪狀態" prop="status">
          <el-select v-model="shop.status" placeholder="店鋪狀態" clearable>
            <el-option :value="2" label="正常"/>
            <el-option :value="1" label="凍結"/>
            <el-option :value="0" label="禁用"/>
          </el-select>
        </el-form-item>
        <el-form-item label="店鋪LOGO" prop="shopLogoUrl">
          <div class="el-form-item-box">
              <ImageUpload :limit="1" :fileSize="10" :fileType="['png', 'jpg', 'jpeg', 'gif']"
                @fileList="handleUploadLogoSuccess" :displayFileList=this.shopLogoUrls></ImageUpload>
            </div>
        </el-form-item>
        <el-form-item label="店鋪描述" prop="description">
          <el-input v-model="shop.description" type="textarea"  maxlength="256" show-word-limit placeholder="請輸入內容" />
        </el-form-item>
        <el-form-item label="備註" prop="remark" >
          <el-input v-model="shop.remark" type="textarea" maxlength="256" show-word-limit placeholder="請輸入內容" />
        </el-form-item>
        <el-form-item>
      <el-button type="primary" size="mini" @click="submit">儲存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { updateShop } from "@/api/shop/shop";
import ImageUpload from "@c/ImageUpload";

export default {
  name: "userShop",
  props: {
    shop: {
      type: Object
    }
  },
  components:{
    ImageUpload
  },
  data() {
    return {
      shopLogoUrls: [],
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
  watch: {
    shop(val) {
      this.shopLogoUrls = [];
      if (this.shop.shopLogoUrl){
        this.shopLogoUrls.push({ id: this.shop.shopLogo, name:'',url: this.shop.shopLogoUrl });
      }
    }
  },
  methods: {
    submit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          updateShop(this.shop).then(response => {
            this.$modal.msgSuccess("修改成功");
          });
        }
      });
    },
    handleUploadLogoSuccess(fileList) {
      console.info(fileList);
      //清空圖片地址
      this.shop.shopLogoUrl = null;
      this.shop.shopLogo = null;
      this.shop.shopLogo =fileList[0].id;
      this.shop.shopLogoUrl =fileList[0].url;
    },
    close() {
      this.$tab.closePage();
    }
  }
};
</script>
