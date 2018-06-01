<template>
<div class="pure-menu pure-menu-horizontal">
    <a href="/" class="pure-menu-heading pure-menu-link">Seshat</a>
    <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link
            :to="{name: 'Repositories'}"
            class="pure-menu-link">
            Manage Repositories
          </router-link>
        </li>
        <li class="pure-menu-item">
          <router-link
            :to="{name: 'Issues'}"
            class="pure-menu-link">
            Search Issues
          </router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
  .pure-menu {
    display: flex;
    justify-content: space-between;
  }

  .pure-menu-heading {
    font-weight: 500;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background: lightgray;
  }

  .pure-menu-link {
    display: flex;
    align-items: center;
  }
</style>
