<template>
  <div class="app-container">

    <!-- 板块列表 -->
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="handleAdd"
          v-hasPermi="['system:homeSection:add']">新增板块</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="sectionList" row-key="id">
      <el-table-column label="排序" prop="sort" width="80" align="center" />
      <el-table-column label="板块标题" prop="title" />
      <el-table-column label="副标题" prop="subtitle" show-overflow-tooltip />
      <el-table-column label="数据来源" width="120" align="center">
        <template slot-scope="{ row }">
          <el-tag :type="row.dataSource === 1 ? 'warning' : 'primary'" size="small">
            {{ row.dataSource === 1 ? '手动选品' : '自动算法' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="算法类型" width="130" align="center">
        <template slot-scope="{ row }">
          <span v-if="row.dataSource === 0">{{ dataTypeLabel(row.dataType) }}</span>
          <span v-else style="color:#999">—</span>
        </template>
      </el-table-column>
      <el-table-column label="展示数量" prop="displayCount" width="90" align="center" />
      <el-table-column label="状态" width="90" align="center">
        <template slot-scope="{ row }">
          <el-switch v-model="row.enabled" :active-value="1" :inactive-value="0"
            @change="handleToggleEnabled(row)" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220" align="center">
        <template slot-scope="{ row }">
          <el-button size="mini" type="text" icon="el-icon-edit" @click="handleEdit(row)"
            v-hasPermi="['system:homeSection:edit']">编辑</el-button>
          <el-button v-if="row.dataSource === 1" size="mini" type="text" icon="el-icon-s-goods"
            @click="handleManageProducts(row)"
            v-hasPermi="['system:homeSection:edit']">管理选品</el-button>
          <el-button size="mini" type="text" icon="el-icon-delete" style="color:#f56c6c"
            @click="handleDelete(row)" v-hasPermi="['system:homeSection:remove']">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增/编辑对话框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="90px">
        <el-form-item label="板块标题" prop="title">
          <el-input v-model="form.title" placeholder="如：热销榜单" maxlength="50" show-word-limit />
        </el-form-item>
        <el-form-item label="副标题">
          <el-input v-model="form.subtitle" placeholder="可选" maxlength="100" show-word-limit />
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="form.sort" :min="0" :max="999" />
        </el-form-item>
        <el-form-item label="展示数量" prop="displayCount">
          <el-input-number v-model="form.displayCount" :min="1" :max="20" />
        </el-form-item>
        <el-form-item label="数据来源" prop="dataSource">
          <el-radio-group v-model="form.dataSource">
            <el-radio :label="0">自动算法</el-radio>
            <el-radio :label="1">手动选品</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="form.dataSource === 0" label="算法类型" prop="dataType">
          <el-select v-model="form.dataType" placeholder="请选择">
            <el-option v-for="t in dataTypes" :key="t.value" :label="t.label" :value="t.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="是否启用">
          <el-switch v-model="form.enabled" :active-value="1" :inactive-value="0" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" :loading="submitting" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 选品管理对话框 -->
    <el-dialog
      :title="'管理选品：' + (currentSection && currentSection.title)"
      :visible.sync="productDialogVisible"
      width="960px"
      top="5vh"
      append-to-body
    >
      <!-- 已选商品栏 -->
      <div class="selected-bar">
        <span class="selected-label">
          已选商品
          <el-badge :value="sectionProducts.length" :max="MAX_PRODUCTS" type="primary" />
          <span style="font-size:12px; color:#999; margin-left:6px;">（最多 {{ MAX_PRODUCTS }} 个，可拖拽排序）</span>
        </span>
        <draggable v-model="sectionProducts" @end="handleSortEnd" handle=".drag-handle"
          class="selected-list">
          <div v-for="item in sectionProducts" :key="item.id" class="selected-item">
            <i class="el-icon-rank drag-handle"></i>
            <span class="selected-name">{{ item.productName || ('ID: ' + item.productId) }}</span>
            <el-button size="mini" type="text" style="color:#f56c6c; flex-shrink:0"
              @click="handleRemoveProduct(item)">移除</el-button>
          </div>
          <div v-if="!sectionProducts.length" class="selected-empty">暂无选品</div>
        </draggable>
      </div>

      <el-divider />

      <!-- 分类 + 商品浏览区 -->
      <el-row :gutter="0" style="height:420px;">
        <!-- 左：分类树 -->
        <el-col :span="6" style="height:100%; overflow:hidden; display:flex; flex-direction:column;">
          <div class="cat-tree-wrap">
            <div class="cat-tree-head">
              <i class="el-icon-s-operation"></i> 按分类浏览
            </div>
            <!-- 搜索框 -->
            <div class="cat-tree-search">
              <el-input
                v-model="catSearchKeyword"
                size="mini"
                placeholder="搜索分类..."
                prefix-icon="el-icon-search"
                clearable
              />
            </div>
            <div class="cat-tree-list">
              <div v-if="visibleCategories.length === 0" class="cat-empty">无匹配分类</div>
              <div
                v-for="cat in visibleCategories"
                :key="cat.id"
                class="cat-tree-node"
                :class="{
                  'active': selectedCategoryId === cat.id,
                  'is-root': cat.level === 0 && !catSearchKeyword.trim()
                }"
                :style="{ paddingLeft: (catSearchKeyword.trim() ? 12 : 12 + cat.level * 16) + 'px' }"
                @click="onCatNodeClick(cat)"
              >
                <!-- 展开/收起箭头（搜索时隐藏） -->
                <i
                  v-if="cat.hasChildren && !catSearchKeyword.trim()"
                  class="cat-expand-icon"
                  :class="expandedIds.has(cat.id) ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"
                  @click.stop="toggleExpand(cat)"
                ></i>
                <span v-else class="cat-expand-placeholder"></span>
                <!-- 分类图标 -->
                <i class="cat-node-icon" :class="
                  cat.hasChildren
                    ? (expandedIds.has(cat.id) ? 'el-icon-folder-opened' : 'el-icon-folder')
                    : 'el-icon-price-tag'
                "></i>
                <span class="cat-node-label">{{ cat.label }}</span>
              </div>
            </div>
          </div>
        </el-col>

        <!-- 右：商品列表 -->
        <el-col :span="18" style="height:100%; overflow-y:auto; padding-left:12px;">
          <div v-if="!selectedCategoryId" class="picker-hint">← 请先从左侧选择分类</div>
          <div v-else>
            <div style="font-size:12px; color:#909399; margin-bottom:8px;">
              共 {{ productTotal }} 件商品
            </div>
            <div v-loading="loadingProducts">
              <div
                v-for="item in productList"
                :key="item.id"
                class="product-row"
                :class="{ added: isAdded(item.id), disabled: sectionProducts.length >= MAX_PRODUCTS && !isAdded(item.id) }"
                @click="toggleProduct(item)"
              >
                <div class="product-info">
                  <span class="product-name">{{ item.name }}</span>
                  <span class="product-meta">销量 {{ item.sale || 0 }}</span>
                </div>
                <el-tag v-if="isAdded(item.id)" size="mini" type="success" effect="dark">已选</el-tag>
                <el-tag v-else-if="sectionProducts.length >= MAX_PRODUCTS" size="mini" type="info">已满</el-tag>
                <el-tag v-else size="mini" type="primary" effect="plain">+ 添加</el-tag>
              </div>
              <div v-if="!loadingProducts && !productList.length" class="picker-hint">该分类下暂无商品</div>
            </div>

            <!-- 分页 -->
            <el-pagination
              v-if="productTotal > productPageSize"
              small
              layout="prev, pager, next"
              :total="productTotal"
              :page-size="productPageSize"
              :current-page.sync="productPageNum"
              style="margin-top:10px; text-align:center;"
              @current-change="loadProducts"
            />
          </div>
        </el-col>
      </el-row>

      <div slot="footer">
        <el-button @click="productDialogVisible = false">关 闭</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
import {
  listHomeSections, addHomeSection, updateHomeSection, deleteHomeSection,
  getSectionProducts, addSectionProduct, deleteSectionProduct, updateSectionProductSort
} from '@/api/product/homeSection'
import { listProduct } from '@/api/product/product'
import { getAttributeCategoryTree } from '@/api/product/attribute'

const MAX_PRODUCTS = 5

export default {
  name: 'HomeSectionManage',
  components: { draggable },
  data() {
    return {
      MAX_PRODUCTS,
      loading: false,
      sectionList: [],
      // 编辑弹窗
      dialogVisible: false,
      dialogTitle: '',
      submitting: false,
      form: { title: '', subtitle: '', dataSource: 0, dataType: 'HOT', displayCount: 4, sort: 0, enabled: 1 },
      rules: {
        title: [{ required: true, message: '请输入板块标题', trigger: 'blur' }],
        sort: [{ required: true, message: '请输入排序号', trigger: 'blur' }],
        displayCount: [{ required: true, message: '请输入展示数量', trigger: 'blur' }],
        dataSource: [{ required: true, message: '请选择数据来源', trigger: 'change' }],
        dataType: [{ required: true, message: '请选择算法类型', trigger: 'change' }],
      },
      dataTypes: [
        { label: 'HOT - 热销（按销量降序）', value: 'HOT' },
        { label: 'NEW - 新品（上架时间降序）', value: 'NEW' },
        { label: 'POPULAR - 人气（按商品综合销量）', value: 'POPULAR' },
        { label: 'RECOMMEND - 推荐（按上架时间）', value: 'RECOMMEND' },
      ],
      // 选品弹窗
      productDialogVisible: false,
      currentSection: null,
      sectionProducts: [],       // 已选（含 productName）
      // 分类浏览
      flatCategories: [],
      expandedIds: new Set(),
      catSearchKeyword: '',
      selectedCategoryId: null,
      // 商品列表
      loadingProducts: false,
      productList: [],
      productTotal: 0,
      productPageNum: 1,
      productPageSize: 12,
    }
  },
  created() {
    this.getList()
    this.loadCategories()
  },
  computed: {
    visibleCategories() {
      const keyword = this.catSearchKeyword.trim().toLowerCase()
      if (keyword) {
        return this.flatCategories.filter(cat =>
          cat.label.toLowerCase().includes(keyword)
        )
      }
      // 无搜索：只显示 level=0，或父节点已展开的节点
      return this.flatCategories.filter(cat => this.isVisible(cat))
    },
  },
  methods: {
    dataTypeLabel(type) {
      const map = { HOT: '热销', NEW: '新品', POPULAR: '人气', RECOMMEND: '推荐' }
      return map[type] || type
    },

    // ===== 板块 CRUD =====
    getList() {
      this.loading = true
      listHomeSections().then(res => {
        this.sectionList = res.rows || []
        this.loading = false
      }).catch(() => { this.loading = false })
    },
    handleAdd() {
      this.form = { title: '', subtitle: '', dataSource: 0, dataType: 'HOT', displayCount: 4, sort: 0, enabled: 1 }
      this.dialogTitle = '新增板块'
      this.dialogVisible = true
      this.$nextTick(() => { this.$refs.form && this.$refs.form.clearValidate() })
    },
    handleEdit(row) {
      this.form = { ...row }
      this.dialogTitle = '编辑板块'
      this.dialogVisible = true
    },
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (!valid) return
        this.submitting = true
        const action = this.form.id ? updateHomeSection(this.form) : addHomeSection(this.form)
        action.then(() => {
          this.$message.success(this.form.id ? '修改成功' : '新增成功')
          this.dialogVisible = false
          this.getList()
        }).finally(() => { this.submitting = false })
      })
    },
    handleDelete(row) {
      this.$confirm(`确认删除板块「${row.title}」？`, '提示', { type: 'warning' }).then(() => {
        deleteHomeSection(row.id).then(() => {
          this.$message.success('删除成功')
          this.getList()
        })
      })
    },
    handleToggleEnabled(row) {
      updateHomeSection({ id: row.id, enabled: row.enabled }).then(() => {
        this.$message.success(row.enabled === 1 ? '已启用' : '已禁用')
      }).catch(() => {
        row.enabled = row.enabled === 1 ? 0 : 1
      })
    },

    // ===== 分类加载 =====
    loadCategories() {
      getAttributeCategoryTree().then(res => {
        this.flatCategories = this.flattenTree(res.data || [], 0, null)
      })
    },
    flattenTree(nodes, level, parentId) {
      const result = []
      ;(nodes || []).forEach(node => {
        const hasChildren = !!(node.children && node.children.length)
        result.push({ id: node.id, label: node.label || node.name, level, hasChildren, parentId })
        if (hasChildren) {
          result.push(...this.flattenTree(node.children, level + 1, node.id))
        }
      })
      return result
    },
    // 判断节点是否应在树中显示（递归检查所有祖先是否已展开）
    isVisible(cat) {
      if (cat.level === 0) return true
      if (!this.expandedIds.has(cat.parentId)) return false
      const parent = this.flatCategories.find(c => c.id === cat.parentId)
      return parent ? this.isVisible(parent) : false
    },
    // 切换展开/收起
    toggleExpand(cat) {
      const next = new Set(this.expandedIds)
      if (next.has(cat.id)) {
        next.delete(cat.id)
      } else {
        next.add(cat.id)
      }
      this.expandedIds = next
    },
    // 点击节点：选中分类；若有子节点则同时展开
    onCatNodeClick(cat) {
      this.selectCategory(cat)
      if (cat.hasChildren && !this.expandedIds.has(cat.id)) {
        this.expandedIds = new Set([...this.expandedIds, cat.id])
      }
    },

    // ===== 选品管理 =====
    handleManageProducts(row) {
      this.currentSection = row
      this.sectionProducts = []
      this.selectedCategoryId = null
      this.catSearchKeyword = ''
      this.expandedIds = new Set()
      this.productList = []
      this.productTotal = 0
      this.productPageNum = 1
      this.productDialogVisible = true
      getSectionProducts(row.id).then(res => {
        this.sectionProducts = res.data || []
      })
    },
    selectCategory(cat) {
      this.selectedCategoryId = cat.id
      this.productPageNum = 1
      this.loadProducts()
    },
    loadProducts() {
      if (!this.selectedCategoryId) return
      this.loadingProducts = true
      listProduct({
        productCategoryId: this.selectedCategoryId,
        pageNum: this.productPageNum,
        pageSize: this.productPageSize,
        publishStatus: 1,
      }).then(res => {
        this.productList = res.rows || []
        this.productTotal = res.total || 0
      }).finally(() => { this.loadingProducts = false })
    },
    isAdded(productId) {
      return this.sectionProducts.some(p => p.productId === productId)
    },
    async toggleProduct(product) {
      if (this.isAdded(product.id)) {
        // 已选 → 移除
        const found = this.sectionProducts.find(p => p.productId === product.id)
        if (found) await this.handleRemoveProduct(found)
        return
      }
      if (this.sectionProducts.length >= MAX_PRODUCTS) {
        this.$message.warning(`最多只能选 ${MAX_PRODUCTS} 个商品`)
        return
      }
      const sortVal = this.sectionProducts.length
      await addSectionProduct(this.currentSection.id, { productId: product.id, sort: sortVal })
      this.$message.success('已添加')
      // 刷新获取完整记录（含 id）
      getSectionProducts(this.currentSection.id).then(res => {
        this.sectionProducts = res.data || []
      })
    },
    async handleRemoveProduct(item) {
      await deleteSectionProduct(item.id)
      this.sectionProducts = this.sectionProducts.filter(p => p.id !== item.id)
    },
    handleSortEnd() {
      const updated = this.sectionProducts.map((p, i) => ({ id: p.id, sort: i }))
      updateSectionProductSort(this.currentSection.id, updated)
    },
  }
}
</script>

