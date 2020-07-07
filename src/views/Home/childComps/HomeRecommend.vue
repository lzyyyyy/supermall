<template>
  <div class="recommend">
    <div class="recommend-item"  v-for='item in recommend'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'homerecommend',
  props:{
    recommend:{
      type:Array,
      default() {
        return []
      }      
    }
  }
}
</script>

<style>
  .recommend{
  display: flex;
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend img {
    width: 65px;
    height: 68px;
  }
</style>