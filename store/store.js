import { configureStore } from "@reduxjs/toolkit";
import themeReducer, { initializeDarkMode } from "./themeSlice";
import languageReducer, { initializeLanguag } from "./languageSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

store.dispatch(initializeDarkMode());
store.dispatch(initializeLanguag());

export default store;
