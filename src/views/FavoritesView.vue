<script setup lang="ts">
import TheFavoritesList from "@/components/TheFavoritesList.vue";
</script>

<template>
  <TheFavoritesList />
</template>

<style>
@media (min-width: 1024px) {
  .favorites {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(109.73deg, #46469c 0%, #7e32e0 100%);
  }
}
</style>
