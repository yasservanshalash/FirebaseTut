import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}

export default App;

////////////////////////////////////////////////////////////////////////////
///////////////
///////////////
/////////////// AUTHENTICATION WITH FIREBASE
/////////////// AUTHENTICATING USER
///////////////
////////////////////////////////////////////////////////////////////////////

// step1 : create firebase project
// step2 : yarn add firebase
// step3 : create sign in form
// step4: mkdir utils => mkdir firebase => touch firebase.utils.ts
// step5:
// firebase.utils.ts
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDy9EZ-GytcKwJGAFYzwTq2X3XHaVQ7GqY",
//   authDomain: "yassers-consoles.firebaseapp.com",
//   projectId: "yassers-consoles",
//   storageBucket: "yassers-consoles.appspot.com",
//   messagingSenderId: "326308928928",
//   appId: "1:326308928928:web:4b989bea4b7d8fa436d8c5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// step6:
// firebase.utils.ts
// import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// step7:
// firebase.utils.ts
// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({
//   prompt: "select_account"
// })
// export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// step8: go to console then app then authentication then sign in method (google) => enable signin

// step9:
// in signin page
// import signInWithGooglePopup from "firebase.utils"
// inside the signin component
// const logGoogleUser = async () => {
// const response = await signInWithGooglePopup();
// console.log(response);
// }

// step10:
// add onClick to button with logGoogleUser

////////////////////////////////////////////////////////////////////////////
///////////////
///////////////
/////////////// FIRESTORE
/////////////// Setting up User Documents
///////////////
////////////////////////////////////////////////////////////////////////////

// Step11:
// in firebase.utils
// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// export const db = getFirestore();
// export const createUserDocumentFromAuth = async (userAuth) => {
//   const userDocRef = doc(db, "users", userAuth.uid);
//   const userSnapshot = await getDoc(userDocRef);
//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   } 
//   return userDocRef; 
// };


// Step12: 
// const logGoogleUser = async () => {
//   const {user} = await signInWithGooglePopup();
//   const userRefDoc = createUserDocumentFromAuth(user)
//   console.log(user);
// };