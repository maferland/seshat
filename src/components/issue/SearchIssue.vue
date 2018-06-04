<template>
    <form class="pure-form pure-form-aligned">
      <fieldset @keyup="searchIssue">
        <legend>
          <h2>Search for your issues</h2>
        </legend>
        <span class="pure-control-group search-bar">
            <input
              id="query"
              name="query"
              type="text"
              v-model="query">
        </span>
        <span class="pure-controls">
          <a
            @click="searchIssue"
            class="pure-button pure-button-primary">
            Search
          </a>
        </span>
      </fieldset>
    </form>
</template>

<script>
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
      EventBus.$emit('onIssueSearched', this.query || '');
    },
  },
};
</script>

<style lang="scss">
  .search-bar {
    width: 50%;

    @media screen and (max-width: 600px) {
      width: 75%;
    }
  }
</style>
