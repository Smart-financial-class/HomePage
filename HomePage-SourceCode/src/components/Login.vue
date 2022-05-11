<template>
  <div id="loginBox">
    <div id="left">
      <img
        src="../assets/loginPic2.png"
        alt="login"
        id="loginPic"
        class="undrag"
      />
    </div>
    <div id="right">
      <el-row :gutter="0" class="topBar">
        <el-col :span="4" :offset="2">
          <img
            src="../assets/iF_logo.png"
            alt="iF_logo"
            id="iF_logo"
            class="undrag"
        /></el-col>
      </el-row>
      <div class="textRow">Login for iF</div>
      <el-form
        :model="loginForm"
        ref="loginForm"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="textRow"
            >Sign in</el-button
          >
        </el-form-item>
      </el-form>
      <div class="textRow">
        HDU iF(intelligent Financial) &nbsp;&nbsp;&nbsp;&nbsp;<a
          href="http://zhuoyue.hdu.edu.cn/"
          >more?</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () { }
  }
}
</script>

<style scoped>
#loginBox {
  width: 900px;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
}

#left {
  width: 50%;
  height: 100%;
  display: flex;
  background-color: #fa8b60;
}

#right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-self: center;
  flex-direction: column;
}

#loginPic {
  position: relative;
  width: 100%;
  object-fit: contain;
}

#iF_logo {
  width: 30px;
}

.topBar {
  margin-top: 20px;
}

.undrag {
  -webkit-user-drag: none;
}

.textRow {
  display: flex;
  justify-content: center;
  font-family: 'iF-Font';
}
</style>
