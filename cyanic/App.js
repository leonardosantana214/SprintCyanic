import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./components/Login";
import SplashScreen from "./components/splash";
import MainContainer from "./navigation/MainContainer";
import CalcScreen from "./components/calc";
import ListaExercices from "./components/lista";
import TrainingCenterScreen from "./components/default";
import Home from "./components/Exercicies/home";
import IndexExercicios from "./components/Exercicies";
import Exercises from "./components/Exercicies/exercises";
import ExerciseDetails from "./components/Exercicies/exerciseDetails";
import ExerciseList from "./components/Exercicies/ExerciseList";
import UserProfileScreen from "./components/Perfil";
import NavBar from "./components/homeBar";
// Verifique o caminho correto para AppExercicies
import AppExercicies from "./components/react-native-fitness-app-main/react-native-fitness-app-main/App";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

class AppL extends Component {
  render() {
    return (
      <NavigationContainer>
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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Exercises" component={Exercises} />
          <Stack.Screen name="exerciseList" component={ExerciseList} />
          <Stack.Screen name="exerciseDetails" component={ExerciseDetails} />
          <Stack.Screen name="ListaExercices" component={ListaExercices} />
        </Stack.Navigator>
        {/* Renderize AppExercicies fora do Stack.Navigator */}
        <AppExercicies />
        <NavBar />
        <StatusBar style="light" backgroundColor="#000" />
      </NavigationContainer>
    );
  }
}

export default AppL;
