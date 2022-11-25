<script setup lang="ts">
import PokemonCard from "@/components/elements/PokemonCard.vue";
import TheHeader from "./TheHeader.vue";
import CustomInput from "@/components/elements/Input.vue";
</script>

<template>
  <TheHeader title="Team" is-light-color />
  <CustomInput name="Pokemon zoeken" placeholder="Pokemon zoeken" />

  <PokemonCard />
</template>
