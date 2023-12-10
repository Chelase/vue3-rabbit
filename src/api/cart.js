import request from '@/utils/request'
export const getCarList = () => {
    return request.get('/member/cart')
}

export const addCartList = ({skuId, count}) => {
    return request.post('/member/cart', {skuId, count})
} // 添加购物车

export const delCartList = (ids) => {
    // return request.delete('/member/cart', ids)
    return request({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
} // 删除购物车

export const mergeCartList = (data) => {
    return request.post('/member/cart/merge', data)
} // 合并购物车