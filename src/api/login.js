import request from '@/utils/request'
export function userLogin(data) {
    return request.post('/login', data)
}