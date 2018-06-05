<template>
  <form class='pure-form'>
    <legend>
      <h2>Manage your tracked repository</h2>
    </legend>
    <div v-if="repositories.length === 0" class="missing">
      <p>Looks like you have no tracked repositories</p>
      <p>Try adding one</p>
    </div>
    <repository-delete-item v-for="repository in repositories"
        :key="repository.nameWithOwner"
        :repository="repository">
    </repository-delete-item>
  </form>
</template>

<script>
import EventBus from '@/events/eventBus';
import RepositoryDeleteItem from '@/components/repository/RepositoryDeleteItem';
import * as databaseApi from '@/services/databaseApi';

export default {
  name: 'list-repository',
  components: { RepositoryDeleteItem },
  data() {
    return {
      repositories: [],
    };
  },
  created() {
    this.initRepositories();
    EventBus.$on('onRepositoryAdded', this.handleAddRepository);
    EventBus.$on('onRepositoryRemoved', this.handleRemoveRepository);
  },
  methods: {
    handleAddRepository(repository) {
      databaseApi.addRepository(repository);
    },
    handleRemoveRepository(repository) {
      databaseApi.deleteRepository(repository.nameWithOwner);
    },
    initRepositories() {
      databaseApi.listenRepository((snapshot) => {
        try {
          const val = snapshot.val();
          this.repositories = val ? val.repository : [];
        } catch (error) {
          this.repositories = [];
        }
      });
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
