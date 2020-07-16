import {debouce} from 'common/utils'

export const ImageLoadMixin = {
  data() {
    return {
      ImageLoadListener:null
    }
  },
  mounted() {
    const newRefresh = debouce(this.$refs.scroll.refresh,100)
    this.ImageLoadListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.ImageLoadListener)
  },
}