<template>
    <form class="pure-form pure-form-aligned">
      <fieldset @keyup.enter="addRepository">
        <legend>
          <h2>Select the repository you would like to track</h2>
        </legend>
        <span class="pure-control-group">
            <label for="owner">Owner</label>
            <input
              id="owner"
              name="owner"
              type="text" placeholder="i.e. vuejs"
              v-validate="'required'"
              v-model="owner">
            <div
              v-show="errors.has('owner')"
              class="pure-form-message-inline">
              {{ errors.first('owner') }}
            </div>
        </span>

        <span class="pure-control-group">
            <label for="name">Name</label>
            <input
              id="name"
              name="name"
              type="text" placeholder="i.e. vue"
              v-validate="'required'"
              v-model="name">
            <div
              v-show="errors.has('name')"
              class="pure-form-message-inline">
              {{ errors.first('name') }}
            </div>
        </span>
        <div class="pure-controls">
          <a
            @click="addRepository"
            class="pure-button pure-button-primary">
            Add repository
          </a>
        </div>
      </fieldset>
    </form>
</template>

<script>
import { fetchRepository } from '@/services/githubApi';
import EventBus from '@/events/eventBus';

export default {
  name: 'add-repository',
  data() {
    return {
      name: undefined,
      owner: undefined,
      error: false,
    };
  },
  methods: {
    async addRepository() {
      const result = await this.$validator.validate();
      if (!result) { return; }

      const response = await fetchRepository(this.name, this.owner);
      if (response && response.errors) {
        EventBus.$emit('onSnackbarDisplayed', `Could not find ${this.owner}/${this.name}`);
        return;
      }

      const repository = response.data.repository;
      EventBus.$emit('onRepositoryAdded', repository);
      EventBus.$emit('onSnackbarDisplayed', `Adding ${repository.nameWithOwner}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
