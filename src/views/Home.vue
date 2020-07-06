<template>
  <div>
    <nav-bar class="home-color">
      <span slot="center">购物街</span>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
export default {
  name: 'home',
  components: {
    NavBar
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