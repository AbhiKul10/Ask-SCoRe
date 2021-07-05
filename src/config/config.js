import {ALREADY_LAUNCHED} from "@env";
import * as firebase from "firebase";

import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVSz7SBgykflS-1or_2cL2NO_9zKPcgnM",
  authDomain: "trydesign-f5380.firebaseapp.com",
  databaseURL:
    "https://trydesign-f5380-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trydesign-f5380",
  storageBucket: "trydesign-f5380.appspot.com",
  messagingSenderId: "735297362112",
  appId: "1:735297362112:web:3bc069313763f5e942f525",
  measurementId: "G-MTTJ7H8SEY",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// firebase.firestore().settings({ experimentalForceLongPolling: true });

export {firebase};

export default {
  ALREADY_LAUNCHED,
};
