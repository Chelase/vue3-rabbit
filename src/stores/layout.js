import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategory } from '@/api/home'

export const useLayoutStore = defineStore('layout', () => {
    const HeadList = ref([])
    const getCategoryList = async () => {
        const result = await getCategory()
        // HeadList.value = await getCategory()
        HeadList.value = result
    }
    return {
        HeadList,
        getCategoryList
    }
})