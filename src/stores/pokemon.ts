import { defineStore } from "pinia";

export const usePokemonStore = defineStore({
  id: "pokemon",
  state: () => ({
    pokemons: [],
    pokemon: null,
    loading: false,
  }),
  getters: {
    // getPostsPerAuthor: (state) => {
    //   return (authorId) => state.posts.filter((post) => post.userId === authorId)
    // }
  },
  actions: {
    async fetchPokemons() {
      this.pokemons = [];
      this.loading = true;
      try {
        this.pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/").then(
          (response) => response.json().then((data) => data.results)
        );
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async fetchPokemon(id: any) {
      this.pokemon = null;
      this.loading = true;
      try {
        this.pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        ).then((response) => response.json().then((data) => data));
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
