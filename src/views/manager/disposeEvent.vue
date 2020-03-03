<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="事件名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="region"
      label="区域"
      width="120">
    </el-table-column>
    <el-table-column
      prop="contact"
      label="联系人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="联系方式"
      width="300">
    </el-table-column>
    <el-table-column
      prop="type"
      label="事件类型"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">立案</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2020-03-02',
          name: '关于卫生问题的纠纷',
          region: '城市东区',
          contact: '橙白',
          phone: '1312224546',
          type: '卫生纠纷'
        }, {
          date: '2020-03-02',
          name: '关于防疫问题的纠纷',
          region: '城市北区',
          contact: '橙白',
          phone: '1312224546',
          type: '防疫纠纷'
        }, {
          date: '2020-03-02',
          name: '关于安全问题的纠纷',
          region: '城市西区',
          contact: '橙白',
          phone: '1312224546',
          type: '安全纠纷'
        }, {
          date: '2020-03-02',
          name: '邻里纠纷',
          region: '城市南区',
          contact: '橙白',
          phone: '1312224546',
          type: '邻里纠纷'
        }]
      }
    }
  }
</script>
