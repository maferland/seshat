<template>
<div class='repository-item'>
  <div class='repository-information'>
    <div class='repository-item--title'>{{ repository.nameWithOwner }}</div>
    <div>{{ repository.description }}</div>
  </div>
  <a @click="removeRepository">
    <i class="material-icons repository-delete">
      delete
    </i>
  </a>
</div>
</template>

<script>
import EventBus from '@/events/eventBus';

export default {
  name: 'repository-delete-item',
  props: ['repository'],
  methods: {
    removeRepository() {
      EventBus.$emit('onRepositoryRemoved', this.repository);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/repositoryItem.scss';

  .repository-delete {
    font-size: 42px;
    color: $danger;
    cursor: pointer;
  }
</style>
