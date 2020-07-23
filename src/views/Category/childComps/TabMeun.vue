<template>
  <div class="tabmeun">
    <scroll class="content">
      <div class="tabmeun-item" 
        v-for='(item,index) in tabmeundata'
        :class="{isActive:currtIndex===index}"
        @click="changeIndex(index)">
        {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll/Scroll'
export default {
  name:'tabmeun',
  components:{
    Scroll
  },
  props:{
    tabmeundata:{
      type:Array,
      default:''
    }
  },
  data() {
    return{
      currtIndex:0
    }
  },
  methods:{
    changeIndex(index) {
      this.currtIndex = index
      this.$emit('selectItem', index)
    }
  }
}
</script>

<style scoped>
  .tabmeun{
    /* position: relative; */
  }
  .tabmeun-item{
    height: 40px;
    line-height: 40px;
    width: 100px;
    background: #eee;
    text-align: center;
  }
  .isActive{
    background-color: #fff;
    border-left: 2px solid var(--color-tint);
  }
  .content{
    width: 80px;
    position: absolute;
    top: 44px;
    bottom:49px

  }
</style>