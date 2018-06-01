<template>
    <form class="pure-form pure-form-aligned">
      <fieldset @keyup.enter="searchIssue">
        <legend>
          <h2>Search for your issues</h2>
        </legend>
        <span class="pure-control-group">
            <input
              id="query"
              name="query"
              type="text"
              v-validate="'required'"
              v-model="owner">
        </span>
        <div class="pure-controls">
          <a
            @click="searchIssue"
            class="pure-button pure-button-primary">
            Search
          </a>
        </div>
      </fieldset>
    </form>
</template>

<script>
import { fetchIssue } from '@/services/githubApi';
import EventBus from '@/events/eventBus';

export default {
  name: 'search-issue',
  data() {
    return {
      query: undefined,
      error: false,
    };
  },
  methods: {
    async searchIssue() {
      const result = await this.$validator.validate();
      if (!result) { return; }
      EventBus.$emit('onIssueSearched', this.query);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
