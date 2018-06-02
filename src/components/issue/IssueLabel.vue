<template>
  <div class="input-label" :style="color">
    {{ label.name }}
  </div>
</template>

<script>
export default {
  name: 'issue-label',
  props: ['label'],
  computed: {
    color() {
      const hex = `#${this.label.color}`;
      return {
        color: hex,
        'border-color': hex,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.input-label {
  border: 1px solid black;
  margin-top: 5px;
  margin-right: 5px;
  padding: 3px 5px;
}
</style>
