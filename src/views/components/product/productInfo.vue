<template>
  <div>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="160px"
      class="demo-ruleForm my_error"
    >
      <!-- 基本資訊 -->
      <BaseTitle title="基本資訊" m-top="0" />
      <el-row :gutter="20">
        <!-- 商品類目,回顯 -->
        <el-col :span="24" class="el-cols-24">
          <el-form-item label="商品類目" prop="categoryPath">
            <el-input v-html="categoryPathDisplay" />
          </el-form-item>
        </el-col>

        <!-- 商品名稱 -->
        <el-col :span="24" class="el-cols-24">
          <el-form-item label="商品名稱" prop="name">
            <div class="el-form-item-box">
              <el-input
                v-model="ruleForm.name"
                show-word-limit
                :maxlength="60"
                placeholder="請輸入商品名稱"
              />
            </div>
          </el-form-item>
        </el-col>

        <!-- 商品副標題 -->
        <el-col :span="24" class="el-cols-24">
          <el-form-item label="商品副標題" prop="subTitle">
            <div class="el-form-item-box">
              <el-input
                v-model="ruleForm.subTitle"
                show-word-limit
                :maxlength="10"
                placeholder="請輸入商品副標題"
                @blur="$refs.ruleForm.validateField('subTitle')"
              />
            </div>
          </el-form-item>
        </el-col>

        <!-- 商品來源地址-->
        <el-col :span="24" class="el-cols-24">
          <el-form-item label="商品來源地址" prop="productSourceAddress">
            <div class="el-form-item-box">
              <el-input
                v-model="ruleForm.productSourceAddress"
                show-word-limit
                placeholder="請輸入商品來源地址"
              />
            </div>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 圖文資訊 -->
      <BaseTitle title="圖文資訊" m-top="0" />
      <el-row :gutter="20">
        <!-- 商品主圖-->

        <el-col :span="24" class="el-cols-24">
          <el-form-item label="商品主圖" prop="mainImages">
            <div class="el-form-item-box">
              <div class="main-image-container">
                <draggable
                  v-model="ruleForm.mainImages"
                  group="mainImages"
                  @end="onMainImageSortEnd"
                  class="thumbnail-list"
                >
                  <div
                    v-for="(file, index) in ruleForm.mainImages"
                    :key="file.id"
                    class="thumbnail-item"
                    draggable="true"
                  >
                    <el-image
                      :src="file.url"
                      fit="contain"
                      :preview-src-list="
                        ruleForm.mainImages.map((img) => img.url)
                      "
                      ref="mainImagePreview"
                    >
                      <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                      </div>
                    </el-image>
                    <div class="thumbnail-index">{{ file.sortOrder }}</div>
                    <div class="thumbnail-actions">
                      <div
                        class="action-icon"
                        @click.stop="previewMainImage(index)"
                      >
                        <i class="el-icon-zoom-in"></i>
                      </div>
                      <div
                        class="action-icon"
                        @click.stop="removeMainImage(index)"
                      >
                        <i class="el-icon-delete"></i>
                      </div>
                    </div>
                  </div>
                </draggable>
                <ImageUpload
                  :limit="10"
                  :fileSize="10"
                  :isShowTip="false"
                  :fileType="['png', 'jpg', 'jpeg', 'gif']"
                  @fileList="handleMainUploadSuccess"
                  :overClass="'mainImages'"
                  :displayFileList="ruleForm.mainImages"
                ></ImageUpload>
              </div>
            </div>
          </el-form-item>
        </el-col>

        <!-- 商品短視頻 -->
        <el-col :span="24" class="el-cols-24">
          <el-form-item label="商品短視頻">
            <div class="el-form-item-box">
              <!-- 已上傳視頻預覽 -->
              <div v-if="ruleForm.videoFile" class="pv-preview-wrap">
                <video
                  :src="ruleForm.videoFile.url"
                  controls
                  class="pv-player"
                  preload="metadata"
                ></video>
                <div class="pv-meta">
                  <span class="pv-filename">{{ ruleForm.videoFile.fileName }}</span>
                  <el-tag v-if="ruleForm.videoFile.duration" size="mini" type="info">
                    {{ ruleForm.videoFile.duration }} 秒
                  </el-tag>
                </div>
                <div class="pv-actions">
                  <el-upload
                    :http-request="doVideoUpload"
                    :show-file-list="false"
                    :before-upload="beforeVideoUpload"
                    accept=".mp4"
                    style="display:inline-block"
                  >
                    <el-button size="mini" type="primary" :loading="videoUploading">更換視頻</el-button>
                  </el-upload>
                  <el-button size="mini" type="danger" @click="removeVideo" style="margin-left:8px">刪除視頻</el-button>
                </div>
              </div>
              <!-- 未上傳 -->
              <div v-else>
                <el-upload
                  :http-request="doVideoUpload"
                  :show-file-list="false"
                  :before-upload="beforeVideoUpload"
                  :disabled="!id || videoUploading"
                  accept=".mp4"
                  class="pv-upload-area"
                  drag
                >
                  <div v-if="!id" class="pv-no-id-hint">
                    <i class="el-icon-info"></i>
                    <span>請先儲存商品後再上傳短視頻</span>
                  </div>
                  <div v-else-if="videoUploading" class="pv-uploading-hint">
                    <i class="el-icon-loading"></i>
                    <span>上傳中，請稍候…</span>
                  </div>
                  <div v-else class="pv-upload-hint">
                    <i class="el-icon-video-camera"></i>
                    <p>點擊或拖拽上傳短視頻</p>
                    <span>僅支援 mp4 格式，時長不超過 60 秒</span>
                  </div>
                </el-upload>
              </div>
            </div>
          </el-form-item>
        </el-col>

        <!-- 商品描述-->
        <el-col :span="24" class="el-cols-24">
          <el-form-item label="商品描述" prop="descriptionImages">
            <div
              class="el-form-item-box editor-container"
              style="height: 800px"
            >
              <div class="image-editor-container">
                <!-- 左側預覽區 - 佔50%寬度 -->
                <div class="preview-area">
                  <div class="preview-header">商品圖片預覽</div>
                  <div class="image-list">
                    <div
                      v-for="(image, index) in ruleForm.descriptionImages"
                      :key="image.id"
                      class="image-item"
                    >
                      <el-image
                        :src="image.url"
                        fit="contain"
                        :preview-src-list="
                          ruleForm.descriptionImages.map((img) => img.url)
                        "
                      >
                        <div slot="error" class="image-slot">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </el-image>
                    </div>
                  </div>
                </div>

                <!-- 右側上傳區 - 佔50%寬度 -->
                <div class="upload-area">
                  <!-- 上部區域 -->
                  <div class="upload-header">
                    <!-- 左側文字區域 -->
                    <div class="upload-info">
                      <div class="upload-title">商品圖片上傳</div>
                      <div class="upload-tip">
                        已上傳{{
                          ruleForm.descriptionImages.length
                        }}/50張，支援拖拽，單張高度5000px內，≤5M，僅支援jpg/png格式
                      </div>
                    </div>

                    <!-- 右側按鈕區域 -->
                    <div class="upload-btn">
                      <ImageUpload
                        :limit="50"
                        :fileSize="5"
                        :fileType="['png', 'jpg', 'jpeg']"
                        multiple
                        :maxCount="50"
                        :isShowTip="false"
                        :showButton="true"
                        :overClass="'upload-btn-box'"
                        @fileList="handleDescriptionUpload"
                        :displayFileList="ruleForm.descriptionImages"
                      >
                      </ImageUpload>
                    </div>
                  </div>

                  <!-- 下部區域 - 縮圖展示 -->
                  <div class="thumbnail-area">
                    <draggable
                      v-model="ruleForm.descriptionImages"
                      group="descriptionImages"
                      @end="onDescriptionImageSortEnd"
                      class="thumbnail-list"
                    >
                      <div
                        v-for="(file, index) in ruleForm.descriptionImages"
                        :key="file.id"
                        class="thumbnail-item"
                        draggable="true"
                      >
                        <el-image
                          :src="file.url"
                          fit="contain"
                          :preview-src-list="
                            ruleForm.descriptionImages.map((img) => img.url)
                          "
                          ref="imagePreview"
                        >
                          <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                          </div>
                        </el-image>
                        <div class="thumbnail-index">{{ file.sortOrder }}</div>
                        <div class="thumbnail-actions">
                          <div
                            class="action-icon"
                            @click.stop="previewDescriptionImage(index)"
                          >
                            <i class="el-icon-zoom-in"></i>
                          </div>
                          <div
                            class="action-icon"
                            @click.stop="removeDescriptionImage(index)"
                          >
                            <i class="el-icon-delete"></i>
                          </div>
                        </div>
                      </div>
                    </draggable>
                  </div>
                </div>
              </div>
            </div>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 商品屬性 -->
      <BaseTitle title="商品屬性" m-top="0" />
      <el-row :gutter="20">
        <!-- 商品屬性 -->
        <el-col
          :span="12"
          v-for="(attribute, attributeId) in ruleForm.attributes"
          :key="attributeId"
        >
          <!-- label-width="200px"  :required="attribute.mandatory === true" :prop="attribute.originalAttributeName"-->
          <el-form-item
            :label="attribute.displayAttributeName"
            :prop="attribute.originalAttributeName"
            :class="attribute.mandatory === true ? 'is-required' : ''"
          >
            <template
              v-if="attribute.inputType === 1 || attribute.inputType === 2"
            >
              <el-select
                v-model="attribute.attributeValue"
                :multiple="attribute.inputType === 2"
                :placeholder="attribute.placeholder"
                @change="
                  validateAttributeTrigger(attribute.originalAttributeName)
                "
              >
                <el-option
                  v-for="(
                    xtAttributeValue, valueId
                  ) in attribute.xtAttributeValueList"
                  :key="valueId"
                  :label="xtAttributeValue.displayValueName"
                  :value="xtAttributeValue.valueId"
                ></el-option>
              </el-select>
            </template>
            <template v-else-if="attribute.inputType === 3">
              <template v-if="attribute.inputValidationType === 4">
                <el-date-picker
                  v-model="attribute.attributeValue"
                  type="date"
                  placeholder="選擇日期"
                  @change="
                    validateAttributeTrigger(attribute.originalAttributeName)
                  "
                >
                </el-date-picker>
              </template>
              <template v-else>
                <el-input
                  v-model="attribute.attributeValue"
                  show-word-limit
                  :maxlength="50"
                  :placeholder="attribute.placeholder"
                  @change="
                    validateAttributeTrigger(attribute.originalAttributeName)
                  "
                >
                  <!-- 有單位時，在右側顯示單位 -->
                  <el-select
                    v-model="attribute.unitId"
                    slot="append"
                    class="input-select"
                  >
                    <el-option
                      v-for="(xtAttributeUnit, unitId) in attribute.unitList"
                      :key="unitId"
                      :label="xtAttributeUnit.unitSymbol"
                      :value="xtAttributeUnit.unitId"
                    ></el-option>
                  </el-select>
                </el-input>
              </template>
            </template>
            <template
              v-else-if="attribute.inputType === 4 || attribute.inputType === 5"
            >
              <el-select
                v-model="attribute.attributeValue"
                :multiple="attribute.inputType === 5"
                :filterable="true"
                :allow-create="true"
                :placeholder="attribute.placeholder"
                @change="
                  validateAttributeTrigger(attribute.originalAttributeName)
                "
              >
                <el-option
                  v-for="(
                    xtAttributeValue, valueId
                  ) in attribute.xtAttributeValueList"
                  :key="valueId"
                  :label="xtAttributeValue.displayValueName"
                  :value="xtAttributeValue.valueId"
                ></el-option>
              </el-select>
            </template>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 價格庫存 -->
      <BaseTitle title="價格庫存" m-top="0" />
      <!-- 商品規格 -->
      <el-form-item
        v-for="(specification, index) in ruleForm.specifications"
        :key="index"
        :label="index === 0 ? '商品規格' : '—'"
        v-if="specificationChange"
      >
        <div class="el-form-item-box">
          <el-row :gutter="20">
            <el-col :span="18">
              <el-table
                :key="tableKey"
                :data="specification.values"
                style="width: 100%"
                border
                :default-sort="{ prop: 'propSortNum', order: 'ascending' }"
              >
                <el-table-column align="center">
                  <!-- 將slot="#header" slot-scope="scope" 改為 "#header" 實現表頭資料的動態渲染，
                    使用#header的方式，是Vue的一種特殊語法，它會將表頭內容作為一個動態插槽處理 ,還要配合this.$set-->
                  <template #header>
                    <el-autocomplete
                      class="inline-input"
                      v-model.trim="specification.propName"
                      :fetch-suggestions="querySearch"
                      placeholder="請輸入內容"
                    ></el-autocomplete>
                  </template>
                  <template slot-scope="scope">
                    <el-input
                      v-model.trim="scope.row.propValueName"
                      :maxlength="30"
                      show-word-limit
                      @input="propNameInputChange(scope.row, index)"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="imageUrl" align="center">
                  <template slot="header" slot-scope="scope">
                    圖片
                    <el-switch
                      v-model="specification.imageEnable"
                      :disabled="index != 0"
                    >
                    </el-switch>
                  </template>
                  <template slot-scope="scope">
                    <ImageUpload
                      :limit="1"
                      :fileSize="10"
                      :fileType="['png', 'jpg', 'jpeg', 'gif']"
                      :myClass="skuImg"
                      :backData="scope.row"
                      :isShowTip="isShowTip"
                      @fileList="handleUploadSuccessSku"
                      :displayFileList="
                        scope.row.imageUrl == null ? null : [scope.row.imageUrl]
                      "
                      v-if="
                        scope.row.propValueName != null &&
                        scope.row.propValueName != '' &&
                        specification.imageEnable &&
                        index == 0
                      "
                    >
                    </ImageUpload>
                    <span v-else>—</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作" prop="propSortNum" align="center">
                  <template slot-scope="scope">
                    <el-button
                      type="text"
                      :disabled="
                        scope.row.propSortNum === 1 ||
                        scope.row.propValueName === null ||
                        scope.row.propValueName === ''
                      "
                      @click="upPropSortNum(scope.row.propSortNum, index)"
                      >上移</el-button
                    >
                    <el-button
                      type="text"
                      :disabled="
                        scope.row.propSortNum ===
                          ruleForm.specifications[index].values.length ||
                        scope.row.propValueName === null ||
                        scope.row.propValueName === ''
                      "
                      @click="downPropSortNum(scope.row.propSortNum, index)"
                      >下移</el-button
                    >
                    <el-button
                      type="text"
                      :disabled="
                        scope.row.propSortNum === 1 ||
                        scope.row.propValueName === null ||
                        scope.row.propValueName === ''
                      "
                      @click="topPropSortNum(scope.row.propSortNum, index)"
                      >置頂</el-button
                    >
                    <el-button
                      type="text"
                      :disabled="
                        scope.row.length === 1 ||
                        scope.row.propValueName === null ||
                        scope.row.propValueName === ''
                      "
                      @click="deleteProp(scope.row, index)"
                      >刪除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col :span="5">
              <el-button
                icon="el-icon-delete"
                class="button"
                :disabled="ruleForm.specifications.length === 1"
                @click="deleteSpecification(index)"
              ></el-button>
              <el-button
                icon="el-icon-plus"
                class="button"
                :disabled="ruleForm.specifications.length >= 3"
                @click="addSpecification"
              ></el-button>
              <el-button
                icon="el-icon-top"
                class="button"
                :disabled="index === 0"
                @click="upSpecification(index)"
              ></el-button>
            </el-col>
          </el-row>
        </div>
      </el-form-item>

      <!-- 價格庫存 -->
      <el-form-item label="價格庫存" class="is-required">
        <div class="el-form-item-box">
          <el-row :gutter="20">
            <el-col :span="18">
              <el-table style="width: 100%" border class="hiddenTbody">
                <!--動態列-->
                <el-table-column
                  v-for="(specification, index) in validSpecifications"
                  :key="index"
                  label="—"
                  align="center"
                >
                </el-table-column>
                <el-table-column label="—" align="center"> </el-table-column>
                <el-table-column align="center" width="200px">
                  <template slot="header" slot-scope="scope">
                    <el-input
                      placeholder="庫存"
                      v-model="batchSkuModifyNum"
                      size="small"
                      class="input-with-select"
                      oninput="value=value.replace(/[^\d]/g,'')"
                    >
                      <el-select
                        v-model="batchSkuModify"
                        slot="prepend"
                        size="small"
                      >
                        <el-option label="增" value="1"></el-option>
                        <el-option label="減" value="2"></el-option>
                      </el-select>
                    </el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  width="160px"
                  v-if="userType != '04'"
                >
                  <template slot="header" slot-scope="scope">
                    <el-input-number
                      v-model="batchSkuPurchasePrice"
                      controls-position="right"
                      size="small"
                      :precision="2"
                      :step="1"
                      :min="0"
                    ></el-input-number>
                  </template>
                </el-table-column>
                <el-table-column align="center" width="160px">
                  <template slot="header" slot-scope="scope">
                    <el-input-number
                      v-model="batchSkuWholesalePrice"
                      controls-position="right"
                      size="small"
                      :precision="2"
                      :step="1"
                      :min="0"
                    ></el-input-number>
                  </template>
                </el-table-column>
                <el-table-column align="center" width="160px">
                  <template slot="header" slot-scope="scope">
                    <el-input-number
                      v-model="batchBeforeDiscountPrice"
                      controls-position="right"
                      size="small"
                      :precision="2"
                      :step="1"
                      :min="0"
                    >
                    </el-input-number>
                  </template>
                </el-table-column>
                <el-table-column label="SKU編碼" align="center">
                </el-table-column>
              </el-table>
            </el-col>
            <el-col :span="5">
              <el-button class="button" @click="bacthModify">
                批次修改</el-button
              >
            </el-col>
          </el-row>
        </div>
      </el-form-item>

      <el-form-item>
        <div class="el-form-item-box">
          <el-row :gutter="20">
            <el-col :span="18" style="margin-left: 10px">
              <el-table :data="ruleForm.skuList" style="width: 100%" border>
                <!--動態列-->
                <el-table-column
                  v-for="(specification, index) in validSpecifications"
                  :key="index"
                  :column-key="specification.propName"
                  align="center"
                >
                  <template slot="header" slot-scope="scope">
                    {{ specification.propName }}
                  </template>
                  <template slot-scope="scope">
                    {{ getColumnValue(scope.row, specification.propName) }}
                  </template>
                </el-table-column>
                <el-table-column
                  label="當前庫存"
                  prop="skuStock"
                  align="center"
                >
                </el-table-column>
                <el-table-column label="庫存調整" align="center" width="200px">
                  <template slot-scope="scope">
                    <el-form-item
                      :prop="generateSkuField(scope.row, 'skuStock')"
                    >
                      <el-input
                        v-model="scope.row.skuModifyNum"
                        placeholder="庫存"
                        size="small"
                        class="input-with-select"
                        oninput="value=value.replace(/[^\d]/g,'')"
                        @change="skuModifyChange(scope.row)"
                      >
                        <el-select
                          v-model="scope.row.skuModify"
                          slot="prepend"
                          size="small"
                          @change="skuModifyChange(scope.row)"
                        >
                          <el-option label="增" value="1"></el-option>
                          <el-option label="減" value="2"></el-option>
                        </el-select>
                      </el-input>
                      <div
                        v-if="
                          scope.row.skuModifyNumError !== null &&
                          scope.row.skuModifyNumError !== ''
                        "
                        class="error-message"
                        v-html="scope.row.skuModifyNumError"
                      ></div>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column
                  label="成本價格（NT$）"
                  align="center"
                  width="160px"
                  v-if="userType != '04'"
                >
                  <template slot-scope="scope">
                    <el-form-item
                      :prop="generateSkuField(scope.row, 'purchasePrice')"
                    >
                      <el-input-number
                        v-model="scope.row.skuPurchasePrice"
                        controls-position="right"
                        size="small"
                        :precision="2"
                        :step="1"
                        :min="0"
                        @change="purchasePriceChange(scope.row)"
                      ></el-input-number>
                      <div
                        v-if="
                          scope.row.purchasePriceError !== null &&
                          scope.row.purchasePriceError !== ''
                        "
                        class="error-message"
                        v-html="scope.row.purchasePriceError"
                      ></div>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column
                  label="批發價格（NT$）"
                  align="center"
                  width="160px"
                >
                  <template slot-scope="scope">
                    <el-form-item
                      :prop="generateSkuField(scope.row, 'wholesalePrice')"
                    >
                      <el-input-number
                        v-model="scope.row.skuWholesalePrice"
                        controls-position="right"
                        size="small"
                        :precision="2"
                        :step="1"
                        :min="0"
                        @change="wholesalePriceChange(scope.row)"
                      ></el-input-number>
                      <div
                        v-if="
                          scope.row.wholesalePriceError !== null &&
                          scope.row.wholesalePriceError !== ''
                        "
                        class="error-message"
                        v-html="scope.row.wholesalePriceError"
                      ></div>
                    </el-form-item>
                  </template>
                </el-table-column>
                <!-- 優惠前價格列 -->
                <el-table-column
                  label="優惠前價格(NT$)"
                  align="center"
                  width="160px"
                >
                  <template slot-scope="scope">
                    <el-form-item
                      :prop="generateSkuField(scope.row, 'beforeDiscountPrice')"
                    >
                      <el-input-number
                        v-model="scope.row.beforeDiscountPrice"
                        controls-position="right"
                        size="small"
                        :precision="2"
                        :step="1"
                        :min="0"
                        @change="beforeDiscountPriceChange(scope.row)"
                      >
                      </el-input-number>
                      <div
                        v-if="scope.row.beforeDiscountPriceError"
                        class="error-message"
                        v-html="scope.row.beforeDiscountPriceError"
                      ></div>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="SKU編碼" align="center">
                  <template slot-scope="scope">
                    <el-input
                      placeholder="SKU編碼"
                      size="small"
                      v-model="scope.row.skuNo"
                    >
                    </el-input>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapState } from "vuex";
