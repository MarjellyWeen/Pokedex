<template>
  <div class="name">{{ name }}</div>
  <div class="card" v-show="name !== 'Evolution'">
    <div class="description" v-show="description !== undefined">
      {{ description }}
    </div>
    <div class="detail-list">
      <div class="item-name">Number</div>
      <div class="item-value">001</div>
    </div>
  </div>
  <PokemonCard v-show="name === 'Evolution'" />
</template>

<script lang="ts">
import PokemonCard from "./PokemonCard.vue";
export default {
  name: "DetailsCard",
  props: {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    pokemon: {
      type: Object,
    },
  },
  components: {
    PokemonCard,
  },
};
</script>

<style scoped>
.name {
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.374px;
  color: #ffffff;
  margin-bottom: 10px;
}
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 25px;
  background: #ffffff;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}
.description {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.408px;
  margin-bottom: 20px;
}
.detail-list {
  display: flex;
  gap: 10px;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.408px;
}
.item-name {
  width: 120px;
  font-weight: 400;
  color: #acb2c1;
}
.item-value {
  font-weight: 500;
  color: #1f2029;
}
</style>
