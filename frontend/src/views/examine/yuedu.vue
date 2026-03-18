<template>
  <div class="yueduInfo">
    <headers></headers>
    <div class="yueduInfo1">
        <div class="yueduInfo2">
            <div style="margin-top:20px;font-weight:bold">{{info.name}}</div>
            <div style="margin-top:20px;margin-left:20px;margin-right:20px;margin-bottom:20px">
               <div>{{info.content}}</div>
            </div>
        </div>
    </div>
    <div class="yueduInfo1">
        <div class="yueduInfo3">
            <div style="margin-top:20px;margin-left:20px;font-weight:bold">题目：</div>
            <div class="yueduInfo4" v-for="(item,index) in items" :key="index">
                <div>{{index + 1}}.{{item.content}}</div>
                <el-radio-group style="margin-top:20px" v-model="item.result">
                    <el-radio v-for="(e,s) in JSON.parse(item.selects)" :label="e.select">{{e.select}}.{{e.content}}</el-radio>
                </el-radio-group>
            </div>
            <div class="yueduInfo5">
                <el-button @click="save()" size="small" type="primary" plain>提交</el-button>
            </div>
        </div>
    </div>
    <el-dialog
      title="结果"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <span>
        <div>正确：{{right}}题 · 错误：{{wrong}}题</div>
        <div style="margin-top:20px;font-size:12px;color:red">详细信息请前往学习记录查看</div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import {getApeExamineById,getApeExamineItemByIdE,saveApeExamineUser,saveApeExamineItemUser} from '../../api/api'
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        id: "",
        info: {},
        items: [],
        dialogVisible: false,
        right: "",
        wrong: "",
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      save() {
        for (let i = 0;i < this.items.length;i++) {
          var item = this.items[i]
          if (!item.result) {
            this.$message({
              message: '第' + i + "题未选择答案",
              type: 'warning'
            });
            return
          }
        }
        var param = {
          examineId: this.id,
          name: this.info.name,
          introduction: this.info.introduction,
          content: this.info.content,
          audio: this.info.audio,
          type: this.info.type,
          items: this.items
        }
        saveApeExamineUser(param).then(res => {
          if (res.code == 1000) {
            this.$message({
              message: '提交成功',
              type: 'success'
            });
            this.right = res.data.right
            this.wrong = res.data.wrong
            this.dialogVisible = true
          }
        })
      },
      getApeExamineById() {
        getApeExamineById({id: this.id}).then(res => {
          if (res.code == 1000) {
            this.info = res.data
          }
        })
      },
      getApeExamineItemByIdE() {
        getApeExamineItemByIdE({id:this.id}).then(res => {
          if (res.code == 1000) {
            this.items = res.data
            for(let i = 0;i < this.items.length;i++) {
              this.items[i].result = ""
            }
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
      this.getApeExamineById()
      this.getApeExamineItemByIdE()
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/yuedu.css');
</style>