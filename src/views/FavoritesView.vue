<script setup lang="ts">
import TheFavoritesList from "@/components/TheFavoritesList.vue";
</script>

<template>
  <main class="favorites">
    <TheFavoritesList />
  </main>
</template>

<style scoped>
.favorites {
  background: linear-gradient(109.73deg, #65cb9a 0%, #15d0dc 100%);
}
@media (min-width: 1024px) {
  .favorites {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
