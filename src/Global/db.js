import firebase from 'firebase/app';
import 'firebase/firestore';

// Your Firebase configuration object goes here
const firebaseConfig = {
  // Replace with your actual Firebase configuration
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;
