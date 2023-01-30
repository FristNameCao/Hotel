import dayjs from "dayjs"

export function formatMonthDay(date,format="MM月DD月"){
  return dayjs(date).format(format);
}
export function getDiffDate(startDate,endDate){
  //计算相差时间diff后面day是可以是hour自定义diff帮你处理
  return dayjs(endDate).diff(startDate,"day");
}