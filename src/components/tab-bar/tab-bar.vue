<script setup>
import tabbarData from "@/assets/tabbarData/tabbarData.js";
import { getAssetURL } from "@/utils/load_assets.js";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
//这里vant已经帮你绑定好了index
//判断下标赋值图片，监听路由改变设置crrentIndex
const route = useRoute()
const crrentIndex = ref(0);
watch(route,(newRoute)=>{
  //寻找该数的路由下标，然后监听路由值，判断下标和值是否符合
  const index = tabbarData.findIndex(item =>item.path === newRoute.path)
  //符合就把下标给index然后给crrentIndex,findIndex找不到就是-1所以-1就不赋值
  if(index===-1) return
  crrentIndex.value=index
})
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

        <van-tabbar v-model="crrentIndex" active-color="#ff9854"  route                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         >
          <template v-for="(item, index) in tabbarData" :key="item">
            <!-- 这里to帮你切换路由 -->
          <van-tabbar-item :to="item.path">
            <!-- 句名插条 -->
            <template #icon>
            <img
              v-if="crrentIndex !== index"
              :src="getAssetURL(item.image)"
              alt=""
            />
            <!-- 然后这里不管你怎么切换路由图片bug都不会有了 -->
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
            </template>
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
  // height: 50px;
  // margin-top: auto;
  // overflow: hidden;
  //第一种修改vant类，类就要这样
  :deep(.van-tabbar-item_icon){
    font-size: 30px;
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
