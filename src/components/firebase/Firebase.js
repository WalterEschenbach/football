import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Q4W4CzIV-VS7W5Jk-3AhOzxav0TIi8k",
  authDomain: "football-e806b.firebaseapp.com",
  databaseURL: "https://football-e806b.firebaseio.com",
  projectId: "football-e806b",
  storageBucket: "football-e806b.appspot.com",
  messagingSenderId: "544405656586",
  appId: "1:544405656586:web:eb2d8b1b8d71b67528fbf3",
  measurementId: "G-WF53NW2S85",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
