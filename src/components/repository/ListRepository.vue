<template>
  <form class='pure-form'>
    <legend>
      <h2>Manage your tracked repository</h2>
    </legend>
    <div v-if="repositories.length === 0" class="missing">
      <p>Looks like you have no tracked repositories</p>
      <p>Try adding one</p>
    </div>
    <repository-item v-for="repository in repositories"
        :key="repository.nameWithOwner"
        :repository="repository">
    </repository-item>
  </form>
</template>

<script>
import EventBus from '@/events/eventBus';
import RepositoryItem from '@/components/repository/RepositoryItem';

export default {
  name: 'list-repository',
  components: { RepositoryItem },
  data() {
    return {
      repositories: [],
    };
  },
  created() {
    EventBus.$on('onRepositoryAdded', this.handleAddRepository);
    EventBus.$on('onRepositoryRemoved', this.handleRemoveRepository);
  },
  methods: {
    handleAddRepository(repository) {
      this.repositories.push(repository);
    },
    handleRemoveRepository(repository) {
      const nameWithOwner = repository.nameWithOwner;
      EventBus.$emit('onSnackbarDisplayed', `Deleted ${nameWithOwner}`);
      this.repositories = this.repositories.filter(r =>
        r.nameWithOwner !== nameWithOwner);
    },
  },
};
</script>

<style lang="scss" scoped>
  .missing {
    font-size: 16px;
    padding-top: 30px;
  }
</style>
