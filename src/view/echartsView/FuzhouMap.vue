<template>
  <!-- 定义echarts需要控制的dom元素 -->
  <div :style="{height:height,width:width}"/>
</template>
<script>
import * as echarts from 'echarts';
import fuzhou from "../../config/fuzhou.js";


require('echarts/theme/dark') // echarts主题
export default {
  name: 'App',
  data() {
    return {
      height: '400px',
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
      this.setOptions(this.chartData)

    },
    setOptions({expectedData, actualData}) {
      //参数一:map名称
      //参数二:地图数据json
      echarts.registerMap('fuzhou', fuzhou);
      var option = {
        //更多属性查看https://echarts.apache.org/zh/option.html#legend
        tooltip: {
          trigger: 'item',
          //把数据显示在提示框中
          formatter: function (params) { //提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
            //选中那个区域的数据
            var res = params.name + '<br/>';
            //获取series数据
            var myseries = option.series;
            for (var i = 0; i < myseries.length; i++) {
              //遍历series数据的data数据里面存放的就是各个区域的信息
              for (var j = 0; j < myseries[i].data.length; j++) {
                if (myseries[i].data[j].name == params.name) {
                  //如果区域名称相同，就把数据显示在提示框中
                  res += myseries[i].name + ' : ' + myseries[i].data[j].value + '</br>';
                }
              }
            }
            return res;
          }
        },
        visualMap: {
          min: 500,//最小值
          max: 50000,//最大值
          text: ['High', 'Low'],
          left: 'right',
          realtime: false,//拖拽时，如果为true则拖拽手柄过程中实时更新图表视图。是否实时更新。如果为false则拖拽结束时，才更新视图。
          calculable: true,//是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
          show: false,//是否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在。
          inRange: {//定义 在选中范围中 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', "#718cef", "#947aad"]
          },
        },
        legend: {//图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
          show: false,//
          /*formatter: function (name) {
            return 'Legend' + name;
          }*/
        },
        series: [{
          name: '设备数量',
          type: 'map',
          mapType: 'fuzhou',//地图名称
          aspectScale: 0.9, //地图长度比
          roam: 'scale',//如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          zoom: 1.2,//地图缩放比例当前视角的缩放比例。
          label: {
            fontStyle: 'italic',//'normal','italic','oblique'
            fontSize: 100,//文字的字体大小。
            align: 'center',
            normal: {
              show: true,
              textStyle: {
                color: '#0c0707'//地图文字颜色
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#faecec'//选中地图文字颜色
              },
              focus: 'none'//self:只聚焦（不淡出）当前高亮的数据的图形,'none' 不淡出其它图形，默认使用该配置
            }
          },
          itemStyle: {//地图区域的多边形 图形样式
            borderWidth: 1,//描边线宽。为 0 时无描边
            borderType: 'dashed',//描边类型:'solid','dashed','dotted'
            borderColor: '#000',//图形的描边颜色。支持的颜色格式同 color
            shadowColor: 'rgba(0, 0, 0, 0.2)',//图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
            shadowBlur: 6,//阴影模糊
          },
          showLegendSymbol: true,//存在legend时区域会出现小圆点
          data: [//存放地图数据
            {
              name: '仓山区',
              value: 50000,
              selected: false,//该区域是否选中。
              labelLine: {
                show: true,
                showAbove: true,
              }
            },
            {
              name: '台江区',
              value: 1000
            },
            {
              name: '晋安区',
              value: 5000
            },
            {
              name: '连江县',
              value: 20000
            },
            {
              name: '罗源县',
              value: 25000
            },
            {
              name: '平潭县',
              value: 30000
            },
            {
              name: '福清市',
              value: 18000
            },
            {
              name: '鼓楼区',
              value: 2300
            },
            {
              name: '闽侯县',
              value: 600
            },
            {
              name: '永泰县',
              value: 6000
            },
            {
              name: '闽清县',
              value: 10
            },
            {
              name: '长乐区',
              value: 100
            },
            {
              name: '马尾区',
              value: 1009
            },

          ],

        }
        ]
      };

      this.chart.setOption(option);
    }
  }
}
</script>

