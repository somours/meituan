<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-koa-somours
      </h1>
      <h2 class="subtitle">
        My remarkable Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
    <div class="wraper">
      <ul>
        <li>第一条消息</li>
        <li>第二条消息</li>
        <li>第三条消息</li>
        <li>第四条消息</li>
      </ul>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.wraper {
  width: 400px;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
  background: #e6e6e6;
  ul {
    width: 100%;
    overflow: hidden;
    height: 100%;
    position: relative;
    li {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      z-index: 0;
    }
  }
}
.container {
  min-height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
