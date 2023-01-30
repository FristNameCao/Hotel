<template>
  <!-- 这个city是home-search-box -->
  <div class="city">
    <div class="top">
      <h2>city</h2>
      <!-- 1.搜索框 -->
      <form action="/">
        <van-search
          v-model="searchValue"
          placeholder="请输入搜索关键词"
          show-action
          @cancel="onCancelClick"
        />
      </form>
      <!-- 2.tab切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(item, key) in allCities" :key="key">
          <van-tab :title="item.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- 这里是拿到了axios数据以后遍历
      然后把遍历的送给子组件，其实可以不用这么干，但是为了v-show可以提高性能
      就v-show="tabActive === key" 这个key其实是一个对象名字然后通过name传给了active
      最后v-model双向绑定了最后它就等同于key的值一模一样了，所以这里用这样的方式保证
      无缝连接
    -->
      <template v-for="(item, key) in allCities" :key="key">
        <cityGroupItem v-show="tabActive === key" :cityGroup="item" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { getCityAll } from "@/services";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";
import cityGroupItem from "./cnps/city-group-item.vue";
// import { Toast } from "vant";
const router = useRouter();

//1.获取key，讲tabs中绑定的tabAction正确绑定，tabActive是name传给它的
//2.根据key从allCities获取数据，默认直接取到的不是响应式的，所以必须包裹compute
const currentGroup = computed(() => allCities.value[tabActive.value]);

// const backClick=()=>{

// }

// const searchName = useCityStore();
// const { currentStore } = searchName;

//1.搜索框

const searchValue = ref("");
//2.取消
const onCancelClick = () => {
  router.back();
};

//tab切换
const tabActive = ref();
// const onSearch = (val) => Toast(val);
// const onCancel = () => Toast("取消");

//网络请求
// const cityAll = ref({});
// getCityAll().then((res) => {
//   cityAll.value = res.data;
// });

//9.pinia网络请求这里拿到8的函数就行，最终网络请求
//9.1这里先调用8的函数
const cityAll = useCityStore();
// console.log("cityAll:",cityAll)
//9.2把8的函数网络请求直接调用
cityAll.fetchAllCitiesData();
//9.3然后这里直接解构然后上面使用，过程比较复杂新手肯定很难受
const { allCities } = storeToRefs(cityAll);
</script>

<style lang="less" scoped>
//第二种隐藏导航栏办法
.city {
  --van-tabs-line-height: 44px;
  --van-tabs-card-height: 34px;
  .content {
    height: calc(100vh - 146.28px);
    overflow-y: auto;
  }
  // position: relative;
  // height: 100vh;
  // overflow: auto;
  // background-color: #fff;
  // z-index: 9;
}
</style>
