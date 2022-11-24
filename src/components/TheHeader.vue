<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <div class="icon-container">
      <font-awesome-icon
        icon="fa-solid fa-filter"
        v-show="isListView"
        class="icon"
      />
      <font-awesome-icon
        icon="fa-solid fa-arrow-right-arrow-left"
        v-show="isListView"
        class="icon"
        :style="{ transform: 'rotate(90deg)' }"
      />
      <font-awesome-icon
        icon="fa-regular fa-heart"
        v-show="isDetailsView"
        class="icon"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TheHeader",
  props: {
    title: {
      type: String,
    },
    isListView: {
      type: Boolean,
    },
    isDetailsView: {
      type: Boolean,
    },
  },
};
</script>

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
.icon-container {
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
