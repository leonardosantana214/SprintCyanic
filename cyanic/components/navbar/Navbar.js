import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../../components/Login";
import SplashScreen from "../../components/splash";
import CalcScreen from "../../components/calc";

import TrainingCenterScreen from "../../components/default";
import UserProfileScreen from "../../components/Perfil";
import AppExercicios from "../../components/react-native-fitness-app-main/react-native-fitness-app-main/App";
import MainStack from "../../App";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.content}>
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
            <Stack.Screen name="AppExercicios" component={AppExercicios} />

          </Stack.Navigator>
        </View>
        <NavBar />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default MainStack;
