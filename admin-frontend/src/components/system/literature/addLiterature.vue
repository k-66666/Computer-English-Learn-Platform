<template>
<div>
  <el-dialog title="新增文献" width="40%" :destroy-on-close="true" :visible.sync="addVisible" :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                名称:
                </span>
            <div style="width:100%">
                <el-form-item prop="name" style="margin-bottom:0">
                    <el-input v-model="form.name" size="mini" placeholder="请输入名称" autocomplete="off"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                作者:
                </span>
            <div style="width:100%">
                <el-form-item prop="author" style="margin-bottom:0">
                    <el-input v-model="form.author" size="mini" placeholder="请输入作者" autocomplete="off"></el-input>
                </el-form-item>
            </div>
        </el-col> 
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                封面:
                </span>
            <div style="width:100%">
              <el-form-item prop="image" style="margin-bottom:0">
                <el-upload
                  :file-list="fileList"
                  ref="upload"
                  :action="uploadImageUrl()"
                  accept="image/*"
                  :multiple="false"
                  :limit="1"
                  :before-upload="beforeAvatorUpload"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-exceed="handleExceed"
                  :on-success="handleAvatorSuccess"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </el-form-item>
            </div>
        </el-col>
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">简介:</span>
            <div style="width:100%">
                <el-form-item prop="introduction" style="margin-bottom:0">
                    <el-input type="textarea" v-model="form.introduction"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                备注:
                </span>
            <div style="width:100%">
                <el-form-item prop="remark" style="margin-bottom:0">
                    <el-input v-model="form.remark" size="mini" placeholder="请输入备注" autocomplete="off"></el-input>
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
  import {saveApeLiterature} from '../../../api/api'
  export default {
    mixins: [mixin],
    data() {
      return{
        formLabelWidth: '80px',
        form: {
          name: "",
          author: "",
          image: "",
          introduction: "",
          remark: "",
        },
        fileList: [],
        dialogImageUrl: '',
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          author: [
            { required: true, message: '请输入作者', trigger: 'blur' },
          ],
          introduction: [
            { required: true, message: '请输入简介', trigger: 'blur' },
          ],
          image: [
            { required: true, message: '请上传封面图片', trigger: 'blur' },
          ],
        },
      }
    },
    props: ['addVisible'],
    methods: {
      handleAvatorSuccess(res) {
        let _this = this;
        if(res.code == 1000){
            _this.$message({
              type: 'success',
              message: '上传成功!'
            });
            this.fileList.push({url:this.$store.state.configure.HOST + res.message})
            this.form.image = res.message
        }else{
          _this.$notify.error({
            title: '错误',
            message: res.message
          });
        }
      },
      handleRemove(file, fileList) {
        this.form.image = ""
        this.fileList = []
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submit() {
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            saveApeLiterature(this.form).then(res => {
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
        this.form = {
          name: "",
          author: "",
          image: "",
          introduction: "",
          remark: "",
        },
        this.fileList = []
        this.$emit("addFalse")
      },
     
    },
    created() {
     
    },
    mounted() {
      
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