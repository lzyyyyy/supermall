<template>
  <div class="buttombar">
    <check-button class="buttom" :isActive='isTrue()'/>
    <span class="span">全选</span>
    <span class="span1">合计{{totalPrice}}</span>
  </div>
</template>

<script>
import CheckButton from 'components/content/CheckButton/CheckButton'
export default {
  name:'cartbuttombar',
  components:{
    CheckButton
  },
  computed:{
    totalPrice() {
      return '￥'+this.$store.state.carList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue+item.newPrice*item.count
      },0)
    }
  },
  methods:{
    isTrue() {
      const list = this.$store.state.carList
      for(let i=0;i<list.length;i++) {
        if(list[i].checked===true){
          if(i===list.length-1){
            return true
          }
          continue;
        }else{
          return false
          break
        }
      }
    }
  }
}
</script>

<style scoped>
  .buttombar{
    width: 100%;
    height: 40px;
    background-color: #eee;
    position: absolute;
    bottom:49px
  }

  .buttom{
    width: 22px;
    height: 22px;
    float: left;
    margin-top: 9px;
    margin-left: 9px;
  }
  
  .span{
    line-height: 40px;
    margin-left: 5px;
  }

  .span1{
     margin-left: 80px;
  }


</style>

