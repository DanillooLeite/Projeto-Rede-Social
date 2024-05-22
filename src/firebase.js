// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-v2-78c03.firebaseapp.com",
  projectId: "insta-next-v2-78c03",
  storageBucket: "insta-next-v2-78c03.appspot.com",
  messagingSenderId: "420384484872",
  appId: "1:420384484872:web:3afe994cbd889f9a796bbd"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write : if
//         request.resource.size < 2 * 1024 * 1024 &&
//         request.resource.contentType.matches('image/.*')
//       }
//     }
//   }