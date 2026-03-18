<template>
  <div class="index">
    <headers></headers>
    <div class="carousel">
      <el-carousel height="600px">
        <el-carousel-item >
          <img style="width:100%" src="../../assets/image/1.jpg">
        </el-carousel-item>
        <el-carousel-item >
          <img style="width:100%" src="../../assets/image/2.jpg">
        </el-carousel-item>
        <el-carousel-item >
          <img style="width:100%" src="../../assets/image/3.jpg">
        </el-carousel-item>
      </el-carousel>
      <div class="desc">
        <div class="desc1">Your Study, Your Way!</div>
        <div class="desc1">你的学习，你的方式！</div>
        <div class="desc2">Best Online English Learning Improve</div>
        <div class="desc2">最好的计算机英语学习平台</div>
        <div class="desc3">Get started with online Study</div>
        <div class="desc3">开始学习吧</div>
        <div class="desc4">_____</div>
      </div>
    </div>
    <div class="menu-index">
      <div class="menu-list">
        <div class="menu-item">
          <div class="menu1">Vocabulary<span style="font-size:25px">词汇</span></div>
          <div class="menu2">Rich vocabulary list</div>
          <i @click="toPage('vocabulary')" style="font-size:30px;color:#ffffff;margin-top:5px" class="el-icon-right"></i>
          <img class="icon-class" src="../../assets/image/icon1.png">
        </div>
        <div class="menu-item1">
          <div class="menu3">Syntax<span style="font-size:25px">语法</span></div>
          <div class="menu4">Detailed grammar teaching</div>
          <i @click="toPage('syntax')" style="font-size:30px;color:#6B747C;margin-top:5px" class="el-icon-right"></i>
        </div>
        <div class="menu-item">
          <div class="menu1">literature<span style="font-size:25px">文献</span></div>
          <div class="menu2">Various English literature</div>
          <i @click="toPage('literature')" style="font-size:30px;color:#ffffff;margin-top:5px" class="el-icon-right"></i>
          <img class="icon-class" src="../../assets/image/icon2.png">
        </div>
        <div class="menu-item1">
          <div class="menu3">Spoken<span style="font-size:25px">口语</span></div>
          <div class="menu4">Spoken language</div>
          <i @click="toPage('spoken')" style="font-size:30px;color:#6B747C;margin-top:5px" class="el-icon-right"></i>
        </div>
        <div class="menu-item">
          <div class="menu1">Examine<span style="font-size:25px">编程能力测试</span></div>
          <div class="menu2">Learning self-test</div>
          <i @click="toPage('examine')" style="font-size:30px;color:#ffffff;margin-top:5px" class="el-icon-right"></i>
          <img class="icon-class" src="../../assets/image/icon1.png">
        </div>
        <div class="menu-item1">
          <div class="menu3">Record<span style="font-size:25px">学习记录</span></div>
          <div class="menu4">Learning records</div>
          <i @click="toPage('record')" style="font-size:30px;color:#6B747C;margin-top:5px" class="el-icon-right"></i>
        </div>
        <div class="menu-item">
          <div class="menu1">Discuss<span style="font-size:25px">讨论</span></div>
          <div class="menu2">Comment social</div>
          <i @click="toPage('discuss')" style="font-size:30px;color:#ffffff;margin-top:5px" class="el-icon-right"></i>
          <img class="icon-class" src="../../assets/image/icon4.png">
        </div>
        <div class="menu-item1">
          <div class="menu3">Manage<span style="font-size:25px">后台</span></div>
          <div class="menu4">Backend management</div>
          <i @click="toPage('manage')" style="font-size:30px;color:#6B747C;margin-top:5px" class="el-icon-right"></i>
        </div>
        <div class="menu-item">
          <div class="menu1">About<span style="font-size:25px">关于</span></div>
          <div class="menu2">About English System</div>
          <i @click="toPage('about')" style="font-size:30px;color:#ffffff;margin-top:5px" class="el-icon-right"></i>
          <img class="icon-class" src="../../assets/image/icon5.png">
        </div>
      </div>
    </div>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        
      }
    },
    components: {
      headers,
      bottoms
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
    created() {
     
    },
    mounted() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/index.css');
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 600px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  i {
    cursor: pointer;
  }
</style>