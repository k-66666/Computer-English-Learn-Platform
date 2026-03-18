<template>
  <div class="examine">
    <headers></headers>
    <div class="examine1">
        <div class="examine2">
            <el-tabs v-model="active" @tab-click="handleClick">
                <el-tab-pane name="first">
                    <span slot="label"><i class="el-icon-reading"></i> 代码选择</span>
                    <div class="yuedu">
                        <div class="yuedu-item" v-for="(item,index) in tableYD" :key="index" @click="toYueDuInfo(item.id)">
                            <div class="yuedu1">
                                <img style="width:65%;margin-top:20px" src="../../assets/image/阅读.png">
                            </div>
                            <div class="yuedu2">
                                <div class="yuedu3">{{item.name}}</div>
                                <div class="yuedu4">{{item.introduction}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination
                        background
                        :page-size="pageSizeYD"
                        layout="prev, pager, next"
                        @current-change="handleCurrentChangeYD"
                        :total="totalYD">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="second">
                    <span slot="label"><i class="el-icon-service"></i> 职场听力</span>
                    <div class="yuedu">
                        <div class="yuedu-item" v-for="(item,index) in tableTL" :key="index" @click="toTingLiInfo(item.id)">
                            <div class="yuedu1">
                                <img style="width:65%;margin-top:20px" src="../../assets/image/英语听力.png">
                            </div>
                            <div class="yuedu2">
                                <div class="yuedu3">{{item.name}}</div>
                                <div class="yuedu4">{{item.introduction}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination
                        background
                        :page-size="pageSizeTL"
                        layout="prev, pager, next"
                        @current-change="handleCurrentChangeTL"
                        :total="totalTL">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="third">
                    <span slot="label"><i class="el-icon-open"></i> 代码判断</span>
                    <div class="yuedu">
                        <div class="yuedu-item" v-for="(item,index) in tableWX" :key="index" @click="toXuanCiInfo(item.id)">
                            <div class="yuedu1">
                                <img style="width:65%;margin-top:20px" src="../../assets/image/选词助手 查找.png">
                            </div>
                            <div class="yuedu2">
                                <div class="yuedu3">{{item.name}}</div>
                                <div class="yuedu4">{{item.introduction}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination
                        background
                        :page-size="pageSizeWX"
                        layout="prev, pager, next"
                        @current-change="handleCurrentChangeWX"
                        :total="totalWX">
                        </el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import {getApeExaminePage} from '../../api/api'
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        active: 'first',
        tableYD: [],
        totalYD: 100,
        pageSizeYD: 15,
        pageNumberYD: 1,

        tableTL: [],
        totalTL: 100,
        pageSizeTL: 15,
        pageNumberTL: 1,

        tableWX: [],
        totalWX: 100,
        pageSizeWX: 15,
        pageNumberWX: 1,
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      handleClick(tab, event) {
        if (tab.index == 0) {
            this.search(0,this.pageSizeYD,1)
        } else if (tab.index == 1) {
            this.search(1,this.pageSizeTL,1)
        } else {
            this.search(2,this.pageSizeWX,1)
        }
      },
      toYueDuInfo(id) {
          this.$router.push("yuedu?id=" + id)
      },
      toTingLiInfo(id) {
          this.$router.push("tingli?id=" + id)
      },
      toXuanCiInfo(id) {
          this.$router.push("xuanci?id=" + id)
      },
      handleCurrentChangeYD(val) {
        this.pageNumberYD = val
        this.search(0,this.pageSizeYD,this.pageNumberYD)
      },
      handleCurrentChangeTL(val) {
        this.pageNumberTL = val
        this.search(1,this.pageSizeTL,this.pageNumberTL)
      },
      handleCurrentChangeWX(val) {
        this.pageNumberWX = val
        this.search(2,this.pageSizeWX,this.pageNumberWX)
      },
      search(type,pageSize,pageNumber) {
        var param = {
            type: type,
            pageSize: pageSize,
            pageNumber: pageNumber,
        }
        getApeExaminePage(param).then(res => {
            if (res.code == 1000) {
                if (type == 0) {
                    this.tableYD = res.data.records
                    this.totalYD = res.data.total
                }
                if (type == 1) {
                    this.tableTL = res.data.records
                    this.totalTL = res.data.total
                }
                if (type == 2) {
                    this.tableWX = res.data.records
                    this.totalWX = res.data.total
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
      this.search(0,this.pageSizeYD,this.pageNumberYD)
      this.search(1,this.pageSizeTL,this.pageNumberTL)
      this.search(2,this.pageSizeWX,this.pageNumberWX)
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/examine.css');
</style>