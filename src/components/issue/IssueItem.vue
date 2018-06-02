<template>
<div class='issue-item issue-item--container"'>
    <i class="material-icons issue-item--state" v-bind:class="{closed: closed}">
      check_circle_outline
    </i>

    <div class="issue-item--container">
      <a class='issue-item--title' :href="issue.url">
        {{ issue.title }}
      </a>

      <div class="issue-item--label">
        <issue-label v-for="(label, index) in labels"
            :key="index"
            :label="label">
        </issue-label>
      </div>
    </div>
</div>
</template>

<script>
import IssueLabel from '@/components/issue/IssueLabel';

export default {
  name: 'issue-item',
  props: ['issue'],
  components: { IssueLabel },
  computed: {
    labels() {
      const edges = this.issue.labels.edges;
      if (!edges.length === 0) { return []; }
      return edges.map(edge => edge.node);
    },
    closed() {
      return !!this.issue.closed;
    },
  },
};
</script>

<style lang="scss" scoped>
  .issue-item {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 5vh 4vw;

    &--title {
      color: rgba(44, 62, 80, .8);
      text-align: left;
    }

    &--label {
      display: flex;
      flex-flow: row;
    }

    &--state {
      margin-right: 10px;
      color: rgba(58, 135, 58, 0.579);
    }

    .closed {
      color: rgba(255, 0, 0, 0.621);
    }

    &--container {
      text-align: left;
    }
  }

  .issue-information {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    text-align: left;
  }
</style>
