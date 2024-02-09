import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { Text, View } from 'react-native'
import { StackNavigator } from './src/Navegador/StackNavigator';
import { ScreenNumeroMayor } from './src/Screens/ScreenNumeroMayor';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/> 
    </NavigationContainer>
  )
}

export default App;
