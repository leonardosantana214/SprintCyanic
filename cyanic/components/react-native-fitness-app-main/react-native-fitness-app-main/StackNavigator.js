import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Workout" component={WorkoutScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Fit" component={FitScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
