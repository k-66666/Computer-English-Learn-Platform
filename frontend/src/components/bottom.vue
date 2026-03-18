<template>
  <div>
    <div class="bottom">
      <div style="display:flex">
        <div class="bottom1">
          <div style="font-size:20px">菜单：</div>
          <div @click="toPage('index')">首页</div>
          <div @click="toPage('vocabulary')">词汇</div>
          <div @click="toPage('syntax')">语法</div>
          <div @click="toPage('literature')">文献</div>
          <div @click="toPage('spoken')">口语</div>
        </div>
        <div class="bottom1">
          <div style="font-size:20px">___</div>
          <div @click="toPage('examine')">自测</div>
          <div @click="toPage('record')">学习记录</div>
          <div @click="toPage('discuss')">讨论</div>
          <div @click="toPage('manage')">后台</div>
          <div @click="toPage('about')">关于</div>
        </div>
      </div>
      <div class="bottom3">
        <div style="font-size:20px">联系我们：</div>
        <div>邮箱: xxxxxx@mail.com</div>
        <div>QQ: xxxxxx</div>
        <div>微信: xxxxxx</div>
        <div>微博: xxxxxx@mail.com</div>
        <div>电话: xxxxxxxx</div>
      </div>
      <div class="bottom2">
        <div style="font-size:20px">简介：</div>
        <div>在当今数字化时代，编程已成为一项必备技能，无论是初学者还是资深开发者，都需要不断学习和提升。为了满足不同学习者的需求，code Learning英语学习平台应运而生，为编程学习者提供了一个高效、便捷、灵活的学习英语的环境</div>
      </div>
    </div>
    <div class="bottom11">
       © 2025.code Learning英语学习平台
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        
      }
    },
    methods: {
      toPage(name) {
        if (name == "index") {
          this.$router.push("/")
        } else if (name == "vocabulary") {
          this.$router.push("/vocabulary")
        } else if (name == "syntax") {
          this.$router.push("/syntax")
        } else if (name == "literature") {
          this.$router.push("/literature")
        } else if (name == "spoken") {
          this.$router.push("/spoken")
        } else if (name == "examine") {
          this.$router.push("/examine")
        } else if (name == "record") {
          this.$router.push("/record")
        } else if (name == "discuss") {
          this.$router.push("/discuss")
        }  else if (name == "manage") {
          window.open("http://localhost:3000")
        } else if (name == "about") {
          this.$router.push("/about")
        }
      }
    },
 }
</script>

<style scoped>
  .bottom11 {
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 20px;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    background-color:rgb(1, 10, 19);
    align-items: center;
    font-family: '微软雅黑';
  }
  .bottom1,.bottom3,.bottom2 {
    color: #ffffff;
  }
  .bottom2 {
    width: 500px;
    letter-spacing: 2px;
    line-height: 30px;
  }
  .bottom1>div,.bottom3>div,.bottom2>div {
    font-size: 14px;
    margin-top: 12px;
    cursor: pointer;
  }
</style>