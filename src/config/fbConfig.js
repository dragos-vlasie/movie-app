 import firebase from 'firebase/app'
 import 'firebase/firestore' 
 import 'firebase/auth'
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD8HQtfs7DwFjYn9UbYtntWdmqnRS1kb5A",
    authDomain: "movie-night-601d2.firebaseapp.com",
    databaseURL: "https://movie-night-601d2.firebaseio.com",
    projectId: "movie-night-601d2",
    storageBucket: "movie-night-601d2.appspot.com",
    messagingSenderId: "547302602148"
  };
  firebase.initializeApp(config);

  firebase.firestore()
  
  export default firebase;
