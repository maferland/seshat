<template>
<div>
  <div class="hero">
    <div class="hero--overlay">
      <h1 class="hero--title">Seshat</h1>
      <p class="hero--sub-title">
        The all-in-one Github's issues aggregator
      </p>

      <span v-if="logged">
        <p>
            <router-link
                :to="{name: 'Repositories'}"
                class="pure-button pure-button-primary">
                My repositories
            </router-link>
        </p>
      </span>
      <span v-else>
        <p>
            <router-link
                :to="{name: 'Login'}"
                class="pure-button pure-button-primary">
                Sign up - It's free
            </router-link>
        </p>
        <p>
          Already using Seshat?
          <router-link :to="{name: 'Login'}" class='link'>Log in</router-link>
        </p>
      </span>
    </div>
  </div>

  <div class="container container--about">
    <div class="about">
      <h3 class="about--title">Manage</h3>
        <div class="about--sub-container">
          <span class="about--description">
            Managing multiple open-source projects is easy with Seshat simple interace.
          </span>
          <img class="about--img" src="../assets/statistics.png"/>
        </div>
    </div>

    <div class="about">
      <h3 class="about--title">Monitor</h3>
        <div class="about--sub-container">
          <span class="about--description">
            Seshat allows you to stay up-to-date with your maintainer duty.
          </span>
          <img class="about--img" src="../assets/heartbeat.png"/>
        </div>
    </div>

    <div class="about">
      <h3 class="about--title">Empower</h3>
      <div class="about--sub-container">
        <span class="about--description">
          Make your development proccess faster with the Seshat search tool.
        </span>
        <img class="about--img" src="../assets/rocket.png"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import EventBus from '@/events/eventBus';

export default {
  name: 'Home',
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hero {
  height: 450px;
  margin: 30px 0;
  background: url("../assets/hero.jpeg");
  background-position: center center;
  color: #fff;

  &--title {
    font-size: 48px;
  }

  &--overlay {
    height: 100%;
    background-color: rgba(44, 62, 80, 0.7);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  &--sub-title {
    font-size: 20px;
  }
}

.container--about {
  padding-top: 0;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 600px) {
    flex-flow: column;
  }
}

.about {
  &--img {
    padding: 30px;
    width: 128px;
  }

  &--description {
    width: 50%;
  }

  &--sub-container {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
  }
}

.pure-button {
  border: #FFF 1px solid;
  background-color: transparent;
}

.pure-button:hover {
  border: #FFF 1px solid;
  background: #FFF;
  color: rgba(44, 62, 80, .8);
}

.link {
  text-decoration: underline;
  color: #FFF;
}
</style>
