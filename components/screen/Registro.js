import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon} from 'native-base';
import { StyleSheet, Linking, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

class Registro extends Component {
  render(){
    const navegar = this.props.navigation;
    return (
      <Container>
      <Content padder contentContainerStyle={styles.content}>
        <Card>
          <CardItem header bordered>
            <Text style={styles.textCenter}>
              {this.props.route.params.titulo}
            </Text>
          </CardItem>
          <Item>
            <Text style={styles.textCenter}>Ingresa tus datos</Text>
          </Item>
 
          <CardItem bordered>
            <Body>
            <Item inlineLabel last>
                  <Icon type='Entypo' name='email' />
                  <Input placeholder='Correo electronico' />
                </Item>
              <Item inlineLabel>
                <Icon type='FontAwesome' name='user' />
                  <Input placeholder='Nombre(s)' />
                </Item>
                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='user' />
                  <Input placeholder='Apellido(s)' />
                </Item>
                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='lock' />
                  <Input placeholder='Contraseña' secureTextEntry={true} />
                </Item>                
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Button primary style={styles.boton}
            onPress={()=> Alert.alert('!!!Bienvenido!!!')}><Text> Registrarse </Text></Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
      );
    }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
    width: '100%'
  },
  boton: {
    marginLeft: '32%'
  },
  boton_red: {
    justifyContent: 'center',
    width: 165.7,
    marginLeft: '3%'
  }
});


export default Registro;
