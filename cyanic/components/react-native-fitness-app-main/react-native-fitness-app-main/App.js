import React from 'react';
import { FitnessContextProvider } from './Context'; // Importe FitnessContextProvider em vez de FitnessContext
import StackNavigator from './StackNavigator';
import { StatusBar } from 'expo-status-bar';

const AppExercicios = () => {
  return (
    <FitnessContextProvider> {/* Use FitnessContextProvider para envolver seus componentes */}
      <>
        <StatusBar style="light" backgroundColor='#000' />
        <StackNavigator />
        {/* <Navigator/> */}
        {/* <NavBar /> */}
      </>
    </FitnessContextProvider>
  );
}

export default AppExercicios;
