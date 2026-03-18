<template>
  <div class="discuss">
    <headers></headers>
    <div class="discuss1">
        <div class="discuss2">
            <div class="discuss3">
                <el-input type="textarea" rows="10" v-model="content" placeholder="请输入讨论内容"></el-input>
            </div>
            <el-button size="small" style="margin-top:20px" type="primary" @click="saveApeDiscuss" plain>发布讨论</el-button>
        </div>
    </div>
    <div class="discuss1">
        <div class="discuss4">
            <div style="margin-top:20px">
                <el-button-group >
                    <el-button size="small" type="primary" icon="el-icon-edit" @click="list(0)">讨论列表</el-button>
                    <el-button size="small" type="primary" icon="el-icon-share" @click="list(1)">我发布的讨论</el-button>
                    <el-button size="small" type="primary" icon="el-icon-success" @click="list(2)">我参与的讨论</el-button>
                </el-button-group>
            </div>
            <div class="discuss5">
                   <div class="discuss6" v-for="(item,index) in table" :key="index" @click="toDiscussInfo(item.id)">
        
        <span class="discuss7">{{item.content}}</span>
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
        </div>
    </div>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import {getApeDiscussPage,saveApeDiscuss} from '../../api/api'
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        content: "",
        table: [],
        total: 100,
        pageSize: 15,
        pageNumber: 1,
        type: 0,
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      list(type) {
        this.type = type
        this.pageNumber = 1
        this.getApeDiscussPage()
      },
      saveApeDiscuss() {
        if (!this.content) {
          this.$message({
            message: '请输入讨论内容',
            type: 'warning'
          });
          return
        }
        var param = {
          content: this.content
        }
        saveApeDiscuss(param).then(res => {
          if (res.code == 1000) {
            this.$message({
              message: '提交成功',
              type: 'scuess'
            });
            this.content = ""
             this.pageNumber = 1;
            this.getApeDiscussPage()
          }
        })
      },
      getApeDiscussPage() {
        var param = {
          pageSize: this.pageSize,
          pageNumber: this.pageNumber,
          type: this.type
        }
        getApeDiscussPage(param).then(res => {
          if (res.code == 1000) {
            this.table = res.data.records
            this.total = res.data.total
          }
        })
      },
      handleCurrentChange(val) {
        this.pageNumber = val
        this.getApeDiscussPage()
      },
      toDiscussInfo(id) {
        this.$router.push("/discussInfo?id=" + id)
      }
    },
    created() {
     
    },
    mounted() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.getApeDiscussPage()
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/discuss.css');
</style>



