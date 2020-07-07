<template>
  <div>
    <nav-bar class="home-color">
      <span slot="center">购物街</span>
    </nav-bar>
    <swiper>
      <swiper-item v-for='item in banner'>
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import {getHomeMultiData} from 'network/home'
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'home',
  components: {
    NavBar,
    Swiper,
    SwiperItem
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