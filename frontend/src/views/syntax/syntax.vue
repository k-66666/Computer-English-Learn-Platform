<template>
  <div class="index">
    <headers></headers>
    <div class="search">
        <div class="search-content">
            <div class="search-input">
                <el-input v-model="keyword" placeholder="请输入想要搜索的语句内容"></el-input>
                <el-select style="margin-left:20px" v-model="type" clearable placeholder="请选择语句所属语言">
                    <el-option
                    v-for="(item,index) in types" :key="index"
                    :label="item.name"
                    :value="item.name">
                    </el-option>
                </el-select>
                <div class="search-btn" @click="search">
                    即刻搜索<i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="juzi">
        <div class="juzi-list">
            <div class="juzi-item" v-for="(item,index) in table" :key="index" @click="toInfo(item.id)">
                <div title="1111">{{index + 1}}.{{item.content}}</div>
                <div style="margin-top:7px" title="1111">语法概述：{{item.chinese}}</div>
            </div>
        </div>
    </div>
    <div class="page">
        <el-pagination
        background
        :page-size="pageSize"
        layout="prev, pager, next"
            @current-change="handleCurrentChange"
        :total="total">
        </el-pagination>
    </div>
    <el-dialog
        title="语法详情"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <span class="juzi-info">
            <div><span style="font-weight:bold">类型：</span>{{info.type}}</div>
            <div><span style="font-weight:bold">语句：</span>{{info.content}}
              <el-button v-if="!flag" @click="saveApeSyntaxUser" size="mini" type="success" icon="el-icon-check" circle></el-button>
              <el-button v-if="flag" @click="removeApeSyntaxUser" size="mini" type="warning" icon="el-icon-close" circle></el-button>
            </div>
            <div><span style="font-weight:bold">语法概述：</span>{{info.chinese}}</div>
            <div><span style="font-weight:bold">重要词汇：</span></div>
            <div class="juzi-fenxi">
                <div v-for="(item,index) in analysis" :key="index"><span style="color:red">({{index + 1}})</span> {{item.name}}</div>
            </div>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="handleClose">关闭</el-button>
        </span>
    </el-dialog>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import {getApeSyntaxPage,getApeSyntaxTypeList,getApeSyntaxById,saveApeSyntaxUser,getSyntaxCountByUserAndV,removeApeSyntaxUser} from '../../api/api'
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        types: [],
        type: "",
        keyword: "",
        table: [],
        total: 100,
        pageSize: 15,
        pageNumber: 1,
        dialogVisible: false,
        info: {
          type: "",
          content: "",
          chinese: "",
          analysis: "[]"
        },
        analysis: [],
        flag: false,
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      toInfo(id) {
        getApeSyntaxById({id:id}).then(res => {
          if (res.code == 1000) {
            this.info = res.data
            this.analysis = JSON.parse(this.info.analysis)
            this.getSyntaxCountByUserAndV(id)
            this.dialogVisible = true
          }
        })
      },
      getSyntaxCountByUserAndV(id) {
        getSyntaxCountByUserAndV({id:id}).then(res => {
          if (res.code == 1000) {
            this.flag = true
          } else {
            this.flag = false
          }
        })
      },
      saveApeSyntaxUser() {
        var param = {
          syntaxId: this.info.id,
          content: this.info.content,
          chinese: this.info.chinese,
        }
        saveApeSyntaxUser(param).then(res => {
          if (res.code == 1000) {
            this.flag = true
          }
        })
      },
      removeApeSyntaxUser() {
        removeApeSyntaxUser({id:this.info.id}).then(res => {
          if (res.code == 1000) {
            this.flag = false
          }
        })
      },
      handleClose() {
        this.analysis = []
        this.info = {}
        this.dialogVisible = false
      },
      handleCurrentChange(val) {
        this.pageNumber = val
        this.search()
      },
      search() {
        var param = {
          pageSize: this.pageSize,
          pageNumber: this.pageNumber,
          content: this.keyword,
          type: this.type
        }
        getApeSyntaxPage(param).then(res => {
          if(res.code == 1000) {
            this.table = res.data.records
            this.total = res.data.total
          }
        })
      },
      getApeSyntaxTypeList() {
        getApeSyntaxTypeList().then(res => {
          if(res.code == 1000) {
            this.types = res.data
          } 
        })
      }
    },
    created() {
     
    },
    mounted() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.getApeSyntaxTypeList()
      this.search()
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/syntax.css');
</style>