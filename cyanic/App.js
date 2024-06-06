import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Login'; 
import SplashScreen from './components/splash'; 
// import firebaseConfig from './components/firebase';
import TrainingCenterScreen from './components/default';
import MenuBar from './components/homeBar';
import Lista from './components/lista';
import CalcScreen from './components/calc';
import IndexExercicios from './components/Exercicies/app';


const Stack = createStackNavigator();

class AppL extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="IndexExercicios" component={IndexExercicios} />
        </Stack.Navigator>
 
      </NavigationContainer>
    );
  }
}

export default AppL;
