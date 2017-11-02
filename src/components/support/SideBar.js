import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Body, Left, Content, Text, List, ListItem } from "native-base";
import { Feather } from '@expo/vector-icons';

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem
              icon
              button
              onPress={() => this.props.navigation.navigate('Tents')}>
              <Left>
                <Feather
                  name="inbox"
                  size={32} />
              </Left>
              <Body>
                <Text>Estufas</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              button
              onPress={() => this.props.navigation.navigate('Settings')}>
              <Left>
                <Feather
                  name="settings"
                  size={32} />
              </Left>
              <Body>
                <Text>Configurações</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              button
              onPress={() => this.props.navigation.navigate('Backups')}>
              <Left>
                <Feather
                  name="download"
                  size={32} />
              </Left>
              <Body>
                <Text>Backups</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}