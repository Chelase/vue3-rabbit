import banner from '@/components/banner.vue'
import GoodsItem from '@/components/GoodsItem.vue'

export const componentsPlugin = {
    install(app) {
        app.component('轮播图组件', banner)
        app.component('商品项组件', GoodsItem)
    }
}