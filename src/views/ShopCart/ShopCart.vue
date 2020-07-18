<template>
  <div class="shopcart">
    <shop-cart-nav-bar/>
    <scroll class="content">
      <car-list/>
    </scroll>
  </div>
</template>

<script>
import ShopCartNavBar from './childComps/ShopCartNavBar'
import CarList from './childComps/CarList'
import Scroll from 'components/common/Scroll/Scroll'

export default {
  name:'shopcart',
  components:{
    ShopCartNavBar,
    CarList,
    Scroll
  }
}
</script>

<style>
  .shopcart{
    height: 100vh;
    position: relative;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>