<template>
  <LoaderComponent v-if="loading"></LoaderComponent>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>
<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"
import LoaderComponent from "@/components/LoaderComponent.vue"
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(true)
const router = useRouter()

router.isReady().then(() => {
  loading.value = false
})
</script>
<style></style>