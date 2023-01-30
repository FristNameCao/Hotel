<script setup>
import searchItem from "@/components/house-item/search-item.vue";
import HouseList from "./cpns/HouseList.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeBar from "./cpns/home-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
import { getHomeHotSuggests } from "@/services/modules/home";
import { onMounted, onUnmounted, ref, watch } from "vue";
import useHomeStore from "@/stores/modules/home";
// 导入一个回调函数
import useScroll from "@/hooks/useScroll.js";
//发送网络请求
//热门建议，props
// const Suggests = ref([]);
// getHomeHotSuggests().then((res) => {
//   Suggests.value = res.data;
// });
//主页调用发送热门建议网络请求，子组件调用结果即可
const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
homeStore.fetchHomeCategories();

homeStore.fetchHomeHouseList();

// 解构一个函数的值
const { isReachBottomCB, scrollTop } = useScroll();
// 把这个值回调回去
//这里拿到了isReachBottomC useScroll的true
watch(isReachBottomCB, (newValue) => {
  // 这里就可以通过if
  if (newValue) {
    // 通过以后给false表示没到底，
    //那边只要不停的给true这边就每次true底部后就false
    homeStore.fetchHomeHouseList().then(() => {
      isReachBottomCB.value = false;
    });
  }
});
//监听滚动,搜索框显示
const isSearchBox = ref(false);
watch(scrollTop, (TopValue) => {
  isSearchBox.value = TopValue > 400;
});
// const houseClick = () => {
//   homeStore.fetchHomeHouseList();
// };
</script>

<template>
  <div class="home">
    <homeBar></homeBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box></home-search-box>
    <homeCategories></homeCategories>
    <searchItem class="search-item" v-if="isSearchBox" />
    <HouseList> </HouseList>
    <!-- 加载图标 -->
    <div class="van-loading">
      <van-button
        loading
        size="large"
        type="success"
        loading-text="加载中..."
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
  .search-item {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 9;
  }
  .van-button--loading {
    color: pink;
    background-color: #fff;
    border: #fff;
  }
  .van-loading{
    margin-bottom: 50px;
  }
}
</style>
