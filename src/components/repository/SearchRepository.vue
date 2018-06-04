<template>
    <form class="pure-form pure-form-aligned">
      <fieldset @keyup="searchRepository">
        <legend>
          <h2>Select the repository you would like to track</h2>
        </legend>
        <span class="pure-control-group search-bar">
            <input
              id="query"
              name="query"
              type="text"
              v-validate="'required'"
              v-model="query">
            <div
              v-show="errors.has('query')"
              class="pure-form-message-inline">
              {{ errors.first('query') }}
            </div>
        </span>
        <span class="pure-controls">
          <a
            @click="searchRepository"
            class="pure-button pure-button-primary">
            Search
          </a>
        </span>
      </fieldset>
      <div>
        <repository-add-item v-for="repository in repositories"
          :key="repository.nameWithOwner"
          :repository="repository" />
      </div>
    </form>
</template>

<script>
import { searchRepository } from '@/services/githubApi';
import RepositoryAddItem from '@/components/repository/RepositoryAddItem';
import arrayify from '@/helpers/utils';

export default {
  name: 'search-repository',
  components: { RepositoryAddItem },
  data() {
    return {
      repositories: {},
      query: '',
      error: false,
    };
  },
  methods: {
    async searchRepository() {
      const result = await this.$validator.validate();
      if (!result) { return; }

      const response = await searchRepository(this.query);

      if (response && response.errors) {
        return;
      }

      this.repositories = arrayify(response.data.search.nodes);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
