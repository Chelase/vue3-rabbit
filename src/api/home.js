import request from '@/utils/request'

export const getCategory = () => {
    return request.get('/home/category/head')
} // 获取导航分类数据

export const getBanner = (distributionSite) => {
    return request.get('/home/banner', {
        distributionSite,
    })
} // 轮播数据

export const getNewGoods = (limit) => {
    return request.get('/home/new', {
        limit,
    })
} // 新鲜好物

export const getHotList = () => {
    return request.get('/home/hot')
} // 人气推荐

export const getGoods = () => {
    return request.get('/home/goods')
}

export default {
    getCategory,
    getBanner,
    getNewGoods,
    getHotList,
    getGoods
}