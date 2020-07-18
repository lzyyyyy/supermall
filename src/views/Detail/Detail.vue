<template>
  <div class="detail">
    <detail-nav-bar ref="nav" @itemClick='itemClick'/>
    <scroll class="cotent" ref="scroll" :probeType='3' @scroll="contentScroll">
      <detail-swiper :topImages='topImages'/>
      <detail-base-info :goods='GoodsInfo'/>
      <detail-shop-info :shop='shopInfo'/>
      <detail-goods-info :detailInfo='detailInfo' @detailImageLoad='detailImageLoad'/>
      <detail-param-info ref='param' :paramInfo='paramInfo'/>
      <detail-comment-info ref='comment' :commentInfo='commentInfo'/>
      <goods-template ref='recommend' :list='list'/>
    </scroll>
    <back-top  @click.native="backClick" :class="{showBack:backshow}"/>
    <detail-botton-bar @addToCart='addToCart'/> 
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsTemplate from 'components/content/GoodsShow/Goods'
import Scroll from 'components/common/Scroll/Scroll.vue'
import DetailBottonBar from './childComps/DetailBottonBar'
import BackTop from 'components/content/BackTop/BackTop.vue'
import {ImageLoadMixin} from 'common/mixin'


import {getDetailData,Goods,getRecommend} from 'network/detail'



export default {
  name:'detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsTemplate,
    Scroll,
    DetailBottonBar,
    BackTop
  },
  mixins:[ImageLoadMixin],
  data() {
    return {
      iid:null,
      topImages:[],
      GoodsInfo:{},
      shopInfo:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      list:[],
      backshow:true,
      ImageLoadListener:null,
      themeTopYs:[]      
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetailData(this.iid).then(res=>{
      console.log(res);
      this.topImages=res.data.result.itemInfo.topImages
      const data = res.data.result
      this.GoodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shopInfo = data.shopInfo
      this.detailInfo = data.detailInfo
      this.paramInfo = data.itemParams
      this.commentInfo = data.rate.list[0]
    })
    getRecommend().then(res=>{
      // console.log(res);
      this.list = res.data.data.list
    })
  },
  destroyed() {
    //取消事件监听
    this.$bus.$off('itemImageLoad',this.ImageLoadListener)
  },
  methods:{
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position) {
      // console.log(position);
      if(position.y<-1000){
        this.backshow=false
      }else{
        this.backshow=true
      }

      for(let i in this.themeTopYs) {
        // console.log(i*1+1);
        let positions=position.y
        if((i<this.themeTopYs.length-1&&positions<this.themeTopYs[i]&&positions>this.themeTopYs[i*1+1])||i==this.themeTopYs.length-1&&positions<this.themeTopYs[i]) {
          // console.log(i);
          this.$refs.nav.currtIndex=i*1
        }
      }
    },
    detailImageLoad() {
      this.$refs.scroll.scroll.refresh
      this.themeTopYs=[]
      this.themeTopYs.push(0)
      this.themeTopYs.push(-this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(-this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs);
    },
    itemClick(index) {
      this.$refs.scroll.scroll.scrollTo(0,this.themeTopYs[index],0)
    },
    addToCart() {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.GoodsInfo.title
      product.desc = this.GoodsInfo.desc
      product.newPrice = this.GoodsInfo.newPrice
      product.iid = this.iid
      product.count = 0
      this.$store.dispatch('addCart',product)
    }        
  }
}
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
    z-index: 1;
  }
  .cotent{
    position: absolute;
    top: 44px;
    bottom: 58px;
    background-color: #fff;
  }
  .showBack{
    display: none;
  }
</style>