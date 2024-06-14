import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LoginScreen from "./components/Login";
import SplashScreen from "./components/splash";
import CalcScreen from "./components/calc";
import ListaExercices from "./components/lista";
import TrainingCenterScreen from "./components/default";
import UserProfileScreen from "./components/Perfil";
import AppExercicios from "./components/react-native-fitness-app-main/react-native-fitness-app-main/App";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity, Text } from "react-native";

const Stack = createStackNavigator();

const NavBar = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('CalcScreen')}>
        <Icon name="calculator" size={30} color="#000" />
        <Text>Calculadora0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('ListaExercices')}>
        <Icon name="list" size={30} color="#000" />
        <Text>Lista</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('AppExercicios')}>
        <Icon name="heartbeat" size={30} color="#000" />
        <Text>Exercicios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('UserProfileScreen')}>
        <Icon name="user" size={30} color="#000" />
        <Text>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

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
            <Stack.Screen name="ListaExercices" component={ListaExercices} />
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
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainStack;
