<template>
  <div class="vlogin-page">

    <!-- 頂部導航 -->
    <div class="vlogin-nav">
      <div class="container">
        <router-link to="/vertical/index" class="vlogin-logo">
          <img src="/test/static/picture/white-logo.png" alt="makura" />
        </router-link>
      </div>
    </div>

    <!-- 登入主體 -->
    <div class="vlogin-body">
      <div class="vlogin-card">

        <!-- 左側品牌區 -->
        <div class="vlogin-brand">
          <div class="vlogin-brand-inner">
            <div class="vlogin-brand-logo">
              <img src="/test/static/picture/white-logo.png" alt="makura" />
            </div>
            <h2>歡迎來到 makura</h2>
            <p>專業工具，精準品質。<br>登入探索工地機械的全套解決方案。</p>
            <ul class="vlogin-brand-features">
              <li><i class="ri-shield-check-line"></i>安全可靠的交易平台</li>
              <li><i class="ri-truck-line"></i>全台配送，快速到貨</li>
              <li><i class="ri-customer-service-2-line"></i>專業客服即時支援</li>
            </ul>
            <!-- 工具裝飾圖 -->
            <div class="vlogin-tools">
              <img src="/test/static/picture/drill.png" alt="" class="tool-img tool-1" />
              <img src="/test/static/picture/power-saw.png" alt="" class="tool-img tool-2" />
              <img src="/test/static/picture/handsaw.png" alt="" class="tool-img tool-3" />
              <img src="/test/static/picture/socket.png" alt="" class="tool-img tool-4" />
            </div>
          </div>
        </div>

        <!-- 右側表單區 -->
        <div class="vlogin-form-wrap">
          <div class="vlogin-form-header">
            <h3>會員登入</h3>
            <p>還沒有帳戶？<router-link to="/vertical/register">立即註冊</router-link></p>
          </div>

          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginRules"
            class="vlogin-form"
            @keyup.enter.native="handleLogin"
          >
            <el-form-item prop="username">
              <div class="vlogin-field">
                <label>帳號 / 電子郵件</label>
                <el-input
                  v-model="loginForm.username"
                  placeholder="請輸入帳號或 email"
                  prefix-icon="ri-user-line"
                  clearable
                />
              </div>
            </el-form-item>

            <el-form-item prop="password">
              <div class="vlogin-field">
                <label>密碼</label>
                <div class="vlogin-password-wrap">
                  <el-input
                    v-model="loginForm.password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="請輸入密碼"
                    prefix-icon="ri-lock-line"
                    clearable
                  />
                  <button
                    type="button"
                    class="vlogin-password-toggle"
                    @click="showPassword = !showPassword"
                    :title="showPassword ? '隱藏密碼' : '顯示密碼'"
                  >
                    <i :class="showPassword ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
                  </button>
                </div>
              </div>
            </el-form-item>

            <!-- 驗證碼 -->
            <el-form-item prop="code" v-if="captchaEnabled">
              <div class="vlogin-field vlogin-field-row">
                <div class="vlogin-code-input">
                  <label>驗證碼</label>
                  <el-input
                    v-model="loginForm.code"
                    placeholder="請輸入驗證碼"
                    prefix-icon="ri-shield-keyhole-line"
                    clearable
                    @keyup.enter.native="handleLogin"
                  />
                </div>
                <div class="vlogin-code-img">
                  <img :src="codeUrl" @click="getCode" alt="驗證碼" />
                </div>
              </div>
            </el-form-item>

            <!-- 記住我 & 忘記密碼 -->
            <div class="vlogin-options">
              <el-checkbox v-model="loginForm.rememberMe">記住帳號</el-checkbox>
              <router-link to="/vertical/password" class="vlogin-forgot">忘記密碼？</router-link>
            </div>

            <!-- 登入按鈕 -->
            <el-form-item>
              <button
                type="button"
                class="vlogin-submit"
                :class="{ 'is-loading': loading }"
                :disabled="loading"
                @click="handleLogin"
              >
                <span v-if="!loading">登入</span>
                <span v-else class="vlogin-spinner"></span>
              </button>
            </el-form-item>
          </el-form>

          <!-- 分隔線 -->
          <div class="vlogin-divider">
            <span>或</span>
          </div>

          <!-- 其他登入方式 -->
          <div class="vlogin-social">
            <button type="button" class="vlogin-social-btn google">
              <i class="ri-google-line"></i>
              Google 登入
            </button>
            <button type="button" class="vlogin-social-btn line">
              <svg class="line-icon" viewBox="0 0 24 24" width="18" height="18">
                <path fill="#00B900" d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.073c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" transform="translate(0 -2) scale(1)"/>
              </svg>
              LINE 登入
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- 底部版權 -->
    <div class="vlogin-footer">
      <p>&copy; {{ currentYear }} makura 版權所有</p>
    </div>

  </div>
