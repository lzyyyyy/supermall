<template>
    <div>
      <router-view></router-view>
      <tab-bar>
      <tab-bar-item path='/home'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
        <span slot="item-text">分类</span>
      </tab-bar-item>      
      <tab-bar-item path='/shopcart'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
        <span slot="item-text">购物车</span>
      </tab-bar-item>
       <tab-bar-item path='/profile'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
        <span slot="item-text">我的</span>
      </tab-bar-item>           
      </tab-bar>
    </div>
</template>

<script>
import TabBar from 'components/common/TabBar.vue'
import TabBarItem from 'components/common/TabBarItem.vue'
export default {
  name:'app',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