import draggable from "vuedraggable";
import ImageUpload from "@c/ImageUpload";
import CusEditor from "@c/CusEditor";
import { getAttributeDataByAttributeCategoryId } from "@/api/product/attribute";
import {
  addProduct,
  getBackProduct,
  updateProduct,
  uploadProductVideo,
} from "@/api/product/product";
export default {
  name: "ProductInfo",
  props: {
    categoryId: {
      default: null,
    },
    categoryPath: {
      type: String,
      default: "",
    },
    // id: {
    //   type: String,
    //   default: "",
    // },
  },
  components: {
    ImageUpload,
    CusEditor,
    draggable,
  },
  data() {
    return {
      fileType: ["png", "jpg", "jpeg"],
      restaurants: [
        {
          value: "規格",
          label: "規格",
        },
        {
          value: "顏色",
          label: "顏色",
        },
        {
          value: "尺碼",
          label: "尺碼",
        },
        {
          value: "款式",
          label: "款式",
        },
        {
          value: "圖案",
          label: "圖案",
        },
        {
          value: "材質",
          label: "材質",
        },
        {
          value: "口味",
          label: "口味",
        },
        {
          value: "色號",
          label: "色號",
        },
        {
          value: "容量",
          label: "容量",
        },
        {
          value: "度數",
          label: "度數",
        },
        {
          value: "功效",
          label: "功效",
        },
        {
          value: "記憶體",
          label: "記憶體",
        },
        {
          value: "尺寸",
          label: "尺寸",
        },
        {
          value: "厚度",
          label: "厚度",
        },
        {
          value: "適用膚質",
          label: "適用膚質",
        },
        {
          value: "適用人群",
          label: "適用人群",
        },
        {
          value: "適用性別",
          label: "適用性別",
        },
        {
          value: "適用年齡",
          label: "適用年齡",
        },
        {
          value: "適用季節",
          label: "適用季節",
        },
        {
          value: "貨號",
          label: "貨號",
        },
      ],
      skuImg: "skuImg",
      isShowTip: false,
      batchSkuPurchasePrice: 1,
      batchSkuWholesalePrice: 1,
      batchBeforeDiscountPrice: 1,
      batchSkuModify: "1",
      batchSkuModifyNum: null,
      // value: true,
      // show: false,
      categoryPathDisplay: this.categoryPath,
      specificationChange: true,
      id: null,
      //當前操作
      operation: "add",
      userType: null,
      displayFileListProduct: [],
      tableKey: 0, // 重新整理表格
      videoUploading: false,
      ruleForm: {
        id: null, // 商品id
        brandId: "", // 品牌id
        productCategoryId: "", // 商品分類ID
        categoryPath: "", // 商品分類名稱（全路徑）
        name: "", // 商品名稱
        publishStatus: "", // 上架狀態：0->下架；1->上架
        // new_status: '', // 新品狀態:0->不是新品；1->新品
        // recommand_status: '', // 推薦狀態；0->不推薦；1->推薦
        // sort: '', // 排序
        // sale: '', // 銷量
        // price: '', // 預設零售價格
        // purchase_proce: '', // 採購價格（平臺採購）
        // wholesale_proce: '', // 批發價格
        subTitle: "", // 副標題
        description: "", // 商品描述
        // keywords: '', // 關鍵詞
        // detail_html: '', // 產品詳情網頁內容
        mainImages: [], // 商品主圖列表
        descriptionImages: [], // 商品描述圖片列表
        xtProductFiles: [], // 商品相關檔案，圖片或影片
        videoFile: null, // 商品短視頻（fileType=1）
        skuList: [], // sku列表
        attributes: [], // 屬性列表,
        specifications: [], // 規格列表
        xtProductAttributeValues: [], // 屬性值列表
        xtProductSkuForms: [], // sku表單列表
        productSourceAddress: "",
      },
      rules: {
        name: [{ required: true, message: "請輸入商品名稱", trigger: "blur" }],
        subTitle: [
          { required: true, message: "請輸入商品副標題", trigger: "blur" },
          { validator: this.validateSubTitle, trigger: "blur" },
        ],
        mainImages: [
          { required: true, message: "請上傳商品主圖", trigger: "change" },
        ],
        descriptionImages: [
          { required: true, message: "請新增商品描述", trigger: "change" },
        ],
      },
    };
  },
  computed: {
    // ...mapState({
    //   ruleForm: (state) => state.product.ruleForm,
    //   rules: (state) => state.product.rules,
    // }),
    // 去除空的規格，獲取有效的規格列表
    validSpecifications() {
      return this.ruleForm.specifications.filter((spec) => {
        //當規格的propName為空時，返回false，不顯示該規格
        if (spec.propName == null || spec.propName == "") {
          return false;
        }
        //當規格的values長度為1時，當propValueName為空時，返回false，不顯示該規格
        if (spec.values.length == 1) {
          if (
            spec.values[0].propValueName == null ||
            spec.values[0].propValueName == ""
          ) {
            return false;
          }
        }
        return true;
      });
    },
  },
  watch: {
    validSpecifications: {
      deep: true,
      immediate: true,
      handler: function (newVal, oldVal) {
        if (newVal.length > 0) {
          this.ruleForm.skuList = this.generateSkuList(newVal);
        } else {
          this.ruleForm.skuList = [];
        }
      },
    },
    ruleForm: {
      handler: function (newVal, oldVal) {
        this.$emit("addProductDisableChagne", false);
      },
      deep: true,
    },
    //路由引數變化時，觸發回撥函式，獲取商品詳情，解決頁面快取問題，無法重新整理商品
    "$route.query": {
      handler: function (newQuery, oldQuery) {
        this.id = newQuery.id;
        // 根據路由中的商品id ，當id 不為空時，獲取商品詳情
        if (this.id != null && this.id != "") {
          // 獲取商品詳情，封裝到ruleForm中
          this.getProduct(BigInt(this.id));
        }
      },
      immediate: true, // 立即執行一次回撥函式
    },
  },
  created() {
    //根據類目獲取屬性列表
    if (this.categoryId != null) {
      this.getAttributeDataByAttributeCategoryId(this.categoryId);
    }
    //獲取使用者型別
    this.userType = this.$store.state.user.userType;
    //根據路由地址判斷當前操作是新增還是編輯
    if (this.$route.path == "/product/add") {
      this.operation = "add";
      this.ruleForm.specifications.push({
        specId: this.generateUniqueId(), // 新增規格型別ID
        propName: null,
        imageEnable: true,
        values: [
          {
            valueId: this.generateUniqueId(), // 新增規格值ID
            propValueName: null,
            propSortNum: 1,
          },
        ],
      });
    } else if (this.$route.path == "/product/edit") {
      this.operation = "edit";
    }
  },
  methods: {
    //提交表單
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.generateDescriptionHtml(); // 先生成描述HTML
          //設定商品相關
          this.ruleForm.xtProduct = {
            productCategoryId: this.categoryId,
            categoryPath: this.categoryPath,
            name: this.ruleForm.name,
            subTitle: this.ruleForm.subTitle,
            description: this.ruleForm.description,
            publishStatus: 1,
            delFlag: 0,
            productSourceAddress: this.ruleForm.productSourceAddress,
            specifications: JSON.stringify(
              this.validSpecifications.map((specification) => {
                return {
                  ...specification,
                  values: specification.values.filter((value) => {
                    return (
                      value.propValueName != null && value.propValueName != ""
                    );
                  }),
                };
              })
            ),
          };
          //判斷id是否為空，為空時，為新增操作，不為空時，為編輯操作
          if (this.id != null && this.id != "") {
            this.ruleForm.xtProduct.id = this.id;
          }

          //設定屬性值列表
          this.ruleForm.xtProductAttributeValues = this.ruleForm.attributes.map(
            (item) => {
              return {
                id: item.id,
                attributeId: item.attributeId,
                //inputType 不為3時，該項是選擇框，attributeValueId為選擇的值的id，rawValue 為對應label的值
                //當inputType為3時，該項是輸入框，attributeValueId為null，rawValue為輸入的值
                attributeValueId:
                  item.inputType != 3 &&
                  item.attributeValue != null &&
                  item.attributeValue.length > 0
                    ? item.attributeValue.toString()
                    : null,
                rawValue: this.getRawValue(item),
                unitId: item.unitId,
                rawUnit: this.getRawUnit(item),
                delFlag: 0,
              };
            }
          );

          // 封裝商品圖片，把主圖和詳情圖合併；如有短視頻一併放入由後端統一入庫
          this.ruleForm.xtProductFiles = [
            ...this.ruleForm.mainImages,
            ...this.ruleForm.descriptionImages,
          ];
          if (this.ruleForm.videoFile) {
            const v = this.ruleForm.videoFile;
            this.ruleForm.xtProductFiles.push({
              id: v.id || null,
              fileId: v.fileId,
              fileType: 1,
              isMainImage: 0,
              sortOrder: 0,
              duration: v.duration,
            });
          }

          this.ruleForm.xtProductSkus = this.ruleForm.skuList.map((item) => {
            let skuObj = {
              sku: item.skuNo,
              pic: item.pic,
              tierIndex: item.relationSpecificationlist
                .map((specification) => specification.propSortNum)
                .join(","),
              name: item.relationSpecificationlist
                .map((specification) => specification.propValueName)
                .join(","),
              xtProductSkuPrice: {
                stock:
                  item.skuStock +
                  (item.skuModify == "1"
                    ? parseInt(item.skuModifyNum)
                    : -parseInt(item.skuModifyNum)),
                lowStock:
                  item.skuStock +
                  (item.skuModify == "1"
                    ? parseInt(item.skuModifyNum)
                    : -parseInt(item.skuModifyNum)),
                price: item.skuWholesalePrice,
                purchasePrice: item.skuPurchasePrice,
                wholesalePrice: item.skuWholesalePrice,
                beforeDiscountPrice: item.beforeDiscountPrice,
              },
            };
            if (this.operation !== "add") {
              Object.assign(skuObj, {
                id: item.skuId,
                productId: item.productId,
                xtProductSkuPrice: {
                  id: item.priceId,
                  skuId: item.id,
                  stock:
                    item.skuStock +
                    (item.skuModify == "1"
                      ? parseInt(item.skuModifyNum)
                      : -parseInt(item.skuModifyNum)),
                  lowStock:
                    item.skuStock +
                    (item.skuModify == "1"
                      ? parseInt(item.skuModifyNum)
                      : -parseInt(item.skuModifyNum)),
                  price: item.skuWholesalePrice,
                  purchasePrice: item.skuPurchasePrice,
                  wholesalePrice: item.skuWholesalePrice,
                  beforeDiscountPrice: item.beforeDiscountPrice,
                },
              });
            }
            return skuObj;
          });

          const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
          });
          const request =
            this.operation === "add"
              ? addProduct(this.ruleForm)
              : updateProduct(this.ruleForm);

          request.then((response) => {
            if (response.code === 200) {
              const message =
                this.operation === "add" ? "新增成功" : "編輯成功";
              this.$message({
                message,
                type: "success",
              });
              loading.close();
              this.$emit("submitResult", "success", message);
            } else {
              this.$message({
                message: response.message,
                type: "error",
              });
              loading.close();
              this.$emit("submitResult", "error", response.message);
            }
          });
          setTimeout(() => {
            loading.close();
          }, 3000);
          console.log("ruleForm", this.ruleForm);
          console.log("submit!");
        } else {
          this.$emit("addProductDisableChagne", true);
          console.log("error submit!!");
          return false;
        }
      });
    },

    // 上傳成功,設定圖片地址
    handleMainUploadSuccess(fileList) {
      this.ruleForm.mainImages = this.sortImagesByOrder(
        fileList.map((item, index) => ({
          id: item.id,
          fileId: item.fileId,
          url: item.url,
          fileType: 0,
          isMainImage: index == 0 ? 1 : 0,
          delFlag: 0,
          sortOrder: index + 1,
        }))
      );
      this.$refs.ruleForm.validateField("xtProductFiles");
    },

    // 主圖排序結束回撥
    onMainImageSortEnd() {
      // 拖動後重新計算所有主圖的序號
      this.ruleForm.mainImages.forEach((item, index) => {
        item.sortOrder = index + 1;
        // 將第一個圖片設為主圖
        item.isMainImage = index === 0 ? 1 : 0;
      });

      // 重新排序陣列
      this.ruleForm.mainImages = this.sortImagesByOrder(
        this.ruleForm.mainImages
      );
    },
    // 預覽主圖
    previewMainImage(index) {
      if (!this.ruleForm.mainImages || this.ruleForm.mainImages.length === 0) {
        this.$message.warning("沒有可預覽的圖片");
        return;
      }

      // 確保預覽列表是有效的URL陣列
      const previewList = this.ruleForm.mainImages
        .map((img) => img.url)
        .filter((url) => url);

      if (!previewList.length) {
        this.$message.warning("圖片URL無效");
        return;
      }

      // 使用Element UI的預覽功能
      this.$nextTick(() => {
        const images = this.$el.querySelectorAll(".thumbnail-item .el-image");
        if (images[index]) {
          // 直接呼叫Element UI的預覽方法
          const imageInstance = images[index].__vue__;
          if (imageInstance && imageInstance.clickHandler) {
            imageInstance.clickHandler();
          } else {
            // 備用方案：手動觸發預覽
            const previewSrcList = this.ruleForm.mainImages.map(
              (img) => img.url
            );
            this.$preview({
              images: previewSrcList,
              index: index,
              onClose: () => console.log("預覽關閉"),
            });
          }
        }
      });
    },
    // 刪除主圖
    removeMainImage(index) {
      this.ruleForm.mainImages.splice(index, 1);
      this.$message.success("刪除成功");
      // 重新排序
      this.onMainImageSortEnd();
    },
    // SKU 上傳成功,設定圖片地址
    handleUploadSuccessSku(fileList, backData) {
      this.ruleForm.specifications[0].values =
        this.ruleForm.specifications[0].values.map((item) => {
          if (item.propSortNum == backData.propSortNum) {
            // 當filiList 有值時，將圖片地址賦值給imageUrl，當fileList 為空時，將imageUrl置為null
            item.imageId = fileList.length > 0 ? fileList[0].fileId : null;
            item.imageUrl = fileList.length > 0 ? fileList[0].url : null;
          }
          return item;
        });
    },

    //根據類目獲取屬性列表
    async getAttributeDataByAttributeCategoryId(categoryId) {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await getAttributeDataByAttributeCategoryId(
            BigInt(categoryId)
          );
          if (response.data && response.data.length > 0) {
            console.info(response.data);
            const attributes = response.data.map((item) => ({
              ...item,
              attributeValue: null,
              placeholder:
                (item.inputType == 3 ? "請輸入" : "請選擇") +
                item.displayAttributeName,
              unitList: item.formatType == 2 ? item.xtAttributeUnitList : null,
              unitId: null,
              rawUnit: null,
            }));

            attributes.forEach((item) => {
              if (item.mandatory) {
                this.rules[item.originalAttributeName] = [
                  { validator: this.validateAttribute, trigger: "blur" },
                ];
              }
            });
            this.ruleForm.attributes = attributes;
            resolve(attributes);
          }
        } catch (error) {
          console.error(error);
          reject(error);
        }
      });
    },
    //自定義校驗規則，屬性欄位
    validateAttribute(rule, value, callback) {
      //匹配attributeValue是否為null或者空字元串，如果是則提示不能為空
      this.ruleForm.attributes.forEach((item) => {
        if (item.originalAttributeName == rule.field) {
          if (item.attributeValue == null || item.attributeValue == "") {
            callback(new Error(item.displayAttributeName + "不能為空"));
          } else {
            callback();
          }
        }
      });
    },
    //自定義觸發校驗規則，屬性欄位
    validateAttributeTrigger(originalAttributeName) {
      this.$refs.ruleForm.validateField(originalAttributeName);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 呼叫 callback 返回建議列表的資料
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    addSpecification() {
      this.ruleForm.specifications.push({
        specId: this.generateUniqueId(),
        propName: "",
        imageEnable: false,
        values: [
          {
            valueId: this.generateUniqueId(),
            propValueName: null,
            propId: null,
            imageUrl: null,
            propSortNum: 1,
          },
        ],
      });
    },
    deleteSpecification(index) {
      this.ruleForm.specifications.splice(index, 1);
    },
    //上移當前 specification，後面specification 的index 增加1
    upSpecification(index) {
      if (index == 0) {
        return;
      }
      //先隱藏當前的表格
      this.specificationChange = false;
      // 當前specification 和上一個specification 交換位置
      this.ruleForm.specifications = this.ruleForm.specifications.map(
        (specification, i) => {
          if (i == index - 1) {
            specification = this.ruleForm.specifications[index];
          }
          if (i == index) {
            specification = this.ruleForm.specifications[index - 1];
          }
          return specification;
        }
      );
      //延時設定specificationChange 為true，當調整specification的順序時，強制重新整理表格，表頭的內容也跟著重新整理
      this.specificationChange = false;
      this.$nextTick(() => {
        this.specificationChange = true;
      });

      // 1. 使用響應式資料交換
      // const newSpecs = JSON.parse(JSON.stringify(this.ruleForm.specifications));
      // [newSpecs[index], newSpecs[index - 1]] = [
      //   newSpecs[index - 1],
      //   newSpecs[index],
      // ];
      // this.$set(this.ruleForm, "specifications", newSpecs);

      // 2. 強制重新整理保險
      // this.tableKey++;
    },
    // 上移
    upPropSortNum(propSortNum, index) {
      if (propSortNum > 1) {
        this.ruleForm.specifications[index].values =
          this.ruleForm.specifications[index].values.map((value) => {
            if (value.propSortNum == propSortNum - 1) {
              value.propSortNum = 0;
            }
            if (value.propSortNum == propSortNum) {
              value.propSortNum = value.propSortNum - 1;
            }
            return value;
          });
        this.ruleForm.specifications[index].values =
          this.ruleForm.specifications[index].values.map((value) => {
            if (value.propSortNum == 0) {
              value.propSortNum = propSortNum;
            }
            return value;
          });
      }
    },
    // 下移
    downPropSortNum(propSortNum, index) {
      if (propSortNum < this.ruleForm.specifications[index].values.length) {
        this.ruleForm.specifications[index].values =
          this.ruleForm.specifications[index].values.map((value) => {
            if (value.propSortNum == propSortNum + 1) {
              value.propSortNum = 0;
            }
            if (value.propSortNum == propSortNum) {
              value.propSortNum = value.propSortNum + 1;
            }
            return value;
          });
        this.ruleForm.specifications[index].values =
          this.ruleForm.specifications[index].values.map((value) => {
            if (value.propSortNum == 0) {
              value.propSortNum = propSortNum;
            }
            return value;
          });
      }
    },
    // 置頂
    topPropSortNum(propSortNum, index) {
      if (propSortNum == 1) {
        return;
      }
      this.ruleForm.specifications[index].values = this.ruleForm.specifications[
        index
      ].values.map((value) => {
        if (value.propSortNum == propSortNum) {
          value.propSortNum = 0;
        }
        return value;
      });
      this.ruleForm.specifications[index].values = this.ruleForm.specifications[
        index
      ].values.map((value) => {
        if (value.propSortNum < propSortNum) {
          value.propSortNum = value.propSortNum + 1;
        }
        return value;
      });
    },
    // 刪除規格中的prop
    deleteProp(row, index) {
      if (this.ruleForm.specifications[index].values.length == 1) {
        this.$message({
          message: "至少保留一個規格",
          type: "warning",
        });
        return;
      }
      var propSortNum = row.propSortNum;
      this.ruleForm.specifications[index].values = this.ruleForm.specifications[
        index
      ].values.filter((value) => {
        return value.propSortNum != row.propSortNum;
      });
      // propSortNum 大於刪除的propSortNum的propSortNum - 1
      this.ruleForm.specifications[index].values = this.ruleForm.specifications[
        index
      ].values.map((value) => {
        if (value.propSortNum > propSortNum) {
          value.propSortNum = value.propSortNum - 1;
        }
        return value;
      });
    },
    // 監聽propName 輸入變化，最後一個輸入框有值時，新增一行
    propNameInputChange(row, index) {
      if (
        row.propSortNum == this.ruleForm.specifications[index].values.length
      ) {
        //當propValueName不為空時，新增一行
        if (row.propValueName !== null && row.propValueName !== "") {
          this.ruleForm.specifications[index].values.push({
            valueId: this.generateUniqueId(),
            propValueName: null,
            propId: null,
            imageUrl: null,
            propSortNum: row.propSortNum + 1,
          });
        }
      } else {
        //如果當前行不是最後一行，而且當propValueName為空時，則刪除當前行，並將後面所有行的propSortNum - 1
        if (row.propValueName == null || row.propValueName == "") {
          this.ruleForm.specifications[index].values =
            this.ruleForm.specifications[index].values.filter((value) => {
              return value.propSortNum != row.propSortNum;
            });
          // propSortNum 大於刪除的propSortNum的propSortNum - 1
          this.ruleForm.specifications[index].values =
            this.ruleForm.specifications[index].values.map((value) => {
              if (value.propSortNum > row.propSortNum) {
                value.propSortNum = value.propSortNum - 1;
              }
              return value;
            });
        }
      }
    },
    //根據規格列表生成skuList,並按照relationSpecificationlist多級排序,relationSpecificationlist中的propSortNum為排序欄位
    generateSkuList(validSpecifications) {
      console.info("validSpecifications", validSpecifications);
      // 生成所有可能的規格組合
      const generateCombinations = (index, combination) => {
        if (index === validSpecifications.length) {
          return [combination];
        }

        const spec = validSpecifications[index];
        const combinations = [];

        for (const value of spec.values) {
          if (!value.propValueName) continue;

          combinations.push(
            ...generateCombinations(index + 1, [
              ...combination,
              {
                specId: spec.specId, // 規格型別ID
                propName: spec.propName, // 規格型別名稱
                valueId: value.valueId, // 規格值ID
                propValueName: value.propValueName,
                propSortNum: value.propSortNum,
              },
            ])
          );
        }

        return combinations;
      };

      const newCombinations = generateCombinations(0, []);

      return newCombinations
        .map((combination) => {
          // 嘗試匹配原有SKU - 基於規格值ID組合（不考慮順序）
          if (this.ruleForm.skuList?.length > 0) {
            const valueIdSet = new Set(combination.map((item) => item.valueId));

            const matchingSku = this.ruleForm.skuList.find((sku) => {
              if (!sku.relationSpecificationlist) return false;

              const skuValueIds = sku.relationSpecificationlist.map(
                (item) => item.valueId
              );
              return (
                skuValueIds.length === combination.length &&
                skuValueIds.every((id) => valueIdSet.has(id))
              );
            });

            if (matchingSku) {
              // 保留所有非規格資料，更新規格資訊（按新順序）
              return {
                ...matchingSku,
                pic: validSpecifications[0].values.find(
                  (item) => item.valueId === combination[0].valueId
                )?.imageId,
                relationSpecificationlist: combination.map((newItem) => {
                  // 找到原有規格資料（基於valueId）
                  const originalSpec =
                    matchingSku.relationSpecificationlist.find(
                      (item) => item.valueId === newItem.valueId
                    );
                  return originalSpec
                    ? { ...originalSpec, ...newItem } // 合併新舊資料
                    : newItem;
                }),
              };
            }
          }

          // 無匹配時建立新SKU
          return {
            skuId: null,
            skuStock: 0,
            skuNo: "",
            skuPurchasePrice: 1,
            skuWholesalePrice: 1,
            beforeDiscountPrice: 1,
            skuModify: "1",
            skuModifyNum: null,
            pic: validSpecifications[0].values.find(
              (item) => item.valueId === combination[0].valueId
            )?.imageId,
            relationSpecificationlist: combination,
          };
        })
        .sort((a, b) => {
          // 按新規格順序排序
          const sortNum1 = a.relationSpecificationlist.map(
            (item) => item.propSortNum
          );
          const sortNum2 = b.relationSpecificationlist.map(
            (item) => item.propSortNum
          );
          for (let i = 0; i < sortNum1.length; i++) {
            if (sortNum1[i] !== sortNum2[i]) return sortNum1[i] - sortNum2[i];
          }
          return 0;
        });
    },
    //生成ruleForm.skuList的校驗規則
    generateSkuRules(skuList) {
      //重置 this.rules ,將原來的規則中屬性包含skuStock,wholesalePrice,purchasePrice的規則刪除
      for (var key in this.rules) {
        if (
          key.indexOf("skuStock") > -1 ||
          key.indexOf("wholesalePrice") > -1 ||
          key.indexOf("purchasePrice") > -1 ||
          key.indexOf("beforeDiscountPrice") > -1
        ) {
          delete this.rules[key];
        }
      }

      // 清除所有SKU的错误信息
      this.ruleForm.skuList.forEach((item) => {
        item.beforeDiscountPriceError = null;
        item.wholesalePriceError = null;
        item.purchasePriceError = null;
        item.skuModifyNumError = null;
      });

      skuList.forEach((item) => {
        this.rules[
          item.relationSpecificationlist
            .map((item) => item.propSortNum)
            .join(",") + "skuStock"
        ] = [{ validator: this.validateSkuStock, trigger: "blur" }];
        this.rules[
          item.relationSpecificationlist
            .map((item) => item.propSortNum)
            .join(",") + "wholesalePrice"
        ] = [{ validator: this.validateSkuWholesalePrice, trigger: "blur" }];
        this.rules[
          item.relationSpecificationlist
            .map((item) => item.propSortNum)
            .join(",") + "purchasePrice"
        ] = [{ validator: this.validateSkuPurchasePrice, trigger: "blur" }];
        this.rules[
          item.relationSpecificationlist
            .map((item) => item.propSortNum)
            .join(",") + "beforeDiscountPrice"
        ] = [{ validator: this.validateBeforeDiscountPrice, trigger: "blur" }];
      });
    },
    //自定義校驗規則，sku庫存欄位
    // validateSkuStock(rule, value, callback) {
    //   this.ruleForm.skuList.forEach((item) => {
    //     if (
    //       item.relationSpecificationlist
    //         .map((item) => item.propSortNum)
    //         .join(",") +
    //         "skuStock" ==
    //       rule.field
    //     ) {
    //       item.skuModifyNumError = null;
    //       if (item.skuStock == null || item.skuStock === "") {
    //         item.skuModifyNumError = "庫存不能為空";
    //         callback(new Error("庫存不能為空"));
    //       } else if (item.skuStock < 0) {
    //         item.skuModifyNumError = "庫存不能小於0";
    //         callback(new Error("庫存不能小於0"));
    //       } else if (
    //         item.skuModify === "2" &&
    //         parseInt(item.skuModifyNum) > parseInt(item.skuStock)
    //       ) {
    //         item.skuModifyNumError = "庫存不足，無法調整";
    //         callback(new Error("庫存不足，無法調整"));
    //       } else {
    //         callback();
    //       }
    //     }
    //   });
    // },

    //自定義校驗規則，sku庫存欄位
    validateSkuStock(rule, value, callback) {
      let isValid = true;
      let errorMessage = "";

      this.ruleForm.skuList.forEach((item) => {
        // 使用 $set 确保响应式更新
        this.$set(item, "skuModifyNumError", null);

        if (
          item.relationSpecificationlist
            .map((item) => item.propSortNum)
            .join(",") +
            "skuStock" ==
          rule.field
        ) {
          if (item.skuStock == null || item.skuStock === "") {
            this.$set(item, "skuModifyNumError", "庫存不能為空");
            isValid = false;
            errorMessage = "庫存不能為空";
          } else if (item.skuStock < 0) {
            this.$set(item, "skuModifyNumError", "庫存不能小於0");
            isValid = false;
            errorMessage = "庫存不能小於0";
          } else if (
            item.skuModify === "2" &&
            parseInt(item.skuModifyNum) > parseInt(item.skuStock)
          ) {
            this.$set(item, "skuModifyNumError", "調減庫存不足，無法調整");
            isValid = false;
            errorMessage = "調減庫存不足，無法調整";
          } else {
            // 可以在这里添加其他验证逻辑
          }
        }
      });

      if (isValid) {
        callback();
      } else {
        callback(new Error(errorMessage));
      }
    },

    // //自定義校驗規則，sku成本價格欄位
    // validateSkuPurchasePrice(rule, value, callback) {
    //   this.ruleForm.skuList.forEach((item) => {
    //     if (
    //       item.relationSpecificationlist
    //         .map((item) => item.propSortNum)
    //         .join(",") +
    //         "purchasePrice" ==
    //       rule.field
    //     ) {
    //       item.purchasePriceError = null;
    //       if (item.skuPurchasePrice == null || item.skuPurchasePrice === "") {
    //         item.purchasePriceError = "成本價格不能為空";
    //         callback(new Error("成本價格不能為空"));
    //       } else if (item.skuPurchasePrice <= 0) {
    //         item.purchasePriceError = "成本價格不能小於等於0";
    //         callback(new Error("成本價格不能小於等於0"));
    //       } else {
    //         callback();
    //       }
    //     }
    //   });
    // },

    //自定義校驗規則，sku成本價格欄位
    validateSkuPurchasePrice(rule, value, callback) {
      let isValid = true;
      let errorMessage = "";

      this.ruleForm.skuList.forEach((item) => {
        // 使用 $set 确保响应式更新
        this.$set(item, "purchasePriceError", null);

        if (
          item.relationSpecificationlist
            .map((item) => item.propSortNum)
            .join(",") +
            "purchasePrice" ==
          rule.field
        ) {
          if (item.skuPurchasePrice == null || item.skuPurchasePrice === "") {
            this.$set(item, "purchasePriceError", "成本價格不能為空");
            isValid = false;
            errorMessage = "成本價格不能為空";
          } else if (item.skuPurchasePrice <= 0) {
            this.$set(item, "purchasePriceError", "成本價格不能小於等於0");
            isValid = false;
            errorMessage = "成本價格不能小於等於0";
          } else {
            // 可以在这里添加其他验证逻辑
          }
        }
      });

      if (isValid) {
        callback();
      } else {
        callback(new Error(errorMessage));
      }
    },
    // //自定義校驗規則，sku批發價格欄位
    // validateSkuWholesalePrice(rule, value, callback) {
    //   this.ruleForm.skuList.forEach((item) => {
    //     if (
    //       item.relationSpecificationlist
    //         .map((item) => item.propSortNum)
    //         .join(",") +
    //         "wholesalePrice" ==
    //       rule.field
    //     ) {
    //       item.wholesalePriceError = null;
    //       if (item.skuWholesalePrice == null || item.skuWholesalePrice === "") {
    //         item.wholesalePriceError = "批發價格不能為空";
    //         callback(new Error("批發價格不能為空"));
    //       } else if (item.skuWholesalePrice <= 0) {
    //         item.wholesalePriceError = "批發價格不能小於等於0";
    //         callback(new Error("批發價格不能小於等於0"));
    //       } else {
    //         callback();
    //       }
    //     }
    //   });
    // },
    //自定義校驗規則，sku批發價格欄位
    validateSkuWholesalePrice(rule, value, callback) {
      let isValid = true;
      let errorMessage = "";

      this.ruleForm.skuList.forEach((item) => {
        // 使用 $set 确保响应式更新
        this.$set(item, "wholesalePriceError", null);

        if (
          item.relationSpecificationlist
            .map((item) => item.propSortNum)
            .join(",") +
            "wholesalePrice" ==
          rule.field
        ) {
          if (item.skuWholesalePrice == null || item.skuWholesalePrice === "") {
            this.$set(item, "wholesalePriceError", "批發價格不能為空");
            isValid = false;
            errorMessage = "批發價格不能為空";
          } else if (item.skuWholesalePrice <= 0) {
            this.$set(item, "wholesalePriceError", "批發價格不能小於等於0");
            isValid = false;
            errorMessage = "批發價格不能小於等於0";
          } else {
            // 可以在这里添加其他验证逻辑
          }
        }
      });

      if (isValid) {
        callback();
      } else {
        callback(new Error(errorMessage));
      }
    },
    // 驗證優惠前價格
    validateBeforeDiscountPrice(rule, value, callback) {
      let isValid = true;
      let errorMessage = "";

      this.ruleForm.skuList.forEach((item) => {
        // 使用 $set 确保响应式更新
        this.$set(item, "beforeDiscountPriceError", null);

        if (
          item.relationSpecificationlist
            .map((item) => item.propSortNum)
            .join(",") +
            "beforeDiscountPrice" ==
          rule.field
        ) {
          if (
            item.beforeDiscountPrice == null ||
            item.beforeDiscountPrice === ""
          ) {
            this.$set(item, "beforeDiscountPriceError", "優惠前價格不能為空");
            isValid = false;
            errorMessage = "優惠前價格不能為空";
          } else if (item.beforeDiscountPrice <= 0) {
            this.$set(
              item,
              "beforeDiscountPriceError",
              "優惠前價格不能小於等於0"
            );
            isValid = false;
            errorMessage = "優惠前價格不能小於等於0";
          } else if (item.beforeDiscountPrice < item.skuWholesalePrice) {
            this.$set(
              item,
              "beforeDiscountPriceError",
              "優惠前價格不能小於批發價"
            );
            isValid = false;
            errorMessage = "優惠前價格不能小於批發價";
          }
        }
      });

      if (isValid) {
        callback();
      } else {
        callback(new Error(errorMessage));
      }
    },
    //生成skuList 校驗field
    generateSkuField(data, field) {
      return (
        data.relationSpecificationlist
          .map((item) => item.propSortNum)
          .join(",") + field
      );
    },
    //根據 propName 獲取對應列值
    getColumnValue(row, propName) {
      const relationSpecification = row.relationSpecificationlist.find(
        (item) => item.propName === propName
      );
      return relationSpecification ? relationSpecification.propValueName : "";
    },

    //批次修改庫存數量和價格
    //批次修改庫存數量和價格
    bacthModify() {
      // 清除所有SKU的错误信息，使用 $set 确保响应式更新
      this.ruleForm.skuList.forEach((item) => {
        this.$set(item, "beforeDiscountPriceError", null);
        this.$set(item, "wholesalePriceError", null);
        this.$set(item, "purchasePriceError", null);
        this.$set(item, "skuModifyNumError", null);
      });

      if (!(this.batchSkuModifyNum == null || this.batchSkuModifyNum == "")) {
        this.ruleForm.skuList = this.ruleForm.skuList.map((item) => {
          item.skuModifyNum = parseInt(this.batchSkuModifyNum);
          item.skuModify = this.batchSkuModify;
          //觸發校驗庫存數量
          this.skuModifyChange(item);
          return item;
        });
      }
      if (
        !(
          this.batchSkuPurchasePrice == null || this.batchSkuPurchasePrice == ""
        )
      ) {
        this.ruleForm.skuList = this.ruleForm.skuList.map((item) => {
          item.skuPurchasePrice = this.batchSkuPurchasePrice;
          return item;
        });
      }
      if (
        !(
          this.batchSkuWholesalePrice == null ||
          this.batchSkuWholesalePrice == ""
        )
      ) {
        this.ruleForm.skuList = this.ruleForm.skuList.map((item) => {
          item.skuWholesalePrice = this.batchSkuWholesalePrice;
          return item;
        });
      }
      if (
        !(
          this.batchBeforeDiscountPrice == null ||
          this.batchBeforeDiscountPrice == ""
        )
      ) {
        this.ruleForm.skuList = this.ruleForm.skuList.map((item) => {
          item.beforeDiscountPrice = this.batchBeforeDiscountPrice;
          return item;
        });
      }
    },
    //監聽庫存調整輸入框變化，當為減時，庫存調整不能大於當前庫存，skuModifyNumError顯示錯誤資訊
    skuModifyChange(row) {
      this.$refs.ruleForm.validateField(
        row.relationSpecificationlist
          .map((item) => item.propSortNum)
          .join(",") + "skuStock"
      );
    },
    // 根據商品id獲取商品詳情
    async getProduct(id) {
      try {
        const response = await getBackProduct(id);
        this.categoryPathDisplay = response.data.xtProductVo.categoryPath;
        this.ruleForm.name = response.data.xtProductVo.name;
        this.ruleForm.subTitle = response.data.xtProductVo.subTitle || "";
        this.ruleForm.description = response.data.xtProductVo.description;
        this.ruleForm.productSourceAddress =
          response.data.xtProductVo.productSourceAddress;

        this.ruleForm.xtProductFiles = response.data.xtProductFileVos.map(
          (item) => ({
            id: item.id,
            fileId: item.fileId,
            url: item.fileUrl,
            name: item.fileName,
            fileType: item.fileType,
            isMainImage: item.isMainImage,
            delFlag: item.delFlag,
          })
        );

        this.displayFileListProduct = this.ruleForm.xtProductFiles;

        //保證屬性列表介面返回後設定屬性值
        this.getAttributeDataByAttributeCategoryId(
          BigInt(response.data.xtProductVo.productCategoryId)
        ).then((attributes) => {
          if (attributes && attributes.length > 0) {
            this.ruleForm.attributes = attributes;
            this.ruleForm.attributes.forEach((item) => {
              response.data.xtProductAttributeValueVos.forEach(
                (attributeValue) => {
                  if (item.attributeId === attributeValue.attributeId) {
                    item.id = attributeValue.id;
                    if (item.inputType === 2 || item.inputType === 5) {
                      if (attributeValue.attributeValueId.includes(",")) {
                        item.attributeValue =
                          attributeValue.attributeValueId.split(",");
                      } else if (attributeValue.attributeValueId) {
                        item.attributeValue = [attributeValue.attributeValueId];
                      }
                    } else if (item.inputType === 1 || item.inputType === 4) {
                      item.attributeValue = attributeValue.attributeValueId;
                    } else {
                      item.attributeValue = attributeValue.rawValue;
                      if (item.unitList && item.unitList.length > 0) {
                        item.unitId = attributeValue.unitId;
                      }
                    }
                  }
                }
              );
            });
          }
        });

        let specifications = JSON.parse(
          response.data.xtProductVo.specifications
        );

        specifications.forEach((spec) => {
          spec.specId = spec.specId || this.generateUniqueId(); // 保留原有ID或生成新ID
          spec.values.forEach((value) => {
            value.valueId = value.valueId || this.generateUniqueId(); // 保留原有ID或生成新ID
          });
          // 新增空行...
          spec.values.push({
            propValueName: null,
            propId: null,
            imageUrl: null,
            propSortNum: spec.values.length + 1,
          });
        });
        this.ruleForm.specifications = specifications;

        this.ruleForm.skuList = response.data.xtProductSkuVos.map((item) => ({
          skuId: item.id,
          productId: item.productId,
          skuStock: item.xtProductSkuPriceVo.stock,
          priceId: item.xtProductSkuPriceVo.id,
          skuNo: item.sku,
          skuPurchasePrice: item.xtProductSkuPriceVo.purchasePrice,
          skuWholesalePrice: item.xtProductSkuPriceVo.wholesalePrice,
          beforeDiscountPrice: item.xtProductSkuPriceVo.beforeDiscountPrice,
          skuModify: "1",
          skuModifyNum: null,
          errorMessage: null,
          relationSpecificationlist: item.tierIndex
            .split(",")
            .map((tierIndex, index) => ({
              propName: this.ruleForm.specifications[index].propName,
              valueId:
                this.ruleForm.specifications[index].values[tierIndex - 1]
                  .valueId,
              propValueName:
                this.ruleForm.specifications[index].values[tierIndex - 1]
                  .propValueName,
              propSortNum: tierIndex,
            })),
        }));

        // 設定商品主圖 (按照 sortOrder 排序)
        this.ruleForm.mainImages = this.sortImagesByOrder(
          response.data.xtProductFileVos
            .filter((file) => file.fileType == 0)
            .map((file, index) => ({
              id: file.id,
              fileId: file.fileId,
              url: file.fileUrl,
              name: file.fileName,
              fileType: file.fileType,
              isMainImage: file.isMainImage,
              delFlag: file.delFlag,
              sortOrder: file.sortOrder || index + 1,
            }))
        );

        // 設定短視頻（後端商品詳情接口已單獨返回 videoInfo 欄位）
        const rawVideo = response.data.videoInfo;
        this.ruleForm.videoFile = rawVideo
          ? {
              id: rawVideo.id,
              fileId: rawVideo.fileId,
              url: rawVideo.fileUrl,
              fileName: rawVideo.fileName,
              duration: rawVideo.duration,
              fileType: 1,
            }
          : null;

        // 設定描述圖片（fileType=1 且無 duration 為舊描述圖）
        this.ruleForm.descriptionImages = this.sortImagesByOrder(
          response.data.xtProductFileVos
            .filter((file) => file.fileType == 1 && (file.duration == null || file.duration === undefined))
            .map((file, index) => ({
              id: file.id,
              fileId: file.fileId,
              url: file.fileUrl,
              name: file.fileName,
              fileType: file.fileType,
              delFlag: file.delFlag,
              sortOrder: file.sortOrder || index + 1,
            }))
        );

        //生成ruleForm.skuList的校驗規則
        this.generateSkuRules(this.ruleForm.skuList);
      } catch (error) {
        console.error(error);
      }
    },
    //設定屬性rawValue
    getRawValue(item) {
      //inputType 為3時，rawValue 為輸入的值
      if (item.inputType == 3) {
        return item.attributeValue;
      }
      //inputType 為2或者5時，遍歷xtAttributeValueList的值，匹配valueId，找出對應的displayValueName值新增到結果中
      // 沒有匹配到valueId值的，直接將valueId新增到結果中
      if (item.inputType == 2 || item.inputType == 5) {
        const result = item.attributeValue?.map((value) => {
          const option = item.xtAttributeValueList.find(
            (option) => option.valueId === value
          );
          return option ? option.displayValueName : value;
        });
        console.info(result);
        return result?.join(",") || null;
      }
      //inputType 為1時，遍歷xtAttributeValueList的值，匹配valueId，找出對應的displayValueName值
      if (item.inputType == 1) {
        const label =
          item.attributeValue?.length &&
          item.xtAttributeValueList.find(
            (option) => option.valueId === item.attributeValue
          )?.displayValueName;
        return label || null;
      }
      //inputType 為4時，遍歷xtAttributeValueList的值，匹配valueId，找出對應的displayValueName值，沒有找到時，直接返回 valueId
      if (item.inputType == 4) {
        const label =
          item.attributeValue?.length &&
          item.xtAttributeValueList.find(
            (option) => option.valueId === item.attributeValue
          )?.displayValueName;
        return label || item.attributeValue || null;
        // 這裡同樣使用了可選鏈運運算元 `?.` 來簡化空值檢查。首先，使用了邏輯與運運算元 `&&` 來檢查 `item.attributeValue` 的長度是否大於 0，如果為真才進行後續操作。
        // 然後，使用了 `find()` 方法來查詢目標選項，並使用可選鏈運運算元 `?.` 來簡化對 `displayValueName` 屬性的訪問。最後，使用空值合併運運算元 `||` 來處理 `label` 和 `item.attributeValue` 都為空的情況，返回空字元串。
      }
    },
    //當有單位時，設定屬性rawUnit，匹配unitId，找出對應的unitSymbol值
    getRawUnit(item) {
      const unit =
        item.unitList?.length &&
        item.unitList.find((option) => option.unitId === item.unitId)
          ?.unitSymbol;
      return unit || null;
    },
    //唯一的ID
    generateUniqueId() {
      return Date.now().toString(36) + Math.random().toString(36).slice(2);
    },

    // 處理描述圖片上傳
    handleDescriptionUpload(fileList) {
      if (fileList.length > 50) {
        this.$message.warning("最多隻能上傳50張圖片");
        return;
      }

      this.ruleForm.descriptionImages = this.sortImagesByOrder(
        fileList.map((file, index) => ({
          id: file.id,
          url: file.url,
          fileId: file.fileId,
          name: file.name,
          fileType: 1,
          delFlag: 0,
          sortOrder: index + 1,
        }))
      );
    },

    // 預覽描述圖片
    previewDescriptionImage(index) {
      if (
        !this.ruleForm.descriptionImages ||
        this.ruleForm.descriptionImages.length === 0
      ) {
        this.$message.warning("沒有可預覽的圖片");
        return;
      }

      const previewList = this.ruleForm.descriptionImages
        .map((img) => img.url)
        .filter((url) => url);

      if (!previewList.length) {
        this.$message.warning("圖片URL無效");
        return;
      }

      this.$nextTick(() => {
        const images = this.$el.querySelectorAll(
          ".thumbnail-area .thumbnail-item .el-image"
        );
        if (images[index]) {
          const imageInstance = images[index].__vue__;
          if (imageInstance && imageInstance.clickHandler) {
            imageInstance.clickHandler();
          } else {
            const previewSrcList = this.ruleForm.descriptionImages.map(
              (img) => img.url
            );
            this.$preview({
              images: previewSrcList,
              index: index,
              onClose: () => console.log("預覽關閉"),
            });
          }
        }
      });
    },

    // 刪除描述圖片
    removeDescriptionImage(index) {
      this.ruleForm.descriptionImages.splice(index, 1);
    },

    // 圖片排序結束回撥
    onDescriptionImageSortEnd() {
      // 拖動後重新計算所有圖片的序號
      this.ruleForm.descriptionImages.forEach((item, index) => {
        item.sortOrder = index + 1;
      });
      // 重新排序陣列
      this.ruleForm.descriptionImages = this.sortImagesByOrder(
        this.ruleForm.descriptionImages
      );
    },
    // 排序圖片陣列
    sortImagesByOrder(images) {
      return [...images].sort((a, b) => a.sortOrder - b.sortOrder);
    },

    // ===== 短視頻相關 =====
    beforeVideoUpload(file) {
      const ok = file.type === 'video/mp4' || file.name.toLowerCase().endsWith('.mp4');
      if (!ok) {
        this.$message.error('僅支援上傳 mp4 格式視頻');
        return false;
      }
      return true;
    },
    async doVideoUpload({ file }) {
      this.videoUploading = true;
      try {
        const res = await uploadProductVideo(file);
        if (res && res.code === 200 && res.data) {
          // 上傳接口只把文件寫入 sys_file，不創建 xt_product_file 關聯
          // 這裡儲存的視頻信息會在保存商品時隨 xtProductFiles 一起入庫
          this.ruleForm.videoFile = {
            id: null,
            fileId: res.data.fileId,
            url: res.data.fileUrl,
            fileName: res.data.fileName,
            duration: res.data.duration,
            fileType: 1,
          };
          this.$message.success('視頻上傳成功');
        } else {
          this.$message.error((res && res.msg) || '上傳失敗');
        }
      } catch (e) {
        this.$message.error('上傳失敗，請稍後再試');
      } finally {
        this.videoUploading = false;
      }
    },
    removeVideo() {
      this.$confirm('確定要刪除此短視頻嗎？', '提示', { type: 'warning' })
        .then(() => {
          this.ruleForm.videoFile = null;
          this.$message.success('已刪除短視頻');
        })
        .catch(() => {});
    },

    // 在 submitForm 方法中，提交前新增以下程式碼
    generateDescriptionHtml() {
      if (this.ruleForm.descriptionImages.length === 0) {
        this.ruleForm.description = ""; // 如果沒有描述圖片，清空描述
        return;
      }

      // 生成圖片標籤 HTML
      const imagesHtml = this.ruleForm.descriptionImages
        .map((image) => `<img src="${image.url}" style="max-width:100%;" />`)
        .join("");

      // 將圖片包裹在 <p> 標籤中
      this.ruleForm.description = `${imagesHtml}`;
    },
    // 自定义验证商品副标题规则（5个中文字符或10个英文字符）
    validateSubTitle(rule, value, callback) {
      if (!value) {
        callback(new Error("請輸入商品副標題"));
        return;
      }

      // 计算字符串长度：中文字符算2个长度，英文字符算1个长度
      const calculateLength = (str) => {
        let length = 0;
        for (let i = 0; i < str.length; i++) {
          // 判断是否为中文字符
          if (str.charCodeAt(i) > 127) {
            length += 2; // 中文字符计为2
          } else {
            length += 1; // 英文字符计为1
          }
        }
        return length;
      };

      const length = calculateLength(value);

      if (length > 10) {
        callback(new Error("商品副標題最多允許5個中文字符或10個英文字符"));
      } else {
        callback();
      }
    },

    // 监听库存调整输入框变化
    skuModifyChange(row) {
      // 清除当前行的错误信息
      this.$set(row, "skuModifyNumError", null);
      // 触发验证
      this.$refs.ruleForm.validateField(
        row.relationSpecificationlist
          .map((item) => item.propSortNum)
          .join(",") + "skuStock"
      );
    },

    // 监听成本价格输入框变化
    purchasePriceChange(row) {
      // 清除当前行的错误信息
      this.$set(row, "purchasePriceError", null);
      // 触发验证
      this.$refs.ruleForm.validateField(
        row.relationSpecificationlist
          .map((item) => item.propSortNum)
          .join(",") + "purchasePrice"
      );
    },

    // 监听批发价格输入框变化
    wholesalePriceChange(row) {
      // 清除当前行的错误信息
      this.$set(row, "wholesalePriceError", null);
      // 触发验证
      this.$refs.ruleForm.validateField(
        row.relationSpecificationlist
          .map((item) => item.propSortNum)
          .join(",") + "wholesalePrice"
      );
    },

    // 监听优惠前价格输入框变化
    beforeDiscountPriceChange(row) {
      // 清除当前行的错误信息
      this.$set(row, "beforeDiscountPriceError", null);
      // 触发验证
      this.$refs.ruleForm.validateField(
        row.relationSpecificationlist
          .map((item) => item.propSortNum)
          .join(",") + "beforeDiscountPrice"
      );
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/backend/css/style.css";

.el-cols-12 {
  height: 56px;
}

.editor-container {
  height: 82%;
  margin-bottom: 15px;

  > span {
    width: 60px;
    color: #666666;
    font-size: 12px;
    margin-right: 5px;
  }

  .container {
    height: 100%;
  }
}

::v-deep .button {
  height: 58px;
}

::v-deep .hiddenTbody {
  background-color: #fff;
}

::v-deep .hiddenTbody .el-table__empty-block {
  display: none;
}

::v-deep .input-with-select {
  width: 150px;
}

::v-deep .input-with-select .el-input-group__prepend {
  background-color: #fff;
  width: 65px;
}

.ml-12 {
  padding-left: 10px;
}

.el-select {
  display: block;
}

.error-message {
  color: #ff4949;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  text-align: center;
}

//單位選擇框樣式
.input-select {
  width: 100px;
}

// 圖片編輯器容器
.image-editor-container {
  display: flex;
  height: 100%;
  border: 1px solid #dcdfe6;
  border-radius: 4px;

  // 預覽區域
  .preview-area {
    width: 50%;
    border-right: 1px solid #dcdfe6;
    padding: 10px;
    display: flex;
    flex-direction: column;

    .preview-header {
      font-size: 16px;
      font-weight: bold;
      color: #333;
      padding: 5px 0;
      border-bottom: 1px solid #ebeef5;
      margin-bottom: 10px;
    }

    .image-list {
      flex: 1;
      overflow-y: auto;

      .image-item {
        width: 100%;

        .el-image {
          width: 100%;
          height: auto;
          display: block;

          .image-slot {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100px;
            background: #f5f7fa;
            color: #909399;
          }
        }
      }
    }
  }

  // 上傳區域
  .upload-area {
    width: 50%;
    padding: 10px;
    display: flex;
    flex-direction: column;

    .upload-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid #ebeef5;
      margin-bottom: 10px;

      .upload-info {
        flex: 1;
        padding-right: 20px;

        .upload-title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
        }

        .upload-tip {
          font-size: 12px;
          color: #909399;
          line-height: 1.5;
        }
      }

      .upload-btn {
        flex-shrink: 0;

        .el-button {
          width: 100px;
        }

        .el-icon-loading {
          animation: rotating 2s linear infinite;
        }
      }
    }

    .thumbnail-area {
      flex: 1;
      overflow-y: auto;
    }
  }
}

