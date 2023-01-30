<template>
  <div class="rules-area">
    <house-section header-text="预订须知">
      <div class="orderRules">
        <template v-for="(item, index) in rules.orderRules" :key="index">
          <div
            class="item"
            style="
               {
                color: item?.color?;
              }
            "
          >
            <div class="title">
              {{ item.title }}
            </div>

            <div class="introduction" v-if="item.introduction">
              <span>{{ item.introduction }}</span>
              <span class="tips" v-if="item.tips" @click="btnClick(item.tips)"
                >查看说明</span
              >
            </div>
            <div class="introduction" v-else>{{ item.icon }}</div>
          </div>
        </template>
      </div>
    </house-section>
  </div>
</template>

<script setup>
import HouseSection from "@/components/house-section/houseSection.vue";
import { useRouter } from "vue-router";

defineProps({
  rules: {
    type: Object,
    default: () => ({}),
  },
});
const router = useRouter();

const btnClick = (tips) => {
  router.push({
    path: "/detailed",
    query: {
      tips,
    },
  });
};
</script>

<style lang="less" scoped>
.rules-area {
  margin-bottom: 50px;
  .item {
    display: flex;
    margin: 14px 0px;
    // justify-content: space-around;
    .title {
      width: 56px;
      color: gray;
      // margin-right: 24px;
    }
    .introduction {
      margin-left: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .tips {
        position: absolute;
        right: 4px;
        font-weight: 700;
      }
    }
  }
}
</style>
