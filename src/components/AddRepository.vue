<template>
<div class='container'>
  <form class="pure-form">
    <fieldset @keyup.enter="addRepository">
      <legend>Add the repository you want to track</legend>
      <span class="pure-control-group">
          <input
            id="owner"
            name="owner"
            type="text" placeholder="vuejs"
            v-model="owner">
          <span
            v-show="errors.has('owner')"
            class="pure-form-message-inline">
            {{ errors.first('owner') }}
          </span>
      </span>
      /
      <span class="pure-control-group">
          <input
            id="repository"
            name="repository"
            type="text" placeholder="vue"
            v-model="repository">
          <span
            v-show="errors.has('repository')"
            class="pure-form-message-inline">
            {{ errors.first('repository') }}
          </span>
      </span>
      <span class="pure-controls">
        <a
          @click="addRepository"
          class="pure-button pure-button-primary">
          Add repository
        </a>
      </span>
    </fieldset>
  </form>
</div>
</template>

<script>
import { getRepository } from '../services/githubApi';

export default {
  name: 'add-repository',
  data() {
    return {
      repository: undefined,
      owner: undefined,
      error: false,
    };
  },
  methods: {
    async addRepository() {
      const result = await this.$validator.validate();
      if (!result) { return; }

      if (this.verifyRepositoryExists) {
        console.log(this);
      }
    },
    async verifyRepositoryExists() {
      const repository = await getRepository(this.repository, this.owner);
      return !(repository && repository.errors);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
