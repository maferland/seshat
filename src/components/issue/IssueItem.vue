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
      if (!edges.length === 0) {
        return [];
      }
      return edges.map(edge => edge.node);
    },
    closed() {
      return !!this.issue.closed;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";

.issue-item {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5vh 4vw;

  -webkit-animation: fadein 0.5s;
  animation: fadein 0.5s;

  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  &--title {
    color: $primaryDark;
    text-align: left;
    font-size: 20px;
    text-decoration: none;

  @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  &--label {
    display: flex;
    flex-flow: row;
  }

  &--state {
    margin-right: 10px;
    color: $success;
  }

  .closed {
    color: $danger;
  }

  &--container {
    text-align: left;
  }
}
</style>
