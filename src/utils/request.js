import axios from 'axios'
import { ElMessage } from 'element-plus'
import {useUserInfoStore} from "stores/user";
import router from "@/router";

const request = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

request.interceptors.request.use((config) => {
    const userStore = useUserInfoStore()
    const token = userStore.userInfoList.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
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
    // const userStore = useUserInfoStore()
    // ElMessage({type:'warning',message:error.response.data.message})
    // if (error.response.status === 401) {
    //     userStore.clearUserInfo()
    //     await router.push('/login')
    // }
    return Promise.reject(error)
})

export default request