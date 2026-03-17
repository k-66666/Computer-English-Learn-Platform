<template>
  <div class="index">
    <div class="index1">
      <div class="index3">
        <div class="index4">词汇数</div>
        <div class="index5">{{info.cihui}}</div>
      </div>
      <div class="index3">
        <div class="index4">语法数</div>
        <div class="index5">{{info.yufa}}</div>
      </div>
      <div class="index3">
        <div class="index4">口语数</div>
        <div class="index5">{{info.kouyu}}</div>
      </div>
      <div class="index3">
        <div class="index4">习题数</div>
        <div class="index5">{{info.zice}}</div>
      </div>
    </div>
    <div class="index1">
      <div class="index3">
        <div class="index4">文献数</div>
        <div class="index5">{{info.wenxian}}</div>
      </div>
      <div class="index3">
        <div class="index4">用户数</div>
        <div class="index5">{{info.user}}</div>
      </div>
      <div class="index3">
        <div class="index4">讨论数</div>
        <div class="index5">{{info.taolun}}</div>
      </div>
      <div class="index3">
        <div class="index4">评论数</div>
        <div class="index5">{{info.pinglun}}</div>
      </div>
    </div>
  </div>  
</template>

<script>
  import {getIndexData} from '../../../api/api'
  import * as echarts from "echarts";
  export default {
    data() {
      return{
        today: new Date(),
        info: {
          cihui: 0,
          yufa: 0,
          kouyu: 0,
          wenxian: 0,
          user: 0,
          zice: 0,
          taolun: 0,
          pinglun: 0,
        }
      }
    },
    methods: {
      getIndexData() {
        getIndexData().then(res => {
          if (res.code == 1000) {
            this.info = res.data
          }
        })
      }
    },
    created() {
      
    },
    mounted() {
      this.getIndexData()
    }
 }
</script>

<style scoped>
  .index {
    width: 100%;
    height: 100%;
    display: flex;
    font-family: '黑体';
    justify-content: space-around;
  }
  .index1 {
    width: 49%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .index3 {
    width: 49%;
    height: 49%;
    margin-bottom: 1%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 10px;
  }
  .index4 {
    font-size: 25px;
    letter-spacing: 2px;
    font-family: "楷体";
  }
  .index5 {
    margin-top: 20px;
    font-size: 30px;
    letter-spacing: 1px;
    font-family: "楷体";
  }
  .index6 {
    width: 100%;
    height: 49%;
    margin-bottom: 1%;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 10px;
  }
</style>