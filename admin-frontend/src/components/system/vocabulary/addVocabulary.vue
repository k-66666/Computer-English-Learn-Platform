<template>
<div>
  <el-dialog title="新增词汇" width="40%" :destroy-on-close="true" :visible.sync="addVisible" :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                英文:
                </span>
            <div style="width:100%">
                <el-form-item prop="name" style="margin-bottom:0">
                    <el-input v-model="form.name" size="mini" placeholder="请输入计算机专业英文" autocomplete="off"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                中文对照:
                </span>
            <div style="width:100%">
                <el-form-item prop="definition" style="margin-bottom:0">
                    <el-input v-model="form.definition" size="mini" placeholder="请输入中文对照" autocomplete="off"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
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
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                用法参考:
                </span>
            <div style="width:100%;">
                <div style="display:flex;margin-top:10px" v-for="(item,index) in exampleList" :key="index">
                    <div>
                        <el-input v-model="item.english" size="mini" placeholder="请输入例子" autocomplete="off"></el-input>
                    </div>
                    <div style="margin-left:10px">
                        <el-input v-model="item.chinese" size="mini" placeholder="请输入解释" autocomplete="off"></el-input>
                    </div>
                    <el-button v-if="index == exampleList.length-1" @click="add" size="mini" style="margin-left:10px" type="primary" icon="el-icon-plus"></el-button>
                    <el-button v-if="index != 0" @click="minus(index)" size="mini" style="margin-left:10px" type="primary" icon="el-icon-minus"></el-button>
                </div>
            </div>
        </el-col>
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">术语总结:</span>
            <div style="width:100%">
                <el-form-item prop="chinese" style="margin-bottom:0">
                    <el-input type="textarea" v-model="form.chinese"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">备注:</span>
            <div style="width:100%">
                <el-input type="textarea" v-model="form.remark"></el-input>
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
  import {saveApeVocabulary} from '../../../api/api'
  export default {
    mixins: [mixin],
    data() {
      return{
        formLabelWidth: '80px',
        form: {
          name: "",
          definition: "",
          audio: "",
          example: "",
          chinese: "",
          remark: "",
        },
        exampleList: [
            {english: "",chinese: ""}
        ],
        fileList: [

        ],
        rules: {
          name: [
            { required: true, message: '请输入计算机专业英文', trigger: 'blur' },
          ],
          definition: [
            { required: true, message: '请输入中文对照', trigger: 'blur' },
          ],
          audio: [
            { required: true, message: '请上传音频', trigger: 'blur' },
          ],
          example: [
            { required: true, message: '请输入用法参考', trigger: 'blur' },
          ],
          chinese: [
            { required: true, message: '请输入术语总结', trigger: 'blur' },
          ],
        },
      }
    },
    props: ['addVisible'],
    methods: {
      add() {
          this.exampleList.push({english: "",chinese: ""})
      },
      minus(index) {
          this.exampleList.splice(index,1)
      },
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
        for(let i = 0;i<this.exampleList.length;i++) {
            var item = this.exampleList[i]
            if (!item.english) {
                this.$message({
                    message: '请输入例句第' + (i+1) + '行英文',
                    type: 'warning'
                });
                return
            }
            if (!item.chinese) {
                this.$message({
                    message: '请输入例句第' + (i+1) + '行中文',
                    type: 'warning'
                });
                return
            }
        }
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            this.form.example = JSON.stringify(this.exampleList)
            saveApeVocabulary(this.form).then(res => {
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
          definition: "",
          audio: "",
          example: "",
          chinese: "",
          remark: "",
        },
        this.exampleList = [
            {select: "",content: ""}
        ],
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