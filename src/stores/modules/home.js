import { defineStore } from "pinia";
import {
  getHomeHotSuggests,
  getHomeCategories,
  getHomeHouselist,
} from "@/services";
const useHomeStore = defineStore("home", {
  state: () => ({
    HotSuggests: [],
    Categories: [],
    current: 1,
    HouseList: [],
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHomeHotSuggests();
      this.HotSuggests = res.data;
    },
    async fetchHomeCategories() {
      const res = await getHomeCategories();
      this.Categories = res.data;
    },
    async fetchHomeHouseList(current) {
      const res = await getHomeHouselist(this.current);
      //主页点击一次这个push一次，...是为了展开数组
      this.HouseList.push(...res.data);
      this.current++;
    },
  },
});

export default useHomeStore;
