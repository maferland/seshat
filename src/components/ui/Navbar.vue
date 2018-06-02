<template>
<div class="pure-menu pure-menu-horizontal">
    <a href="/" class="pure-menu-heading pure-menu-link">Seshat</a>
    <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link
            :to="{name: 'Repositories'}"
            class="pure-menu-link">
            Repositories
          </router-link>
        </li>
        <li class="pure-menu-item">
          <router-link
            :to="{name: 'Issues'}"
            class="pure-menu-link">
            Issues
          </router-link>
        </li>
        <li class="pure-menu-item">
          <a @click="signOut"
            class="pure-menu-link">
            Log out
          </a>
        </li>
        <li class="pure-menu-item">
          <router-link
            :to="{name: 'Login'}"
            class="pure-menu-link">
            Sign in
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
    position: sticky;
    top: 0;
    height:50px;
    background-color: rgba(255,255,255,.9);
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

  .pure-menu-item {
    display: inline-flex;
  }
</style>
