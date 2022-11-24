<script setup lang="ts">
import TheTeamList from "@/components/TheTeamList.vue";
</script>

<template>
  <div class="team"><TheTeamList /></div>
</template>

<style>
@media (min-width: 1024px) {
  .team {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
