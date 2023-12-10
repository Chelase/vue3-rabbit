<script setup>
import categoryApi from "@/api/category";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import GoodsItem from "@/components/GoodsItem.vue";
import { ArrowRight } from '@element-plus/icons-vue'

const route = useRoute()

onMounted(() => {
  getSubCategory(route.params.id)
  getSubCategoryListData()
})

const subCategory = ref([])
const getSubCategory = async (id) => {
  subCategory.value = await categoryApi.getSubCategoryList(id)
} // 面包屑name

const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime',
})
const subCategoryList = ref([])
const getSubCategoryListData = async () => {
  const res = await categoryApi.getSubCategoryData(reqData.value)
  subCategoryList.value = res.items
} // 获取分类数据

const tabChange = async () => {
  console.log(35, reqData.value.sortField)
  reqData.value.page = 1
  await categoryApi.getSubCategoryData(reqData.value)
} // 切换tab获取数据

const disabled = ref(false)
const load = async () => {
  reqData.value.page++
  const { items } = await categoryApi.getSubCategoryData(reqData.value)
  subCategoryList.value = [...subCategoryList.value,...items]
  // 加载完毕 停止监听
  if (items.length === 0) {
    disabled.value = true
  }
} // 触底获取下一页数据
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="`/category/${subCategory.parentId}`">{{ subCategory.parentName }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategory.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="good in subCategoryList" :goods="good" :key="good.id" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>