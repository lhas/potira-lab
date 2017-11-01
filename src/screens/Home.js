import React from 'react';
import { View, Text, Button, Image, } from 'react-native';
import LogoIcon from '../assets/logo-icon.png';
import LogoText from '../assets/logo-text.png';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Potira Lab',
  };
  handleStart = () => {
    this.props.navigation.navigate('Tents');
  }

  render() {
    const styles = {
      container: {
        backgroundColor: '#222',
        flex: 1,
      },
    };

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222'}}>
        <Image source={LogoText} style={{height: 80}} resizeMode="contain" />
        <Image source={LogoIcon} style={{width: '60%'}} resizeMode="contain" />
        <Button title="Iniciar" onPress={this.handleStart} />
      </View>
    )
  }
}

export default Home;
