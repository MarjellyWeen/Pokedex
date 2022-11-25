<script setup lang="ts">
import TheHeader from "./TheHeader.vue";
import PokemonDetailsImage from "@/components/elements/PokemonDetailsImage.vue";
import DetailsCard from "./elements/DetailsCard.vue";
</script>

<template>
  <main>
    <TheHeader title="Venusaur" is-light-color is-details-view />
    <PokemonDetailsImage />
    <DetailsCard
      name="About"
      description="Vanaf de dag dat deze Pokémon wordt geboren, zit er een plantenzaadje op zijn rug. Het zaad wordt langzaam groter."
    />
    <DetailsCard name="Stats" />
    <DetailsCard name="Evolution" />
  </main>
</template>

<script lang="ts"></script>

<style scoped>
main {
  background: linear-gradient(180deg, #7ecd8b 0%, #89e2b3 100%);
}
</style>
