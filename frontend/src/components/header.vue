<template>
  <div class="header">
    <img style="width:100px;height:60px" src="../assets/image/logo1.png">
    <div class="menu">
      <div @click="toPage('index')" :class="$route.path == '/'?'active':''">首页</div>
      <div @click="toPage('vocabulary')" :class="$route.path == '/vocabulary'?'active':''">词汇</div>
      <div @click="toPage('syntax')" :class="$route.path == '/syntax'?'active':''">语法</div>
      <div @click="toPage('literature')" :class="$route.path == '/literature'?'active':''">文献</div>
      <div @click="toPage('spoken')" :class="$route.path == '/spoken'?'active':''">口语</div>
      <div @click="toPage('examine')" :class="$route.path == '/examine'?'active':''">自测</div>
      <div @click="toPage('record')" :class="$route.path == '/record'?'active':''">学习记录</div>
      <div @click="toPage('discuss')" :class="$route.path == '/discuss'?'active':''">讨论</div>
     <!-- <div @click="toPage('manage')">后台</div> -->
      <div @click="toPage('about')" :class="$route.path == '/about'?'active':''">关于</div>
    </div>
    <div class="icons">
      <i class="el-icon-user" @click="toCenter"></i>
      <span style="font-size:15px">{{user.userName}}</span>
      <div class="loginOut" @click="loginOut">
        退出
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        search: "",
        user: {
          userName: "",
        },
      }
    },
    methods: {
      loginOut() {
        this.$store.dispatch('logout').then(() => {
          window.localStorage.removeItem("user_info")
          window.localStorage.removeItem("user_token")
          this.$message({
              message: '退出成功',
              type: 'success'
          });
          setTimeout(function(){
              window.location.reload()
          },1000)
        })
      },
      toAdd() {
        this.$router.push("/addCommodity")
      },
      toCenter() {
        this.$router.push("/center")
      },
      toOrder() {
        this.$router.push("/order")
      },
      search() {
        if (!this.search) {
          this.$message({
            showClose: true,
            message: '请输入想要搜索的关键词',
            type: 'warning'
          });
        }
      },
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
      this.user = JSON.parse(window.localStorage.getItem("user_info"))
    }
 }
</script>

<style scoped>
  .loginOut {
    width: 70px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color:rgb(23, 209, 76);
    font-family: '微软雅黑';
    color: #ffffff;
    font-size: 14px;
  }
  .header {
      font-family: '微软雅黑';
      width: 100%;
      height: 70px;
      background-color:#ffffff;
      display: flex;
      align-items: center;
      justify-content: space-around;
  }
  .menu {
    display: flex;
    width: 650px;
    justify-content: space-between;
  }
  .menu>div {
    font-size: 14px;
    cursor: pointer;
  }
  .search {
    display: flex;
    width: 250px;
  }
  .icons {
    display: flex;
    font-size: 25px;
    width: 150px;
    color:rgb(1, 0, 0);
    justify-content: space-between;
    align-items: center;
  }
  .active {
      color:rgb(0, 164, 189);
  }
</style>