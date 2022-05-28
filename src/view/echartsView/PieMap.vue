<template>
  <!-- 定义echarts需要控制的dom元素 -->
  <div :style="{height:height,width:width}"/>
</template>
<script>
import * as echarts from 'echarts';
require('echarts/theme/shine') // echarts theme

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
      let data= [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
      //参数一:this.$el指向当前组件template模板中的根标签(在mounted生命周期中才有效)
      //参数二:echarts主题颜色
      this.chart = echarts.init(this.$el, 'shine')
      this.setOptions(data)

    },
    setOptions(data) {
      let option ={
        title: {
          text: '设备类型分布',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          padding: [
            20,
            0,
            0,
            0
          ],
          align: 'left',
          orient: 'horizontal',
          left: 'center',
          textStyle: {//图例文字的样式
            color: '#fff'
          },

        },
        series: [
          {
            name: 'Access From',
            type: 'pie',//图表类型
            radius: '70%',//控制饼图大小
            top: '20%',//离容器上侧的距离。
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
}
</script>
