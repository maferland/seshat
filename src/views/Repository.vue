<template>
  <div class='container'>
    <search-repository/>
    <list-repository/>
  </div>
</template>

<script>
import SearchRepository from '@/components/repository/SearchRepository';
import ListRepository from '@/components/repository/ListRepository';

export default {
  name: 'Repository',
  components: { SearchRepository, ListRepository },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
