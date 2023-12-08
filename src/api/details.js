import request from '@/utils/request'

export function getDetails (id) {
    return request.get('/goods', {
        params: {
            id
        }
    })
}

export function getHotDetails ({ id, type, limit = 3 }) {
    return request.get('/goods/hot', {
        params: {
            id,
            type,
            limit
        }
    })
}