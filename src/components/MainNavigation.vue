<script setup>
// This component shows a main navigation with router links
</script>

<template>
  <nav class="main-navigation">
    <h1>Hejja's FastStack</h1>
    <div class="btn-container">
      <RouterLink to="/" class="btn-link">home</RouterLink> | 
      <RouterLink to="/websocket" class="btn-link">websocket</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.main-navigation {
  position: sticky;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 100;
  background-color: var(--black-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  margin-left: 1%;
}

.btn-container {
  margin-right: 1%;
  text-transform: uppercase;
}
</style>