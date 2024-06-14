import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importe o NavigationContainer
import StackNavigator from './StackNavigator';
import { StatusBar } from 'expo-status-bar';
import { FitnessContextProvider } from './Context';

const AppExercicios = () => {
  return (
    <NavigationContainer> {/* Envolve seu aplicativo com o NavigationContainer */}
      <FitnessContextProvider>
        <StatusBar style="light" backgroundColor='#000' />
      </FitnessContextProvider>
    </NavigationContainer>
  );
};

export default AppExercicios;
