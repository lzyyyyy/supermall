<template>
  <div id="home">
    <nav-bar class="home-color">
      <span slot="center">购物街</span>
    </nav-bar>
    <tab-control :controldata="['流行','新款','精选']" @tabClick='tabClick' ref="tabControl2" :class="{zindex:isImbibition,display:!isImbibition}"></tab-control>
    <scroll class="content" ref="scroll" :probeType='3' @scroll="contentScroll" @pullingUp='loadMore' touch-action: none>
    <home-swiper :banner='banner' @swiperImageLoad='swiperImageLoad'></home-swiper>
    <home-recommend :recommend='recommend'></home-recommend>
    <home-feature></home-feature>
    <tab-control :controldata="['流行','新款','精选']" @tabClick='tabClick' ref="tabControl1"></tab-control>
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
import TabControl from 'components/content/TabControl/TabControl.vue'
import Goods from 'components/content/GoodsShow/Goods'
import Scroll from 'components/common/Scroll/Scroll.vue'
import BackTop from 'components/content/BackTop/BackTop.vue'
import {ImageLoadMixin} from 'common/mixin'


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
  mixins:[ImageLoadMixin],
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
      },
      offsetTop:0,
      isImbibition: false,
      saveY:0,
    }
  },
  
  created() {
    this.getHomeMultiData()
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },

  activated() {
    
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    
    this.$bus.$on('itemImageLoad',this.ImageLoadListener)
  },
  deactivated() {
    //保存y值
    this.saveY=this.$refs.scroll.scroll.y
    //2.取消全局事件的监听
    this.$bus.$off('itemImageLoad',this.ImageLoadListener)
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
    this.$refs.tabControl1.currtIndex=index
    this.$refs.tabControl2.currtIndex=index
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position) {
      if(position.y<-1000){
        this.backshow=false
      }else{
        this.backshow=true
      };
      if(position.y<-this. offsetTop){
        this.isImbibition=true
      }else{
        this.isImbibition=false
      }
    },
    loadMore() {
       this.getGoodsData(this.currentType)
      //  必须调用finishPullUp方法才能进行下一次
       this.$refs.scroll.scroll.finishPullUp()
    },
    swiperImageLoad() {
      this.offsetTop=this.$refs.tabControl1.$el.offsetTop
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
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  .showBack{
    display: none;
  }
  .zindex{
    position: relative;
    z-index: 999999;
  }
  .display{
    display: none;
  }
</style>