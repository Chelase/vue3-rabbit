// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import App from './App.vue'
import router from './router'
import imgLazyPlugin from '@/directives/imgLazyPlugin'
import { componentsPlugin } from '@/directives/componentsPlugin'
import {useUserInfoStore} from "stores/user";
import { useCartStore } from "stores/cart";

import '@/styles/common.scss'
import 'element-plus/theme-chalk/el-message.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(imgLazyPlugin)
app.use(componentsPlugin)

//获取用户信息
const userInfo = JSON.parse(localStorage.getItem('userInfo')) || ''
const useStore = useUserInfoStore()
const { userInfoList } = storeToRefs(useStore)
userInfoList.value = userInfo
//获取购物车列表
const cartStore = useCartStore()
if (userInfoList.value !== '') cartStore.getCart()

app.mount('#app')
