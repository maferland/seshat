<template>
<div class='issue-item'>
</div>
</template>

<script>
import EventBus from '@/events/eventBus';

export default {
  name: 'issue-item',
  props: ['issue'],
};
</script>

<style lang="scss" scoped>
  .issue-item {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    margin: 5vh 4vw;

    &--title {
      color: rgba(44, 62, 80, .8);
      font-weight: 600;
      font-size: 30px;
    }
  }

  .issue-information {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    text-align: left;
  }
</style>
