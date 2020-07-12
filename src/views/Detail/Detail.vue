<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages='topImages'></detail-swiper>
    <detail-base-info :goods='GoodsInfo'></detail-base-info>
    <detail-shop-info :shop='shopInfo'></detail-shop-info>
    <detail-goods-info :detailInfo='detailInfo'></detail-goods-info>
    <detail-param-info :paramInfo='paramInfo'/>
    <detail-comment-info :commentInfo='commentInfo'/>
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

import {getDetailData,Goods} from 'network/detail'

export default {
  name:'detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo
  },
  data() {
    return {
      iid:null,
      topImages:[],
      GoodsInfo:{},
      shopInfo:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetailData(this.iid).then(res=>{
      console.log(res)
      this.topImages=res.data.result.itemInfo.topImages
      const data = res.data.result
      this.GoodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shopInfo = data.shopInfo
      this.detailInfo = data.detailInfo
      this.paramInfo = data.itemParams
      this.commentInfo = data.rate.list[0]
    })
  }
}
</script>

<style>

</style>