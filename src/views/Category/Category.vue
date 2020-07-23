<template>
  <div>
    <category-nav-bar/>    
    <tab-meun :tabmeundata="categories" @selectItem="selectItem" />
    <scroll class="content">
    <tab-content-category :subcategories="showSubcategory" />
    <tab-control :controldata="['流行','新款','精选']" class="control" @tabClick='tabClick'/>
    <goods :list='showCategoryDetail'/>
    </scroll>
  </div>
</template>

<script>
import CategoryNavBar from "./childComps/CategoryNavBar";
import TabMeun from "./childComps/TabMeun";
import TabContentCategory from "./childComps/TabContentCategory";
import TabControl from 'components/content/TabControl/TabControl';
import Scroll from 'components/common/Scroll/Scroll';
import Goods from 'components/content/GoodsShow/Goods'

import {
  getCategoryData,
  getSubcategory,
  getCategoryDetail
} from "network/category";
import { POP, SELL, NEW } from "@/common/const";
export default {
  name: "home",
  components: {
    CategoryNavBar,
    TabMeun,
    TabContentCategory,
    TabControl,
    Scroll,
    Goods
  },
  data() {
    return {
      currentIndex: -1,
      categories: [],
      categoryData: {}
    };
  },
  created() {
    this._getCategoryData();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail.pop.data;
    }
  },
  methods: {
    //网络相关方法
    _getCategoryData() {
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
        console.log(this.categoryData);
        //3.请求第一个分类数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      //maitKey是categories中的一个属性
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
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
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        //这句话什么意思？
        this.categoryData = { ...this.categoryData };
      });
    },

    //事件相关的方法
    selectItem(index) {
      this._getSubcategories(index);
    },

    tabClick() {
      
    }
  }
};
</script>

<style scoped>
  .content{
    position:absolute;
    top: 44px;
    bottom: 49px;
    left: 100px;
  }
</style>