import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqYPu3C7YETC8SC2Ie8wJcS1LjIwZT-kI",
    authDomain: "name-n-react.firebaseapp.com",
    projectId: "name-n-react",
    storageBucket: "name-n-react.appspot.com",
    messagingSenderId: "1005310847902",
    appId: "1:1005310847902:web:f798358b671059aa2a048f",
    measurementId: "G-Q8WS3PCT63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log('Firebase configured!')

  export default firebase.firestore();