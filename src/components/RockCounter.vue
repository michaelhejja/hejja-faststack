<script setup>
// This component shows VUEX functionality
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const count = computed(() => store.state.count)

function increaseCount() {
    store.dispatch('increment')
}

</script>

<template>
  <div class="rock-counter">
    <div class="label">Count: {{ count  }}</div>
    <button @click="increaseCount()"><img src="/assets/horns.png"/></button>
  </div>
</template>

<style scoped>

.rock-counter {
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 20px;
  right: 20px;
  background-color: var(--black-2);
  border-radius: 10px;
  padding: 5px 0 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  color: white;
  font-size: 24px;
}

button {
  width: 60px;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  &:active {
    transform: translate(0px, 1px);
  }
}

</style>