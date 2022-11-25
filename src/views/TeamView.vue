<script setup lang="ts">
import TheTeamList from "@/components/TheTeamList.vue";
</script>

<template>
  <main class="team"><TheTeamList /></main>
</template>

<style>
.team {
  background: linear-gradient(109.73deg, #46469c 0%, #7e32e0 100%);
}
@media (min-width: 1024px) {
  .team {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
