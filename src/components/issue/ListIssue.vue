<template>
  <form class='pure-form'>
    <legend>
      <h2>Related issues:</h2>
    </legend>
    <div v-if="issues.length === 0" class="missing">
      <p>We couldn’t find any issues matching {{ query }}.</p>
    </div>
    <issue-item v-for="issue in issues"
        :key="issue.id"
        :issue="issue">
    </issue-item>
  </form>
</template>

<script>
import EventBus from '@/events/eventBus';
import IssueItem from '@/components/issue/IssueItem';
import { fetchIssue } from '@/services/githubApi';

export default {
  name: 'list-issue',
  components: { IssueItem },
  data() {
    return {
      issues: [],
      searchQuery: '',
    };
  },
  created() {
    EventBus.$on('onIssueSearched', this.searchIssue);
  },
  beforeDestroy() {
    EventBus.$off('onIssueSearched');
  },
  methods: {
    async searchIssue(searchQuery) {
      this.searchQuery = searchQuery;
      const repo = [{
        name: 'vue',
        owner: 'vuejs',
        nameWithOwner: 'vuejs/vue',
      }];

      const response = await fetchIssue(repo, searchQuery);

      if (response && response.errors) {
        return;
      }

      searchQuery.data.forEach(repository => {
        if(!repository.nodes) { return; }
        this.issues.push(...repository.nodes)
      });
    },
  },
  computed: {
    query() {
      const q = this.searchQuery;
      return q && q !== '' ?
        `'${q}'` : 'your query';
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
