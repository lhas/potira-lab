import React from 'react';
import { View, Image, } from 'react-native';
import LogoIcon from '../assets/logo-icon.png';
import LogoText from '../assets/logo-text.png';
import { Container, Content, Text, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Header from '../components/support/Header';
import colors from '../utils/colors';

class Tents extends React.Component {

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
      emptyText: {
        color: '#FFF',
      },
      header: {
        backgroundColor: colors.magenta,
      }
    };

    return (
      <Container>
        <Header
          title="Estufas"
          navigation={this.props.navigation}
        />
        <Content
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          padder>
          <Text style={styles.emptyText}>Você ainda não cadastrou nenhuma estufa.</Text>
        </Content>
      </Container>
    )
  }
}

export default Tents;
