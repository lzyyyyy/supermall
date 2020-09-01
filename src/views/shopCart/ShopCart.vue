<template>
  <div class="shopcart">
    <shop-cart-nav-bar/>
    <car-list/>
    <cart-buttom-bar/>
  </div>
</template>

<script>
import ShopCartNavBar from './childComps/ShopCartNavBar'
import CarList from './childComps/CarList'
import CartButtomBar from './childComps/CartButtomBar'


export default {
  name:'shopcart',
  components:{
    ShopCartNavBar,
    CarList,
    CartButtomBar
  },
}
</script>

<style scoped>
  .shopcart{
    height: 100vh;
    position: relative;
  }
</style>