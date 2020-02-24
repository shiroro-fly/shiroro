<template>
  <div class="loginarea">
    <div class="login">
    </div>
    <div class="login">
      <div class="login-center">
        <h1>城市网格化管理系统</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="account">
            <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="身份选择" prop="identify">
            <el-select v-model="ruleForm.identify" placeholder="请选择身份">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="login">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
  return {
    ruleForm: {
      account: '',
      password: '',
      identify: ''
    },
    rules: {
      account: [{
        required: true,
        message: '请输入账号',
        trigger: 'blur'
      }],
      password: [{
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      }],
      identify: [{
        required: true,
        message: '请选择身份',
        trigger: 'change'
      }]
    }
  };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert(this.ruleForm.account+this.ruleForm.password+this.ruleForm.identify);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
  }
</script>

<style lang="scss" scoped>
  .loginarea {
    display: flex;
    height: 100%;
    background: url(../img/bg.jpg) center center no-repeat;

    .login {
      width: 33%;

      .login-center {
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        padding: 20px;
        font-weight: bold;
        color: #ffffff;
        margin: 50px 0;
      }
    }
  }
</style>
