import axios from "axios";
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore();
// import { useLoadingStore } from "@/store/modules/loading";
//4.然后这里导入那个封装好的函数，
//4.目的就是为了减少代码重复性和代码频繁修改 网络请求 5在city
import { baseURL, TIMEOUT } from "./config";
//1.这里先封装好axios 然后2在config.js
// const loadingStore = useLoadingStore();
class HYRequest {
  constructor(baseURL, TIMEOUT = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT,
    });

    //拦截器拦截加载图片,请求拦截器，拦截时候给个true
    this.instance.interceptors.request.use(
      (config) => {
        //拦截后得同时，给图片显示，没网络请求成功，失败就卡住了
        mainStore.isLoading = true;
        return config;
      },
      (err) => {
        //错误返回错误
        return err;
      }
    );
    //相应拦截器，上面请求拦截成功，下面就相应给个false
    this.instance.interceptors.response.use(
      (res) => {
        mainStore.isLoading = false;
        return res;
      },
      (err) => {
        //响应失败也给个false
        mainStore.isLoading = false;
        return err;
      }
    );
  }

  request(config) {
    // loadingStore.changeLoading(true);
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log("request err:", err);
          reject(err);
        });
      // .finally(() => {
      //   loadingStore.changeLoading(false);
      // });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new HYRequest(baseURL, TIMEOUT);
