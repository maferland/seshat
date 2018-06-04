import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const buildPath = (nameWithOwner) => {
  const key = nameWithOwner.replace('/', '');
  return `repository/${key}`;
};

const refUser = () => {
  const userId = firebase.auth().currentUser.uid;
  return firebase.database().ref(`users/${userId}`);
};

const listenRepository = (callback) => {
  const user = refUser();
  return user
    .on('value', callback, (err) => {
      // eslint-disable-next-line no-console
      console.error(err);
      callback([]);
    });
};

const fetchRepository = () => {
  const user = refUser();
  return user.once('value')
    .then((snapshot) => {
      const val = snapshot.val();
      return val ? val.repository : [];
    })
    .catch(() => []);
};

const addRepository = async (repository) => {
  const path = buildPath(repository.nameWithOwner);
  refUser()
    .child(path)
    .set(repository);
};

const deleteRepository = (nameWithOwner) => {
  const path = buildPath(nameWithOwner);
  refUser().child(path).remove();
};

export { listenRepository, fetchRepository, addRepository, deleteRepository };
