<template>
  <div class="center">
    <headers></headers>
    <div class="center1">
      <div class="center2">
        <el-tabs tab-position="left">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-user"></i> 个人信息</span>
            <div class="center4">
              <el-input size="small" class="center3" v-model="user.loginAccount" disabled></el-input>
              <el-input size="small" class="center3" v-model="user.userName" placeholder="请输入用户名"></el-input>
              <el-input size="small" class="center3" v-model="user.email" placeholder="请输入邮箱"></el-input>
              <el-input size="small" class="center3" v-model="user.tel" placeholder="请输入联系方式"></el-input>
              <el-select size="small" class="center3" v-model="user.sex" placeholder="请选择性别">
                <el-option 
                  label="男"
                  value="0">
                </el-option>
                <el-option
                  label="女"
                  value="1">
                </el-option>
              </el-select>
            </div>
            <el-button style="margin-top:20px;margin-left:20px" size="small" type="primary" @click="editUser" plain>保存</el-button>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-water-cup"></i> 修改密码</span>
            <div class="center4">
              <el-input size="small" class="center3" v-model="oldPassword" placeholder="请输入旧密码"></el-input>
              <el-input size="small" class="center3" v-model="password" placeholder="请输入新密码"></el-input>
            </div>
            <el-button style="margin-top:20px;margin-left:20px" size="small" type="primary" @click="changePassword" plain>保存</el-button>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-picture-outline"></i> 修改头像</span>
            <div>
              <el-upload
                ref="upload"
                :multiple="false"
                :action="uploadImageUrl()"
                :show-file-list="false"
                :before-upload="beforeAvatorUpload"
                :on-success="handleAvatorSuccess"
                accept="image/*"
                >
                <img class="center5" :src="$store.state.HOST + user.avatar">
              </el-upload>
            </div>
            <el-button style="margin-top:20px;margin-left:230px" size="small" type="primary" @click="changeAvatar" plain>保存</el-button>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import {editUser,getUserById,changePassword,changeAvatar} from '../../api/api'
  import { mixin } from '../../minix/index';
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    mixins: [mixin],
    data() {
      return{
        user: {
          loginAccount: "",
          userName: "",
          tel: "",
          email: "",
          sex: "",
        },
        password: "",
        oldPassword: "",
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      handleAvatorSuccess(res) {
        let _this = this;
        if(res.code == 1000){
            this.user.avatar = res.message
        }else{
          _this.$notify.error({
            title: '错误',
            message: res.message
          });
        }
      },
      changeAvatar() {
        changeAvatar({avatar:this.user.avatar}).then(res => {
          if (res.code == 1000) {
            this.$message({
              message: '修改成功',
              type: 'success'
            });
            window.localStorage.setItem("user_info",JSON.stringify(this.user))
          }
        })
      },
      editUser() {
        if (!this.user.userName) {
          this.$message({
            message: '请输入用户名',
            type: 'warning'
          });
          return
        }
        if (!this.user.tel) {
          this.$message({
            message: '请输入联系方式',
            type: 'warning'
          });
          return
        }
        if (!this.user.email) {
          this.$message({
            message: '请输入邮箱',
            type: 'warning'
          });
          return
        }
        if (!this.user.sex) {
          this.$message({
            message: '请选择性别',
            type: 'warning'
          });
          return
        }
        editUser(this.user).then(res => {
          if (res.code == 1000) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            window.localStorage.setItem("user_info",JSON.stringify(this.user))
          }
        })
      },
      changePassword() {
        if (!this.password) {
          this.$message({
            message: '请输入新密码',
            type: 'warning'
          });
          return
        }
        if (!this.oldPassword) {
          this.$message({
            message: '请输入旧密码',
            type: 'warning'
          });
          return
        }
        changePassword({password:this.password,oldPassword:this.oldPassword}).then(res => {
          if (res.code == 1000) {
            this.$message({
              message: '修改成功',
              type: 'success'
            });
          } else {
            this.$message({
              message: res.message,
              type: 'error'
            });
          }
        })
      },
      getUserById() {
        var id = JSON.parse(window.localStorage.getItem("user_info")).id
        getUserById({id:id}).then(res => {
          if (res.code == 1000) {
            this.user = res.data
            this.user.sex = this.user.sex + ""
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
      this.getUserById()
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/center.css');
</style>