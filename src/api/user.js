import request from '@/utils/request'
export const getLikeInfoList = ({ limit = 4 }) => {
    return request.get('/goods/relevant', {
        params: {
            limit
        }
    })
} // 获取猜你喜欢