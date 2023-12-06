import { getCategoryList } from '@/api/category'
import {ref} from 'vue'
// import { onBeforeRouteUpdate } from "vue-router";

export function useCategory () {

    const categoryData = ref([])
    const getCategory = async (id) => {
        const res = await getCategoryList(id)
        categoryData.value = res
    }

    return {
        categoryData,
        getCategory
    }
}

// onBeforeRouteUpdate((to) => {
//   getCategory(to.params.id)
// }) // 当路由参数出现变化时，执行