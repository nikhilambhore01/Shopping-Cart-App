/** @format */

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/sunset.css";

const persistConfig = {
  key: "root",
  storage, //use local storage
};

// Create a new reducer which can persist data within refreshes.
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};
