import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./components/Login";
import SplashScreen from "./components/splash";
import CalcScreen from "./components/calc";
import ListaExercices from "./components/lista";
import TrainingCenterScreen from "./components/default";
import UserProfileScreen from "./components/Perfil";
import NavBar from "./components/navbar/Navbar";
import AppExercicies from "./components/react-native-fitness-app-main/react-native-fitness-app-main/App";
import { FitnessContextProvider } from "./components/react-native-fitness-app-main/react-native-fitness-app-main/Context";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="TrainingCenterScreen"
        component={TrainingCenterScreen}
      />
      <Stack.Screen name="CalcScreen" component={CalcScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="AppExercicies" component={AppExercicies} />
      <Stack.Screen name="ListaExercices" component={ListaExercices} />
    </Stack.Navigator>
  );
};

const AppL = () => {
  return (
    <FitnessContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Main" component={MainStack} />
        </Stack.Navigator>
        <NavBar />
      </NavigationContainer>
    </FitnessContextProvider>
  );
};

export default AppL;
  