import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP63UbTnN86xVbepWIvCkEmD_EgIrTFak",
  authDomain: "myappfirebase-b34e3.firebaseapp.com",
  projectId: "myappfirebase-b34e3",
  storageBucket: "myappfirebase-b34e3.appspot.com",
  messagingSenderId: "159691953193",
  appId: "1:159691953193:web:565f878bd6560a14177838",
  measurementId: "G-6ZJC30692E",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
