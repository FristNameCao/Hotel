<template>
  <div class="house-item">
    <div class="house-item-inner">
      <div class="cover">
        <img :src="props.houseItem.image.url" alt="" />
        <div class="house-infos">
          <div class="summaryText">{{ props.houseItem.summaryText }}</div>
          <div class="houseName">{{ props.houseItem.houseName }}</div>
          <div class="price">
            <van-rate
              :model-value="Number(props.houseItem.commentScore)"
              readonly
              allow-half
              color="pink"
              size="14"
            />
            <div class="newPrice">价格:￥{{ props.houseItem.finalPrice }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  houseItem: {
    type: Object,
    default: () => ({}),
  },
});

// const value = ref(houseItem.commentScore)
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
  display: flex;
  .house-item-inner {
    background-color: pink;
    border-radius: 6px;

    margin: 5px 5px;
    overflow: hidden;
    .cover {
      position: relative;

      img {
        border-radius: 6px;
        width: 100%;
      }
      .house-infos {
        position: absolute;
        color: #fff;
        bottom: 0;
        .price {
          display: flex;
        }
      }
    }
  }
}
</style>
