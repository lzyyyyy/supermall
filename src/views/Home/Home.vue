<template>
  <div id="home">
    <nav-bar class="home-color">
      <span slot="center">购物街</span>
    </nav-bar>
    <scroll class="content" ref="scroll" :probeType='3' @scroll1="contentScroll" @pullingUp='loadMore'>
    <home-swiper :banner='banner'></home-swiper>
    <home-recommend :recommend='recommend'></home-recommend>
    <home-feature></home-feature>
    <tab-control :controldata="['流行','新款','精选']" @tabClick='tabClick'></tab-control>
    <goods :list='goods[currentType].list'></goods>
    </scroll>
    <back-top @click.native="backClick" :class="{showBack:backshow}"></back-top>
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
import BackTop from 'components/content/BackTop/BackTop.vue'

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
    Scroll,
    BackTop
  },
  data() {
    return{
      banner: [],
      recommend: [],
      backshow:true,
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
      this.$refs.scroll.scroll.refresh()
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
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position) {
      if(position.y<-1000){
        this.backshow=false
      }else{
        this.backshow=true
      }
    },
    loadMore() {
       this.getGoodsData(this.currentType)
       this.$refs.scroll.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .home-color{
    background-color: var( --color-tint);
    font-size: 20px;
    color: #fff;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  .showBack{
    display: none;
  }
</style>