import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { rootSaga } from "./store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV === "development" ? true : false,
});

sagaMiddleware.run(rootSaga);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
