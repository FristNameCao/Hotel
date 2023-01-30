<template>
  <div class="categories">
    <template v-for="(item, index) in Categories" :key="index">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
      <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useHomeStore from "@/stores/modules/home";

const searchStore = useHomeStore();
const { Categories } = storeToRefs(searchStore);
</script>

<style lang="less" scoped>
.categories {
   display: flex;
   overflow-x: auto;
   height: 80px;
   //隐藏滚动条是个伪元素
  &::-webkit-scrollbar{display: none;}

  // flex-direction: column;
  // justify-content: space-around;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
    width: 70px;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }
    .text{
      font-size: 12px;
      margin: 5px 0px;
    }
  }
}
</style>
