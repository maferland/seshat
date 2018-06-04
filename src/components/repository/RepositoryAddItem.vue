<template>
<div class='repository-item'>
  <div class='repository-information'>
    <div class='repository-item--title'>{{ repository.nameWithOwner }}</div>
  </div>
  <a @click="addRepository">
    <i class="material-icons repository-add">
      add_circle_outline
    </i>
  </a>
</div>
</template>

<script>
import EventBus from '@/events/eventBus';

export default {
  name: 'repository-add-item',
  props: ['repository'],
  methods: {
    async addRepository() {
      EventBus.$emit('onRepositoryAdded', this.repository);
      EventBus.$emit('onSnackbarDisplayed', `Adding ${this.repository.nameWithOwner}`);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/repositoryItem.scss';

  .repository-information {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    text-align: left;
  }

  .repository-add {
    font-size: 42px;
    color: $success;
  }
</style>
