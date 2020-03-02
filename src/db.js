import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCbS_YE3HbwvJAKvX7VE8YH198MaMMB5qA",
    authDomain: "webnotas-9806d.firebaseapp.com",
    databaseURL: "https://webnotas-9806d.firebaseio.com",
    projectId: "webnotas-9806d",
    storageBucket: "webnotas-9806d.appspot.com",
    messagingSenderId: "526629624863",
    appId: "1:526629624863:web:2bf4e0726d7e60d3cf492a"
  };

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
//b.settings({ timestampsInSnapshots: true })
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
var storage = firebase.app().storage("gs://my-custom-bucket")
