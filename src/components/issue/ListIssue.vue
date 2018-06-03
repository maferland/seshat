<template>
  <form class='pure-form'>
    <legend>
      <h2>Related issues:</h2>
    </legend>
    <div v-if="issues.length === 0" class="missing">
      <p>We couldn’t find any issues matching {{ queryMessage }}.</p>
    </div>
    <issue-item v-for="issue in issues"
        :key="issue.url"
        :issue="issue">
    </issue-item>
  </form>
</template>

<script>
import EventBus from '@/events/eventBus';
import IssueItem from '@/components/issue/IssueItem';
import { fetchIssue } from '@/services/githubApi';
import { listenRepository } from '@/services/databaseApi';

export default {
  name: 'list-issue',
  components: { IssueItem },
  data() {
    return {
      issues: [],
      repositories: [],
      searchQuery: '',
    };
  },
  created() {
    EventBus.$on('onIssueSearched', (searchQuery) => {
      this.searchQuery = searchQuery;
      this.searchIssue();
    });

    this.init();
  },
  beforeDestroy() {
    EventBus.$off('onIssueSearched');
  },
  methods: {
    async init() {
      await this.initRepository();
      this.searchIssue('');
    },
    async searchIssue() {
      const response = await fetchIssue(this.repositories, this.searchQuery);

      if (response && response.errors) {
        return;
      }

      this.issues = this.parseIssues(response.data);
    },
    parseIssues(data) {
      const newIssues = [];
      Object.keys(data).forEach((repository) => {
        const issues = data[repository];
        if (!issues.nodes) { return; }
        const validIssues = issues.nodes.filter(issue => Object.keys(issue).length !== 0);
        newIssues.push(...validIssues);
      });
      return newIssues;
    },
    initRepository() {
      listenRepository((snapshot) => {
        const val = snapshot.val();
        this.repositories = val ?
          this.arrayify(val.repository) : {};
      });
    },
    arrayify(repositories) {
      return Object.keys(repositories)
        .map(key => repositories[key]);
    },
  },
  computed: {
    queryMessage() {
      const q = this.searchQuery;
      return q && q !== '' ?
        `'${q}'` : 'your query';
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
