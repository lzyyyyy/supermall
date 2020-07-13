<template>
  <div>
    <swiper class="detailswiper">
      <swiper-item v-for='item in topImages'>        
          <img :src="item">     
      </swiper-item>
    </swiper>
  </div>
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

<style scoped>
  .detailswiper{
    height:300px;
  }
</style>