<template>
  <div>
    <!-- <h2 class="dashboard-title">資料看板</h2> -->

    <!-- 銷售額總覽 -->
    <div class="overview">
      <div class="overview-item">
        <h3 class="overview-item-title">總銷售金額</h3>
        <p class="overview-item-value">{{ totalSales }}</p>
      </div>
      <div class="overview-item">
        <h3 class="overview-item-title">月銷售金額</h3>
        <p class="overview-item-value">{{ monthSales }}</p>
      </div>
      <div class="overview-item">
        <h3 class="overview-item-title">日銷售金額</h3>
        <p class="overview-item-value">{{ daySales }}</p>
      </div>
      <div class="overview-item">
        <h3 class="overview-item-title">總訂單數量</h3>
        <p class="overview-item-value">{{ totalOrders }}</p>
      </div>
      <div class="overview-item">
        <h3 class="overview-item-title">月訂單數量</h3>
        <p class="overview-item-value">{{ monthOrders }}</p>
      </div>
      <div class="overview-item">
        <h3 class="overview-item-title">日訂單數量</h3>
        <p class="overview-item-value">{{ dayOrders }}</p>
      </div>
      <div class="overview-item">
        <h3 class="overview-item-title">待確認數量</h3>
        <p class="overview-item-value">{{ confirmedOrders }}</p>
      </div>
      <div class="overview-item">
        <h3 class="overview-item-title">待發貨數量</h3>
        <p class="overview-item-value">{{ deliveredOrders }}</p>
      </div>
    </div>

    <!-- 銷售額統計圖 -->
    <div ref="salesChart" class="chart"></div>

    <!-- 訂單數量統計圖 -->
    <div ref="orderChart" class="chart"></div>

    <!-- 商品類別餅圖 -->
    <div ref="categoryChart" class="chart" style="display: none;"></div>
     <!-- 商品排行圖示 -->
    <div ref="containerChart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getHomeGroupInfo } from "@/api/product/homeGroup";


