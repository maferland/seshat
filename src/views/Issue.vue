<template>
  <div class='container'>
    <search-issue/>
    <list-issue/>
  </div>
</template>

<script>
import SearchIssue from '@/components/issue/SearchIssue';
import ListIssue from '@/components/issue/ListIssue';

export default {
  name: 'Issue',
  components: { SearchIssue, ListIssue },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