</template>

<script>
import { getCodeImg } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'
import { login } from '@/api/login'
import Cookies from 'js-cookie'

export default {
  name: 'VerticalLogin',
  metaInfo: {
    title: 'makura - 會員登入'
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        uuid: '',
        rememberMe: false
      },
      loginRules: {
        username: [
          { required: true, message: '請輸入帳號', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '請輸入密碼', trigger: 'blur' },
          { min: 4, message: '密碼長度至少 4 個字元', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '請輸入驗證碼', trigger: 'blur' }
        ]
      },
      codeUrl: '',
      captchaEnabled: true,
      loading: false,
      showPassword: false,
      redirect: undefined
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  watch: {
    $route: {
      handler(route) {
        this.redirect = route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    this.getCode()
    this.getCookie()
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled
        if (this.captchaEnabled) {
          this.codeUrl = 'data:image/gif;base64,' + res.img
          this.loginForm.uuid = res.uuid
        }
      })
    },

    getCookie() {
      const username = Cookies.get('vlogin_username')
      const rememberMe = Cookies.get('vlogin_rememberMe')
      if (username) {
        this.loginForm.username = username
        this.loginForm.rememberMe = rememberMe === 'true'
      }
    },

    handleLogin() {
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) return

        this.loading = true

        if (this.loginForm.rememberMe) {
          Cookies.set('vlogin_username', this.loginForm.username, { expires: 30 })
          Cookies.set('vlogin_rememberMe', 'true', { expires: 30 })
        } else {
          Cookies.remove('vlogin_username')
          Cookies.remove('vlogin_rememberMe')
        }

        const params = {
          username: this.loginForm.username.trim(),
          password: this.loginForm.password,
          code: this.captchaEnabled ? this.loginForm.code : undefined,
          uuid: this.captchaEnabled ? this.loginForm.uuid : undefined
        }

        login(params.username, params.password, params.code, params.uuid)
          .then(res => {
            setToken(res.token)
            this.$message.success('登入成功！')
            const redirect = this.redirect || '/vertical/index'
            this.$router.push(redirect).catch(() => {})
          })
          .catch(() => {
            if (this.captchaEnabled) this.getCode()
          })
          .finally(() => {
            this.loading = false
          })
      })
    }
  }
}
</script>

<style scoped>
/* ─── 全域佈局 ─── */
.vlogin-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f6fa;
  font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif;
}

/* ─── 頂部導航 ─── */
.vlogin-nav {
  background: #1a1a2e;
  padding: 0;
}

.vlogin-nav .container {
  display: flex;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 12px;
}

.vlogin-logo {
  display: block;
  padding: 14px 0;
}

.vlogin-logo img {
  height: 36px;
  width: auto;
}

/* ─── 主體 ─── */
.vlogin-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 12px;
}

.vlogin-card {
  display: flex;
  width: 100%;
  max-width: 960px;
  min-height: 580px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

/* ─── 左側品牌區 ─── */
.vlogin-brand {
  flex: 0 0 40%;
  background: linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
  position: relative;
  overflow: hidden;
}

.vlogin-brand::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  background: rgba(26, 143, 164, 0.15);
  border-radius: 50%;
}

.vlogin-brand::after {
  content: '';
  position: absolute;
  bottom: -80px;
  left: -40px;
  width: 240px;
  height: 240px;
  background: rgba(26, 143, 164, 0.08);
  border-radius: 50%;
}

.vlogin-brand-inner {
  position: relative;
  z-index: 1;
  text-align: left;
}

.vlogin-brand-logo {
  margin-bottom: 32px;
}

.vlogin-brand-logo img {
  height: 48px;
  width: auto;
}

.vlogin-brand-inner h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 14px;
  color: #fff;
}

.vlogin-brand-inner > p {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
}

.vlogin-brand-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.vlogin-brand-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 14px;
}

.vlogin-brand-features li i {
  font-size: 18px;
  color: #1A8FA4;
  flex-shrink: 0;
}

/* ─── 工具裝飾圖 ─── */
.vlogin-tools {
  position: absolute;
  bottom: 36px;
  right: 0;
  width: 100%;
  pointer-events: none;
  user-select: none;
}

.tool-img {
  position: absolute;
  opacity: 0.18;
  filter: brightness(0) invert(1);
  transition: opacity 0.4s;
}

.vlogin-tools:hover .tool-img {
  opacity: 0.25;
}

.tool-1 {
  right: 16px;
  bottom: 0;
  width: 72px;
  transform: rotate(-15deg);
}

.tool-2 {
  right: 80px;
  bottom: 8px;
  width: 60px;
  transform: rotate(10deg);
}

.tool-3 {
  right: 130px;
  bottom: 2px;
  width: 52px;
  transform: rotate(-5deg);
}

