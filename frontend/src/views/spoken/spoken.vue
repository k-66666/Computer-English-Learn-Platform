<template>
  <div class="index">
    <headers></headers>
    <div class="search">
        <div class="search-content">
            <div class="search-input">
                <el-input v-model="keyword" placeholder="请输入想要搜索的口语"></el-input>
                <div class="search-btn" @click="search">
                    搜索Search<i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="juzi">
        <div class="juzi-list">
            <div class="juzi-item" v-for="(item,index) in table" :key="index" @click="toInfo(index)">
                <div title="1111">{{index + 1}}.{{item.content}}</div>
                <div style="margin-top:7px" title="1111">中文释义：{{item.chinese}}</div>
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
        title="口语详情"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <span class="juzi-info">
            <div><span style="font-weight:bold">句子：</span>{{info.content}}
              <el-button v-if="!flag" @click="saveApeSpokenUser" size="mini" type="success" icon="el-icon-check" circle></el-button>
              <el-button v-if="flag" @click="removeApeSpokenUser" size="mini" type="warning" icon="el-icon-close" circle></el-button>
            </div>
            <div><span style="font-weight:bold">中文释义：</span>{{info.chinese}}</div>
            <div style="font-size:25px;margin-top:10px;cursor: pointer;" >
                <i class="el-icon-headset" title="音频" @click="play"></i>
            </div>          
            <audio v-if="dialogVisible" style="display:none" ref="audio" controls>
              <source :src="$store.state.HOST + info.audio">
            </audio>  
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="handleClose">关闭</el-button>
        </span>
    </el-dialog>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import {getApeSpokenPage,saveApeSpokenUser,removeApeSpokenUser,getSpokenCountByUserAndV} from '../../api/api'
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        keyword: "",
        table: [],
        total: 100,
        pageSize: 10,
        pageNumber: 1,
        dialogVisible: false,
        info: {
          content: "",
          chinese: "",
          audio: ""
        },
        flag: false,
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      play() {
        this.$refs.audio.load()
        this.$refs.audio.play();
      },
      getSpokenCountByUserAndV(id) {
        getSpokenCountByUserAndV({id:id}).then(res => {
          if (res.code == 1000) {
            this.flag = true
          } else {
            this.flag = false
          }
        })
      },
      saveApeSpokenUser() {
        var param = {
          spokenId: this.info.id,
          content: this.info.content,
          chinese: this.info.chinese
        }
        saveApeSpokenUser(param).then(res => {
          if (res.code == 1000) {
            this.flag = true
          }
        })
      },
      removeApeSpokenUser() {
        removeApeSpokenUser({id:this.info.id}).then(res => {
          if (res.code == 1000) {
            this.flag = false
          }
        })
      },
      toInfo(index) {
        this.info = this.table[index]
        this.dialogVisible = true
        this.getSpokenCountByUserAndV(this.info.id)
      },
      handleClose() {
        this.$refs.audio.pause()
        this.info = {
          content: "",
          chinese: "",
          audio: ""
        }
        this.dialogVisible = false
      },
      handleCurrentChange(val) {
        this.pageNumber = val
        this.search()
      },
      search() {
        var param = {
          content: this.keyword,
          pageSize: this.pageSize,
          pageNumber: this.pageNumber
        }
        getApeSpokenPage(param).then(res => {
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
  @import url('../../assets/css/syntax.css');
  @import url('../../assets/css/spoken.css');
</style>
