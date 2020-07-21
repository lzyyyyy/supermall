<template>
  <div>
    <category-nav-bar />
    <tab-meun :tabmeundata="categories" @selectItem="selectItem" />
  </div>
</template>

<script>
import CategoryNavBar from "./childComps/CategoryNavBar";
import TabMeun from "./childComps/TabMeun";

import { getCategoryData, getSubcategory,getCategoryDetail } from "network/category";
import {POP, SELL, NEW} from "@/common/const";
export default {
  name: "home",
  components: {
    CategoryNavBar,
    TabMeun
  },
  data() {
    return {
      currentIndex:-1,
      categories: [],
      categoryData: {
      },      
    };
  },
  created() {
    this.getCategoryData();
  },
  methods: {
    //网络相关方法
    getCategoryData() {
      getCategoryData().then(res => {
        //1.获取数据储存起来
        const data = res.data.data.category;
        this.categories = data.list;
        //2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          };
        }
        //3.请求第一个分类数据
        this.getSubcategories(0);
      });
    },
    getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        console.log(res);
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this.getCategoryDetail(POP);
        this.getCategoryDetail(SELL);
        this.getCategoryDetail(NEW);
      });
    },
    getCategoryDetail(type) {
		    // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
		    getCategoryDetail(miniWallkey, type).then(res => {
		      // 3.将获取的数据保存下来
		      this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
    },

    //事件相关的方法
    selectItem(index) {
      this.getSubcategories(index);
    }
  }
};
</script>

<style>
</style>