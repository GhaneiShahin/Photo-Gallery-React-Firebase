import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyD9hRjZiqYw5wFTJaHzUUPOkGf_Ulbuelo',
  authDomain: 'photo-gallery-53e12.firebaseapp.com',
  databaseURL: 'https://photo-gallery-53e12.firebaseio.com',
  projectId: 'photo-gallery-53e12',
  storageBucket: 'photo-gallery-53e12.appspot.com',
  messagingSenderId: '897330862274',
  appId: '1:897330862274:web:c5349be3fee6ed449d435b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
