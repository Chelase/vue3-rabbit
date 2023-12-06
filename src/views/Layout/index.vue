<script setup>
  import Nav from '@/views/Layout/components/Nav.vue'
  import Header from '@/views/Layout/components/Header.vue'
  import Footer from '@/views/Layout/components/Footer.vue'
</script>

<template>
  <!--二级路由出口-->
  <Nav/>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<style scoped>

</style>