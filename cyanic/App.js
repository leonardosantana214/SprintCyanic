import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LoginScreen from "./components/Login";
import SplashScreen from "./components/splash";
import MainContainer from "./navigation/MainContainer";
import CalcScreen from "./components/calc";
import ListaExercices from "./components/lista";
import TrainingCenterScreen from "./components/default";
import UserProfileScreen from "./components/Perfil";
import NavBar from "./components/homeBar";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

const AppL = () => {
  return (
    <NavigationContainer>
    <NavBarWrapper />
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen
          name="TrainingCenterScreen"
          component={TrainingCenterScreen}
        />
        <Stack.Screen name="CalcScreen" component={CalcScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="ListaExercices" component={ListaExercices} />
      </Stack.Navigator>
      <StatusBar style="light" backgroundColor="#000" />

    </NavigationContainer>
  );
};

const NavBarWrapper = () => {
  const navigation = useNavigation();
  const routeName = navigation?.getCurrentRoute()?.name;
  const hideNavBarRoutes = ["SplashScreen", "LoginScreen"];

  if (hideNavBarRoutes.includes(routeName)) {
    return null;
  } else {
    return <NavBar />;
  }
};

export default AppL;
