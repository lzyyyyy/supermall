<template>
  <div>
    <nav-bar class="home-color">
      <span slot="center">购物街</span>
    </nav-bar>
    <home-swiper :banner='banner'></home-swiper>
    <home-recommend :recommend='recommend'></home-recommend>
    <home-feature></home-feature>
    <tab-control :controldata="['流行','新款','精选']" @tabClick='tabClick'></tab-control>
    <goods :list='goods[currentType].list'></goods>
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
import Goods from 'components/content/GoodsShow/Goods'
import Scroll from 'components/common/Scroll/Scroll.vue'

import {getHomeMultiData,getGoodsData} from 'network/home'

export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    Goods,
  },
  data() {
    return{
      banner: [],
      recommend: [],
      currentType:"pop",
      goods: {
        'pop': {page:0,list:[]},
        'new': {page:0,list:[]},
        'sell': {page:0,list:[]}
      }
    }
  },
  created() {
    this.getHomeMultiData()
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
  methods: {
    // 网络封装相关方法
    getHomeMultiData() {
      getHomeMultiData().then(res=>{
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list
    })
    },
    getGoodsData(type) {
      const page = this.goods[type].page+1
      getGoodsData(type,page).then(res=>{
      this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page+=1
    })
    },
    //事件相关方法
    tabClick(index) {
      switch(index){
        case 0: 
          this.currentType='pop'
        break;
        case 1: 
        this.currentType='new'
        break;
        case 2: 
        this.currentType='sell'
        break;
      } 
    } 
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