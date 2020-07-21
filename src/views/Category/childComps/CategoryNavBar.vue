<template>
  <div class="navbar">
    <nav-bar>
      <div slot="center" class="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'
export default {
  name:'category-nav-bar',
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .navbar{
    background-color: var(--color-tint);
    position: relative;
    z-index: 1;
  }
  .center{
    color: #fff;
    font-size: 18px;
  }
</style>