export default {
  data() {
    return {
      // 總銷售額
      totalSales: 0,
      // 總訂單數量
      totalOrders: 0,
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
      containDatas:[],
      orderDatas:[],
      salesDatas:[],
      salesData: {
        data: [
           // 示例銷售額資料(查詢介面賦值)
          { name: 'Jan', value: 1500 },
          { name: 'Feb', value: 2000 },
          { name: 'Mar', value: 1800 },
          { name: 'Apr', value: 2500 },
          { name: 'May', value: 2200 },
        ],

      },
      orderData: {
          // 示例訂單數量資料(查詢介面賦值)
        data: [
          { name: 'Jan', value: 50 },
          { name: 'Feb', value: 60 },
          { name: 'Mar', value: 45 },
          { name: 'Apr', value: 70 },
          { name: 'May', value: 65 },
        ],

      },
      categoryData: {
        // 示例商品類別資料(查詢介面賦值)
        data: [
          { name: '電子產品', value: 30 },
          { name: '服裝', value: 25 },
          { name: '家居用品', value: 20 },
          { name: '食品', value: 15 },
          { name: '圖書', value: 11 },
        ],
      },
      // containData 轉成物件
      containData: {
        // 示例商品類別資料(查詢介面賦值)
        data: [
          { name: '商品1', value: 320 },
          { name: '商品2', value: 302 },
          { name: '商品3', value: 301 },
          { name: '商品4', value: 334 },
          { name: '商品5', value: 390 },
        ],
      },
    };
  },
  computed: {
    // totalSales() {
    //   return this.salesData.data.reduce((total, value) => total + value, 0);
    // },
    // totalOrders() {
    //   return this.orderData.data.reduce((total, value) => total + value, 0);
    // },
  },
  mounted() {
    // 在元件掛載後初始化圖表
    this.renderSalesChart();
    this.renderOrderChart();
    this.renderCategoryChart();
    this.renderContainerChart();
    this.getSalesChartList();
  },
  methods: {

    getSalesChartList() {
      getHomeGroupInfo().then(response => {
         if(response.data){
          this.totalSales = response.data.totalSales;
          this.totalOrders = response.data.totalOrders;
          this.monthSales = response.data.monthSales;
          this.monthOrders = response.data.monthOrders;
          this.daySales = response.data.daySales;
          this.dayOrders = response.data.dayOrders;
          this.confirmedOrders = response.data.confirmedOrders;
          this.deliveredOrders = response.data.deliveredOrders;
         }
      });
    },
    renderSalesChart() {
      const chartDom = this.$refs.salesChart;
      const myChart = echarts.init(chartDom);
      this.salesDatas = this.salesData.data;

      const option = {
        title: {
          text: '銷售額趨勢',
          // 文字居中
          left: "center",
          textStyle: {
            overflow: "truncate",
            // 文字寬度超出時自動縮放 truncate ...
            width: 200,
            color: "rgba(255, 106, 0, 1)",
          },
        },
        xAxis: {
          type: 'category',
          data: this.salesDatas.map(item => item.name),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: this.salesDatas.map(item => item.value),
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#ff6a00', // 設定折線的顏色
              width: 2, // 設定折線的寬度
             },
            itemStyle: {
              color: '#ff0000', // 設定折線點的顏色
            },
            label: {
              show: true, // 顯示折線點的數值標籤
              position: 'top', // 數值標籤顯示在折線點的上方
              color: '#ff6a00', // 數值標籤的顏色
              fontSize: 14, // 數值標籤的字型大小
            },
        },
        ],
      };

      myChart.setOption(option);
    },
    renderOrderChart() {
      const chartDom = this.$refs.orderChart;
      const myChart = echarts.init(chartDom);
      this.orderDatas = this.orderData.data;

      const option = {
        color: ['#ff6a00'], // 設定餅圖的顏色
        title: {
          text: '訂單數量趨勢',
          left: "center",
          textStyle: {
            overflow: "truncate",
            width: 200,
            color: "rgba(255, 106, 0, 1)",
          },
        },
        xAxis: {
          type: 'category',
          data: this.orderDatas.map(item => item.name),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: this.orderDatas.map(item => item.value),
            type: 'bar',
          },
        ],
      };

      myChart.setOption(option);
    },
    renderCategoryChart() {
      const chartDom = this.$refs.categoryChart;
      const myChart = echarts.init(chartDom);
      const { data } = this.categoryData;

      const option = {
        title: {
          text: '商品類別分佈',
          left: "center",
          textStyle: {
            overflow: "truncate",
            width: 200,
            color: "rgba(255, 106, 0, 1)",
          },
        },
        series: [
          {
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
            label: {
              show: true,
              formatter: '{b}: {c} ({d}%)', // 顯示類別名稱、數量和百分比
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold',
              },
            },
          },
        ],
      };

      myChart.setOption(option);
    },
    renderContainerChart() {
      const chartDom = this.$refs.containerChart;
      const myChart = echarts.init(chartDom);
      this.containDatas = this.containData.data.sort((a, b) => a.value - b.value);
      const option = {
        title: {
          text: '商品銷售排行',
          left: "center",
          textStyle: {
            overflow: "truncate",
            width: 200,
            color: "rgba(255, 106, 0, 1)",
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          name: '銷售額',
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: 'category',
          name: '團員名稱',
          data: this.containDatas.map(item => item.name),
        },
        series: [
          {

            type: 'bar',
            data: this.containDatas.map(item => item.value),
            itemStyle: {
              // Individual color for each bar
              color:  "rgba(255, 106, 0, 1)",
            }
          },
        ],
      };

      myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@a/backend/css/bootstrap.min.css";
@import "~@a/backend/css/font-awesome.min.css";
@import "~@a/backend/css/simdahs.css";
@import "~@a/backend/css/themify-icons.css";
    .dashboard-title {
      color: #ff6a00;
      font-size: 28px;
      text-align: center;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .overview {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
      animation: pulse 1s infinite alternate;
    }

    .overview-item {
      text-align: center;
      padding: 20px;
      border: 1px solid #ff6a00;
      border-radius: 10px;
      background-color: #f0f8ff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }

    .overview-item:hover {
      transform: scale(1);
    }

    .overview-item-title {
      color: #ff6a00;
      font-size: 18px;
      margin-bottom: 10px;
    }

    .overview-item-value {
      color: #333;
      font-size: 24px;
      font-weight: bold;
    }

    .chart {
      height: 300px;
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }

    .chart:hover {
      transform: scale(1);
    }
    .chart-container {
      width: 100%;
      height: 400px; /* 設定圖表容器的高度 */
    }
    /** 自動縮放 */
    /* @keyframes pulse {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1);
      }
    } */
/* 可以根據需要新增樣式 */
</style>