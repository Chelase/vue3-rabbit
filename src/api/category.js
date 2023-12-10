import request from '@/utils/request'
export const getCategoryList = (id) => {
    return request.get('/category', {
        params: {
            id
        }
    })
}

export const getSubCategoryList = (id) => {
    return request.get('/category/sub/filter', {
        params: {
            id
        }
    })
}

export const getSubCategoryData = (data) => {
    return request.post('/category/goods/temporary', data)
} // 获取分类数据

export default {
    getCategoryList,
    getSubCategoryList,
    getSubCategoryData
}