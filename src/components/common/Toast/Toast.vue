<template>
  <div class="toast" v-show="isShow">
    <div>
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name:'toast',
  props:{
    // text:{
    //   type:String,
    //   default: ''
    // },
    // show:{
    //   type:Boolean,
    //   default:false
    // }
  },
  data() {
    return {
      text: '',
      isShow: false
    }
  },
  methods:{
    show(text,duratin) {
      this.isShow = true
      this.text = text

      setTimeout(()=>{
        this.isShow = false
        this.text = ''
      },duratin)
    }
  }
}
</script>

<style scoped>
  .toast{
    background-color: rgba(0,0,0,.5);
    color: #fff;
    position:fixed;
    top: 50%;
    left: 50%;
    padding: 10px;
    border-radius: 5%;  
    transform: translate(-50%,-50%);
    z-index: 999;
  }
</style>