<template>
  <div class="button" v-bind:class="name.toLowerCase()" @click="onNavigate">
    <div class="details">
      <h2>{{ name }}</h2>
      <div class="count">12 Pokemon</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavButton",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    onNavigate() {
      this.$router.push(`/${this.name.toLowerCase()}`);
    },
  },
};
</script>

<style scoped>
.button {
  width: 167px;
  height: 100px;
  border-radius: 10px;
}
.details {
  margin: 46px 0 0 15px;
}
.count {
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: rgba(255, 255, 255, 0.5);
}
.team {
  background: linear-gradient(109.73deg, #46469c 0%, #7e32e0 100%);
}
.favorites {
  background: linear-gradient(109.73deg, #65cb9a 0%, #15d0dc 100%);
}
</style>
