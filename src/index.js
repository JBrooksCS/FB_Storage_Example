import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCQAyEwBaMOwgVahMmJCkuvrZkI4B_gaKY",
  authDomain: "fecapstone-57515.firebaseapp.com",
  databaseURL: "https://fecapstone-57515.firebaseio.com",
  projectId: "fecapstone-57515",
  storageBucket: "fecapstone-57515.appspot.com",
  messagingSenderId: "932908202274",
  appId: "1:932908202274:web:8e8de238ff8ebbd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
