<script setup lang="ts">
import PokemonCard from "@/components/elements/PokemonCard.vue";
import TheHeader from "./TheHeader.vue";
import CustomInput from "@/components/elements/Input.vue";
import NavButton from "./elements/NavButton.vue";
</script>

<template>
  <main>
    <TheHeader title="Pok&#233;dex" is-list-view />
    <CustomInput name="Pokemon zoeken" placeholder="Pokemon zoeken" />
    <div class="button-container">
      <NavButton name="Team" />
      <NavButton name="Favorites" />
    </div>

    <PokemonCard />
  </main>
</template>

<script lang="ts">
export default {
  name: "ThePokemonList",
  props: {
    pokemonList: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  gap: 9px;
  margin-top: 19px;
  margin-bottom: 20px;
}
</style>
