import hyRequest from "../request"

export function getDetailInfo(houseId) {
  return hyRequest.get({
    url: "/detail/infos",
    //params表示得是地址得尾数，因为尾数是灵活多变的
    //每一个尾数对应着每一个id
    params: {
      houseId,
    },
  });
}