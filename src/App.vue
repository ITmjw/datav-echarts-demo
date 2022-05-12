<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <dv-full-screen-container style="background: #01133d">
      <dv-border-box-11 title="智慧城市规划" :style="{  display: 'flex'}">
        <div class="container">
          <div class="itme" :style="{background:'red'}">
            <div>
              <dv-scroll-board :config="config" style="width:100%;height:220px"/>
            </div>
          </div>
          <div class="itme" :style="{background:'green',width:'40%'}">
            <!-- 用于设置echarts元素的-->
            <fuzhou-map style="height: 100%;height: 500px"></fuzhou-map>
            </div>
          <div class="itme" :style="{background:'blue'}">
            3
          </div>
        </div>
      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
  import FuzhouMap from './view/echartsView/FuzhouMap.vue';
  export default {
    components: {
      //添加模板到组件
      FuzhouMap
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
              value: 120
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
