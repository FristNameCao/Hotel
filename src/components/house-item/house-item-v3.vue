<template>
  <!-- <h2>111</h2> -->
  <div class="house-item">
    <div class="house-item-inner">
      <div class="cover">
        <img :src="props.houseItem.image.url" alt="" />
      </div>
      <div class="house-infos">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{props.houseItem.location}}</span>
        </div>
        <div class="summaryText">{{ props.houseItem.summaryText }}</div>
        <div class="houseName">{{ props.houseItem.houseName }}</div>
        <div class="price">
          <div class="newPrice">￥{{ props.houseItem.finalPrice }}</div>
          <div class="oldPrice" >￥{{props.houseItem.productPrice}}</div>
          <div class="tip" >{{props?.houseItem?.priceTipBadge?.text}}</div>
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

</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
  display: flex;
  .house-item-inner {
    margin: 5px 5px;
    border-radius: 6px;
    overflow: auto;
    .house-infos{
      width: 90%;
      img{
        width: 8%;
      }

    }
    .cover {
      img {

        width: 100%;
      }
    }
    .price{
      display: flex;
      .newPrice{
        color: var(--primary);
        margin-right: 5px;
      }
      .tip{
        background-color: #ff9854;
        border-radius: 6px;
        margin-left: 5px;

      }
      .oldPrice{
        text-decoration: line-through;
      }
    }
  }
}
</style>
