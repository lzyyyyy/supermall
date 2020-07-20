import{
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let oldProduct = null
      //查找之前是否有该商品
      for(let item of context.state.carList){
        if(payload.iid === item.iid){
          oldProduct = item
        }
      }
      //判断oldProduct
      if(oldProduct){
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前商品数量+1')
      }else{
        payload.count = 1
        context.commit(ADD_TO_CART,payload)
        resolve('商品已经加入购物车')
      }  
    })
  }
}