<template>
  <div class="container" @drop="handleDrop($event)" @dragover="allowDrop($event)">
    <div style="border: 1px solid #ccc; margin-top: 5px; height: 98%">
      <!-- 工具欄 -->
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :default-config="toolbarConfig"
      />
      <!-- 編輯器 -->
      <Editor
        v-if="open"
        v-model="html"
        class="editor"
        :default-config="editorConfig"
        @onCreated="onCreated"
        @onChange="onChange"
        @onFocus="onFocus"
        @customPaste="customPaste"
      />
    </div>
    <div v-show="showTips" class="tips-box">
      <div class="tips">
        <!-- <span @click="deleteValue">刪除</span> |  -->
        <span @click="showForm">檢視</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { SlateTransforms } from '@wangeditor/editor';

import { useUploadFile } from '@/hooks/file.js';
export default {
  name: 'CusEditor',
  components: { Editor, Toolbar },
  props: {
    /* 編輯器的內容 */
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editor: null,
      html: '',
      toolbarConfig: {
        // toolbarKeys: [ /* 顯示哪些選單，如何排序、分組 */ ],
        // excludeKeys: [ /* 隱藏哪些選單 */ ],
      },
      editorConfig: {
        placeholder: '請輸入內容...',
        // 所有的選單配置，都要在 MENU_CONF 屬性下
        MENU_CONF: {
          // 配置上傳圖片
          uploadImage: {
            customUpload: this.uploadImg,
          },
        },
      },
      prices: {},
      showTips: false,
      curId: '',
      curName: '',
      showName: '', // 檢視當前name
      indexMap: {}, // {'固定1':0,'固2:':1}
      delNode: null,
      saveHtml: '',
      tipLock: false,
      open: false,
    };
  },
  watch: {
    value: {
      handler(val) {
        this.open = true;
        if (val !== this.html) {
          this.html = val === null ? '' : val;
          if (this.editor) {
            this.editor.setHtml(this.html);
          }
        }
      },
      immediate: false,
    },
  },
  created() {},
  mounted() {
    if (!this.$route.query.id) this.open = true;
    this.initTipsMouse();
    window.addEventListener('scroll', this.handleScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy();
  },
  methods: {
    // 上傳圖片
    uploadImg(file, insertFn) {
      useUploadFile(file).then(({ url }) => {
        insertFn(url);
      });
    },
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否則會報錯
    },
    onFocus() {
      this.showTips = false;
    },
    filterText(s) {
      let r1 = /\$\{.*?\}\$/gi;
      let r2 = /\$\{.*?\}\$\`/gi;
      let a1 = s.match(r1) || [];
      let a2 = s.match(r2) || [];
      let a = [...a1, ...a2];
      let newS = '';
      a.forEach((i) => {
        newS = (newS || s).replace(i, '');
      });
      return newS;
    },
    customPaste(editor, event) {
      let text = event.clipboardData.getData('text/plain'); // 獲取貼上的純文字
      // 同步
      editor.insertText(this.filterText(text));
      // 阻止預設的貼上行為
      event.preventDefault();
      return false;
    },
    handleFocus() {
      this.editor.focus();
    },
    onChange(editor) {
      let self = this;
      this.$emit('input', editor.getHtml());
      if (editor.getHtml() === '<p><br></p>') {
        this.indexMap = {};
        this.prices = {};
      }
      setTimeout(() => {
        var doms = document.getElementsByTagName('code');
        Array.from(doms).forEach((dom, index) => {
          // if(!this.prices[dom.innerText]) return;
          // init
          dom.onmouseenter = null;
          dom.onmouseleave = null;
          // bind click
          dom.style = 'cursor:pointer;font-size:14px;';
          dom.onmouseenter = function (e) {
            if (self.tipLock) return;
            let key = dom.dataset.id;
            // let { offsetLeft, offsetTop } = e.target;
            self.curId = Number(key);
            self.delNode = dom;
            self.initTipsShow({
              x: e.screenX - 10,
              y: e.screenY - 90,
              t: e.target.innerText,
            });
          };
          dom.onmouseleave = function () {
            self.tipLock = false;
          };
        }, 100);
        let data = editor.getHtml().match(/(?<=\$\{).*?(?=\}\$)/gi);
        let { curName } = this.$data;
        this.indexMap[curName] = data?.filter(f => f.includes(curName)).length;
      });
    },
    initTipsMouse() {
      let dom = document.getElementsByClassName('tips-box')[0];
      if (!dom) return;
      dom.onmouseenter = () => {
        this.showTips = true;
      };
      dom.onmouseleave = () => {
        this.showTips = false;
      };
    },
    initTipsShow({ x, y, t }) {
      let dom = document.getElementsByClassName('tips-box')[0];
      dom.style = `position:fixed;left:${x}px;top:${y}px;z-index:1000`;
      this.showTips = true;
      this.showName = t.match(/(?<=\$\{).*?(?=\}\$)/)[0];
    },
    // delByIndex(str, k, i) {
    //   i = i - 1;
    //   let s = str.replace(new RegExp(k, "gim"), k + "@k");
    //   let arr = s.split("@k");
    //   arr[i] = arr[i].substring(0, arr[i].length - 6);
    //   arr[i + 1] = arr[i + 1].substring(1, arr[i + 1].length);
    //   let newStr = arr.join("");
    //   return newStr;
    // },
    // delByName(str, k) {
    //   console.log("str,k:", str, k);
    //   let str1 = str.replace(`\$\{${k}\}\$</code>\``, `\$\{${k}\}\$</code>`);
    //   return str1.replace(`\$\{${k}\}\$`, ""); //<code>${固定投資金額1}</code>*</p>
    // },
    // deleteValue() {
    //   let self = this;
    //   let editor = this.editor;
    //   delete this.prices[this.showName];
    //   let oldHtml = editor.getHtml();
    //   let { showName, curName } = this.$data;
    //   // let newHtml = this.delByIndex(oldHtml,curName,showName);
    //   let newHtml = this.delByName(oldHtml, showName);
    //   console.log("newHtml:", newHtml);
    //   try {
    //     // if(this.delNode) this.delNode.parentNode.removeChild(this.delNode);
    //     editor.setHtml(newHtml);
    //   } catch (error) {
    //     console.log("error:", error);
    //   }

    //   console.log("editor.getHtml:", editor.getHtml());
    //   console.log("this.prices:", this.prices);
    //   this.showTips = false;
    // },
    showForm() {
      let { prices, showName } = this.$data;
      this.$parent.showDrawer(prices[showName]);
    },
    // 建立當前元變數的索引和賦值
    createIndexAndVal(vardata) {
      return new Promise((resolve) => {
        let { indexMap, curName } = this.$data;
        if (typeof indexMap[curName] === 'undefined') {
          this.indexMap[curName] = 0;
        }
        resolve(this.indexMap[curName]);
      });
    },
    insertHtmlHandler(vardata) {
      const editor = this.editor;
      if (editor == null) return;
      let v = JSON.parse(JSON.stringify(vardata));

      this.createIndexAndVal(v).then((i) => {
        let { curName } = this.$data;
        let newName = !i ? curName : curName + '-' + i;
        if (!i) this.indexMap[curName] = 0;
        this.prices[newName] = v;
        const node1 = { text: '${' + newName + '}$', code: true };
        const node2 = { text: '`' };
        SlateTransforms.insertNodes(editor, [node1, node2]);
        this.indexMap[curName]++;
      });
    },
    disableHandler() {
      const editor = this.editor;
      if (editor == null) return;
      editor.disable();
    },
    handleScroll() {
      this.showTips = false;
    },
    handleDrop(evt) {
      const name = evt.dataTransfer.getData('name');
      this.$parent.handleCopy(name);
    },
    allowDrop(event) {
      event.preventDefault();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@wangeditor/editor/dist/css/style.css";
.container {
  position: relative;
  z-index: 1002;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
.editor {
  width: 100%;
  height: 89%;
}
.tips-box {
  position: fixed;
  height: 26px;
  // background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
}
.tips {
  box-sizing: border-box;
  text-align: center;
  font-size: 10px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  cursor: pointer;
  background: rgba(0, 0, 0, 0.9);
  position: relative;
  z-index: 1000;
  border-radius: 2px;
  color: #fff;
  span {
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding-left: 5px;
    padding-right: 5px;
    transform: scale(0.95);
  }
}
.tips::before {
  display: block;
  content: "";
  width: 0px;
  height: 0px;
  margin: auto;
  border: 5px solid transparent;
  border-bottom: 5px solid rgba(0, 0, 0, 0.9);
  position: absolute;
  left: 50%;
  top: -10px;
  transform: translateX(-50%);
}
</style>
