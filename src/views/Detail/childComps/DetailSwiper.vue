<template>
    <swiper class="detailswiper">
      <swiper-item v-for='item in topImages'>        
          <img :src="item">     
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'detailswiper',
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type: Array,
      default() {
        return []
      }
    }
  },
//   methods: {
//     swiperLoad() {
//       this.$emit('swiperImageLoad')
//     }
//   }
  }
</script>

<style>
  .detailswiper{
    height:200px;
  }
</style>