<template>
  <div class="index">
    <headers></headers>
    <div class="search">
        <div class="search-content">
            <div class="search-input">
                <el-input v-model="keyword" placeholder="请输入想要搜索的文献名称"></el-input>
                <div class="search-btn" @click="search">
                    搜索Search<i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </div>
    </div> 
    <div class="wenxian">
        <div class="wenxian-list">
            <div v-for="(item,index) in table" @click="toInfo(item.id)">
                <div  class="wenxian-item">
                    <img :src="$store.state.HOST + item.image">
                    <div style="margin-left:20px">
                        <div class="wenxian-name">{{item.name}}</div>
                        <div class="wenxian-author">作者：{{item.author}}</div>
                        <div class="wenxian-time">发表时间：{{item.createTime}}</div>
                        <div class="wenxian-desc">
                          {{item.introduction}}
                        </div>
                    </div>
                </div>
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
    <bottoms></bottoms>
  </div>
</template>

<script>
  import {getApeLiteraturePage} from '../../api/api'
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        keyword: "",
        table: [],
        total: 100,
        pageSize: 4,
        pageNumber: 1,
        dialogVisible: false
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      toInfo(id) {
        this.$router.push("/literatureInfo?id=" + id)
      },
      handleCurrentChange(val) {
        this.pageNumber = val
        this.search()
      },
      search() {
        var param = {
          name: this.keyword,
          pageSize: this.pageSize,
          pageNumber: this.pageNumber
        }
        getApeLiteraturePage(param).then(res => {
          if (res.code == 1000) {
            this.table = res.data.records
            this.total = res.data.total
          }
        })
      },
    },
    created() {
     
    },
    mounted() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.search()
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/literature.css');
</style>