import React from 'react';
import { StatusBar, } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './src/screens/Home';
import TentsScreen from './src/screens/Tents';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Tents: { screen: TentsScreen },
}, {
  headerMode: 'none',
});

const App = () => (
  <View style={{flex: 1}}>
    <StatusBar hidden />
    <RootNavigator />
  </View>
);

export default App;
