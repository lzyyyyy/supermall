<template>
  <div>
    <nav-bar class="home-color">
      <span slot="center">购物街</span>
    </nav-bar>
    <home-swiper :banner='banner'></home-swiper>
    <home-recommend :recommend='recommend'></home-recommend>
    <home-feature></home-feature>
    <tab-control :controldata="['上衣','裙装','裤子']"></tab-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import HomeSwiper from 'views/Home/childComps/HomeSwiper.vue'
import HomeRecommend from 'views/Home/childComps/HomeRecommend.vue'
import HomeFeature from 'views/Home/childComps/HomeFeature.vue'
import TabControl from 'components/content/TabControl.vue'

import {getHomeMultiData} from 'network/home'
export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl
  },
  data() {
    return{
      banner: [],
      recommend: []
    }
  },
  created() {
    getHomeMultiData().then(res=>{
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list
    })
  }  
}
</script>

<style>
  .home-color{
    background-color: var( --color-tint);
    font-size: 20px;
    color: #fff;
  }
</style>