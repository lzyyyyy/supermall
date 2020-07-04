<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'tabbar'
}
</script>

<style>
  .tabbar{
    height: 49px;
    background-color: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    text-align: center;
    box-shadow: 0 -1px 1px rgba(150,150,150,.08);
    }
</style>