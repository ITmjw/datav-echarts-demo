<template>
  <!-- 定义echarts需要控制的dom元素 -->
  <div :style="{height:height,width:width}"/>
</template>
<script>
import * as echarts from 'echarts';


export default {
  name: 'App',
  data() {
    return {
      height: '500px',
      width: '610px',

      /*echarts数据*/
      chartData: {}
    }
  },
  mounted() {
    // dom元素加载完成后执行
    this.$nextTick(() => {
      // 初始化echarts实例
      this.initEcharts()
    })
  },
  methods: {
    initEcharts() {
      // 定义一个图表数据
      /*      this.chartData = {
              expectedData: [190, 100, 10, 9, 170, 110, 160],
              actualData: [120, 200, 150, 80, 70, 110, 130]
            }*/

      //参数一:this.$el指向当前组件template模板中的根标签(在mounted生命周期中才有效)
      //参数二:echarts主题颜色
      this.chart = echarts.init(this.$el)
      this.setOptions()

    },
    setOptions() {
      let option ={
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          padding: [
            10,
            0,
            30,
            0
          ],
          align: 'left',
          orient: 'horizontal',
          left: 'center',
          textStyle: {//图例文字的样式
            color: '#fff'
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            },
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [[{ type: 'min' }, { type: 'max' }]]
            }
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: 'Bing',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: 'Others',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
}
</script>
