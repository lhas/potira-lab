import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, } from 'react-native';
import { Drawer, Container, Content, Text, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import colors from '../../utils/colors';

class Tents extends React.Component {
  static defaultProps = {
    title: '',
    navigation: {},
  };

  static propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.object,
  };

  handleMenu = () => {
    this.props.navigation.navigate("DrawerOpen");
  }

  render() {
    const styles = {
      header: {
        backgroundColor: colors.magenta,
      }
    };

    return (
      <Header style={styles.header}>
        <Left>
          <Button onPress={this.handleMenu} transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
        </Right>
      </Header>
    )
  }
}

export default Tents;
