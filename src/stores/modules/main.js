import { defineStore } from "pinia";
 const startDate = new Date();
 const endDate = new Date();
//这里其实就是封装了一个初始化的data时间方便给别的组件使用
 endDate.setDate(startDate.getDate() + 1);

const useMainStore = defineStore("main", {
  state: () => ({
    token: "",
    startDate: startDate,
    endDate:endDate,
    isLoading:false,
  }),
});
export default useMainStore;