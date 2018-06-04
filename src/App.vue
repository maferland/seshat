<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <snackbar />
  </div>
</template>

<script>
import navbar from '@/components/ui/Navbar';
import snackbar from '@/components/ui/Snackbar';

export default {
  name: 'App',
  components: { navbar, snackbar },
};
</script>

<style lang="scss">
@import "@/assets/styles/colors.scss";

#app {
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primaryDark;
  margin-top: 30px;
}

.container {
  padding: 10vh 5vw;
}

.pure-button-primary {
  border-radius: 2px;
}

.pure-form-aligned {
  .pure-controls {
    margin-left: 0;
    margin-right: 0;
  }

  .pure-control-group {
    display: inline-flex;
    flex-flow: column;
  }

  .pure-control-group label {
    text-align: left;
  }

  .pure-form-message-inline {
    padding-left: 0;
  }
}
</style>
