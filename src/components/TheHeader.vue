<template>
  <div class="header">
    <h1>Pok&#233;dex</h1>
    <div>
      <font-awesome-icon icon="fa-solid fa-filter" />
      <font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  top: "calc(env(safe-area-inset-top) + 10px)";
}
</style>
