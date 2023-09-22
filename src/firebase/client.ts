import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1qG7RdZZ7NUnU9Rt6_y9yEaUmoR2Nfrg",
  authDomain: "playwright-demo-a3399.firebaseapp.com",
  projectId: "playwright-demo-a3399",
  storageBucket: "playwright-demo-a3399.appspot.com",
  messagingSenderId: "768057530602",
  appId: "1:768057530602:web:f3bee2f709b962db3bdf93"
};

export const app = initializeApp(firebaseConfig);
