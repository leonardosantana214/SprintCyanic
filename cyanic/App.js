// AppL.js

import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"; // Importe o NavigationContainer
import LoginScreen from "./components/Login";
import SplashScreen from "./components/splash";
import MainContainer from "./navigation/MainContainer";
import CalcScreen from "./components/calc";
import ListaExercices from "./components/lista";
import TrainingCenterScreen from "./components/default";
// import App from "./components/Exercicies/App13";
// import Home from "./components/Exercicies/home";
// import Exercises from "./components/Exercicies/exercises";
// import ExerciseDetails from "./components/Exercicies/exerciseDetails";
// import ExerciseList from "./components/Exercicies/ExerciseList";
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
          {/* <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="Exercises" component={Exercises} />
          <Stack.Screen name="exerciseList" component={ExerciseList} />
          <Stack.Screen name="exerciseDetails" component={ExerciseDetails} /> */}
          <Stack.Screen name="ListaExercices" component={ListaExercices} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppL;
