<script setup>
import LeftInfo from "@/views/Home/components/LeftInfo.vue"
import banner from '@/components/banner.vue'
import panel from './components/panel.vue'
import product from './components/product.vue'
import {getHotList, getNewGoods} from '@/api/home'
import { onMounted, ref } from 'vue'

onMounted( async() => {
  await getGoodsList()
  await getRecommendedList()
})

const newList = ref([])
const getGoodsList = async () => {
  newList.value = await getNewGoods()
} // 获取新鲜好物

const recommendList = ref([])
const getRecommendedList = async () => {
  recommendList.value = await getHotList()
} // 获取人气推荐

</script>

<template>
  <div class="container">
    <LeftInfo/>
    <banner/>
  </div>
  <panel title="新鲜好物" sub-title="新鲜出炉 品质靠谱" :List="newList"></panel>
  <panel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list">
      <li v-for="item in recommendList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" alt="" />
          <p>{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </panel>
  <product/>
</template>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>