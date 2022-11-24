<template>
  <div class="header">
    <h1 class="title">Pok&#233;dex</h1>
    <div class="icon-container">
      <font-awesome-icon icon="fa-solid fa-filter" class="icon" />
      <font-awesome-icon
        icon="fa-solid fa-arrow-right-arrow-left"
        class="icon"
      />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  height: 103px;
  width: 100%;
  margin-bottom: 14px;
}
.title {
  /* ✏️ Title */
  height: 41px;
  width: inherit;
  align-self: end;
}
icon-container {
  display: flex;
  height: fit-content;
  gap: 5px;
  top: 21px;
}
.icon {
  width: 20px;
  height: 20px;
}
</style>
