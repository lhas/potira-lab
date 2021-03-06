import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Expo from "expo";
import { DrawerNavigator } from "react-navigation";
import HomeScreen from './src/screens/Home';
import TentsScreen from './src/screens/Tents';
import SideBar from './src/components/support/SideBar';

const RootNavigator = DrawerNavigator({
  Home: { screen: HomeScreen },
  Tents: { screen: TentsScreen },
}, {
  contentComponent: props => <SideBar {...props} />
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <View style={{flex: 1}}>
      <StatusBar hidden />
      <RootNavigator />
    </View>;
  }
}