<script setup lang="ts">
import ThePokemonDetails from "@/components/ThePokemonDetails.vue";
</script>

<template>
  <ThePokemonDetails />
</template>

<style>
@media (min-width: 1024px) {
  .details {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
