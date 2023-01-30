<template>
  <div class="detail-swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="pink">
      <template v-for="(item, index) in props.swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <!-- 插条第几个图片是什么数出来 -->
      <template #indicator="{ active }">
        <div class="custom-indicator">
          <template v-for="(value, key) in swipeGroup" :key="key">
            <!-- 这里轮播图判断key是否相等选择谁 -->
            <span
              class="name"
              :class="{ active: swipeData[active]?.enumPictureCategory == key }"
            >
              {{ getName(value[0].title) }}

              <span
                class="count"
                v-if="swipeData[active]?.enumPictureCategory == key"
              >
                {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
});


//拿到数据以key方式进行分类，通过引用方式push
//这里拿到的是图片数据
const swipeGroup = {};
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory];
  if (!valueArray) {
    valueArray = [];
    swipeGroup[item.enumPictureCategory] = valueArray;
  }
  valueArray.push(item);
}
console.log(props.swipeData)
// console.log(swipeGroup);

//替换为空
const nameRge = /【(.*?)】/i;
const getName = (name) => {
  //这里会拿到前面一个数据为0然后新的数据为1
  const result = nameRge.exec(name);
  return result[1];
};
// console.log(props.swipeData);

//图片切换左边初始下标
const getCategoryIndex = (item) => {
  //取到swipeGroup某个key
  const index = swipeGroup[item.enumPictureCategory];
  //寻找swipeData[active]下来的item下标
  //是否等于swipeGroup值的下标是的话就返回，
  //findIndex是一直寻找这swipeGroup下标，
  //然后看看是不是data == item相等是才返回，其实就是循环一下
  return index.findIndex((data) => data == item) + 1;
};
</script>

<style lang="less" scoped>
.detail-swipe {
  .my-swipe {
    img {
      width: 100%;
    }
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    .name {
      margin: 0px 3px;

      &.active {
        padding: 0px 3px;
        border-radius: 4px;
        background-color: #fff;
        color: #333;
      }
    }
  }
}
</style>
