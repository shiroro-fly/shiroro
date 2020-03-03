
<template>
  <div>
    <el-row class="tac" :style="'height:'+fullHeight+'px;'">
      <el-col :span="24">
        <el-menu
          default-active="activeIndex"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#fff"
          text-color="#545c64"
          active-text-color="#ffd04b">
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">上报事件</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>事件</span>
            </template>
            <el-menu-item-group>
              <template slot="title">处理事件</template>
              <el-menu-item index="eventRegister">事件立案</el-menu-item>
              <el-menu-item index="officalEventAllot">立案事件分派</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="查看事件">
              <el-menu-item index="1-3">事件追踪</el-menu-item>
              <el-menu-item index="1-4">事件列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot= "title">
              <i class="el-icon-menu"></i>
              <span slot="title">部门</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">部门信息</el-menu-item>
              <el-menu-item index="2-2">部门通知</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">我的信息</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "ManagerLeftNav",
    data () {
      return {
        fullHeight: document.documentElement.clientHeight
      }
    },
    watch: {
      fullHeight (val) {//监控浏览器高度变化
    		if(!this.timer) {
    			this.fullHeight = val
    			this.timer = true
    			let that = this
    			setTimeout(function (){
    				that.timer = false
    			},400)
        }
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .tac{
    height: 100%;
  }
</style>
