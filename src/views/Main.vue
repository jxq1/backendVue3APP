<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <common-aside />
      <el-container class="r-container">
        <common-header />
        <common-tab/>
        <el-main class="right-main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonAside from "../components/CommonAside.vue";
import CommonTab from "../components/CommonTab.vue";
export default defineComponent({
  components: {
    CommonHeader,
    CommonAside,
    CommonTab,
  },
});
</script>

<style lang="less" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  & > .el-container {
      height: 100%;
      &>.el-aside{
          height: 100%;
          background: #545c64;
      }
  }
  .lay-container{
      flex-wrap: nowrap;
      .right-main{
          height: cale(100%-124px);
      }
  }
}
.el-container{
    flex-wrap: wrap;
    align-items: flex-start;
    height: 100%;
}
</style>
