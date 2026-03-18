<template>
  <div id="login">
    <transition appear name="opacitytrans">
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form action="#">
            <h2>CODE LEARNING</h2>
            <span>英语学习平台</span>
            <input type="text" placeholder="邮箱" v-model="email" />
            <input type="text" placeholder="用户名" v-model="userName" />
            <input type="text" placeholder="账号" v-model="loginAccount" />
            <input type="password" placeholder="密码" v-model="password" />
            <input type="password" placeholder="确认密码" v-model="password1" />
            <div class="button" @click="register()" >注册</div>
            <span style="margin-top:10px" @click="login()">已有账号，前往登录？</span>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <img class="logo" src="../../assets/image/logo2.png" alt="" />
              <p style="color:#ffffff">
                [code learning English Learning System]
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import {saveUser} from '../../api/api'
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      email: "",
      loginAccount: "",
      password: "",
      password1: "",
    };
  },
  methods: {
    register() {
      if (!this.email) {
        this.$message({
          message: '请输入邮箱',
          type: 'warning'
        });
        return
      }
      if (!this.userName) {
        this.$message({
          message: '请输入用户名',
          type: 'warning'
        });
        return
      }
      if (!this.loginAccount) {
        this.$message({
          message: '请输入账号',
          type: 'warning'
        });
        return
      }
      if (!this.password) {
        this.$message({
          message: '请输入密码',
          type: 'warning'
        });
        return
      }
      if (!this.password1) {
        this.$message({
          message: '请输入确认密码',
          type: 'warning'
        });
        return
      }
      if (this.password != this.password1) {
        this.$message({
          message: '两次密码输入不一致',
          type: 'warning'
        });
        return
      }
      var param = {
        email: this.email,
        userName: this.userName,
        loginAccount: this.loginAccount,
        password: this.password,
        userType: 1
      }
      saveUser(param).then(res => {
        if (res.code == 1000) {
          this.$message({
            message: '注册成功',
            type: 'success'
          });
          this.$router.push("/login")
        } else {
          this.$message({
            message: res.message,
            type: 'warning'
          });
          return
        }
      })
    },
    login() {
      this.$router.push("/login")
    }
  }
};
</script>
<style  scoped>
#login {
  font-family: '黑体';
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* margin: -20px 0 50px; */
  /* background-image: url("https://www.17sucai.com/preview/1749733/2019-06-22/%E7%99%BB%E5%BD%95/img/img1.png"); */
  background-image: url('../../assets/image/login2.jpeg');
  background-size: cover;
}
.logo {
  width: 160px;
  height: auto;
}
h2 {
  font-weight: bold;
  margin: 0;
  color: #ffffff
}

p {
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
  color: #ffffff;
}

a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.container {
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: absolute;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  opacity: 0.8;
}

.form-container form {
  background: rgba(45, 52, 54, 1);
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.form-container input {
  background: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.button {
  cursor: pointer;
  border-radius: 20px;
  /* border: 1px solid #ff4b2b;
  background: #ff4b2b; */
  /* border: 1px solid #fa8817;
  background: #fa8817; */
    border: 1px solid #1BBFB4;
  background: #1BBFB4;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin-top: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

input[type="text"] {
  width: 240px;
  text-align: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  font-family: "PLay", sans-serif;
  font-size: 16px;
  font-weight: 200px;
  padding: 10px 0;
  transition: border 0.5s;
  outline: none;
  color: #fff;
  font-weight: bold;
}

input[type="password"] {
  width: 240px;
  text-align: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  font-family: "PLay", sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  transition: border 0.5s;
  outline: none;
  color: #fff;
}

input[type="email"] {
  width: 240px;
  text-align: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  font-family: "PLay", sans-serif;
  font-size: 16px;
  font-weight: 200px;
  padding: 10px 0;
  transition: border 0.5s;
  outline: none;
  color: #fff;
  font-weight: bold;
}

.button:active {
  transform: scale(0.95);
}

.button:focus {
  outline: none;
}

.button.ghost {
  background: transparent;

  /* border-color: #fa8817;
  background-color: #fa8817; */
   border-color: #1BBFB4;
  background-color: #1BBFB4;
  margin: 0;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: transparent;
  background: linear-gradient(to right, #ff4b2b, #ff416c) no repeat 0 0 / cover;
  color: #fff;
  position: absolute;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-right {
  right: 0;
  text-align: center;
  transform: translateX(0);
}
</style>
