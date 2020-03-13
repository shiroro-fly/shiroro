<template>
  <div>
    <el-form  :model="formInline" label-width="80px">
      <el-form-item label="通知标题">
        <el-col :span='5'>
          <el-input v-model="formInline.title" placeholder="通知标题"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.type" placeholder="通知类型">
          <el-option label="公告" value="notice"></el-option>
          <el-option label="进度催促" value="endline"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="通知内容">
        <el-input
          type="textarea"
          :rows="8"
          placeholder="请输入内容"
          v-model="formInline.textarea">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'MessageEdit',
    data() {
      return {
        formInline: {
          title: '',
          endline: '',
          textarea: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
