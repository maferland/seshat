<template>
<div class="pure-menu pure-menu-horizontal">
    <router-link
      :to="{name: 'Home'}"
      class="pure-menu-heading pure-menu-link">
      Seshat
    </router-link>

    <ul v-if="logged" class="pure-menu-list">
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
          class="pure-menu-link logout">
          Log out
        </a>
      </li>
    </ul>

    <ul v-else class="pure-menu-list">
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
import firebase from 'firebase/app';
import 'firebase/auth';
import EventBus from '@/events/eventBus';

export default {
  name: 'Navbar',
  data() {
    return {
      logged: false,
    };
  },
  created() {
    EventBus.$on('onAuthStateChanged', (user) => {
      this.logged = !!user;
    });
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/');
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
          EventBus.$emit('onSnackbarDisplayed', 'Sign out failed...');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.pure-menu {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 50px;
  background-color: $menuBackground;
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

.logout {
  cursor: pointer;
}
</style>
