<template>
  <input
    type="text"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    @input="onInput"
    @change="onChange"
  />
</template>

<script lang="ts">
export default {
  name: "CustomInput",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },

  watch: {
    value: {
      handler(newValue, oldValue) {
        console.log("value changed", newValue, oldValue);
      },
    },
  },
  computed: {},
  methods: {
    onInput(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit("input", target.value);
    },
    onChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit("change", target.value);
    },
  },
};
</script>

<style scoped>
input {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px 8px;
  gap: 6px;
  width: 343px;
  height: 36px;
  background: #eff0f1;
  border-radius: 10px;
  outline: none;
}
</style>
