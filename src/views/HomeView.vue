<script setup lang="ts">
import ThePokemonList from "@/components/ThePokemonList.vue";
import { toRefs } from "vue";

import { usePokemonStore } from "../stores/pokemon";

const { pokemons } = toRefs(usePokemonStore());
const { fetchPokemons } = usePokemonStore();

fetchPokemons();

console.log(pokemons);
</script>

<template>
  <main>
    <ThePokemonList />
  </main>
</template>
