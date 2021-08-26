import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBOAqjfYOgl20Xstk-adYZbpUOs8fLYAAM",
  authDomain: "project-73-beda6.firebaseapp.com",
  projectId: "project-73-beda6",
  storageBucket: "project-73-beda6.appspot.com",
  messagingSenderId: "160811280814",
  appId: "1:160811280814:web:d00e7e837ef5edacca003f"
};
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

