<template>
  <div class="detailed">
    <div class="tip">
      <h2>{{ $route.query.tips[0] }}</h2>
      <h2 class="back" @click="backClick">点击返回</h2>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const backClick = () => [router.back()];
</script>

<style lang="less" scoped>
.detailed {
  height: 100vh;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  .tip {
    color: pink;
  }
  .back{
    margin-top: 14px;

  }
}
</style>
