<script setup lang="ts">
import PokemonCard from "@/components/elements/PokemonCard.vue";
import TheHeader from "./TheHeader.vue";
import CustomInput from "@/components/elements/Input.vue";
</script>

<template>
  <TheHeader title="Favorites" />
  <CustomInput name="Pokemon zoeken" placeholder="Pokemon zoeken" />

  <PokemonCard />
</template>

<style scoped>
.button-container {
  display: flex;
  gap: 9px;
  margin-top: 19px;
  margin-bottom: 20px;
}
</style>
