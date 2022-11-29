<template>
  <div class="item" @click="onNavigate">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    />
    <div class="details">
      <h3>ivysaur</h3>
      <div class="order">#002</div>
    </div>
    <div class="type-container">
      <div class="type">poison</div>
      <div class="type">poison</div>
    </div>
    <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />
  </div>
</template>

<script lang="ts">
export default {
  name: "PokemonCard",
  props: {
    pokemon: {
      type: Object,
    },
  },
  methods: {
    onNavigate() {
      this.$router.push(`/details/${this.pokemon?.id}`);
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}
img {
  width: 50px;
  height: 50px;
  margin: 10px 14px;
}
.details {
  flex: 1;
  margin: 15px 2px;
}
.order {
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.374px;
  color: #919698;
}
.type-container {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin: 16px 0;
}
.type {
  align-items: flex-start;
  padding: 3px 10px;
  width: 56px;
  height: 20px;
  background: #ba7ec8;
  border-radius: 100px;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.374px;
  color: #ffffff;
}
.icon {
  width: 20px;
  height: 20px;
  margin: 16px 5px;
  color: #babec2;
}
</style>
