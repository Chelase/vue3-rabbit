import {defineStore} from "pinia";
import {ref, computed} from 'vue'
import {useUserInfoStore} from "stores/user";
import {addCartList, delCartList} from "@/api/cart";
import { getCarList } from '@/api/cart'
import {ElMessage} from "element-plus";

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const uesrStore = useUserInfoStore()
    const isLogin = computed(() => uesrStore.userInfoList.token)
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

    const getCart = async () => {
        cartList.value = await getCarList()
    }

    const addCart = async (skuId, goods) => {
        console.log('store/cart:', skuId, goods)
        const {count} = goods
        if (isLogin.value) {
            await addCartList({skuId, count})
            await getCart()
        } else {
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) item.count++
            else cartList.value.push(goods)
        }
        ElMessage.success('加入购物车成功')
    }

    const delCart = async (skuId) => {
        if (isLogin.value) {
            await delCartList([skuId])
            await getCart()
        } else {
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }
        ElMessage.success('删除成功')
    }

    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    } // 单选

    const allCheck = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    } // 全选

    const clearCart = () => {
        cartList.value = []
    } // 清空购物车

    const isAll = computed(() => cartList.value.every((item) => item.selected))

    return {
        cartList,
        addCart,
        delCart,
        selectedCount,
        selectedPrice,
        getCart,
        singleCheck,
        allCheck,
        isAll,
        clearCart
    }
},{
    persist: true
})