import { View, Text } from 'react-native'
import React from 'react'
import Welcome from './src/Welcome'
import Home from './src/Home'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
   <SafeAreaProvider>
    <NavigationContainer>
    {/* //  <Welcome/> */}
     <Home/>
     </NavigationContainer>
     </SafeAreaProvider>
  
  )
}

export default App