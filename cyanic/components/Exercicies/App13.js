import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import _layout from './_layout';
import Home from './home';
import Exercises from './exercises';
import ExerciseList from './ExerciseList';
import ExerciseDetails from './exerciseDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="_layout">
      <Stack.Screen name="_layout" component={_layout} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="Exercises" component={Exercises} />
      <Stack.Screen name="exerciseList" component={ExerciseList} />
      <Stack.Screen name="exerciseDetails" component={ExerciseDetails} />
    </Stack.Navigator>
  );
};

export default App;
