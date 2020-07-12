<template>
  <swiper>
      <swiper-item v-for='item in banner'>
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperLoad">
        </a>
      </swiper-item>
  </swiper>
</template>

<script>
// <template>
//     <swiper class="detailswiper">
//       <swiper-item v-for='item in banner'>        
//           <img :src="item">     
//       </swiper-item>
//     </swiper>
// </template>

import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'homeswiper',
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    banner:{
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    swiperLoad() {
      this.$emit('swiperImageLoad')
    }
  }
}
</script>

