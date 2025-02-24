<script setup>
import MainNavigation from './components/MainNavigation.vue'
</script>

<template>
  <MainNavigation />
  <div class="app-container">
    <RouterView class="router"/>
  </div>
</template>

<style scoped>

.app-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

</style>
