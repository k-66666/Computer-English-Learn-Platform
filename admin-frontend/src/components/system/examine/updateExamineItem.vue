<template>
<div>
  <el-dialog title="编辑题目" width="40%" :destroy-on-close="true" :visible.sync="updateVisible" :before-close="handleClose">
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                题目:
                </span>
            <div style="width:100%">
                <el-form-item prop="content" style="margin-bottom:0">
                    <el-input v-model="form.content" size="mini" placeholder="请输入题目" autocomplete="off"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                选项:
                </span>
            <div style="width:100%">
                <div style="display:flex;margin-top:10px" v-for="(item,index) in timuList" :key="index">
                    <div style="width:100px">
                        <el-input v-model="item.select" size="mini" placeholder="请输入选项" autocomplete="off"></el-input>
                    </div>
                    <div style="margin-left:10px">
                        <el-input v-model="item.content" size="mini" placeholder="请输入内容" autocomplete="off"></el-input>
                    </div>
                    <el-button v-if="index == timuList.length-1" @click="add" size="mini" style="margin-left:10px" type="primary" icon="el-icon-plus"></el-button>
                    <el-button v-if="index != 0" @click="minus(index)" size="mini" style="margin-left:10px" type="primary" icon="el-icon-minus"></el-button>
                </div>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                答案:
                </span>
            <div style="width:100%">
                <el-form-item prop="answer" style="margin-bottom:0">
                    <el-input v-model="form.answer" size="mini" placeholder="请输入答案" autocomplete="off"></el-input>
                </el-form-item>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span class="search-title">
                排序:
                </span>
            <div style="width:100%">
                <el-form-item prop="sort" style="margin-bottom:0">
                    <el-input-number size="mini" v-model="form.sort" :min="1" label="请输入排序"></el-input-number>
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
  import {editApeExamineItem,getApeExamineItemById} from '../../../api/api'
  export default {
    data() {
      return{
        formLabelWidth: '80px',
        form: {
          examineId: "",
          content: "",
          answer: "",
          selects: "",
          sort: "",
        },
        timuList: [
            {select: "",content: ""}
        ],
        rules: {
          content: [
            { required: true, message: '请输入题目', trigger: 'blur' },
          ],
          answer: [
            { required: true, message: '请输入答案', trigger: 'blur' },
          ],
          sort: [
            { required: true, message: '请输入排序', trigger: 'blur' },
          ],
        },
      }
    },
    props: ['updateVisible','updateId','examineId'],
    methods: {
      add() {
          this.timuList.push({select: "",content: ""})
      },
      minus(index) {
          this.timuList.splice(index,1)
      },
      submit() {
        for(let i = 0;i<this.timuList.length;i++) {
            var item = this.timuList[i]
            if (!item.select) {
                this.$message({
                    message: '请输入选项第' + (i+1) + '行选项',
                    type: 'warning'
                });
                return
            }
            if (!item.content) {
                this.$message({
                    message: '请输入选项第' + (i+1) + '行内容',
                    type: 'warning'
                });
                return
            }
        }
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            this.form.examineId = this.examineId
            this.form.selects = JSON.stringify(this.timuList)
            editApeExamineItem(this.form).then(res => {
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
        this.timuList = [
            {select: "",content: ""}
        ],
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
          getApeExamineItemById({id:newVal}).then(res => {
            if(res.code == 1000) {
              this.form = res.data
              this.timuList = JSON.parse(this.form.selects)
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