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
  .repository-item {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    margin: 5vh 4vw;

    &--title {
      color: rgba(44, 62, 80, 0.8);
      font-weight: 600;
      font-size: 30px;
    }

    -webkit-animation: fadein 0.5s;
    animation: fadein 0.5s;

    @-webkit-keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }

    @keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }
  }

  .repository-information {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    text-align: left;
  }

  .repository-delete {
    font-size: 42px;
    color: rgba(255, 0, 0, 0.621);
  }
</style>
