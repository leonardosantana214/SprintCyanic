import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import das telas
import ListaExercices from '../components/lista/index';
import CalcScreen from '../components/calc/index';
import IndexExercicios from '../components/Exercicies/app';

// Nomes das telas
const homeName = "ListaExercices";
const calcName = "CalcScreen";
const exercisesName = "IndexExercicios";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === calcName) {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else if (rn === exercisesName) {
            iconName = focused ? 'fitness' : 'fitness-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 }
      }}>

      <Tab.Screen name={homeName} component={ListaExercices} />
      <Tab.Screen name={calcName} component={CalcScreen} />
      <Tab.Screen name={exercisesName} component={IndexExercicios} />
    </Tab.Navigator>
  );
}

export default MainContainer;
