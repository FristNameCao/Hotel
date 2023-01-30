<template>
  <div class="home">
    <div class="location">
      <!-- 选择城市 -->
      <div class="city" @click="cityClick">{{ currentStore.cityName }}</div>
      <!-- 位置 -->
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期 -->
    <div class="section data-range">
      <div class="start" @click="show = true">
        <span>入住</span>
        <span>{{ startDateStr }}</span>
      </div>
      <div class="computed" @click="show = true">
        <span>共{{ stayCount }}晚</span>
      </div>
      <div class="end" @click="show = true">
        <span>离开</span>
        <span>{{ endDateStr }}</span>
      </div>

      <van-calendar
        v-model:show="show"
        type="range"
        @confirm="onConfirm"
        color="#ff9854"
        :round="false"
      />
    </div>

    <!-- 价格人数 -->
    <div class="section price">
      <div class="price-item">
        <span>价格不限</span>
      </div>
      <div class="people">
        <span>人数不限</span>
      </div>
    </div>
    <input type="text" placeholder="关键字/位置/民宿名" />
    <!-- 热门城市建议 -->
    <div class="section hot-suggest">
      <template v-for="(hotCity, index) in HotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: hotCity.tagText.color,
            background: hotCity.tagText.background.color,
          }"
        >
          {{ hotCity.tagText.text }}
        </div>
      </template>
    </div>

    <!--搜索路由 -->
    <div class="search">
      <van-button
        round
        type="success"
        text="搜索"
        size="large"
        color="#ff9854"
        @click="searchBtnClick"
      >
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { formatMonthDay, getDiffDate } from "@/utils/format_data";
import { computed, ref } from "vue";
import useHomeStore from "@/stores/modules/home";
import useMainStore from "@/stores/modules/main";
//这里使用路由调用city
const router = useRouter();

const cityClick = () => {
  router.push("/city");
};

//这里拿到city传给的store的数据，因为是有动态响应的所以要加storeToRef
const cityStore = useCityStore();
const { currentStore } = storeToRefs(cityStore);

const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log("获取位置成功", res);
  }),
    (err) => {
      console.log("获取位置失败", err);
    },
    {
      enableHightAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
};

//日期处理范围,引入的是format_data在utils
// const nowDate = new Date();
// const newDate = new Date();

// newDate.setDate(nowDate.getDate() + 1);
//这里用的都是store数据
const MainStore = useMainStore();
const { startDate, endDate } = storeToRefs(MainStore);

const startDateStr = computed(() => formatMonthDay(startDate.value));
const endDateStr = computed(() => formatMonthDay(endDate.value));
//计算时间差
const stayCount = ref(getDiffDate(startDate.value, endDate.value));

//日历
const show = ref(false);

//onConfirm赋值日期
const onConfirm = (value) => {
  //选中的第一次日期
  const start = value[0];
  //选中的第二次日期
  const end = value[1];
  //日期格式化
  MainStore.startDate = start;
  MainStore.endDate = end;

  //隐藏日历
  show.value = false;

  //计算天数
  stayCount.value = getDiffDate(start, end);
};

//prop热门城市建议，不方便管理
// const props = defineProps({
//   HotSuggests: {
//     type: Object,
//     default: {},
//   },
// });
//store管理热门建议
const HotSuggestsStore = useHomeStore();
const { HotSuggests } = storeToRefs(HotSuggestsStore);

//search跳转界面
const searchBtnClick = () => {
  router.push({
    path: "/search",
    query: {
      //城市名称
      currentStore: currentStore.value.cityName,
      //开始时间
      startDate: startDateStr.value,
      //结束时间
      endDate: endDateStr.value,
      //计算时间差
      stayCount: stayCount.value,
    },
  });
};
</script>

<style lang="less" scoped>
.home {
  .location {
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    .city {
      flex: 1;
      color: #333;
      font-size: 14px;
    }
    .position {
      display: flex;
      align-items: center;
      .title {
        font-size: 14px;
        color: #333;
      }
      img {
        width: 18px;
        height: 18px;
      }
    }
  }

  .data-range {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 20px;
    .start {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .computed {
      flex: 1;
    }
    .end {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-right: -60px;
    }
    --van-calendar-popup-height: 100%;
  }
  .price {
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;
    color: var(--primary-color);

    .price-item {
    }

    .people {
      margin-right: 15px;
    }
  }
  input {
    width: 80%;
    outline: none;
    border: 0 none;
    position: relative;
    margin: 10px 20px;
  }
  .hot-suggest {
    display: flex;
    flex-wrap: wrap;
    padding: 3px 15px;
    margin: 15px;
    .item {
      padding: 3px 5px;
      margin: 4px;
      font-size: 12px;
      border-radius: 14px;
      line-height: 1;
    }
  }
  .search {
    --van-button-large-height: 40px;
  }
}
</style>
