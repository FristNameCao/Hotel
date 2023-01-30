<template>
  <div class="infos">
    <!-- top -->
    <div class="infos-top">
      {{ props.topInfos.houseName }}
    </div>

    <!-- 标签 -->
    <div class="houseTags">
      <template v-for="(item, index) in props.topInfos.houseTags" :key="index">
        <span
          class="text"
          v-if="item.tagText"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <!-- 评分 -->
    <div class="commentBrief">
      <div class="left">
        <span class="overall">{{ props.topInfos.commentBrief.overall }}</span>
        <span class="scoreTitle"
          >{{ props.topInfos.commentBrief.scoreTitle }}
        </span>
        <span class="commentBrief-child"
          >{{ props.topInfos.commentBrief.commentBrief }}
        </span>
      </div>
      <div class="right">
        <span class="totalCount"
          >{{ props.topInfos.commentBrief.totalCount }}条评论</span
        >
        <van-icon name="arrow" />
      </div>
    </div>

    <!-- 地址 -->
    <div class="nearByPosition">
      <div class="left">
        <span class="address">{{ props.topInfos.nearByPosition.address }}</span>
      </div>
      <div class="right">
        <span> 地图·周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  topInfos: {
    type: Object,
    default: () => ({}),
  },
});
console.log("topInfos:", props.topInfos);
</script>

<style lang="less" scoped>
.infos {
  padding: 16px;
  background-color: #fff;
  // 标头
  .infos-top {
    font-size: 24px;
  }
  // 标签
  .houseTags {
    display: flex;
    justify-content: space-around;
    margin: 5px 3px;
    // .text{
    //   pad: 3px 3px;
    // }
  }
  // 评分
  .commentBrief {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 3px;
    background-color: pink;
    height: 40px;
    border-radius: 4px;
    .left {
      .overall {
        font-size: 20px;
      }
      .scoreTitle {
        font-weight: 700;
      }
      .commentBrief-child {
        color: gray;
      }
    }
    .right {
      color: var(--primary);
    }
  }

  //地址
  .nearByPosition {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(252, 219, 224);
    height: 40px;
    font-weight: 600;
    border-radius: 4px;
    .left {
      flex-wrap: wrap;
    }
    .right {
      color: var(--primary);
    }
  }
}
</style>
