import {useNavigation} from '@react-navigation/native';
import React, { useState, Component} from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Avatarperfil,
  Bio,
  Name,
  NameDetal,
  ContainerDetal,
  Curiosity,
} from './styles';

export default class Details extends Component {


  render() {
    const { route } = this.props;
    const { user } = route.params;

    return (
      <Container>
        <Header>
          {user.type === 'cachorro' ? (
            <Avatarperfil source={require('../img/cachorro.png')} />
          ) : (
            <Avatarperfil source={require('../img/gato.jpg')} />
          )}
          <Curiosity>Detalhes</Curiosity>
        </Header>
        <ContainerDetal>
          <NameDetal>Dados PET</NameDetal>
          <Bio>
            Nome:<Name>{user.name}</Name>
          </Bio>
          <Bio>
            Espécie: <Name>{user.type}</Name>
          </Bio>
          <Bio>
            Raça: <Name>{user.breed}</Name>
          </Bio>
          <Bio>
            Sexo: <Name>{user.gender}</Name>
          </Bio>
          <Bio>
            Data de Nascimento: <Name>{user.birthDate}</Name>
          </Bio>
          <Bio>
            Peso: <Name>{user.weigth}</Name>
          </Bio>
        </ContainerDetal>

      </Container>
      
    );
  }
}


