<template>
  <div class="container">
    <form class="pure-form">
        <legend>
          <h2>Sign in to unlock Seshat's powers</h2>
        </legend>
    </form>
    <div id="firebaseui-auth-container"></div>
    <div class="ornament"></div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseui from 'firebaseui';

export default {
  name: 'login',
  mounted() {
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    };

    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', uiConfig);
  },
};
</script>

<style lang="scss" scoped>
.pure-form {
  margin-bottom: 10px;
}

.ornament {
  background: url("../assets/ornament.png") no-repeat;
  background-position: center center;
  background-size: 300px 150px;
  height: 150px;
}
</style>

