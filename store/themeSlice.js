import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_STORAGE_KEY = "@MyApp:theme";

const loadDarkModeFromStorage = async () => {
  try {
    const darkModeValue = await AsyncStorage.getItem(THEME_STORAGE_KEY);
    return darkModeValue !== null ? JSON.parse(darkModeValue) : false;
  } catch (error) {
    console.error("Error loading dark mode from storage:", error);
    return false;
  }
};

const saveDarkModeToStorage = async (darkMode) => {
  try {
    await AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(darkMode));
  } catch (error) {
    console.error("Error saving dark mode to storage:", error);
  }
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      saveDarkModeToStorage(state.darkMode);
    },
    loadDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, loadDarkMode } = themeSlice.actions;
export const selectDarkMode = (state) => state.theme.darkMode;

export const initializeDarkMode = () => async (dispatch) => {
  const darkMode = await loadDarkModeFromStorage();
  dispatch(loadDarkMode(darkMode));
};

export default themeSlice.reducer;
