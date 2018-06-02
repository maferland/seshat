import firebase from 'firebase';

const database = firebase.database();
const userId = firebase.auth().currentUser.uid;
