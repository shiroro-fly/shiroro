<template>
  <div id="app">
    <el-container>
      <el-header>
        <app-header v-if="header_show"></app-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <app-managerNav v-if="managerNav_show" width="300px"></app-managerNav>
        </el-aside>
        <el-container>
          <el-main>
            <router-view v-on:header="header" v-on:footer="footer"></router-view>
          </el-main>
          <el-footer>
            <app-footer v-if="footer_show"></app-footer>
            </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Footer from '@/components/footer'
  import ManagerLeftNav from '@/components/managerLeftNav'
export default {
  name: 'App',
  data () {
    return {
      header_show: true,
      footer_show: true,
      managerNav_show: true
    }
  },
  components: {
    'app-managerNav': ManagerLeftNav,
    'app-header': Header,
    'app-footer': Footer
  },
  methods: {
    header: function (bool) {
      this.header_show = bool
    },
    footer:function (bool) {
      this.footer_show = bool
    },
    managerNav:function(bool) {
      this.managerNav_show = bool
    }
  }
}
</script>

<style>
.app {
  background-image: url('~@/img/bg.jpg') center center no-repeat;
}
</style>
