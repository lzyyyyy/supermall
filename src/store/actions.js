import{
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context,payload){
    let oldProduct = null
    for(let item of context.state.carList){
      if(payload.iid === item.iid){
        oldProduct = item
      }
    }
    //判断oldProduct
    if(oldProduct){
      context.commit(ADD_COUNTER,oldProduct)
    }else{
      payload.count = 1
      context.commit(ADD_TO_CART,payload)
    }     
  }
}