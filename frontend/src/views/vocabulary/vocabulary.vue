<template>
  <div class="index">
    <headers></headers>
    <div class="search">
        <div class="search-content">
            <div class="search-input">
                <el-input v-model="keyword" placeholder="请输入想要搜索的词汇"></el-input>
                <div class="search-btn" @click="search">
                    即刻搜索<i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="select-key">
                <div style="width:80px">首字母：</div>
                <div @click="selectKey('')">全部</div>
                <div @click="selectKey('a')">a</div>
                <div @click="selectKey('b')">b</div>
                <div @click="selectKey('c')">c</div>
                <div @click="selectKey('d')">d</div>
                <div @click="selectKey('e')">e</div>
                <div @click="selectKey('f')">f</div>
                <div @click="selectKey('g')">g</div>
                <div @click="selectKey('h')">h</div>
                <div @click="selectKey('i')">i</div>
                <div @click="selectKey('j')">j</div>
                <div @click="selectKey('k')">k</div>
                <div @click="selectKey('l')">l</div>
                <div @click="selectKey('m')">m</div>
                <div @click="selectKey('n')">n</div>
                <div @click="selectKey('o')">o</div>
                <div @click="selectKey('p')">p</div>
                <div @click="selectKey('q')">q</div>
                <div @click="selectKey('r')">r</div>
                <div @click="selectKey('s')">s</div>
                <div @click="selectKey('t')">t</div>
                <div @click="selectKey('u')">u</div>
                <div @click="selectKey('v')">v</div>
                <div @click="selectKey('w')">w</div>
                <div @click="selectKey('x')">x</div>
                <div @click="selectKey('y')">y</div>
                <div @click="selectKey('z')">z</div>
            </div>
        </div>
    </div>
    <div class="keys">
        <div class="keys-list">
            <div class="keys-item" v-for="(item,index) in table" :key="index">
                <div class="keys-icon" @click="toInfo(item.id)">
                    <i style="font-size:28px;color:#ffffff" class="el-icon-monitor"></i>
                </div>
                <div class="keys-name">
                    <div class="keys-name1">{{item.name}}</div>
                    <div class="keys-name2" :title="item.definition">中文：{{item.definition}}</div>
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
    <el-dialog
        title="词汇详情"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <span>
            <el-tabs type="border-card">
                <el-tab-pane label="中英对照">
                    <div style="font-size:17px;margin-top:10px">中英对照
                      <el-button v-if="!flag" @click="saveApeVocabularyUser" size="mini" type="success" icon="el-icon-check" circle></el-button>
                      <el-button v-if="flag" @click="removeApeVocabularyUser" size="mini" type="warning" icon="el-icon-close" circle></el-button>
                    </div>
                    <div style="font-size:17px;margin-top:10px">{{info.name}} n. {{info.definition}}</div>
                    <div style="font-size:25px;margin-top:10px;cursor: pointer;" >
                        <i class="el-icon-headset" title="点击发音（英）" @click="play"></i>
                    </div>
                    <audio v-if="dialogVisible" style="display:none" ref="audio" controls>
                      <source :src="$store.state.HOST + info.audio">
                    </audio> 
                </el-tab-pane>
                <el-tab-pane label="实际运用">
                    <div style="font-size:17px;margin-top:10px">实际运用</div>
                    <div v-for="(item,index) in example" :key="index">
                        <div style="font-size:15px;margin-top:10px"><span style="color:red">{{index + 1}}.</span>{{item.english}}</div>
                        <div style="font-size:15px;margin-top:10px">{{item.chinese}}</div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="术语总结">
                    <div style="font-size:17px;margin-top:10px">术语总结</div>
                    <div style="font-size:15px;margin-top:10px">[{{info.name}}]{{info.chinese}}</div>
                </el-tab-pane>
            </el-tabs>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="handleClose">关闭</el-button>
        </span>
    </el-dialog>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import {getApeVocabularyPage,getApeVocabularyById,getCountByUserAndV,saveApeVocabularyUser,removeApeVocabularyUser} from '../../api/api'
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        keyword: "",
        start: "",
        table: [],
        total: 100,
        pageSize: 24,
        pageNumber: 1,
        dialogVisible: false,
        info: {
          name: "",
          definition: "",
          example: "[]",
          chinese: ""
        },
        example: [],
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
      toInfo(id) {
        getApeVocabularyById({id:id}).then(res => {
          if (res.code == 1000) {
            this.info = res.data
            this.example = JSON.parse(this.info.example)
            this.getCountByUserAndV(id)
            this.dialogVisible = true
          }
        }) 
      },
      getCountByUserAndV(id) {
        getCountByUserAndV({id:id}).then(res => {
          if (res.code == 1000) {
            this.flag = true
          } else {
            this.flag = false
          }
        })
      },
      saveApeVocabularyUser() {
        var param = {
          vocabularyId: this.info.id,
          name: this.info.name
        }
        saveApeVocabularyUser(param).then(res => {
          if (res.code == 1000) {
            this.flag = true
          }
        })
      },
      removeApeVocabularyUser() {
        removeApeVocabularyUser({id:this.info.id}).then(res => {
          if (res.code == 1000) {
            this.flag = false
          }
        })
      },
      handleClose() {
        this.$refs.audio.pause()
        this.info = {}
        this.example = []
        this.dialogVisible = false
      },
      handleCurrentChange(val) {
        this.pageNumber = val
        this.search()
      },
      search() {
        var param = {
          pageSize: this.pageSize,
          pageNumber: this.pageNumber,
          name: this.keyword,
          start: this.start
        }
        getApeVocabularyPage(param).then(res => {
          if (res.code == 1000) {
            this.table = res.data.records
            this.total = res.data.total
          }
        }) 
      },
      selectKey(start) {
        this.keyword = ""
          this.start = start
          this.search()
      }
    },
    created() {
     
    },
    mounted() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.pageNumber = 1
      this.search()
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/vocabulary.css');
</style>