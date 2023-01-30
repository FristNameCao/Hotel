<template>
  <div class="search">
    <div>城市名称:{{ $route.query.currentStore }}</div>
    <div>开始时间:{{ $route.query.startDate }}</div>
    <div>结束时间:{{ $route.query.endDate }}</div>
    <div>住宿天数:{{ $route.query.stayCount }}</div>
  </div>

  <button @click="backClick">返回</button>
</template>

<script setup>

import { useRouter } from "vue-router";
const router = useRouter();
const backClick = () => {
  router.back();
};


// console.log("Categories:",Categories)
</script>

<style lang="less" scoped></style>
