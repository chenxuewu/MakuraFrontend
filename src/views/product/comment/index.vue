<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="商品id" prop="productId">
        <el-input
          v-model="queryParams.productId"
          placeholder="請輸入商品id"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>

      <el-form-item label="評論人名稱" prop="createBy">
        <el-input
          v-model="queryParams.createBy"
          placeholder="請輸入評論人名稱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="使用者ID" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="請輸入使用者ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="SKU ID" prop="skuId">
        <el-input
          v-model="queryParams.skuId"
          placeholder="請輸入SKU ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="SKU標題" prop="skuTitle">
        <el-input
          v-model="queryParams.skuTitle"
          placeholder="請輸入SKU標題"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="點讚數" prop="likeCount">
        <el-input
          v-model="queryParams.likeCount"
          placeholder="請輸入點讚數"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="評論星級" prop="rating">
        <el-input
          v-model="queryParams.rating"
          placeholder="請輸入評論星級"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="匿名" prop="anonymous">
        <el-select v-model="queryParams.anonymous" placeholder="請選擇是否匿名" clearable>
          <el-option label="不匿名" :value="0" />
          <el-option label="匿名" :value="1" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜尋</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重設</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['productcomment:add']"
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
          v-hasPermi="['productcomment:edit']"
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
          v-hasPermi="['productcomment:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['productcomment:export']"
        >匯出</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="info"
          plain
          icon="el-icon-star-on"
          size="mini"
          @click="handleRandGoodCommentDialog"
        >新增好評</el-button>
      </el-col>
      <el-col :span="2">
        <el-button
          type="success"
          plain
          icon="el-icon-star-off"
          size="mini"
          @click="handleAddAllGoodComments"
        >新增所有商品好評</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="commentList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="自增主鍵" align="center" prop="id" hidden/>
      <el-table-column label="評論內容" align="center" prop="commentContent" />
      <el-table-column label="商品id" align="center" prop="productId" />
      <el-table-column label="評論時間" align="center" prop="createTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="評論者名稱" align="center" prop="createBy" />
      <el-table-column label="使用者ID" align="center" prop="userId" />
      <el-table-column label="SKU ID" align="center" prop="skuId" />
      <el-table-column label="SKU標題" align="center" prop="skuTitle" />
      <el-table-column label="點讚數" align="center" prop="likeCount" />
      <el-table-column label="評論星級" align="center" prop="rating" />
      <el-table-column label="匿名" align="center" prop="anonymous">
        <template slot-scope="scope">
          <span>{{ scope.row.anonymous === 1 ? '匿名' : '不匿名' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['productcomment:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['productcomment:remove']"
          >刪除</el-button>
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

    <!-- 新增或修改商品評論對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="商品id" prop="productId">
          <el-input v-model="form.productId" placeholder="請輸入商品id" />
        </el-form-item>
        <el-form-item label="評論內容" prop="commentContent">
          <el-input v-model="form.commentContent" />
        </el-form-item>
       <el-form-item label="评论者" prop="createBy">
          <el-input v-model="form.createBy" placeholder="不填默认为登录人名称" />
        </el-form-item>
        <el-form-item label="修改者" prop="updateBy">
          <el-input v-model="form.updateBy" placeholder="不填默认为登录人名称" />
        </el-form-item>
        <el-form-item label="SKU ID" prop="skuId">
          <el-input v-model="form.skuId" placeholder="請輸入SKU ID" />
        </el-form-item>
        <el-form-item label="SKU標題" prop="skuTitle">
          <el-input v-model="form.skuTitle" placeholder="請輸入SKU標題" />
        </el-form-item>
        <el-form-item label="點讚數" prop="likeCount">
          <el-input v-model="form.likeCount" placeholder="請輸入點讚數" type="number" />
        </el-form-item>
        <el-form-item label="評論星級" prop="rating">
          <el-input v-model="form.rating" placeholder="請輸入評論星級" type="number" />
        </el-form-item>
        <el-form-item label="匿名" prop="anonymous">
          <el-select v-model="form.anonymous" placeholder="請選擇是否匿名">
            <el-option label="不匿名" :value="0" />
            <el-option label="匿名" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="評論圖片" prop="commentImages">
          <ImageUpload
            :limit="9"
            :fileSize="10"
            :fileType="['png','jpg','jpeg','gif']"
            @fileList="handleCommentImagesUpload"
            :displayFileList="commentImagesFileList"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">確 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 新增好評彈窗 -->
    <el-dialog :title="'新增好評'" :visible.sync="randGoodCommentDialogVisible" width="500px" append-to-body>
      <el-form :model="randGoodCommentForm" :rules="randGoodCommentRules" label-width="80px" ref="randGoodCommentForm">
        <el-form-item label="商品ID" prop="productId">
          <el-input type="number" v-model="randGoodCommentForm.productId" placeholder="請輸入商品ID（可選）" clearable />
        </el-form-item>
        <el-form-item label="評論內容" prop="comments">
          <div v-for="(comment, index) in randGoodCommentForm.comments" :key="index" class="comment-item">
            <el-input
              v-model="randGoodCommentForm.comments[index]"
              :placeholder="'請輸入評論內容 ' + (index + 1)"
              maxlength="50"
              show-word-limit
              clearable
            />
            <el-button
              v-if="randGoodCommentForm.comments.length > 1"
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="removeComment(index)"
              style="margin-left: 10px;"
            >刪除</el-button>
          </div>
          <el-button
            v-if="randGoodCommentForm.comments.length < 5"
            type="primary"
            size="mini"
            icon="el-icon-plus"
            @click="addComment"
            style="margin-top: 10px;"
          >新增評論</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitRandGoodComment">確 定</el-button>
        <el-button @click="randGoodCommentDialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 新增所有商品好評彈窗 -->
    <el-dialog :title="'新增所有商品好評'" :visible.sync="addAllGoodCommentDialogVisible" width="400px" append-to-body>
      <div style="text-align: center; padding: 20px 0;">
        <p>確認要為所有商品批量新增好評嗎？</p>
        <p style="color: #f56c6c; margin-top: 10px;">此操作將自動為系統中所有商品生成隨機好評</p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitAllGoodComments">確 定</el-button>
        <el-button @click="addAllGoodCommentDialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listComment, getComment, delComment, addComment, updateComment, randGoodComment, addAllGoodComments } from "@/api/product/comment";

export default {
  name: "Comment",
  data() {
    return {
      // 遮罩層
      loading: true,
      // 選中陣列
      ids: [],
      // 非單個禁用
      single: true,
      // 非多個禁用
      multiple: true,
      // 顯示搜尋條件
      showSearch: true,
      // 總條數
      total: 0,
      // 商品評論表格資料
      commentList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        commentContent: null,
        productId: null,
        userId: null,
        skuId: null,
        skuTitle: null,
        likeCount: null,
        rating: null,
        anonymous: null,
        status: null,
        createBy: null,
        updateBy: null,
      },
      // 表單引數
      form: {},
      // 表單校驗
      rules: {
        commentContent: [
          { required: true, message: "評論內容不能為空", trigger: "blur" }
        ],
        productId: [
          { required: true, message: "商品id不能為空", trigger: "blur" }
        ],
        skuId: [
          { required: true, message: "SKU ID不能為空", trigger: "blur" }
        ],
        skuTitle: [
          { required: true, message: "SKU標題不能為空", trigger: "blur" }
        ],
        likeCount: [
          { required: true, message: "點讚數不能為空", trigger: "blur" }
        ],
        rating: [
          { required: true, message: "評論星級不能為空", trigger: "blur" }
        ],
        anonymous: [
          { required: true, message: "請選擇是否匿名", trigger: "change" }
        ],
        commentImages: [
          { type: 'array', required: false, message: '請上傳評論圖片', trigger: 'change' }
        ],
        commentLevel: [
          { required: true, message: "評論層級不能為空", trigger: "blur" }
        ]
      },
      commentImagesFileList: [],
      // 新增好評彈窗相關
      randGoodCommentDialogVisible: false,
      addAllGoodCommentDialogVisible: false,
      randGoodCommentForm: {
        productId: '',
        comments: ['']
      },
      randGoodCommentRules: {}
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查詢商品評論列表 */
    getList() {
      this.loading = true;
      listComment(this.queryParams).then(response => {
        this.commentList = response.rows;
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
      this.form = {
        id: null,
        commentContent: null,
        productId: null,
        userId: null,
        skuId: null,
        skuTitle: null,
        likeCount: null,
        rating: null,
        anonymous: null,
        commentImages: [],
        commentLevel: null,
        parentCreateTime: null,
        parentId: null,
        parentGroup: null,
        parentCreateBy: null,
        status: null,
        delFlag: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null
      };
      this.commentImagesFileList = [];
      this.resetForm("form");
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
      this.ids = selection.map(item => item.id)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    /** 新增按鈕操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "新增商品評論";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getComment(id).then(response => {
        this.form = response.data;
        if (response.data.commentImages && response.data.commentImages.length > 0) {
          this.commentImagesFileList = response.data.commentImages.map(img => ({
            id: img.imageId,
            fileId: img.imageId,
            name: '',
            url: img.imageUrl
          }));
        } else {
          this.commentImagesFileList = [];
        }
        this.open = true;
        this.title = "修改商品評論";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateComment(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addComment(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 刪除按鈕操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否確認刪除商品評論編號為"' + ids + '"的資料項？').then(function() {
        return delComment(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('productcomment/export', {
        ...this.queryParams
      }, `comment_${new Date().getTime()}.xlsx`)
    },
    handleCommentImagesUpload(fileList) {
      console.log('fileList', fileList);
      this.form.commentImages = fileList.map(item => ({
        commentId: null,
        imageId: item.fileId,
        imageUrl: item.url
      }));
      this.commentImagesFileList = fileList;
    },
    handleRandGoodCommentDialog() {
      this.randGoodCommentForm = {
        productId: '',
        comments: ['']
      };
      this.randGoodCommentDialogVisible = true;
      this.$nextTick(() => {
        this.$refs['randGoodCommentForm'].clearValidate();
      });
    },
    addComment() {
      if (this.randGoodCommentForm.comments.length < 5) {
        this.randGoodCommentForm.comments.push('');
      }
    },
    removeComment(index) {
      this.randGoodCommentForm.comments.splice(index, 1);
    },
    submitRandGoodComment() {
      this.$refs['randGoodCommentForm'].validate(valid => {
        const productId = this.randGoodCommentForm.productId ? this.randGoodCommentForm.productId : null;
        const comments = this.randGoodCommentForm.comments.filter(comment => comment.trim() !== '');
        randGoodComment({ productId, comments }).then(res => {
          this.$modal.msgSuccess('新增好評成功');
          this.randGoodCommentDialogVisible = false;
          this.getList();
        }).catch(() => {
          this.$modal.msgError('新增好評失敗');
        });
      });
    },
    handleAddAllGoodComments() {
      this.addAllGoodCommentDialogVisible = true;
    },
    submitAllGoodComments() {
      const loading = this.$loading({
        lock: true,
        text: '正在批量生成好评，请稍候...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      addAllGoodComments().then(res => {
        loading.close();
        this.$modal.msgSuccess('所有商品好評新增成功');
        this.addAllGoodCommentDialogVisible = false;
        this.getList();
      }).catch(() => {
        loading.close();
        this.$modal.msgError('所有商品好評新增失敗');
      });
    }
  }
};
</script>

<style scoped>
.comment-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
