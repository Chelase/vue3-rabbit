import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
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
    if (response.data instanceof Blob) return response.data
    const { result, msg, code } = response.data
    if (code === "1") {
        return result
    } else {
        ElMessage({ type: 'error', message: msg })
        return Promise.reject(new Error(msg))
    }
}, async(error) => {
    // ElMessage.error(error.message)
    return Promise.reject(error)
})

export default request