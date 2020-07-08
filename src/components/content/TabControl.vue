<template>
  <div class="control">
    <div class="control-item" 
         v-for='(item,index) in controldata' 
         :class="{active:index===currtIndex}" 
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>  
</template>

<script>
export default {
  name:'tabcontrol',
  data() {
    return{
      currtIndex:0,
    }
  },
  props: {
    controldata: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index){
      this.currtIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
  .control {
    width: 100%;
    display: flex;
    position: sticky;
    background-color: #fff;
    top: 43px;
    z-index: 999;                    
  }
  .control .control-item{
    flex: 1;
    font-size: 15px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: var(--color-high-text);
  
  }
  .active span{
    padding-bottom: 8px;
    border-bottom: 3px var(--color-high-text) solid;
  }
</style>