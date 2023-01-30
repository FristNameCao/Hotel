<template>
  <div class="loading" v-if="MainStore.isLoading">
    <div class="loading-img">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";

const MainStore = useMainStore();
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 955;
  // margin: auto;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  .loading-img {
    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0  0 / 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
