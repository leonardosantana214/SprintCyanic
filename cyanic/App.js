import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Login'; 
import SplashScreen from './components/splash'; 
import MainContainer from './navigation/MainContainer';
import CalcScreen from './components/calc';
import ListaExercices from './components/lista';
import TrainingCenterScreen from './components/default';

const Stack = createStackNavigator();

class AppL extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="MainContainer" component={MainContainer} />
          <Stack.Screen name="TrainingCenterScreen" component={TrainingCenterScreen} />
          <Stack.Screen name="CalcScreen" component={CalcScreen} />
          <Stack.Screen name="ListaExercices" component={ListaExercices} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppL;
