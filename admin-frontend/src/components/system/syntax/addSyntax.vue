<template>
<div>
  <el-dialog title="新增语法" width="40%" :destroy-on-close="true" :visible.sync="addVisible" :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                类型:
                </span>
            <div style="width:100%">
              <el-form-item prop="type" style="margin-bottom:0">
                <el-select size="mini" v-model="form.type" placeholder="请选择类型">
                  <el-option
                    v-for="item in type"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
        </el-col>
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">语句:</span>
            <div style="width:100%">
              <el-form-item prop="content" style="margin-bottom:0">
                <el-input type="textarea" v-model="form.content"></el-input>
              </el-form-item>
            </div>
        </el-col>
        <el-col style="margin-top:20px" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">语法分析:</span>
            <div style="width:100%">
              <el-form-item prop="chinese" style="margin-bottom:0">
                <el-input type="textarea" v-model="form.chinese"></el-input>
              </el-form-item>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                重要词汇:
                </span>
              <div style="width:100%">
                <div style="display:flex;margin-top:10px" v-for="(item,index) in fenxi" :key="index">
                    <div>
                        <el-input v-model="item.name" size="mini" placeholder="请输入专业词汇" autocomplete="off"></el-input>
                    </div>
                    <el-button v-if="index == fenxi.length-1" @click="add" size="mini" style="margin-left:10px" type="primary" icon="el-icon-plus"></el-button>
                    <el-button v-if="index != 0" @click="minus(index)" size="mini" style="margin-left:10px" type="primary" icon="el-icon-minus"></el-button>
                </div>
              </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
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
  import {saveApeSyntax,getApeSyntaxTypeList} from '../../../api/api'
  export default {
    data() {
      return{
        formLabelWidth: '80px',
        form: {
          type: "",
          content: "",
          chinese: "",
          analysis: "",
          remark: "",
        },
        fenxi: [{name: ""}],
        type: [],
        rules: {
          type: [
            { required: true, message: '请选择类型', trigger: 'blur' },
          ],
          content: [
            { required: true, message: '请输入语句', trigger: 'blur' },
          ],
          chinese: [
            { required: true, message: '请输入语法分析', trigger: 'blur' },
          ],
          analysis: [
            { required: true, message: '请输入重点词汇', trigger: 'blur' },
          ],
        },
      }
    },
    props: ['addVisible'],
    methods: {
      getApeSyntaxTypeList() {
        getApeSyntaxTypeList().then(res => {
          if (res.code == 1000) {
            this.type = res.data
          }
        })
      },
      add() {
          this.fenxi.push({name: ""})
      },
      minus(index) {
          this.fenxi.splice(index,1)
      },
      submit() {
        for(let i = 0;i<this.fenxi.length;i++) {
          var item = this.fenxi[i]
          if (!item.name) {
            this.$message({
                message: '请输入分析第' + (i+1) + '行',
                type: 'warning'
            });
            return
          }
        }
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            this.form.analysis = JSON.stringify(this.fenxi)
            saveApeSyntax(this.form).then(res => {
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
          type: "",
          content: "",
          chinese: "",
          analysis: "",
          remark: "",
        },
        this.fenxi = [{name: ""}],
        this.$emit("addFalse")
      },
     
    },
    created() {
     
    },
    mounted() {
      this.getApeSyntaxTypeList()
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