<style scoped>
/* 已选商品栏 */
.selected-bar { margin-bottom: 4px; }
.selected-label { font-size: 13px; font-weight: 600; display: block; margin-bottom: 8px; }
.selected-list { display: flex; flex-wrap: wrap; gap: 6px; min-height: 36px; }
.selected-item {
  display: flex; align-items: center; gap: 6px;
  background: #f0f5ff; border: 1px solid #d6e4ff; border-radius: 4px;
  padding: 4px 8px; font-size: 13px;
}
.drag-handle { cursor: move; color: #aaa; }
.selected-name { max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.selected-empty { color: #bbb; font-size: 13px; padding: 4px 0; }

/* ===== 分类树 ===== */
.cat-tree-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e4e7ed;
  overflow: hidden;
}

.cat-tree-head {
  padding: 9px 14px;
  font-size: 12px;
  font-weight: 700;
  color: #909399;
  letter-spacing: 0.5px;
  background: #f7f8fa;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.cat-tree-search {
  padding: 8px 10px;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
}

.cat-tree-list {
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
}

.cat-tree-list::-webkit-scrollbar { width: 4px; }
.cat-tree-list::-webkit-scrollbar-thumb { background: #dcdfe6; border-radius: 2px; }

.cat-tree-node {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 34px;
  padding-right: 10px;
  cursor: pointer;
  color: #606266;
  font-size: 13px;
  transition: background 0.15s, color 0.15s;
  border-left: 3px solid transparent;
}

.cat-tree-node:hover {
  background: #f0f4ff;
  color: #409eff;
}

.cat-tree-node.active {
  background: #ecf5ff;
  color: #409eff;
  font-weight: 600;
  border-left-color: #409eff;
}

/* 一级（根）节点 */
.cat-tree-node.is-root {
  font-size: 13px;
  font-weight: 600;
  color: #303133;
  background: #f7f8fa;
  border-top: 1px solid #f0f0f0;
}
.cat-tree-node.is-root:first-child { border-top: none; }
.cat-tree-node.is-root:hover { background: #eff2f9; color: #409eff; }
.cat-tree-node.is-root.active { background: #ecf5ff; color: #409eff; border-left-color: #409eff; }

/* 展开/收起箭头 */
.cat-expand-icon {
  font-size: 11px;
  flex-shrink: 0;
  color: #c0c4cc;
  padding: 3px;
  border-radius: 3px;
  transition: transform 0.2s, color 0.15s, background 0.15s;
}
.cat-expand-icon:hover {
  color: #409eff;
  background: rgba(64, 158, 255, 0.1);
}
.cat-expand-placeholder {
  width: 17px;
  flex-shrink: 0;
}

/* 分类图标 */
.cat-node-icon {
  font-size: 13px;
  flex-shrink: 0;
  color: #c0c4cc;
}
.cat-tree-node.is-root .cat-node-icon { color: #e6a23c; }
.cat-tree-node.active .cat-node-icon { color: #409eff; }

/* 文字 */
.cat-node-label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1;
}

/* 搜索无结果 */
.cat-empty {
  text-align: center;
  color: #c0c4cc;
  font-size: 12px;
  padding: 24px 0;
}

/* 商品行 */
.product-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 10px; border-radius: 4px; cursor: pointer;
  border-bottom: 1px solid #f0f0f0; transition: background 0.15s;
}
.product-row:hover:not(.disabled) { background: #f5f9ff; }
.product-row.added { background: #f0fff4; }
.product-row.disabled { opacity: 0.5; cursor: not-allowed; }
.product-info { display: flex; flex-direction: column; flex: 1; min-width: 0; }
.product-name { font-size: 13px; color: #303133; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.product-meta { font-size: 11px; color: #909399; margin-top: 2px; }

/* 提示 */
.picker-hint { text-align: center; color: #bbb; padding: 60px 0; font-size: 13px; }
</style>
