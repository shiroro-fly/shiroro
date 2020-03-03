<template>
  <div class="registerBody">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="事件名称" prop="name">
        <el-col :span="6">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="事件区域" prop="region">
        <el-select v-model="form.region" placeholder="请选择事件区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="事件时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="data2">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="现场调解">
        <el-switch v-model="form.adjust"></el-switch>
      </el-form-item>
      <el-form-item label="事件性质" prop="type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="环境问题" name="type"></el-checkbox>
          <el-checkbox label="纠纷问题" name="type"></el-checkbox>
          <el-checkbox label="卫生问题" name="type"></el-checkbox>
          <el-checkbox label="维护问题" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="联系人" prop="contact">
        <el-col :span="6">
          <el-input v-model="form.contact" placeholder="联系人姓名"></el-input>
        </el-col>
       </el-form-item>
       <el-form-item label="联系方式" prop="phone">
        <el-col :span="6">
          <el-input v-model="form.phone" placeholder="联系方式"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="事件描述" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: "EventRegister",
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          adjust: false,
          type: [],
          phone: '',
          desc: '',
          contact: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入事件名称', trigger: 'blur' },
            { min: 3, max: 300, message: '至少三个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择事件区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个事件性质', trigger: 'change' }
          ],
          contact: [
            { required: true, message: '请输入联系人', trigger: 'blur' },
            {min:2, max:10, message: '至少二个字符', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入联系方式', trigger: 'blur'}
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            alert(this.form.name);
            console.log(this.form)
          } else {
            alert('有Bug');
            return false;
          }
        })
      }
    }
  }
</script>
<style>

</style>
