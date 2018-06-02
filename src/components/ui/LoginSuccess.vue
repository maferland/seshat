<template>
  <div>
    <h1>Signup succeeded</h1>
    <button @click='logOut'>Log out</button>
    <hr>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{userId}}</p>
    <hr>
    <pre>{{user}}</pre>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {},
    };
  },
  created() {
    // eslint-disable-next-line
    console.log('CREATED');
    this.user = firebase.auth().currentUser;
    if (this.user) {
      this.name = this.user.displayName;
      this.email = this.user.email;
      this.userId = this.user.uid;
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style lang="scss" scoped>
.pure-form {
  margin-bottom: 10px;
}

.ornament {
  background: url("../../assets/ornament.png") no-repeat;
  background-position: center center;
  background-size: 300px 150px;
  height: 150px;
}
</style>

