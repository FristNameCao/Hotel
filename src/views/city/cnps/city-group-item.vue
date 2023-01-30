<template>
  <!-- 这是改变abcd锚点的 -->
  <van-index-bar :index-list="indexList">
    <van-index-anchor index="热门" />

    <div class="list">
      <template
        v-for="(hotCities, index) in props.cityGroup.hotCities"
        :key="index"
      >
        <div class="city" @click="cityClick(hotCities.cityName)">
          {{ hotCities.cityName }}
        </div>
      </template>
    </div>
    <template v-for="(group, index) in props.cityGroup.cities" :key="index">
      <div><van-index-anchor :index="group.group" /></div>

      <template v-for="(city, indey) in group.cities" :key="indey">
        <div>
        <van-cell :title="city.cityName" @click="cityClick(city.cityName)"/>
        </div>
      </template>
    </template>
  </van-index-bar>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import useCityStore  from "@/stores/modules/city";
import { useRouter } from "vue-router";
const props = defineProps({
  cityGroup: {
    type: Object,
    default: () => ({}),
  },
});
// 锚点
const indexList = computed(() => {
  const list = props.cityGroup.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});
//为了下面有返回函数所以进入router
const router = useRouter();

//获取城市点击事件
const cityStore = useCityStore();
const cityClick = (cityName) => {
  //选中当前城市
  cityStore.currentStore.cityName = cityName;
  //选中好了以后自动返回
  router.back();
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
  .city {
    width: 70px;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    background-color: #fff4ec;
    margin: 4px 0;
  }
}
</style>
