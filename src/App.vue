<template>
  <div id="app" style="width: 100%;">
    <dv-full-screen-container style="background: #01133d;width: 100%">
      <dv-border-box-11 title="智慧城市规划" :style="{  display: 'flex'}">
        <div class="container">
          <div class="itme">
            <div style="height: 30% ;margin-bottom: 10px">
              <dv-scroll-ranking-board :config="config" style="width:95%;height:100%"/>
            </div>
            <div style="height: 40%">
              <dv-decoration-2 style="width:100%;height:5px;"/>
              <pie-map style="width:100%;height: 100%"></pie-map>
            </div>
            <div style="height: 35%">
              <dv-decoration-2 style="width:100%;height:5px;"/>
              <bar-chart style="width:100%;height: 100%"></bar-chart>
            </div>
          </div>
          <div class="itme" :style="{width:'40%',height:'100%'}">
            <!-- 用于设置echarts元素的-->
            <div style="height: 70%">
              <dv-border-box-10>
                <fuzhou-map style="height: 100%;"></fuzhou-map>
              </dv-border-box-10>
            </div>
            <div style="height: 35%;margin-top: 3%">
              <div style="width: 30%;height: 100%;float: left;margin-right: 10px">
                <dv-border-box-10>

                </dv-border-box-10>
              </div>
              <div style="width: 30%;height: 100%;float: left;margin: 0 4% 0 4%">
                <dv-border-box-10>

                </dv-border-box-10>
              </div>
              <div style="width: 30%;height: 100%;float: right">
                <dv-border-box-10>

                </dv-border-box-10>
              </div>
            </div>
          </div>
          <div class="itme" >
            <div style="height: 35%;width: auto">
              <line-chart style="width: 100%;height: 100%;"></line-chart>
            </div>
            <div style="height: 35%;width: auto">
              <dv-capsule-chart :config="config" style="width:100%;height:100%"/>
            </div>
            <div style="height: 35%;width: auto">
              <div style="float: left">
                <dv-water-level-pond :config="config3" style="width:140px;height:140px"/>
              </div>
              <div style="float: left">
                <dv-water-level-pond :config="config3" style="width:140px;height:140px"/>
              </div>
              <div style="float: left">
                <dv-water-level-pond :config="config3" style="width:140px;height:140px;"/>
              </div>

            </div>

          </div>
        </div>
      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>
<style>

.dv-water-pond-level svg {
  left: 3.5px;
}
</style>

<script>
import FuzhouMap from './view/echartsView/FuzhouMap.vue';
import PieMap from "./view/echartsView/PieMap.vue";
import BarChart from "./view/echartsView/BarChart.vue";
import LineChart from "./view/echartsView/LineChart.vue";

export default {
  components: {
    //添加模板到组件
    FuzhouMap,
    PieMap,
    BarChart,
    LineChart
  },
  data() {
    return {
      /*DataV数据*/
      config: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 500
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          },
          {
            name: '信阳',
            value: 45
          },
          {
            name: '漯河',
            value: 29
          }
        ],
      },
      config2: {
        number: [100.56],
        toFixed: 2,
        content: '{nt}个'
      },
      config3: {
        data: [100],
        shape: 'round'
      },
      config4: {
        data: [{
          name: '周口',
          value: 55
        }]
      }
    }
  },
}

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

.itme {
  //margin-top: 75px;
  float: left;
  width: 29%;
  height: 100%;
  padding: 0px 0px 0px 0px;
  margin: 75px 0px 10px 9px;
}

.container {
  height: 82.5%;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: flex-start;

}

</style>
