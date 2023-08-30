import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home'
import PracticeSetup from './screens/PracticeSetup'
import Add from './screens/Add'
import NewDeckConfirm from './screens/NewDeckConfirm'
import Practice from './screens/Practice';
import PracticeComplete from './screens/PracticeComplete';


const data = [
  { id: 1, title: 'Card Deck 1', description: '500' },
  { id: 2, title: 'Card Deck 2', description: '70' },
  { id: 3, title: 'Card Deck 3', description: '150' },
];

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
        'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
        'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }



  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{headerShown: false }}/>
          <Stack.Screen name='Practice' component={Practice} options={{headerShown: false}}/>
          <Stack.Screen name='Add' component={Add} options={{headerShown: false}}/>
          <Stack.Screen name='NewDeckConfirm' component={NewDeckConfirm} options={{headerShown: false}}/>
          <Stack.Screen name='PracticeSetup' component={PracticeSetup} options={{headerShown: false}}/>
          <Stack.Screen name='PracticeComplete' component={PracticeComplete} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
  }

});
