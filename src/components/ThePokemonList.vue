<script setup lang="ts">
import PokemonCard from "@/components/elements/PokemonCard.vue";
import ListHeader from "./elements/ListHeader.vue";
import Input from "@/components/elements/Input.vue";
import ListNavButton from "./elements/NavButton.vue";
</script>

<template>
  <ListHeader />
  <Input name="Pokemon zoeken" value="" placeholder="Pokemon zoeken" />
  <div class="button-container"><ListNavButton /> <ListNavButton /></div>
  <PokemonCard />
</template>

<script lang="ts"></script>

<style scoped>
.button-container {
  display: flex;
  gap: 9px;
  margin-top: 19px;
  margin-bottom: 20px;
}
</style>
