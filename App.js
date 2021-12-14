import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PlayScreen from './src/screens/PlayScreen';
import ResultsScreen from './src/screens/ResultsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Play'} component={PlayScreen} />
        <Stack.Screen name={'Results'} component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
