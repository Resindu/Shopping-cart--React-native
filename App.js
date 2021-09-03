// In App.js in a new project

import * as React from 'react';
import { View, Text,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS  from './src/consts/Colors';
import HomeScreen from './src/screens/Home';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} /> */}
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Details" component={DetailsSceeen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;