<template>
  <div class='container'>
    <add-repository/>
    <list-repository/>
  </div>
</template>

<script>
import AddRepository from '@/components/repository/AddRepository';
import ListRepository from '@/components/repository/ListRepository';

export default {
  name: 'Repository',
  components: { AddRepository, ListRepository },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
