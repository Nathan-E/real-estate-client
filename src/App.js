import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import Main from './containers/Main';
import { setUser } from './redux/actions/refresh.action';
import { SET_AUTHENTICATED } from './redux/types';

import "./App.css";
import "./assets/css/Helper.css";
import "./assets/css/icofont.min.css";
import { getUser, logout } from "./redux/actions/login.action";
import { getProperties, getSavedProperties } from './redux/actions/property.action';
import { getPropertyCategories } from './redux/actions/add-properties.action';
import { getAgencies } from "./redux/actions/dashboard.action";

const currentSession = setUser();

if (currentSession) {
  store.dispatch({ type: SET_AUTHENTICATED });
  store.dispatch(getUser());
  store.dispatch(getAgencies());
  store.dispatch(getSavedProperties());
} else {
  store.dispatch(logout());
}

store.dispatch(getProperties({ page: 0, initialState: {} }));
store.dispatch(getPropertyCategories());

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
