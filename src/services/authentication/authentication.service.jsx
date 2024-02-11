import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsN5kcjklB6PHv1jpj095lgaLJbAA85Ww",
  authDomain: "mealstogo-438e1.firebaseapp.com",
  projectId: "mealstogo-438e1",
  storageBucket: "mealstogo-438e1.appspot.com",
  messagingSenderId: "565570334123",
  appId: "1:565570334123:web:e50dcaba277c17b8d776ee"
};

const app = initializeApp(firebaseConfig);

export const loginRequest = (email, password) => {
  const auth = getAuth(app);
  return new Promise((resolve, reject) => {

    signInWithEmailAndPassword(auth, email, password)

      .then((res) => {

        resolve(res);

      })

      .catch(reject);

  });
}
