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

  .repository-add {
    font-size: 42px;
    color: rgba(58, 135, 58, 0.579);
  }
</style>
