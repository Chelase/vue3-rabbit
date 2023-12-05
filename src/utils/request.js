import axios from 'axios'
import { ElMessage } from 'element-plus'

export const request = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

request.interceptors.request.use((config) => {
    return config
},(error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    const { data, message, success } = response.data
    if (success) {

        return data
    } else {
        ElMessage.error(message)
        return Promise.reject(new Error(message))
    }
}, async(error) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
})