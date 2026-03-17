<template>
  <div class="online">
      <div class="search-table">
        <div class="search">
            <el-row :gutter="10" style="padding:10px">
                <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <span class="search-title">登陆地址:</span>
                    <el-input
                        style="margin-top:10px"
                        size="mini"
                        placeholder="请输入登陆地址"
                        suffix-icon="el-icon-date"
                        v-model="search.rolename">
                    </el-input>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <span class="search-title">用户名称:</span>
                    <el-input
                        style="margin-top:10px"
                        size="mini"
                        placeholder="请输入用户名称"
                        suffix-icon="el-icon-date"
                        v-model="search.permission">
                    </el-input>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                    <el-button style="margin-top:10px" size="mini" icon="el-icon-search" type="primary">查询</el-button>
                    <el-button style="margin-top:10px" size="mini" icon="el-icon-refresh">重置</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table">
            <el-table
            :data="tableData"
            :header-cell-style="{
              'color': '#4A2B90',
              'background-color': '#ECE9F4',
            }"
            :row-style="{
              'color': '#888897',
              'font-size': '15px',
              'font-family':'黑体',
              'white-space': 'nowrap'
            }"
            @selection-change="handleSelectionChange"
            stripe
            style="width: 100%">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="name"
              label="Project Name"
              width="180"
              >
            </el-table-column>
            <el-table-column
              prop="lead"
              label="Project Lead"
              width="180"
              >
              <template slot-scope="scope">
                <div style="display:flex;align-items: center">
                  <img style="width:35px;height:35px" src="../../../assets/image/avator.png">
                  <div style="margin-left:10px">{{scope.row.lead}}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="progress"
              label="Progress"
              width="180">
              <template slot-scope="scope">
                  <el-progress v-if="scope.row.progress <= 40" :percentage="scope.row.progress"></el-progress>
                  <el-progress v-else-if="scope.row.progress <= 50" status="success" :percentage="scope.row.progress"></el-progress>
                  <el-progress v-else-if="scope.row.progress <= 60" status="warning" :percentage="scope.row.progress"></el-progress>
                  <el-progress v-else-if="scope.row.progress <= 70" status="exception" :percentage="scope.row.progress"></el-progress>
              </template>
            </el-table-column>
            <el-table-column
              prop="status"
              label="Status"
              width="100">
              <template slot-scope="scope">
                <el-button v-if="scope.row.status == 0" size="mini" type="primary">&nbsp;&nbsp;正常&nbsp;&nbsp;</el-button>
                <el-button v-if="scope.row.status == 1" size="mini" type="success">&nbsp;&nbsp;完成&nbsp;&nbsp;</el-button>
                <el-button v-if="scope.row.status == 2" size="mini" type="danger">&nbsp;&nbsp;失败&nbsp;&nbsp;</el-button>
                <el-button v-if="scope.row.status == 3" size="mini" type="warning">&nbsp;&nbsp;逾期&nbsp;&nbsp;</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="date"
              label="Date"
              >
            </el-table-column>
            <el-table-column
              label="操作"
              width="180"
              >
              <template slot-scope="scope">
                <el-button size="mini" type="success" @click="updateRole">修改</el-button>
                <el-popconfirm
                  style="margin-left:5px"
                  confirm-button-text='确认'
                  cancel-button-text='取消'
                  icon="el-icon-info"
                  icon-color="red"
                  title="确认删除选中的数据？"
                  @confirm="deleteDate"
                >
                  <el-button size="mini" slot="reference" type="danger">删除</el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="total, prev, pager, next"
            :page-sizes="[20, 30, 50, 100]"
            :total="tableData.length">
          </el-pagination>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        remove: [],
        search: {
           username: "",
            tel: "",
            state: "",
            startTime: "",
            endTime: ""
        },
        tableData: [
            {
            date: '2016-05-02',
            name: 'Whistler',
            lead: 'James',
            progress: 40,
            status: 0
            }
        ]
      }
    },
    components: {
    },
    methods: {
      handleSelectionChange(val) {
        console.log(val)
      },
      deleteDate() {
        
      }
    },
    created() {
     
    },
    mounted() {
      
    }
 }
</script>

<style lang=scss scoped>
  .search-table {
      width: 100%;
  }
  .search {
      background: #ffffff;
      border-radius: 7px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
  }
  .table {
      background: #ffffff;
      border-radius: 7px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      margin-top: 10px
  }
  .el-col {
      display: flex;
      flex-direction: row;
      align-items: center;
  }
  .search-title {
      font-family: '黑体';
      float: right;
      white-space: nowrap;
      font-size: 14px;
      margin-top:10px;
      width: 63px;
      text-align: right;
  }
  .el-table {
      padding: 10px;
  }
  .el-dialog__header {
    border-bottom: 1px solid #F4F8F9 !important;
  }
  .el-dialog {
    border-radius: 10px!important;
  }
</style>