<template>
  <div class="discuss">
    <headers></headers>
    <div class="discuss1">
        <div class="discuss2">
            <div class="discuss3">
                <el-input type="textarea" rows="10" v-model="content" placeholder="请输入评论内容"></el-input>
            </div>
            <el-button size="small" style="margin-top:20px" type="primary" plain @click="saveApeDiscussItem">发布评论</el-button>
        </div>
    </div>
    <div class="discuss1">
        <div class="discuss4">
            <div class="discuss5">
                <div class="discuss6" v-for="(item,index) in table" :key="index">
                    <img class="discuss8" :src="$store.state.HOST + item.avatar">
                    <span class="discuss7">{{item.createBy}}-{{item.createTime}}</span>
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
  import {getApeDiscussItemPage,saveApeDiscussItem} from '../../api/api'
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
        id: "",
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      handleCurrentChange(val) {
        this.pageNumber = val
      },
      toDiscussInfo() {
          this.$router.push("/discussInfo")
      },
      getApeDiscussItemPage() {
        var param = {
          pageSize: this.pageSize,
          pageNumber: this.pageNumber,
          discussId: this.id
        }
        getApeDiscussItemPage(param).then(res => {
          if (res.code == 1000) {
            this.table = res.data.records
            this.total = res.data.total
          }
        })
      },
      saveApeDiscussItem() {
        var param = {
          discussId: this.id,
          content: this.content
        }
        saveApeDiscussItem(param).then(res => {
          if (res.code == 1000) {
            this.$message({
              message: '评论成功',
              type: 'success'
            })
            this.getApeDiscussItemPage()
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
      this.id = this.$route.query.id
      this.getApeDiscussItemPage()
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/discuss.css');
  .discuss8 {
      width: 30px;
      height: 30px;
      border-radius: 50%;
  }
</style>