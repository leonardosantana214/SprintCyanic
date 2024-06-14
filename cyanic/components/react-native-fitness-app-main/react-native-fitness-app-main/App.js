import React from 'react';
import StackNavigator from './StackNavigator';
import { StatusBar } from 'expo-status-bar';

const AppExercicios = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor='#000' />
      <StackNavigator />
    </>
  );
}

export default AppExercicios;
