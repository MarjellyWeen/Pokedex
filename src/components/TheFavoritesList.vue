<script setup lang="ts">
import PokemonCard from "@/components/elements/PokemonCard.vue";
import TheHeader from "./TheHeader.vue";
import CustomInput from "@/components/elements/Input.vue";
</script>

<template>
  <TheHeader title="Favorites" is-light-color />
  <CustomInput name="Pokemon zoeken" placeholder="Pokemon zoeken" />

  <PokemonCard />
</template>

<style scoped>
main {
  background: linear-gradient(109.73deg, #65cb9a 0%, #15d0dc 100%);
}
.button-container {
  display: flex;
  gap: 9px;
  margin-top: 19px;
  margin-bottom: 20px;
}
</style>
