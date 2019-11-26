import { createStore, applyMiddleware } from "redux";

// Logger with default options

import reducer from "./reducers/index";

import reduxThunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(reduxThunk)/*,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__() */ // !ERROR REDUX DEVTOOL
  );
  return store;
}
