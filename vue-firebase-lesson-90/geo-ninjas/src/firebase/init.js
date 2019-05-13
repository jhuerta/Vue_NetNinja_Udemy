import firebase from "firebase";
import firestore from "firebase/firestore";

// var config = {
//   apiKey: "AIzaSyDIPXfL1rYhDUtvIKw9jIZZKXAChmOA1DY",
//   authDomain: "vue-geo-ninjas.firebaseapp.com",
//   databaseURL: "https://vue-geo-ninjas.firebaseio.com",
//   projectId: "vue-geo-ninjas",
//   storageBucket: "vue-geo-ninjas.appspot.com",
//   messagingSenderId: "68205488779"
// };

var config = {
  apiKey: "AIzaSyDMB2i57L2avokh_e0kf5w3k9BoXdxSAo8",
  authDomain: "geo-ninja-2bd6b.firebaseapp.com",
  databaseURL: "https://geo-ninja-2bd6b.firebaseio.com",
  projectId: "geo-ninja-2bd6b",
  storageBucket: "geo-ninja-2bd6b.appspot.com",
  messagingSenderId: "314164495581",
  appId: "1:314164495581:web:52ff15a5d13c5695"
};

const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
