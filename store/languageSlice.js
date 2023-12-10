import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LANGUAGE_STORAGE_KEY = "@MyApp:language";

const loadLanguageFromStorage = async () => {
  try {
    const languageValue = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
    return languageValue !== null ? JSON.parse(languageValue) : false;
  } catch (error) {
    console.error("Error loading language from storage:", error);
    return false;
  }
};

const saveLanguageToStorage = async (language) => {
  try {
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, JSON.stringify(language));
  } catch (error) {
    console.error("Error saving language to storage:", error);
  }
};

const languageSlice = createSlice({
  name: "language",
  initialState: {
    changeLanguage: false,
  },
  reducers: {
    toggleLanguage: (state) => {
      state.changeLanguage = !state.changeLanguage;
      saveLanguageToStorage(state.changeLanguage);
    },
    loadLanguage: (state, action) => {
      state.changeLanguage = action.payload;
    },
  },
});

export const { toggleLanguage, loadLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.changeLanguage;

export const initializeLanguag = () => async (dispatch) => {
  const language = await loadLanguageFromStorage();
  dispatch(loadLanguage(language));
};

export default languageSlice.reducer;
