import { getBanner } from '@/api/home'
import { ref } from 'vue'

export function useBanner () {
    const bannerList = ref([])
    const getBannerList = async (id) => {
        bannerList.value = await getBanner(id)
    } // 获取轮播图

    return {
        bannerList,
        getBannerList
    }
}