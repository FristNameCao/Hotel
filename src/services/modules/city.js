import hyRequest from '../request'
//5.这里2引入前面操作好的网络请求填写想要的数据
//http://123.207.32.32:1888/api后缀地址就行，
//直接再导出给store但是因为量太多了就直接都被 6 index接收后面直接调用index
export function getCityAll() {
  return hyRequest.get({
    url: "/city/all"
  })
}
