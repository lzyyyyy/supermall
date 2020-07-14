<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for='(item,index) in title' class="item" :class="{active:index===currtIndex}" @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'
export default {
  name:'detail',
  components:{
    NavBar
  },
  data() {
    return {
      title:['商品','参数','评论','推荐'],
      currtIndex:0,
      isColor:true
    }
  },
  methods:{
    backClick() {
      this.$router.go(-1)
    },
    itemClick(index) {
      this.currtIndex=index
    }
  }
}
</script>

<style scoped>
  .detail-nav-bar{
    background-color: #fff;
    position: relative;
    z-index: 9;
  }
  .left{
    position: absolute;
  }
  .left img{
    position: relative;
    top: 6px;
    left: 20px;
  }
  .center{
    display: flex;
  }
  .center .item{
    flex: 1;
    font-size: 16px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>