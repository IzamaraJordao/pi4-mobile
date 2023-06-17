import React, {Component} from 'react';
import {
  Keyboard,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Form,
  Curiosity,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
  DivContainer,
  Avatarperfil,
} from './styles';
import api from '../services/api';

export default class Main extends Component {
  state = {
    name: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    const users = await this.handleAddUser();
    if (users) {
      this.setState({users: JSON.parse(users)});
    }
  }

  async componentDidUpdate(_, prevState) {
    //salva os dados no storage
    const {users} = this.state;

    if (prevState.users !== users) {
      await AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  async handleAddUser() {
    try {
      const {name, users, loading} = this.state;

      this.setState({loading: true});
      this.setState({loading: true});

      const res = await api.get('/pets');
      const data = res.data;
      await data.map(item => {
        users.push(item);
      });
      this.setState({loading: false});

      Keyboard.dismiss();
    } catch (error) {
      alert('Usuário não encontrado');
      this.setState({loading: false});
    }
  }

  render() {
    const {name, users, loading} = this.state;

    return (
      <Container>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('statistic');
          }}>
          <Text style={styles.buttonText}>Estatísticas Geral</Text>
        </TouchableOpacity>

        <Curiosity>Lista de PETS</Curiosity>

        {loading ? <ActivityIndicator color="#822710FF" /> : null}
        <ScrollView>
          {users.map((item, index) => (
            <Form key={index}>
              <DivContainer>
                {item.type === 'cachorro' ? (
                  <Avatarperfil
                    onPress={() => {
                      this.props.navigation.navigate('detail');
                    }}
                    source={require('../img/cachorro.png')}
                  />
                ) : (
                  <Avatarperfil source={require('../img/gato.jpg')} />
                )}
              </DivContainer>

              <DivContainer>
                <Bio>
                  Nome: <Name>{item.name}</Name>
                </Bio>

                <Bio>
                  Raça: <Name>{item.breed}</Name>
                </Bio>

                <Form>
                  <ProfileButton
                    onPress={() => {
                      this.props.navigation.navigate('detail', {user: item});
                    }}>
                    <ProfileButtonText>Detalhes</ProfileButtonText>
                  </ProfileButton>
                </Form>
              </DivContainer>
            </Form>
          ))}
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 20,
    width: 150,
    height: 60,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#822710FF',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    height: 40,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
