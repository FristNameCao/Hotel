<script setup>
import tabbarData from "@/assets/tabbarData/tabbarData.js";
import { getAssetURL } from "@/utils/load_assets.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
//这里vant已经帮你绑定好了index
const crrentIndex = ref(0);
// const router = useRouter();
//这里拿到下面的index判断样式
//这里拿到item后再拿item里面的path赋值给router原型上面去
//这里就可以拿到rotuer
// function activeClick(index, item) {
//   // crrentIndex.value = index;
//   //这里把item数据push给router里面去就会立马显示别的界面
//   router.push(item.path);
// }
</script>
<template>
  <div class="tab-bar">

        <van-tabbar v-model="crrentIndex" active-color="#ff9854">
          <template v-for="(item, index) in tabbarData" :key="item">
            <!-- 这里to帮你切换路由 -->
          <van-tabbar-item :to="item.path" icon="home-o">
            <!-- <template #icon>
            <img
              v-if="crrentIndex !== index"
              :src="getAssetURL(item.image)"
              alt=""
            />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
            </template> -->
            <span class="text">{{ item.text }}</span>
          </van-tabbar-item>
          </template>
        </van-tabbar>
      </div>
      <!-- <div
        class="tab-bar-item"
        @click="activeClick(index, item)"
        :class="{ active: crrentIndex === index }"
      >
        <img
          v-if="crrentIndex !== index"
          :src="getAssetURL(item.image)"
          alt=""
        />

        <img v-else :src="getAssetURL(item.imageActive)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div> -->
    <!-- </template>
  </div> -->
</template>
<style lang="less" scoped>
.tab-bar {
  //第一种修改vant类，类就要这样
  :deep(.van-tabbar-item_icon){
    font-size: 30px;
    // margin-top:50px;
  }
  //第二种修改vant样式
   img{
    height: 28px;
   }
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   display: flex;
//   .tab-bar-item {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height: 50px;
//     border-top: pink 1px solid;
//     &.active {
//       color: var(--primary);
//     }
//     img {
//       width: 32px;
//     }
//     .text {
//       font-size: 12px;
//     }
//   }
}
</style>
