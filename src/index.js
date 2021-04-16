/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABSvow-OLgMLyhFz8uF3GrQ5svLssiI6Q",
  authDomain: "cart-web-app-af0de.firebaseapp.com",
  projectId: "cart-web-app-af0de",
  storageBucket: "cart-web-app-af0de.appspot.com",
  messagingSenderId: "810004559808",
  appId: "1:810004559808:web:e39915c1bb0ecc2f6cfa25",
};
firebase.initializeApp(firebaseConfig);

// Create store using the specs.
const createdStore = store();

// Persist gate for redux persistance library which stores "store" in local storage.

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={createdStore.persistor}>
      <Provider store={createdStore.store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
