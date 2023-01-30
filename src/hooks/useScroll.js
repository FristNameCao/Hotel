import { onMounted, onUnmounted, ref } from "vue";
//节流函数，节流就是每一段时间执行一次，
//防抖就是不管你点多少次就只有一次有效
import { throttle } from "underscore";
export default function useScroll() {
  //定义一个flat
  const isReachBottomCB = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);

  //节流每100毫秒执行一次
  const scrollListenerHandler = throttle(() => {
    // 获取当前页面高度
    clientHeight.value = document.documentElement.clientHeight;
    //获取当前页面滚动高度
    scrollTop.value = document.documentElement.scrollTop;
    //获取当前页面高度加滚动的高度
    scrollHeight.value = document.documentElement.scrollHeight;
    //判断当前页面高度+获取当前页面滚动高度是否大于scrollHeight
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      // 判断flat是真就传递一个true给home.vue
      isReachBottomCB.value = true;
    }
  }, 100);

  //挂在到window
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });
  //卸载window
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });
  //返回这个真的flat
  return { isReachBottomCB, scrollHeight, scrollTop, clientHeight };
}
