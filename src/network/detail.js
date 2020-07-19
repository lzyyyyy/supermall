import {request1} from "./request"

export function getDetailData(iid) {
  return request1({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend() {
  return request1({
    url:'/recommend'
  })
}

export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.lowNowPrice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.realPrice
    this.desc = itemInfo.desc
  }
}

// export class shop {
//   constructor(shopInfo) {

//   }
// }