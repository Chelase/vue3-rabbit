import request from '@/utils/request'
export const getOrderInfoList = () => {
    return request.get('/member/order/pre')
} // 获取订单

export const createOrderList = (data) => {
    return request.post('/member/order', data)
} // 创建订单

export const getUserOrder = (params) => {
    return request.get('/member/order', {
        params,
    })
}