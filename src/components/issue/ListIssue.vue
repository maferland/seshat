<template>
  <form class='pure-form'>
    <legend>
      <h2>Related issues:</h2>
    </legend>
    <issue-item v-for="issue in issues"
        :key="issue.id"
        :repository="repository">
    </issue-item>
  </form>
</template>

<script>
import EventBus from '@/events/eventBus';
import IssueItem from '@/components/issue/IssueItem';

export default {
  name: 'list-issue',
  components: { IssueItem },
  data() {
    return {
      issues: [],
    };
  },
  created() {
    EventBus.$on('onIssueSearched', this.searchIssue);
  },
  methods: {
    searchIssue(query) {
      console.log(query);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
