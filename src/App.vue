<template>
    <div>
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
      <tab-bar-all></tab-bar-all>
    </div>
</template>

<script>
import TabBarAll from 'components/content/TabBarAll.vue'
export default {
  name:'app',
  components: {
    TabBarAll
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
