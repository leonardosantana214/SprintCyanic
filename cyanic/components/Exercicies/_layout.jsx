// _layout.jsx
import React from 'react';
import { View, Text, LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; // Importe createStackNavigator do React Navigation

const Stack = createStackNavigator(); // Crie uma instância de StackNavigator

const _layout = () => {
  LogBox.ignoreLogs(["Warning: Failed prop type"]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="exercises" component={Exercises} options={{ presentation: 'fullScreenModal' }} />
      <Stack.Screen name="exerciseDetails" component={ExerciseDetails} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  );
};

export default _layout;
