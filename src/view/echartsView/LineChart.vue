<template>
  <!-- 定义echarts需要控制的dom元素 -->
  <div :style="{height:height,width:width}"/>
</template>

<script>
import * as echarts from 'echarts';


export default {
  //接收父组件传递的参数
  data() {
    return {
      chart: null,// echarts实例
      chartData: '',// 图表数据
      height: '100%',//设置默认高度
      width: '100%'//设置默认宽度
    }
  },
  watch: {//监听数据变化
    chartData: {
      deep: true,//深度监听
      handler(val) {
        this.setOptions(val)//重新绘制图表数据
      }
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
      //通过父组件传递的数据设置图表数据
      // 定义一个图表数据
      this.chartData = {
        expectedData: [190, 100, 10, 9, 170, 110, 160],
        actualData: [120, 200, 150, 80, 70, 110, 130]
      }

      //参数一:this.$el指向当前组件template模板中的根标签(在mounted生命周期中才有效)
      //参数二:echarts主题颜色
      this.chart = echarts.init(this.$el)
      this.setOptions(this.chartData)
    },
    setOptions({ expectedData, actualData }) {
      var option = {//setOption方法可以接受一个对象作为参数更多配置参数可以参考官网
        title: {//标题组件
          text: '设备分析',
          color: '#fff'
        },
        tooltip: {//提示框组件
          trigger: 'axis'//坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用,还有'item'，'none'

        },
        legend: {//图例组件
          data: ['预期', '实际'],
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
        grid: {//直角坐标系内绘图网格
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {//工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
          feature: {
            saveAsImage: {},//保存为图片。
            dataView: {}//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
          }
        },
        xAxis: {//直角坐标系 grid 中的 x 轴
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {//直角坐标系 grid 中的 y 轴
          type: 'value'
        },
        series: [//图表类型
          {
            name: '预期',
            type: 'line',
            stack: '总量',
            data: expectedData//对象内,解析出来的参数
          },
          {
            name: '实际',
            type: 'line',
            stack: '总量',
            data: actualData//对象内,解析出来的参数
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>


