import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { selectDarkMode } from "./store/themeSlice";
import { selectLanguage } from "./store/languageSlice";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/i18n";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import store from "./store/store";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabsOverview() {
  const language = useSelector(selectLanguage);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language ? "ger" : "en");
  }, [language, i18n]);

  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.primary500 },
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarActiveTintColor: Colors.primary800,
        headerTintColor: Colors.gray700,
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: `${t("home")}`,
          tabBarLabel: `${t("home")}`,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: `${t("settings")}`,
          tabBarLabel: `${t("settings")}`,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function StacksOverview() {
  const darkMode = useSelector(selectDarkMode);

  const { t } = useTranslation();

  return (
    <>
      <StatusBar style={darkMode ? "dark" : "light"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: {
              backgroundColor: darkMode ? Colors.gray700 : Colors.primary50,
            },
          }}
        >
          <Stack.Screen
            name="BottomTabsOverview"
            component={BottomTabsOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{
              presentation: "modal",
              title: `${t("newsDetails")}`,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <StacksOverview />
      </I18nextProvider>
    </Provider>
  );
}
