import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0i6ZoNwuhATes4od7iG1NR1p7arixJTM',
  authDomain: 'reactfirebase-clone.firebaseapp.com',
  projectId: 'reactfirebase-clone',
  storageBucket: 'reactfirebase-clone.appspot.com',
  messagingSenderId: '583947232702',
  appId: '1:583947232702:web:cb181ff6dd260977a8c5ef',
  measurementId: 'G-5056ZFBJRG',
};

// connect to the firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// connect to firestore( a real-time database on firebase)
const db = firebaseApp.firestore();

// variable to handle SignIn and other stuff
const auth = firebase.auth();

export { db, auth };
