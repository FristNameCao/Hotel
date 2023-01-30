<template>
  <div class="detail top-page">
    <!-- <h2>detail{{ $route.params.id }}</h2> -->
    <van-nav-bar
      title="房屋详细"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <template v-if="detailInfos?.mainPart">
      <van-tabs v-model:active="active" scrollspy sticky>
        <van-tab :title="'房屋图片'">
          <detailSwipe
            :swipeData="mainPart?.topModule?.housePicture?.housePics"
          />

          <detailinfos :topInfos="mainPart?.topModule" />
        </van-tab>
        <van-tab :title="'房屋设施'">
          <faciliyArea
            :houseFacility="
              mainPart?.dynamicModule?.facilityModule?.houseFacility
            "
          />
        </van-tab>
        <van-tab :title="'房东介绍'">
          <landlord-area :landlord="mainPart?.dynamicModule?.landlordModule" />
        </van-tab>
        <van-tab :title="'房客点评'">
          <comment-area :comment="mainPart?.dynamicModule?.commentModule" />
        </van-tab>

        <relesArea :rules="mainPart?.dynamicModule?.rulesModule" />

        <action-bar :current-house="currentHouse" />
      </van-tabs>
    </template>
  </div>
</template>

<script setup>
import detailSwipe from "./cpns/detailSwipe.vue";
// 这里小写是因为文件名和下面的常量变量不能一样
import detailinfos from "./cpns/detailInfo.vue";
import faciliyArea from "./cpns/faciliy-area.vue";
import landlordArea from "./cpns/landlordArea.vue";
import commentArea from "./cpns/comment-area.vue";
import relesArea from "./cpns/rules-area.vue";
import ActionBar from "./cpns/action-bar.vue";

import { useRouter, useRoute } from "vue-router";
import { getDetailInfo } from "@/services";
import { ref, computed } from "vue";

//通过路由获取热门建议传给路由的id，热门建议点击以后来这里
const route = useRoute();
const houseId = route.params.id;
//然后把id拼接又传给网络请求getDetailInfo也就是detail.js，
//他在拼接一起发送请求后端数据,因为是一个promise所以有then
//then回调拿到数据，然后传给这个页面

const detailInfos = ref({});

const mainPart = computed(() => detailInfos.value?.mainPart);
const currentHouse = computed(() => detailInfos.value?.currentHouse);
// console.log("mainPart:", mainPart.topModule);
getDetailInfo(houseId).then((res) => {
  detailInfos.value = res.data;
});

// console.log("mainPart:",mainPart.value===detailInfos.value)

//旅途返回
const router = useRouter();
const onClickLeft = () => router.back();

const active = ref(0);
</script>

<style lang="less" scoped></style>
