<template>
  <!-- 数据加载 -->
  <div class="HouseList">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in HouseList" :key="item.data.houseId">
        <houseitemv9
          v-if="item.discoveryContentType === 9"
          :houseItem="item.data"
          @click="itemClick(item.data)"
        />

        <houseitemv3
          v-else-if="item.discoveryContentType === 3"
          :houseItem="item.data"
          @click="itemClick(item.data)"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";

import houseitemv9 from "@/components/house-item/house-item-v9.vue";
import houseitemv3 from "@/components/house-item/house-item-v3.vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const List = useHomeStore();
const { HouseList } = storeToRefs(List);
// console.log(HouseList);

//点击热门进行路由跳转并且传一个id过去
const router = useRouter();
const itemClick = (item) => {
  router.push("/detail/" + item.houseId);
};
</script>

<style lang="less" scoped>
.HouseList {
  padding: 10px 8px;
  .title {
    font-size: 24px;
    padding: 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
