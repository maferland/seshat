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
</style>
