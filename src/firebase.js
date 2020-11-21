import firebase from "firebase/app";
import "firebase/database";

var config = {
  apiKey: "AIzaSyBaa2X2cSPmW551CLixE3_cS4Vt-22myYM",
  authDomain: "cthings.firebaseapp.com",
  databaseURL: "https://cthings.firebaseio.com",
  projectId: "cthings",
  storageBucket: "cthings.appspot.com",
  messagingSenderId: "462645352164",
  appId: "1:462645352164:web:ab35a82f6d14e2c62dbef1"
};

firebase.initializeApp(config);

export default firebase.database();