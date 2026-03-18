<template>
<div>
  <el-dialog title="新增自测" width="40%" :destroy-on-close="true" :visible.sync="addVisible" :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                题目名称:
                </span>
            <div style="width:100%">
                <el-form-item prop="name" style="margin-bottom:0">
                    <el-input v-model="form.name" size="mini" placeholder="请输入题目名称" autocomplete="off"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                简介:
                </span>
            <div style="width:100%">
                <el-form-item prop="introduction" style="margin-bottom:0">
                    <el-input type="textarea" v-model="form.introduction" size="mini" placeholder="请输入简介" autocomplete="off"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                题型:
                </span>
            <div style="width:100%">
                <el-form-item prop="type" style="margin-bottom:0">
                    <el-radio-group style="margin-top:1px;height:40px;display:flex;align-items: center" v-model="form.type">
                        <el-radio style="margin-right:10px" label="0">代码选择</el-radio>
                        <el-radio style="margin-right:10px" label="1">职场听力</el-radio>
                        <el-radio style="margin-right:10px" label="2">代码判断</el-radio>
                    </el-radio-group>
                </el-form-item>
            </div>
        </el-col>
        <el-col v-if="form.type != 1" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                题目内容:
                </span>
            <div style="width:100%">
                <el-form-item prop="content" style="margin-bottom:0">
                    <el-input  type="textarea" rows="6" v-model="form.content" size="mini" placeholder="请输入题目内容" autocomplete="off"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col v-if="form.type == 1" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
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
                    <el-input type="textarea" v-model="form.remark" size="mini" placeholder="请输入备注" autocomplete="off"></el-input>
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
  import {saveApeExamine} from '../../../api/api'
  export default {
    mixins: [mixin],
    data() {
      return{
        formLabelWidth: '80px',
        form: {
          name: "",
          introduction: "",
          content: "",
          audio: "",
          type: "0",
          remark: "",
        },
        fileList: [

        ],
        rules: {
          name: [
            { required: true, message: '请输入题目名称', trigger: 'blur' },
          ],
          introduction: [
            { required: true, message: '请输入简介', trigger: 'blur' },
          ],
          content: [
            { required: true, message: '请输入题目内容', trigger: 'blur' },
          ],
          audio: [
            { required: true, message: '请上传音频', trigger: 'blur' },
          ],
        },
      }
    },
    props: ['addVisible'],
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
            saveApeExamine(this.form).then(res => {
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
          introduction: "",
          content: "",
          audio: "",
          type: "",
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