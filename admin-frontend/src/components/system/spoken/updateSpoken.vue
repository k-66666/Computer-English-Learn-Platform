<template>
<div>
  <el-dialog title="编辑口语" width="40%" :destroy-on-close="true" :visible.sync="updateVisible" :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">句子:</span>
            <div style="width:100%">
                <el-form-item prop="content" style="margin-bottom:0">
                    <el-input type="textarea" v-model="form.content"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">释义:</span>
            <div style="width:100%">
                <el-form-item prop="content" style="margin-bottom:0">
                    <el-input type="textarea" v-model="form.chinese"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                音频:
                </span>
            <div style="width:100%">
                <el-form-item prop="audio" style="margin-bottom:0">
                    <el-upload
                        ref="upload"
                        accept="audio/*"
                        :action="uploadFileUrl()"
                        :on-remove="handleRemove"
                        :multiple="false"
                        :on-exceed="handleExceed"
                        :on-success="handleSuccess"
                        :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
            </div>
        </el-col>
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                备注:
                </span>
            <div style="width:100%">
                <el-form-item prop="remark" style="margin-bottom:0">
                    <el-input type="textarea" v-model="form.remark"></el-input>
                </el-form-item>
            </div>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="mini" type="primary" @click="submit">确 定</el-button>
      <el-button size="mini" @click="handleClose">取 消</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
  import {mixin} from "../../../minix";
  import {editApeSpoken,getApeSpokenById} from '../../../api/api'
  export default {
    mixins: [mixin],
    data() {
      return{
        formLabelWidth: '80px',
        form: {
          content: "",
          chinese: "",
          audio: "",
          remark: "",
        },
        fileList: [

        ],
        rules: {
          content: [
            { required: true, message: '请输入句子', trigger: 'blur' },
          ],
          chinese: [
            { required: true, message: '请输入释义', trigger: 'blur' },
          ],
          audio: [
            { required: true, message: '请上传音频', trigger: 'blur' },
          ],
        },
      }
    },
    props: ['updateVisible','updateId'],
    methods: {
      handleSuccess(res) {
        let _this = this;
        if(res.code == 1000){
            _this.$message({
              type: 'success',
              message: '上传成功!'
            });
            this.fileList.push({url:res.data.path,name:res.data.name})
            this.form.audio = res.data.path
        }else{
          _this.$notify.error({
            title: '错误',
            message: res.message
          });
        }
      },
      handleRemove(file, fileList) {
        this.form.audio = ""
        this.fileList = []
      },
      submit() {
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            editApeSpoken(this.form).then(res => {
              if(res.code == 1000) {
                this.$notify.success({
                  title: '成功',
                  message: "保存成功"
                });
                this.handleClose();
              } else {
                this.$notify.error({
                  title: '错误',
                  message: res.message
                });
              }
            })
          } else {
            return false;
          }
        });
      },
      handleClose() {
        this.fileList = []
        this.$emit("updateFalse")
      },
     
    },
    created() {
     
    },
    mounted() {
      
    },
    watch: {
      updateId(newVal) {
        if(newVal) {
          getApeSpokenById({id:newVal}).then(res => {
            if(res.code == 1000) {
              this.form = res.data
              var name = this.form.audio.substring(this.form.audio.lastIndexOf("/") + 1)
              this.fileList.push({name:name,url:this.form.audio})
            } else {
              this.$notify.error({
                title: '错误',
                message: res.message
              });
            }
          })
        }
        
      }
    }
 }
</script>

<style lang=scss scoped>
  .el-col {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 12px
  }
  .search-title {
      font-family: '黑体';
      float: right;
      white-space: nowrap;
      font-size: 14px;
      width: 84px;
      text-align: right;
  }
  .el-tree {
      border: 1px solid #BDC1C9;
  }
</style>