// 旋轉動畫 (單獨提取)
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// ===== 短視頻上傳區域 =====
.pv-upload-area {
  width: 100%;
  max-width: 480px;
}
.pv-upload-area :deep(.el-upload) { width: 100%; }
.pv-upload-area :deep(.el-upload-dragger) {
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pv-upload-hint,
.pv-no-id-hint,
.pv-uploading-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #999;
  font-size: 13px;
  i { font-size: 32px; margin-bottom: 4px; }
  p { margin: 0; font-size: 14px; color: #555; }
  span { font-size: 12px; color: #aaa; }
}
.pv-no-id-hint { color: #e6a23c; i { color: #e6a23c; } }
.pv-uploading-hint { color: #409eff; i { color: #409eff; font-size: 28px; } }

.pv-preview-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 480px;
}
.pv-player {
  width: 100%;
  max-height: 270px;
  border-radius: 8px;
  background: #000;
  display: block;
}
.pv-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #555;
}
.pv-filename {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pv-actions { display: flex; align-items: center; }

// 縮圖列表
.thumbnail-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: flex-start;
}

// 縮圖項 (合併重複定義)
.thumbnail-item {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  padding: 5px;
  cursor: move;

  .el-image {
    width: 90px;
    height: 90px;
    display: block;
    margin: 0 auto;
    pointer-events: auto;
  }

  .thumbnail-index {
    position: absolute;
    top: 5px;
    left: 5px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 12px;
  }

  .thumbnail-actions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 10;

    .action-icon {
      width: 50%;
      text-align: center;
      padding: 5px 0;
      color: white;
      cursor: pointer;
      z-index: 11;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }

      i {
        pointer-events: none;
        font-size: 16px;
      }
    }
  }

  &:hover .thumbnail-actions {
    opacity: 1;
  }
}

// 主圖容器
.main-image-container {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  ::v-deep {
    .el-upload.el-upload--picture-card {
      width: 100px;
      height: 100px;
      line-height: 100px;
    }
  }
}

// 上傳按鈕樣式
::v-deep {
  // 主圖上傳
  .mainImages {
    .el-upload-list.el-upload-list--picture-card {
      display: none;
    }

    .el-upload.el-upload--picture-card {
      margin-top: 0px;
      border: 1px dashed #d9d9d9;
      border-radius: 4px;
    }
  }

  // 上傳按鈕盒子
  .upload-btn-box {
    .el-upload.el-upload--picture-card {
      border: 0px;
    }

    .el-upload-list.el-upload-list--picture-card {
      display: none;
    }

    .el-upload--picture-card i {
      font-size: 12px;
      color: #fff;
    }
  }
}
</style>
