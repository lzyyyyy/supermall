<template>
  <div class="buttombar">
    <check-button class="buttom" :isActive="isTrue" @click.native="checkedAll" />
    <span class="span">全选</span>
    <span class="span1">去结算({{totalLength}})</span>
    <span class="span2">合计{{totalPrice}}</span>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "cartbuttombar",
  components: {
    CheckButton
  },
  computed: {
    //总价格运算
    totalPrice() {
      return (
        "￥" +
        this.$store.state.carList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.nowPrice * item.count;
          }, 0)
      );
    },
    //总数量运算
    totalLength() {
      return this.$store.state.carList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
    //盘算是否全部选中
    isTrue() {
      const list = this.$store.state.carList;
      for (let i = 0; i < list.length; i++) {
        if (list[i].checked === true) {
          if (i === list.length - 1) {
            return true;
          }
          continue;
        } else {
          return false;
          break;
        }
      }
    }
  },
  methods: {
    checkedAll() {
      const list = this.$store.state.carList;
      if (this.isTrue) {
        //如果全选全部取消
        for (let i = 0; i < list.length; i++) {
          list[i].checked = false;
        }
      } else {
        //如果没有全选就全部
        for (let i = 0; i < list.length; i++) {
          list[i].checked = true;
        }
      }
    }
  }
};
</script>

<style scoped>
.buttombar {
  width: 100%;
  height: 40px;
  background-color: #eee;
  position: absolute;
  bottom: 49px;
}

.buttom {
  width: 22px;
  height: 22px;
  float: left;
  margin-top: 9px;
  margin-left: 9px;
}

.span {
  line-height: 40px;
  margin-left: 5px;
}

.span1 {
  display: inline-block;
  height: 40px;
  width: 100px;
  background-color: red;
  float: right;
  line-height: 40px;
  text-align: center;
  font-weight: 700;
  color: #fff;
}

.span2 {
  display: inline-block;
  height: 40px;
  width: 100px;
  float: right;
  line-height: 40px;
  text-align: center;
}
</style>

