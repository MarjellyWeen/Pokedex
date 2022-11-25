<template>
  <div class="image-container">
    <font-awesome-icon class="icon" icon="fa-solid fa-chevron-left" />
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    />
    <div class="shadow" />
    <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />
  </div>
</template>

<script lang="ts">
export default {
  name: "PokemonDetailsImage",
};
</script>

<style scoped>
.image-container {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 225px;
  height: 225px;
  object-fit: cover;
}
.shadow {
  position: absolute;
  width: 213px;
  height: 12px;
  left: 20%;
  bottom: 20%;
  background: rgba(0, 0, 0, 0.3);
  filter: blur(7.5px);
}
.icon {
  width: 20px;
  height: 20px;
  color: #ffffff;
}
</style>
