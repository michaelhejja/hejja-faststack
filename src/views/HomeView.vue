<script setup>
import { onMounted } from 'vue'
import RockCounter from '../components/RockCounter.vue'

onMounted(() => {
  console.log('Hello World')
})

</script>

<template>
  <div class="home">
    <video src="/assets/1e5848eb-d4f9-4967-8d1f-a99bd7421052.mp4" autoplay loop playsinline muted></video>
    <RockCounter />
  </div>
</template>

<style scoped>

video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.home {
  position: relative;
  width: 90%;
}

</style>