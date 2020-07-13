<template>
  <div class="goods">
    <goods-show-item v-for="item in list" :goodsdata='item'></goods-show-item>
  </div>
</template>

<script>
import GoodsShowItem from 'components/content/GoodsShow/GoodsShowItem'
export default {
  name:'goods',
  components:{
    GoodsShowItem
  },
  props: {
  list: {
    type: Array,
    default(){
    return []
    }
    }
  }
}
</script>

<style scoped>
  .goods {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>