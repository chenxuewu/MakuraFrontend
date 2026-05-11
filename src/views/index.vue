<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-1">
              <i class="ti-credit-card"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">總銷售額</div>
              <div class="stat-digit">{{ totalSales }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                aria-valuemax="100" style="width: 85%;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-1">
              <i class="ti-credit-card"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">總簽收額</div>
              <div class="stat-digit">{{ totalPay }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                aria-valuemax="100" style="width: 85%;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-1">
              <i class="ti-credit-card"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">总取消金额</div>
              <div class="stat-digit">{{ totalCancelSales }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                aria-valuemax="100" style="width: 85%;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-1">
              <i class="ti-credit-card"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">總销售數量</div>
              <div class="stat-digit">{{ totalOrders }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                aria-valuemax="100" style="width: 85%;"></div>
            </div>
          </div>
        </div>
      </div>     
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-1">
              <i class="ti-credit-card"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">總簽收數量</div>
              <div class="stat-digit">{{ totalPayOrders }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                aria-valuemax="100" style="width: 85%;"></div>
            </div>
          </div>
        </div>
      </div>     
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-1">
              <i class="ti-credit-card"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">总取消订单数</div>
              <div class="stat-digit">{{ totalCancelOrders }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                aria-valuemax="100" style="width: 85%;"></div>
            </div>
          </div>
        </div>
      </div>  
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-1">
              <i class="ti-credit-card"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">月簽收數量</div>
              <div class="stat-digit">{{ monthPayOrders }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                aria-valuemax="100" style="width: 85%;"></div>
            </div>
          </div>
        </div>
      </div>   
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-1">
              <i class="ti-credit-card"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">當月銷售額</div>
              <div class="stat-digit">{{ monthSales }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100" style="width: 75%;"></div>
            </div>
          </div>
        </div>
      </div>
       <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-1">
              <i class="ti-credit-card"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">當月簽收額</div>
              <div class="stat-digit">{{ monthPay }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100" style="width: 75%;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-1">
              <i class="ti-credit-card"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">今日銷售額</div>
              <div class="stat-digit">{{ daySales }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="65" aria-valuemin="0"
                aria-valuemax="100" style="width: 65%;"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- /# column -->
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-2">
              <i class="ti-bar-chart"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">今日訂單量</div>
              <div class="stat-digit">{{ dayOrders }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="78" aria-valuemin="0"
                aria-valuemax="100" style="width: 78%;"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- /# column -->
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card">
          <div class="stat-widget-two">
            <div class="widget-icon color-4">
              <i class="ti-heart"></i>
            </div>
            <div class="stat-content">
              <div class="stat-text">待發貨數量</div>
              <div class="stat-digit">{{ deliveredOrders }}</div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="65" aria-valuemin="0"
                aria-valuemax="100" style="width: 65%;"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- /# column -->
    </div>
    <!-- /# row -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card alert">
          <div class="card-header clearfix">
            <h5 style="float: left">銷售額</h5>
            <template >
              <div style="float: right; margin-left: 10px">
                <el-select v-model="orderStatus3" placeholder="订单状态" @change="handleOrderStatusChange3">
                  <el-option label="全部" :value="null"></el-option>
                  <el-option label="待确认订单" :value="7"></el-option>
                  <el-option label="已拒绝" :value="5"></el-option>
                  <el-option label="待发货" :value="1"></el-option>
                  <el-option label="已发货" :value="2"></el-option>
                  <el-option label="已完成" :value="3"></el-option>
                  <el-option label="申请取消" :value="6"></el-option>
                  <el-option label="已取消" :value="4"></el-option>
                  <el-option label="除去已取消的订单" :value="-1"></el-option>
                </el-select>
              </div>
              <div style="float: right;">
                <el-radio-group v-model="radio2" size="small" @change="handlexiaoshouerDateChange">
                  <el-radio-button label="0">近七天</el-radio-button>
                  <el-radio-button label="1">近30天</el-radio-button>
                  <el-radio-button label="2">近六個月</el-radio-button>
                </el-radio-group>
              </div>
            </template>
          </div>
          <div class="sales-chart">
            <v-chart class="chart" :option="optionAmount" />
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card alert">
          <div class="card-header clearfix">
            <h5 style="float: left">訂單量</h5>
            <template >
              <div style="float: right; margin-left: 10px">
                <el-select v-model="orderStatus2" placeholder="订单状态" @change="handleOrderStatusChange2">
                  <el-option label="全部" :value="null"></el-option>
                  <el-option label="待确认订单" :value="7"></el-option>
                  <el-option label="已拒绝" :value="5"></el-option>
                  <el-option label="待发货" :value="1"></el-option>
                  <el-option label="已发货" :value="2"></el-option>
                  <el-option label="已完成" :value="3"></el-option>
                  <el-option label="申请取消" :value="6"></el-option>
                  <el-option label="已取消" :value="4"></el-option>
                  <el-option label="除去已取消的订单" :value="-1"></el-option>
                </el-select>
              </div>
              <div style="float: right;">
                <el-radio-group v-model="radio3" size="small" @change="handledingdangLiangDateChange">
                  <el-radio-button label="0">近七天</el-radio-button>
                  <el-radio-button label="1">近30天</el-radio-button>
                  <el-radio-button label="2">近六個月</el-radio-button>
                </el-radio-group>
              </div>
            </template>
          </div>
          <div class="sales-chart">
            <v-chart class="chart" :option="optionOrderNum" />
          </div>
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card alert">
          <div class="card-header clearfix">
            <h5 style="float: left">銷量(件)</h5>
            <template >
              <div style="float: right; margin-left: 10px">
                <el-select v-model="orderStatus1" placeholder="订单状态" @change="handleOrderStatusChange1">
                  <el-option label="全部" :value="null"></el-option>
                  <el-option label="待确认订单" :value="7"></el-option>
                  <el-option label="已拒绝" :value="5"></el-option>
                  <el-option label="待发货" :value="1"></el-option>
                  <el-option label="已发货" :value="2"></el-option>
                  <el-option label="已完成" :value="3"></el-option>
                  <el-option label="申请取消" :value="6"></el-option>
                  <el-option label="已取消" :value="4"></el-option>
                  <el-option label="除去已取消的订单" :value="-1"></el-option>
                </el-select>
              </div>
              <div style="float: right;">
                <el-radio-group v-model="radio1" size="small" @change="handlexiaoLiangDateChange">
                  <el-radio-button label="0">近七天</el-radio-button>
                  <el-radio-button label="1">近30天</el-radio-button>
                  <el-radio-button label="2">近六個月</el-radio-button>
                </el-radio-group>
              </div>
            </template>
          </div>
          <div class="sales-chart">
            <v-chart class="chart" :option="optionNum" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card alert">
          <div class="card-header clearfix">
            <h5 style="float: left">下級團銷售排行</h5>
            <template >
              <div style="float: right;">
                <el-radio-group v-model="radio0" size="small" @change="handlexiaoLiangpaihangDateChange">
                  <el-radio-button label="0">近七天</el-radio-button>
                  <el-radio-button label="1">近30天</el-radio-button>
                  <el-radio-button label="2">近六個月</el-radio-button>
                </el-radio-group>
              </div>
            </template>
          </div>
          <div class="sales-chart">
            <v-chart class="chart" :option="optionDeptOrder" />
          </div>
        </div>
      </div>

    </div>
    <!-- /# row -->

  </div>
</template>

<script>
import * as echarts from 'echarts';
import { deptOrderGroup, salesVolumeNumGroup, salesVolumeGroup, getHomeGroupInfo,deptOrderNumGroup } from "@/api/product/homeGroup";

export default {
  data() {
    return {
      radio0: 0,
      radio1: 0,
      radio2: 0,
      radio3: 0,
      orderStatus2: null,
      orderStatus3: null,
      orderStatus1: null,
      noticeList: [],
      // 總銷售額
      totalSales: 0,
      // 總簽收金額
      totalPay: 0,
      //总取消金额
      totalCancelSales: 0,
      // 月簽收金額
      monthPay: 0,
      // 總訂單數量
      totalOrders: 0,
      // 總簽收數量
      totalPayOrders: 0,
      //总取消订单数
      totalCancelOrders: 0,
      // 月簽收數量
      monthPayOrders: 0,
      // 月總銷售額
      monthSales: 0,
      // 月訂單數量
      monthOrders: 0,
      // 日總銷售額
      daySales: 0,
      // 日訂單數量
      dayOrders: 0,
      // 待確認數量
      confirmedOrders: 0,
      // 待發貨數量
      deliveredOrders: 0,
      xAxisData: [],
      amountData: [],
      numData: [],
      optionAmount: {
        // 全圖預設背景
        backgroundColor: "white",
        //  圖表距邊框的距離
        grid: {
          top: "6%",
          left: "6%",
          right: "6%",
          bottom: "6%",
          containLabel: true
        },
        // 提示框
        tooltip: {
          trigger: "axis", // 設定提示框觸發方式為滑鼠懸浮到拐點上觸發
        formatter: function(params) {
            // params 中包含了滑鼠懸浮位置的資訊，例如 params.value 表示當前拐點的資料值
            var axisValue = params[0].axisValue
            var value = params[0].value; // 假設此處只有一個系列，因此取第一個系列的值
            var unit = "元"; // 替換為您的實際單位
            return axisValue + "</br> "+value + " " + unit;
        },
        },
        xAxis: {
          // name: "時間",
          type: "category",
          // boundaryGap值為false的時候，折線第一個點在y軸上
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#878787"
            }
          },

          //
          // axisLabel: {
          //   // 每1個標籤顯示一次
          //   interval: 0
          // },
          data: []
        },
        yAxis: {
          // name: "數值",
          type: "value",
          splitLine: {
            show: false
          }
        },
        // 系列列表
        series: [
          {
            name: "銷售額",
            //data: [],
            data: [],
            type: "line",
            // 設定折線上圓點大小
            symbolSize: 7,
            itemStyle: {
              normal: {
                // 拐點上顯示數值
                label: {
                  show: true,
                  color: "#878787"
                },
                borderColor: "red", // 拐點邊框顏色
                lineStyle: {
                  width: 4, // 設定線寬
                  type: "solid" //'solid'實線
                }
              },
              emphasis: {
                color: "#87de75",
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        color: ["#87de75"]
      },
      optionNum: {
        // 全圖預設背景
        backgroundColor: "white",
        //  圖表距邊框的距離
        grid: {
          top: "6%",
          left: "6%",
          right: "6%",
          bottom: "6%",
          containLabel: true
        },
        // 提示框
        tooltip: {
          trigger: "axis", // 設定提示框觸發方式為滑鼠懸浮到拐點上觸發
        formatter: function(params) {
            // params 中包含了滑鼠懸浮位置的資訊，例如 params.value 表示當前拐點的資料值
            var axisValue = params[0].axisValue
            var value = params[0].value; // 假設此處只有一個系列，因此取第一個系列的值
            var unit = "件"; // 替換為您的實際單位
            return axisValue + "</br> "+value + " " + unit;
        }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#878787"
            }
          },
          data: []
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          }
        },
        // 系列列表
        series: [
          {
            name: "銷售數量",
            //data: [],
            data: [],
            type: "line",
            // 設定折線上圓點大小
            symbolSize: 7,
            itemStyle: {
              normal: {
                // 拐點上顯示數值
                label: {
                  show: true,
                  color: "#878787"
                },
                borderColor: "red", // 拐點邊框顏色
                lineStyle: {
                  width: 4, // 設定線寬
                  type: "solid" //'solid'實線
                }
              },
              emphasis: {
                color: "#f96332",
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        color: ["#f96332"]
      },

      optionOrderNum: {
        // 全圖預設背景
        backgroundColor: "white",
        //  圖表距邊框的距離
        grid: {
          top: "6%",
          left: "6%",
          right: "6%",
          bottom: "6%",
          containLabel: true
        },
        // 提示框
        tooltip: {
          trigger: "axis", // 設定提示框觸發方式為滑鼠懸浮到拐點上觸發
        formatter: function(params) {
            // params 中包含了滑鼠懸浮位置的資訊，例如 params.value 表示當前拐點的資料值
            var axisValue = params[0].axisValue
            var value = params[0].value; // 假設此處只有一個系列，因此取第一個系列的值
            var unit = ""; // 替換為您的實際單位
            return axisValue + "</br> "+value + " " + unit;
        }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#878787"
            }
          },
          data: []
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          }
        },
        // 系列列表
        series: [
          {
            name: "訂單數量",
            //data: [],
            data: [],
            type: "line",
            // 設定折線上圓點大小
            symbolSize: 7,
            itemStyle: {
              normal: {
                // 拐點上顯示數值
                label: {
                  show: true,
                  color: "#878787"
                },
                borderColor: "red", // 拐點邊框顏色
                lineStyle: {
                  width: 4, // 設定線寬
                  type: "solid" //'solid'實線
                }
              },
              emphasis: {
                color: "#f96332",
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        color: ["#f96332"]
      },
      optionDeptOrder: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: function(params) {
            // params 中包含了滑鼠懸浮位置的資訊，例如 params.value 表示當前拐點的資料值
            var axisValue = params[0].axisValue
            var value = params[0].value; // 假設此處只有一個系列，因此取第一個系列的值
            var unit = "元"; // 替換為您的實際單位
            return axisValue + "</br> "+value + " " + unit;
         },
        },
         grid: {
          top: "6%",
          left: "6%",
          right: "6%",
          bottom: "6%",
          containLabel: true
        },
        xAxis: {
          type: 'value',
         // name: '銷售額',

        },
        yAxis: {
          type: 'category',
          //name: '團名稱',
          boundaryGap: [0, 0.01],
          data: [],
        },
        series: [
          {

            type: 'bar',
            data: [],
            itemStyle: {
              // Individual color for each bar
              color: "rgba(255, 106, 0, 1)",
            }
          },
        ],
      },
      // 查詢通知公告引數
      queryNoticeParams: {
        pageNum: 1,
        pageSize: 100,
        status: '0'
      },
      querySalesVolumeGroupParams: {
        type: 0,
      },
      querySalesVolumeNumGroupParams: {
        type: 0,
        orderStatus: null
      },
      queryDeptOrderGroupParams: {
        type: 0,
      },
      queryDeptOrderVolumeParams: {
        type: 0,
        orderStatus: null
      },
    };
  },
  mounted() {
    // this.messageList = JSON.parse(localStorage.getItem("messageList"));
    // this.loginUser = JSON.parse(localStorage.getItem("login_user"));
    // if (
    //   this.loginUser != null &&
    //   this.loginUser.teamType != null &&
    //   this.loginUser.teamType == 2
    // ) {
    //   this.getStatisticsByUser();
    // }

    this.getSalesChartList();
    this.getSalesVolumeGroupList();
    this.getSalesVolumeNumGroupList();
    this.getDeptOrderGroupList();
    this.getSalesOrderVolumeNumGroupList();
  },

  methods: {
    handlexiaoshouerDateChange() {
      // 根據選擇的日期範圍觸發介面事件
      // if(this.radio2 ==  1){
      //   // optionAmount 設定間隔為6
      //   this.optionAmount.xAxis.axisLabel.interval = 6;

      // }else{
      //   this.optionAmount.xAxis.axisLabel.interval = 0;
      // }
      this.querySalesVolumeGroupParams.type = this.radio2;
      this.getSalesVolumeGroupList();
    },
    handlexiaoLiangpaihangDateChange() {
      // 根據選擇的日期範圍觸發介面事件
      this.queryDeptOrderGroupParams.type = this.radio0;
      this.getDeptOrderGroupList();
    },
    handlexiaoLiangDateChange() {
      // 根據選擇的日期範圍觸發介面事件
      this.querySalesVolumeNumGroupParams.type = this.radio1;
      this.getSalesVolumeNumGroupList();
    },
    handledingdangLiangDateChange() {
        this.queryDeptOrderVolumeParams.type = this.radio3;
        this.getSalesOrderVolumeNumGroupList();
    },
    handleOrderStatusChange2() {
      this.querySalesVolumeGroupParams.orderStatus = this.orderStatus2;
      this.getSalesVolumeGroupList();
    },
    handleOrderStatusChange3(val) {
      this.querySalesVolumeGroupParams.orderStatus = val;
      this.getSalesVolumeGroupList();
    },
    handleOrderStatusChange1() {
      this.querySalesVolumeNumGroupParams.orderStatus = this.orderStatus1;
      this.getSalesVolumeNumGroupList();
    },
    getDeptOrderGroupList() {
      deptOrderGroup(this.queryDeptOrderGroupParams).then(response => {
        if (response.data) {
          this.optionDeptOrder.yAxis.data = response.data.map(item => item.name);
          this.optionDeptOrder.series[0].data = response.data.map(item => item.value);
        }
      });
    },
    getSalesOrderVolumeNumGroupList() {
      // 123
      deptOrderNumGroup(this.queryDeptOrderVolumeParams).then(response => {
        if (response.data) {
          this.optionOrderNum.xAxis.data = response.data.map(item => item.name);
          this.optionOrderNum.series[0].data = response.data.map(item => item.value);
        }
      });
    },
    getSalesVolumeNumGroupList() {
      salesVolumeNumGroup(this.querySalesVolumeNumGroupParams).then(response => {
        if (response.data) {
          this.optionNum.xAxis.data = response.data.map(item => item.name);
          this.optionNum.series[0].data = response.data.map(item => item.value);
        }
      });
    },
    // 獲取銷售圖表資料salesVolumeGroup
    getSalesVolumeGroupList() {
      salesVolumeGroup(this.querySalesVolumeGroupParams).then(response => {
        if (response.data) {
          this.optionAmount.xAxis.data = response.data.map(item => item.name);
          this.optionAmount.series[0].data = response.data.map(item => item.value);
        }
      });
    },
    // 獲取銷售圖表資料salesVolumeGroup
    getSalesChartList() {
      getHomeGroupInfo().then(response => {
        if (response.data) {
          this.totalSales = response.data.totalSales;
          this.totalCancelSales = response.data.totalCancelSales;
          this.totalCancelOrders = response.data.totalCancelOrders;
          this.totalOrders = response.data.totalOrders;
          this.monthSales = response.data.monthSales;
          this.monthOrders = response.data.monthOrders;
          this.daySales = response.data.daySales;
          this.dayOrders = response.data.dayOrders;
          this.confirmedOrders = response.data.confirmedOrders;
          this.deliveredOrders = response.data.deliveredOrders;

          this.totalPay = response.data.totalPay;
          this.monthPay = response.data.monthPay;
          this.totalPayOrders = response.data.totalPayOrders;
          this.monthPayOrders = response.data.monthPayOrders;
        }
      });
    },
    //格式化時間
    formatDate(time) {
      return time;
    },
    async getStatisticsByUser() {
      var that = this;
      await getStatisticsByUser().then(result => {
        if (result.success == "true") {
          if (result.data.todayNum != null && result.data.todayNum > 0) {
            that.todayData.todayNum = result.data.todayNum;
          }
          if (result.data.todayAmount != null && result.data.todayAmount > 0) {
            that.todayData.todayAmount = result.data.todayAmount;
          }
          if (
            result.data.todayNoHandle != null &&
            result.data.todayNoHandle > 0
          ) {
            that.todayData.todayNoHandle = result.data.todayNoHandle;
          }
          if (result.data.todayHandle != null && result.data.todayHandle > 0) {
            that.todayData.todayHandle = result.data.todayHandle;
          }
          if (result.data.history != null && result.data.history.length > 0) {
            result.data.history.forEach(element => {
              that.xAxisData.push(formatDate(element.today));
              that.amountData.push(element.todayAmount);
              that.numData.push(element.todayNum);
            });
          } else {
            that.xAxisData.push(formatDate());
            that.amountData = [that.todayData.todayAmount];
            that.numData = [that.todayData.todayNum];
          }
          that.optionAmount.xAxis.data = that.xAxisData;
          that.optionNum.xAxis.data = that.xAxisData;
          that.optionAmount.series[0].data = that.amountData;
          that.optionNum.series[0].data = that.numData;
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>

.el-collapse {
  background-color: rgb(255, 255, 255);
  padding: 0px 15px 15px 15px;
  border: 0;
  // box-shadow: 0 0 10px 5px #e7e7e7;
}

.chart {
  height: 400px;
}
.dashboard{
  background-color: #f5f5f5;
  min-height: calc(100vh - 110px);;
}
.row {
  padding: 0 15px;
}
</style>
