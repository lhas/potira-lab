import React from 'react';
import { View, Image, } from 'react-native';
import LogoIcon from '../assets/logo-icon.png';
import LogoText from '../assets/logo-text.png';
import { Container, Header, Content, Button, Text } from 'native-base';
import colors from '../utils/colors';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Potira Lab',
  };
  handleStart = () => {
    this.props.navigation.navigate('Tents');
  }

  render() {
    const styles = {
      content: {
        backgroundColor: '#222',
        flex: 1,
      },
      contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logoText: {
        height: 80,
      },
      logoIcon: {
        width: '60%'
      },
      startButton: {
        alignSelf: 'center',
        backgroundColor: colors.magenta,
      },
    };

    return (
      <Container>
        <Content
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          padder>
          <Image
            source={LogoText}
            style={styles.logoText}
            resizeMode="contain"
          />
          <Image
            source={LogoIcon}
            style={styles.logoIcon}
            resizeMode="contain"
          />
          <Button
            onPress={this.handleStart}
            style={styles.startButton}>
            <Text>Entrar</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Home;
