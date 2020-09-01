<template>
  <div>
    <scroll class="content" ref="scroll">
      <car-list-item v-for='item in cartList' :item-info='item'/>
    </scroll>  
  </div>
</template>

<script>
import CarListItem from './CarListItem'
import { mapGetters } from 'vuex'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name:'carlist',
  components:{
    CarListItem,
    Scroll,
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  },
  activated() {
    this.$refs.scroll.refresh()
  }  
}
</script>

<style scoped>
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 88px;
  }
</style>