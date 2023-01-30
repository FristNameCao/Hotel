<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive includes="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>


    <!--v-if="!route.meta.hideTabBar"可以通过点击某个页面进行取反隐藏
    这里是点击的导航栏就隐藏城市选择界面，
    如果点击了城市下面导航栏就隐藏
    -->
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
    <loading/>
    <!-- <router-link to="/home">主页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link> -->
  </div>
</template>

<script>
export default {name:"home"}
</script>

<script setup>
import loading from "./components/useloading/loading.vue";
import tabBar from "@/components/tab-bar/tab-bar.vue";
//useRoute是响应式而useRouter是push，back方法使用
import { useRoute } from "vue-router";

const route = useRoute();



</script>

<style scoped></style>
