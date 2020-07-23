<template>
  <div>
    <div class="view">
      <div class="item" v-for="(item, index) in subcategories.data&&subcategories.data.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContentCategory",
  components: {
    
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.view {
  left: 100px;
  z-index: -1;
}

.item {
  text-align: center;
  font-size: 12px;
  float: left;
}

.item-img {
  width: 40px;
}

.item-text {
  margin-top: 15px;
}
</style>
