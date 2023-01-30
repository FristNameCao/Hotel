import { getCityAll } from "@/services";
import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  //这里相当于data()
  state: () => ({
    allCities: {},
    currentStore:{
      cityName:"杭州"
    },
  }),
  //这里相当于methods
  actions: {
    ////8.这里就存放着管理网络请求数据，9直接使用
    //调用前面的6也就是services里面 city函数，
    //实际上是从services下面的7.index取出来，
    //因为防止量太多不好维护就都存在一个文件直接导入一个文件就可以
    async fetchAllCitiesData() {
      const res = await getCityAll();
      this.allCities = res.data;
    },
  },
});
export default useCityStore;
