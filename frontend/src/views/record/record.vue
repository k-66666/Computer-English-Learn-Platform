<template>
  <div class="record">
    <headers></headers>
    <div class="record1">
      <div class="record2">
        <el-tabs type="border-card">
          <el-tab-pane label="学会的单词">
            <div class="keys">
                <div class="keys-list" style="width:100%">
                    <div class="keys-item" v-for="(item,index) in table">
                        <div class="keys-icon" @click="toInfo(item.vocabularyId)">
                            <i style="font-size:28px;color:#ffffff" class="el-icon-monitor"></i>
                        </div>
                        <div class="keys-name">
                            <div class="keys-name1">{{item.name}}</div>
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
          </el-tab-pane>
          <el-tab-pane label="学会的语法">
            <div class="juzi">
                <div class="juzi-list" style="width:100%">
                    <div class="juzi-item" @click="toInfoYF(item.syntaxId)" v-for="(item,index) in tableSyntax">
                        <div title="1111">{{index + 1}}.{{item.content}}</div>
                        <div style="margin-top:7px" title="1111">中文释义：{{item.chinese}}</div>
                    </div>
                </div>
            </div>
            <div class="page">
                <el-pagination
                background
                :page-size="pageSizeSyntax"
                layout="prev, pager, next"
                    @current-change="handleCurrentChangeYF"
                :total="totalSyntax">
                </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="学会的口语">
            <div class="juzi">
                <div class="juzi-list" style="width:100%">
                    <div class="juzi-item" v-for="(item,index) in tableSpoken" @click="toInfoKY(item.spokenId)">
                        <div title="1111">{{index + 1}}.{{item.content}}</div>
                        <div style="margin-top:7px" title="1111">中文释义：{{item.chinese}}</div>
                    </div>
                </div>
            </div>
            <div class="page">
                <el-pagination
                background
                :page-size="pageSizeSpoken"
                layout="prev, pager, next"
                    @current-change="handleCurrentChangeKY"
                :total="totalSpoken">
                </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="看完的文献">
            <div class="juzi">
                <div class="juzi-list" style="width:100%">
                    <div class="juzi-item" v-for="(item,index) in tableLiterature" @click="toInfoWX(item.literatureId)">
                        <div title="1111">{{index + 1}}.{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="page">
                <el-pagination
                background
                :page-size="pageSizeLiterature"
                layout="prev, pager, next"
                    @current-change="handleCurrentChangeL"
                :total="totalLiterature">
                </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="做过的代码填空">
            <div class="yuedu">
                <div class="yuedu-item" v-for="(item,index) in tableYD" :key="index" @click="toYueDuInfo(item.examineId)">
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
          <el-tab-pane label="做过的听力练习">
            <div class="yuedu">
              <div class="yuedu-item" v-for="(item,index) in tableTL" :key="index" @click="toTingLiInfo(item.examineId)">
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
          <el-tab-pane label="做过的代码判断">
            <div class="yuedu">
                <div class="yuedu-item" v-for="(item,index) in tableWX" :key="index" @click="toXuanCiInfo(item.examineId)">
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
          <el-tab-pane label="数据分析">
            <div class="record11">
              <div class="record12" id="chart1">

              </div>
              <div class="record13" id="chart2">
                
              </div>
              <div class="record14" id="chart3">
                
              </div>
              <div class="record15" id="chart4">
                
              </div>
              <div class="record16" id="chart5">

              </div>
              <div class="record17" id="chart6">
                
              </div>
              <div class="record18" id="chart9">
                
              </div>
              <div class="record19" id="chart10">
                
              </div>
              <div class="record18" id="chart7">
                
              </div>
              <div class="record19" id="chart8">
                
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <el-dialog
        title="词汇详情"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <span>
            <el-tabs type="border-card">
                <el-tab-pane label="详细释义">
                    <div style="font-size:17px;margin-top:10px">词典释义 
                    </div>
                    <div style="font-size:17px;margin-top:10px">{{info.name}} n. {{info.definition}}</div>
                    <div style="font-size:25px;margin-top:10px;cursor: pointer;" >
                        <i class="el-icon-headset" title="音频" @click="play"></i>
                    </div>
                    <audio v-if="dialogVisible" style="display:none" ref="audio" controls>
                        <source :src="$store.state.HOST + info.audio">
                    </audio> 
                </el-tab-pane>
                <el-tab-pane label="双语例句">
                    <div style="font-size:17px;margin-top:10px">双语例句</div>
                    <div v-for="(item,index) in example" :key="index">
                        <div style="font-size:15px;margin-top:10px"><span style="color:red">{{index + 1}}.</span>{{item.english}}</div>
                        <div style="font-size:15px;margin-top:10px">{{item.chinese}}</div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="中文释义">
                    <div style="font-size:17px;margin-top:10px">中文释义</div>
                    <div style="font-size:15px;margin-top:10px">[{{info.name}}]{{info.chinese}}</div>
                </el-tab-pane>
            </el-tabs>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="handleClose">关闭</el-button>
        </span>
    </el-dialog>
    <el-dialog
        title="语法详情"
        :visible.sync="dialogVisibleYF"
        width="50%"
        :before-close="handleCloseYF">
        <span class="juzi-info">
            <div><span style="font-weight:bold">类型：</span>{{infoYF.type}}</div>
            <div><span style="font-weight:bold">句子：</span>{{infoYF.content}}
            </div>
            <div><span style="font-weight:bold">中文释义：</span>{{infoYF.chinese}}</div>
            <div><span style="font-weight:bold">分析：</span></div>
            <div class="juzi-fenxi">
                <div v-for="(item,index) in analysis" :key="index"><span style="color:red">({{index + 1}})</span> {{item.name}}</div>
            </div>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="handleClose">关闭</el-button>
        </span>
    </el-dialog>
    <el-dialog
        title="口语详情"
        :visible.sync="dialogVisibleKY"
        width="50%"
        :before-close="handleCloseKY">
        <span class="juzi-info">
            <div><span style="font-weight:bold">句子：</span>{{infoKY.content}}
            </div>
            <div><span style="font-weight:bold">中文释义：</span>{{infoKY.chinese}}</div>
            <div style="font-size:25px;margin-top:10px;cursor: pointer;" >
                <i class="el-icon-headset" title="音频" @click="playKY"></i>
            </div> 
            <audio v-if="dialogVisibleKY" style="display:none" ref="audioKY" controls>
                <source :src="$store.state.HOST + infoKY.audio">
            </audio>            
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="handleCloseKY">关闭</el-button>
        </span>
    </el-dialog>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import {getRecord,getApeSpokenById,getApeSyntaxById,getApeVocabularyById,getApeVocabularyUserPage,getApeSyntaxUserPage,getApeSpokenUserPage,getApeLiteratureUserPage,getApeExamineUserPage} from '../../api/api'
  import * as echarts from "echarts";
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        table: [],
        total: 100,
        pageSize: 15,
        pageNumber: 1,
        tableSyntax: [],
        totalSyntax: 100,
        pageSizeSyntax: 15,
        pageNumberSyntax: 1,
        tableSpoken: [],
        totalSpoken: 100,
        pageSizeSpoken: 15,
        pageNumberSpoken: 1,
        tableLiterature: [],
        totalLiterature: 100,
        pageSizeLiterature: 15,
        pageNumberLiterature: 1,
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
        myChart1: null,
        myChart2: null,
        myChart3: null,
        myChart4: null,
        myChart5: null,
        myChart6: null,
        myChart7: null,
        myChart8: null,
        myChart9: null,
        myChart10: null,
        user: {},
        dialogVisible: false,
        info: {
          name: "",
          definition: "",
          example: "[]",
          chinese: ""
        },
        example: [],
        dialogVisibleYF: false,
        infoYF: {
          type: "",
          content: "",
          chinese: "",
          analysis: "[]"
        },
        analysis: [],
        dialogVisibleKY: false,
        infoKY: {
          content: "",
          chinese: "",
          audio: ""
        },
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
      playKY() {
        this.$refs.audioKY.load()
        this.$refs.audioKY.play();
      },
      toXuanCiInfo(id) {
        this.$router.push("/xuanci1?id=" + id)
      },
      toYueDuInfo(id) {
        this.$router.push("/yuedu1?id=" + id)
      },
      toTingLiInfo(id) {
        this.$router.push("/tingli1?id=" + id)
      },
      toInfoWX(id) {
        this.$router.push("/literatureInfo?id=" + id)
      },
      toInfo(id) {
        getApeVocabularyById({id:id}).then(res => {
          if (res.code == 1000) {
            this.info = res.data
            this.example = JSON.parse(this.info.example)
            this.dialogVisible = true
          }
        }) 
      },
      handleClose() {
        this.info = {}
        this.example = []
        this.dialogVisible = false
      },
      toInfoYF(id) {
        getApeSyntaxById({id:id}).then(res => {
          if (res.code == 1000) {
            this.infoYF = res.data
            this.analysis = JSON.parse(this.infoYF.analysis)
            this.dialogVisibleYF = true
          }
        })
      },
      handleCloseYF() {
        this.analysis = []
        this.infoYF = {}
        this.dialogVisibleYF = false
      },
      toInfoKY(id) {
        getApeSpokenById({id:id}).then(res => {
          if (res.code == 1000) {
            this.infoKY = res.data
            this.dialogVisibleKY = true
          }
        })
      },
      handleCloseKY() {
        this.infoKY = {}
        this.dialogVisibleKY = false
      },
      getApeVocabularyUserPage() {
          var param = {
              userId: this.user.id,
              pageSize: this.pageSize,
              pageNumber: this.pageNumber
          }
          getApeVocabularyUserPage(param).then(res => {
              if (res.code == 1000) {
                  this.table = res.data.records
                  this.total = res.data.total
              }
          })
      },
      getApeSyntaxUserPage() {
          var param = {
              userId: this.user.id,
              pageSize: this.pageSizeSyntax,
              pageNumber: this.pageNumberSyntax
          }
          getApeSyntaxUserPage(param).then(res => {
              if (res.code == 1000) {
                  this.tableSyntax = res.data.records
                  this.totalSyntax = res.data.total
              }
          })
      },
      getApeSpokenUserPage() {
          var param = {
              userId: this.user.id,
              pageSize: this.pageSizeSpoken,
              pageNumber: this.pageNumberSpoken
          }
          getApeSpokenUserPage(param).then(res => {
              if (res.code == 1000) {
                  this.tableSpoken = res.data.records
                  this.totalSpoken = res.data.total
              }
          })
      },
      getApeLiteratureUserPage() {
          var param = {
              userId: this.user.id,
              pageSize: this.pageSizeLiterature,
              pageNumber: this.pageNumberLiterature
          }
          getApeLiteratureUserPage(param).then(res => {
              if (res.code == 1000) {
                  this.tableLiterature = res.data.records
                  this.totalLiterature = res.data.total
              }
          })
      },
      getApeExamineUserPage(type) {
          var param = {}
          if(type == 0) {
            param = {
                type: type,
                userId: this.user.id,
                pageSize: this.pageSizeYD,
                pageNumber: this.pageNumberYD
            }
          }
          if(type == 1) {
            param = {
                type: type,
                userId: this.user.id,
                pageSize: this.pageSizeTL,
                pageNumber: this.pageNumberTL
            }
          }
          if(type == 2) {
            param = {
                type: type,
                userId: this.user.id,
                pageSize: this.pageSizeWX,
                pageNumber: this.pageNumberWX
            }
          }
          getApeExamineUserPage(param).then(res => {
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
      },
      handleCurrentChange(val) {
        this.pageNumber = val
        this.getApeVocabularyUserPage()
      },
      handleCurrentChangeYF(val) {
        this.pageNumberSyntax = val
        this.getApeSyntaxUserPage()
      },
      handleCurrentChangeKY(val) {
        this.pageNumberSpoken = val
        this.getApeSpokenUserPage()
      },
      handleCurrentChangeL(val) {
        this.pageNumberLiterature = val
        this.getApeLiteratureUserPage()
      },
      handleCurrentChangeYD(val) {
        this.pageNumberYD = val
        this.getApeExamineUserPage(0)
      },
      handleCurrentChangeTL(val) {
        this.pageNumberTL = val
        this.getApeExamineUserPage(1)
      },
      handleCurrentChangeWX(val) {
        this.pageNumberWX = val
        this.getApeExamineUserPage(2)
      },
      getRecord() {
        getRecord().then(res => {
            if (res.code == 1000) {
                this.myChart1 = echarts.init(document.getElementById("chart1"))
                var option = {
                    title: {
                        text: '近七日词汇学习量',
                    },
                    tooltip: {
                    trigger: 'axis'
                    },
                    backgroundColor: '#fff',
                    xAxis: [{
                        type: 'category',
                        color: '#59588D',
                        data: res.data.data,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        data: res.data.cihui,
                        type: 'line',
                        name: '词汇量',
                        symbol: 'none',
                        smooth:true,
                        areaStyle: {
                        color: "#F2F3FE"
                        },
                        lineStyle: {
                            color: '#7081FA',
                            width: 2,
                            shadowColor: '#7081FA',//设置折线阴影
                            shadowBlur: 15,
                            shadowOffsetY: 20,
                        },
                        zlevel: 1
                    }
                ]
                };
                this.myChart1.setOption(option);

                this.myChart2 = echarts.init(document.getElementById("chart2"))
                var option = {
                    title: {
                        text: '近七日词汇总学习量',
                    },
                    tooltip: {
                    trigger: 'axis'
                    },
                    backgroundColor: '#fff',
                    xAxis: [{
                        type: 'category',
                        color: '#59588D',
                        data: res.data.data,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        type: 'bar',
                        data: res.data.cihuiTotal,
                        barWidth: '15px',
                        name: '词汇量',
                        itemStyle: {
                            normal: {
                                color: function(params){//展示正值的柱子，负数设为透明
                                    let colorArr = params.value > 0?['#7866BE', '#7866BE']:['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
                                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: colorArr[0] // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color:  colorArr[1]// 100% 处的颜色
                                    }], false)
                                },
                                barBorderRadius: [30,30,0,0]
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                fontSize: 13,
                                color: '#333',
                                position: 'top',
                            }
                        },
                        zlevel: 2
                    }
                ]
                };
                this.myChart2.setOption(option);

                this.myChart3 = echarts.init(document.getElementById("chart3"))
                var option = {
                    title: {
                        text: '近七日语法学习量',
                    },
                    tooltip: {
                    trigger: 'axis'
                    },
                    backgroundColor: '#fff',
                    xAxis: [{
                        type: 'category',
                        color: '#336252',
                        data: res.data.data,
                        axisLine: {
                            lineStyle: {
                                color: '#336252',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        data: res.data.yufa,
                        type: 'line',
                        name: '语法量',
                        symbol: 'none',
                        smooth:true,
                        areaStyle: {
                        color: "#6CC440"
                        },
                        lineStyle: {
                            color: '#6CC440',
                            width: 2,
                            shadowColor: '#6CC440',//设置折线阴影
                            shadowBlur: 15,
                            shadowOffsetY: 20,
                        },
                        zlevel: 1
                    }
                ]
                };
                this.myChart3.setOption(option);

                this.myChart4 = echarts.init(document.getElementById("chart4"))
                var option = {
                    title: {
                        text: '近七日语法总学习量',
                    },
                    tooltip: {
                    trigger: 'axis'
                    },
                    backgroundColor: '#fff',
                    xAxis: [{
                        type: 'category',
                        color: '#F7DF1E',
                        data: res.data.data,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        type: 'bar',
                        data: res.data.yufaTotal,
                        barWidth: '15px',
                        name: '语法量',
                        itemStyle: {
                            normal: {
                                color: "#F7DF1E",
                                barBorderRadius: [30,30,0,0]
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                fontSize: 13,
                                color: '#333',
                                position: 'top',
                            }
                        },
                        zlevel: 2
                    }
                ]
                };
                this.myChart4.setOption(option);

                this.myChart5 = echarts.init(document.getElementById("chart5"))
                var option = {
                    title: {
                        text: '近七日口语学习量',
                    },
                    tooltip: {
                    trigger: 'axis'
                    },
                    backgroundColor: '#fff',
                    xAxis: [{
                        type: 'category',
                        color: '#59588D',
                        data: res.data.data,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        data: res.data.kouyu,
                        type: 'line',
                        name: '口语量',
                        symbol: 'none',
                        smooth:true,
                        areaStyle: {
                        color: "#52B9FF"
                        },
                        lineStyle: {
                            color: '#52B9FF',
                            width: 2,
                            shadowColor: '#52B9FF',//设置折线阴影
                            shadowBlur: 15,
                            shadowOffsetY: 20,
                        },
                        zlevel: 1
                    }
                ]
                };
                this.myChart5.setOption(option);

                this.myChart6 = echarts.init(document.getElementById("chart6"))
                var option = {
                    title: {
                        text: '近七日词口语学习量',
                    },
                    tooltip: {
                    trigger: 'axis'
                    },
                    backgroundColor: '#fff',
                    xAxis: [{
                        type: 'category',
                        color: '#52B9FF',
                        data: res.data.data,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        type: 'bar',
                        data: res.data.kouyuTotal,
                        barWidth: '15px',
                        name: '口语量',
                        itemStyle: {
                            normal: {
                                color: "#52B9FF",
                                barBorderRadius: [30,30,0,0]
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                fontSize: 13,
                                color: '#52B9FF',
                                position: 'top',
                            }
                        },
                        zlevel: 2
                    }
                ]
                };
                this.myChart6.setOption(option);

                this.myChart7 = echarts.init(document.getElementById("chart7"))
                var option = {
                    title: {
                        text: '近七日习题测试量',
                    },
                    tooltip: {
                    trigger: 'axis'
                    },
                    backgroundColor: '#fff',
                    xAxis: [{
                        type: 'category',
                        color: '#61E2D5',
                        data: res.data.data,
                        axisLine: {
                            lineStyle: {
                                color: '#61E2D5',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        data: res.data.zice,
                        type: 'line',
                        name: '习题量',
                        symbol: 'none',
                        smooth:true,
                        areaStyle: {
                        color: "#61E2D5"
                        },
                        lineStyle: {
                            color: '#61E2D5',
                            width: 2,
                            shadowColor: '#61E2D5',//设置折线阴影
                            shadowBlur: 15,
                            shadowOffsetY: 20,
                        },
                        zlevel: 1
                    }
                ]
                };
                this.myChart7.setOption(option);

                this.myChart8 = echarts.init(document.getElementById("chart8"))
                var option = {
                    title: {
                        text: '近七日习题总测试量',
                    },
                    tooltip: {
                    trigger: 'axis'
                    },
                    backgroundColor: '#fff',
                    xAxis: [{
                        type: 'category',
                        color: '#F7DF1E',
                        data: [1,2,3,4,5,6,7],
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        type: 'bar',
                        data: res.data.ziceTotal,
                        barWidth: '15px',
                        name: '习题量',
                        itemStyle: {
                            normal: {
                                color: "#61E2D5",
                                barBorderRadius: [30,30,0,0]
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                fontSize: 13,
                                color: '#333',
                                position: 'top',
                            }
                        },
                        zlevel: 2
                    }
                ]
                };
                this.myChart8.setOption(option);
                this.myChart9 = echarts.init(document.getElementById("chart9"))
                var option = {
                    title: {
                        text: '近七日文献阅读量',
                    },
                    tooltip: {
                    trigger: 'axis'
                    },
                    backgroundColor: '#fff',
                    xAxis: [{
                        type: 'category',
                        color: '#FEDEE0',
                        data: res.data.data,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        data: res.data.wenxian,
                        type: 'line',
                        name: '文献量',
                        symbol: 'none',
                        smooth:true,
                        areaStyle: {
                        color: "#FEDEE0"
                        },
                        lineStyle: {
                            color: '#FEDEE0',
                            width: 2,
                            shadowColor: '#FEDEE0',//设置折线阴影
                            shadowBlur: 15,
                            shadowOffsetY: 20,
                        },
                        zlevel: 1
                    }
                ]
                };
                this.myChart9.setOption(option);

                this.myChart10 = echarts.init(document.getElementById("chart10"))
                var option = {
                    title: {
                        text: '近七日文献总阅读量',
                    },
                    tooltip: {
                    trigger: 'axis'
                    },
                    backgroundColor: '#fff',
                    xAxis: [{
                        type: 'category',
                        color: '#59588D',
                        data: res.data.data,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                    }],
                    yAxis: [{
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(107,107,107,0.37)',
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(131,101,101,0.2)',
                                type: 'dashed',
                            }
                        }
                    }],
                    series: [{
                        type: 'bar',
                        data: res.data.wenxianTotal,
                        barWidth: '15px',
                        name: '文献量',
                        itemStyle: {
                            normal: {
                                color: "#FEDEE0",
                                barBorderRadius: [30,30,0,0]
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                fontSize: 13,
                                color: '#333',
                                position: 'top',
                            }
                        },
                        zlevel: 2
                    }
                ]
                };
                this.myChart10.setOption(option);
                var that = this
                window.onresize = function() {
                    that.myChart1.resize(); 
                    that.myChart2.resize(); 
                    that.myChart3.resize(); 
                    that.myChart4.resize(); 
                    that.myChart5.resize(); 
                    that.myChart6.resize(); 
                    that.myChart7.resize(); 
                    that.myChart8.resize(); 
                    that.myChart9.resize(); 
                    that.myChart10.resize(); 
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
      this.user = JSON.parse(window.localStorage.getItem("user_info"))
      this.getRecord()
      this.getApeVocabularyUserPage()
      this.getApeSyntaxUserPage()
      this.getApeSpokenUserPage()
      this.getApeLiteratureUserPage()
      this.getApeExamineUserPage(0)
      this.getApeExamineUserPage(1)
      this.getApeExamineUserPage(2)
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/vocabulary.css');
  @import url('../../assets/css/syntax.css');
  @import url('../../assets/css/spoken.css');
  @import url('../../assets/css/examine.css');
  @import url('../../assets/css/record.css');
</style>