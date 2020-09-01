<template>
  <div class="check-button" :class="{isActive:isActive}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:"CheckButton",
  props:{
    isActive:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .check-button{
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .isActive{
    background-color: red;
    border:2px solid red
  }
</style>