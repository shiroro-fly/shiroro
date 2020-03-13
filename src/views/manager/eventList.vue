<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="no"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="事件名称">
      </el-table-column>
      <el-table-column
        prop="region"
        label="区域">
      </el-table-column>
      <el-table-column
        prop="contactName"
        label="联系人">
      </el-table-column>
      <el-table-column
        prop="contactPhone"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="region"
        label="区域">
      </el-table-column>
      <el-table-column
        prop="type"
        label="事件类型">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="managerNo"
        label="负责人编号">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  </template>

  <script>

    export default {
      name: "EventList",
      data() {
        return {
          tableData: [
            {
              no: '' ,
              name: '' ,
              region: '' ,
              contactName: '' ,
              contactPhone: '' ,
              time: '' ,
              managerNo: '' ,
              type: '' ,
              describe: ''
            }
          ],
          managerno: this.$route.query.no,
          mangerName: this.$route.query.name,
          managerPhone: this.$route.query.phone,
          managerArea: this.$route.query.area
        }
      },
      created() {
        alert("ceshi");
        console.log("aat"+this.$route.query.no);
        this.getEventsList();
      },
      methods: {
       getEventsList: function () {
         this.$axios.get("http://localhost:8080/mServer/EventsInq").then(res => {
           this.data = res.data.items;
           console.log(res.data);
           this.tableData = res.data.items;
         })
       }
      }
    }
  </script>
