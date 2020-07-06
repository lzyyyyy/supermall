<template>
  <div class="item" @click="itemClick">
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon">
      </slot>
    </div>
    <div v-else class="item-active-icon">
      <slot name="item-active-icon">
      </slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabbaritem',
  // computed: {
  //   isActive: true
  // }
  
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
  props: {
      path: {
        type: String,
        required: true
      },
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
   computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
  
    }
}
</script>

<style>
  .item {
    flex: 1;
    font-size: 14px;
  }
  .item-icon img {
    width: 29px;
    height: 29px;
  }
  .item-active-icon img {
    width: 29px;
    height: 29px;
  }
</style>