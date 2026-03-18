<template>
  <div class="index">
    <headers></headers>
    <div class="info5">
        <div class="info6">
            <div style="margin-top:8px;font-weight:bold">{{info.name}}
              <el-button v-if="!flag" @click="saveApeLiteratureUser" size="mini" type="success" icon="el-icon-check" circle></el-button>
              <el-button v-if="flag" @click="removeApeLiteratureUser" size="mini" type="warning" icon="el-icon-close" circle></el-button>
            </div>
            <div style="margin-top:8px;font-weight:bold">作者：{{info.author}}</div>
            <div style="margin-top:8px;font-weight:bold">发表时间：{{info.createTime}}</div>
            <div style="margin-top:8px;margin-left:20px;margin-right:20px;line-height:20px;margin-bottom:20px">
                <span style="font-weight:bold;">文献简介：</span>{{info.introduction}}
            </div>
        </div>
    </div>
    <div class="info1">
        <div class="info2">
            <div class="info3">
                <div style="margin-top:20px;font-weight:bold">文献小节：</div>
                <div v-for="(item,index) in items" :key="index" @click="toInfo(index)"><div :title="item.title" style="width:250px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{item.title}}</div><i class="el-icon-caret-right"></i></div>
            </div>
            <div class="info4">
                <div class="info7" v-html="content">
                    
                </div>
            </div>
        </div>
    </div>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import {getApeLiteratureById,getApeLiteratureItemByLid,saveApeLiteratureUser,removeApeLiteratureUser,getLCountByUserAndV} from "../../api/api"
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        id: "",
        info: {},
        items: [],
        content: "",
        flag: false,
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      getLCountByUserAndV(id) {
        getLCountByUserAndV({id:id}).then(res => {
          if (res.code == 1000) {
            this.flag = true
          } else {
            this.flag = false
          }
        })
      },
      saveApeLiteratureUser() {
        var param = {
          literatureId: this.info.id,
          name: this.info.name,
          author: this.info.author,
          image: this.info.image,
          introduction: this.info.introduction
        }
        saveApeLiteratureUser(param).then(res => {
          if (res.code == 1000) {
            this.flag = true
          }
        })
      },
      removeApeLiteratureUser() {
        removeApeLiteratureUser({id:this.info.id}).then(res => {
          if (res.code == 1000) {
            this.flag = false
          }
        })
      },
      toInfo(index) {
        this.content = this.items[index].content
      },
      getApeLiteratureById() {
        getApeLiteratureById({id:this.id}).then(res => {
          if (res.code == 1000) {
            this.info = res.data
          }
        })
      },
      getApeLiteratureItemByLid() {
        getApeLiteratureItemByLid({id:this.id}).then(res => {
          if (res.code == 1000) {
            this.items = res.data
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
      this.getApeLiteratureById()
      this.getApeLiteratureItemByLid()
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/literatureInfo.css');
  .info3::-webkit-scrollbar {
      width: 5px;
      height: 8px;
  }
  .info4::-webkit-scrollbar {
      width: 5px;
      height: 8px;
  }
</style>