<template>
  <div class="navbar">
    <nav-bar>
      <div slot="center">
        购物车（{{cartLength}}）
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { mapGetters } from 'vuex'
export default {
  name:'shopcartnavbar',
  components: {
    NavBar
  },
  computed:{
    ...mapGetters([
      'cartLength'
    ])    
  },

}
</script>

<style scoped>
  .navbar{
    background-color:var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 1;
  }
</style>