.tool-4 {
  right: 175px;
  bottom: 6px;
  width: 48px;
  transform: rotate(8deg);
}

/* ─── 右側表單區 ─── */
.vlogin-form-wrap {
  flex: 1;
  padding: 48px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.vlogin-form-header {
  margin-bottom: 32px;
}

.vlogin-form-header h3 {
  font-size: 26px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.vlogin-form-header p {
  font-size: 14px;
  color: #888;
}

.vlogin-form-header a {
  color: #1A8FA4;
  text-decoration: none;
  font-weight: 500;
}

.vlogin-form-header a:hover {
  text-decoration: underline;
}

/* ─── 表單欄位 ─── */
.vlogin-form :deep(.el-form-item) {
  margin-bottom: 20px;
}

.vlogin-form :deep(.el-form-item__error) {
  font-size: 12px;
  padding-top: 4px;
}

.vlogin-field label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #555;
  margin-bottom: 6px;
}

.vlogin-field :deep(.el-input__prefix) {
  color: #aaa;
  font-size: 16px;
}

.vlogin-field :deep(.el-input__inner) {
  height: 44px;
  border-radius: 8px;
  border-color: #e0e0e0;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.vlogin-field :deep(.el-input__inner:focus) {
  border-color: #1A8FA4;
  box-shadow: 0 0 0 3px rgba(26, 143, 164, 0.12);
}

.vlogin-password-wrap {
  position: relative;
}

.vlogin-password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
  font-size: 18px;
  padding: 4px;
  line-height: 1;
  z-index: 2;
  transition: color 0.2s;
}

.vlogin-password-toggle:hover {
  color: #666;
}

/* ─── 驗證碼列 ─── */
.vlogin-field-row {
  display: flex;
  gap: 12px;
  align-items: flex-end;
}

.vlogin-code-input {
  flex: 1;
}

.vlogin-code-img {
  flex-shrink: 0;
}

.vlogin-code-img img {
  height: 44px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  transition: border-color 0.2s;
}

.vlogin-code-img img:hover {
  border-color: #1A8FA4;
}

/* ─── 記住 & 忘記密碼 ─── */
.vlogin-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 8px;
}

.vlogin-options :deep(.el-checkbox__label) {
  font-size: 13px;
  color: #555;
}

.vlogin-options :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #1A8FA4;
  border-color: #1A8FA4;
}

.vlogin-forgot {
  font-size: 13px;
  color: #1A8FA4;
  text-decoration: none;
}

.vlogin-forgot:hover {
  text-decoration: underline;
}

/* ─── 登入按鈕 ─── */
.vlogin-submit {
  width: 100%;
  height: 48px;
  background: linear-gradient(135deg, #1A8FA4, #156070);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 4px;
}

.vlogin-submit:hover:not(:disabled) {
  opacity: 0.92;
  transform: translateY(-1px);
}

.vlogin-submit:active:not(:disabled) {
  transform: translateY(0);
}

.vlogin-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.vlogin-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: vlogin-spin 0.7s linear infinite;
}

@keyframes vlogin-spin {
  to { transform: rotate(360deg); }
}

/* ─── 分隔線 ─── */
.vlogin-divider {
  text-align: center;
  position: relative;
  margin: 20px 0;
}

.vlogin-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e8e8e8;
}

.vlogin-divider span {
  position: relative;
  background: #fff;
  padding: 0 16px;
  font-size: 12px;
  color: #aaa;
}

/* ─── 社群登入 ─── */
.vlogin-social {
  display: flex;
  gap: 12px;
}

.vlogin-social-btn {
  flex: 1;
  height: 42px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
  border: 1px solid #e0e0e0;
  background: #fff;
  color: #555;
}

.vlogin-social-btn.google:hover {
  border-color: #4285f4;
  color: #4285f4;
  background: #f0f4ff;
}

.vlogin-social-btn.line:hover {
  border-color: #00b900;
  color: #00b900;
  background: #f0fff0;
}

.vlogin-social-btn i,
.vlogin-social-btn svg {
  font-size: 18px;
  line-height: 1;
}

/* ─── 底部 ─── */
.vlogin-footer {
  text-align: center;
  padding: 20px;
  color: #aaa;
  font-size: 12px;
}

/* ─── 響應式 ─── */
@media (max-width: 768px) {
  .vlogin-card {
    flex-direction: column;
    max-width: 480px;
  }

  .vlogin-brand {
    flex: none;
    padding: 36px 28px;
  }

  .vlogin-brand-inner h2 {
    font-size: 20px;
  }

  .vlogin-brand-features li {
    font-size: 13px;
  }

  .vlogin-form-wrap {
    padding: 32px 28px;
  }

  .vlogin-social {
    flex-direction: column;
  }
}
</style>
