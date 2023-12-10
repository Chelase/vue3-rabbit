import { defineStore } from "pinia";
import { ref } from 'vue'
import { userLogin } from "@/api/login";

export const useUserInfoStore = defineStore('userInfo', () => {
    const userInfoList = ref('')
    const login = async (data) => {
        userInfoList.value = await userLogin(data)
        localStorage.setItem('userInfo', JSON.stringify(userInfoList.value))
    }

    const clearUserInfo = () => {
        userInfoList.value = ''
        localStorage.removeItem('userInfo')
    }

    return {
        userInfoList,
        login,
        clearUserInfo,
    }
},{
    persist: true,
})