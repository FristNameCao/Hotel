<template>
  <div class="search-item">
    <div class="search-time">
      <div class="start">
        <span>住</span>
        <span>{{startDateStr}}</span>
      </div>
      <div class="end">
        <span>离</span>
        <span>{{endDateStr}}</span>
      </div>
    </div>
    <div class="search-item-top">
      <van-search  placeholder="关键词/位置/民宿" />
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';
import { formatMonthDay } from '@/utils/format_data';
import { computed } from '@vue/runtime-core';
import { storeToRefs } from 'pinia';


//这里拿到store共享数据main里面格式化好的时间
//下滑搜索框的时间
const MainStore = useMainStore()
const {startDate,endDate} = storeToRefs(MainStore)
//这里取出时间，传递两个参数
const startDateStr = computed(()=>formatMonthDay(startDate.value,"MM.DD"))
const endDateStr =computed (()=>formatMonthDay(endDate.value,"MM.DD"))
</script>

<style lang="less" scoped>
.search-item {
  display: flex;
  width: 100%;


  background-color: #fff;
  .search-time{
    margin: auto;
  }
  .search-item-top{
    margin: auto;
  }
}
</style>
