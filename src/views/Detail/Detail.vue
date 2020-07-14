<template>
  <div class="detail">
    <detail-nav-bar/>
    <scroll class="cotent">
      <detail-swiper :topImages='topImages'/>
      <detail-base-info :goods='GoodsInfo'/>
      <detail-shop-info :shop='shopInfo'/>
      <detail-goods-info :detailInfo='detailInfo'/>
      <detail-param-info :paramInfo='paramInfo'/>
      <detail-comment-info :commentInfo='commentInfo'/>
      <goods-template :list='list'/>
    </scroll>
  
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
  
  },
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
      backshow:true
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetailData(this.iid).then(res=>{
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
    bottom: 0;
    background-color: #fff;
  }
  .showBack{
    display: none;
  }
</style>