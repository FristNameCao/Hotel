import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  //配置哈希路径
  history: createWebHashHistory(),
  //映射关系path component
  routes: [
    //默认主页
    {
      path: "/",
      redirect: "/home",
    },

    //每一个路径和每一个分包
    {
      path: "/home",
      component: () => import("@/views/home/home.vue"),
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue"),
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/message/massage.vue"),
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      //meta的hideTabBar设置true然后App.vue设置if取反这里就可以隐藏
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/search",
      component: () => import("@/views/search/search.vue"),
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/detail/detail.vue"),
    },
    {
      path: "/detailed",
      component: () => import("@/views/detail/detailed/detailed.vue"),
    },
  ],
});

export default router;
