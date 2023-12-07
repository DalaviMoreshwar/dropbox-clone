import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbU_opdrdqFfnuGHyPhn0_edMDBGT-kmk",
  authDomain: "dropbox-clone-app-a8a73.firebaseapp.com",
  projectId: "dropbox-clone-app-a8a73",
  storageBucket: "dropbox-clone-app-a8a73.appspot.com",
  messagingSenderId: "927645669566",
  appId: "1:927645669566:web:590a6ab3f9b5c9abce66ef",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
