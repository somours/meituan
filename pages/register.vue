<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a 
          href="/" 
          class="site-logo"/>
        <span class="login">
          <em class="bold">已有美团账号?</em>
          <a 
            href="/login" 
            type="primary" 
            size="small">
            登录
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form 
        ref="ruleForm" 
        :model="ruleForm" 
        label-width="100" 
        class="demo-ruleForm">
        <el-form-item 
          label="昵称" 
          prop="name">
          <el-input v-model="ruleForm.name"/>
        </el-form-item>
      </el-form>
      <el-form-item 
        label="邮箱" 
        prop="email">
        <el-input v-model="ruleForm.email"/>
        <el-button 
          size="mini" 
          round/>
      </el-form-item>
      <el-form-item 
        label="验证码" 
        prop="code">
        <el-input 
          v-model="ruleForm.code" 
          maxlength="4"/>
      </el-form-item>
      <el-form-item 
        label="密码" 
        prop="pwd">
        <el-input 
          v-model="ruleForm.pwd" 
          type="password"/>
      </el-form-item>
      <el-form-item 
        label="确认密码" 
        prop="cpwd">
        <el-input 
          v-model="ruleForm.cpwd" 
          type="password"/>
      </el-form-item>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: ''
      },
      rules: []
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/register/index.scss';
</style>
