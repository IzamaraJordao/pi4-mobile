import React, { Component, useEffect } from 'react';
import {
  Keyboard,
  ActivityIndicator,
  Button,
  ContainerDetal,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form, Input, SubmitButton, List, User, Avatar, Name, Bio, ProfileButton, ProfileButtonText,DivContainer, Avatarperfil
} from './styles';
import api from '../services/api';
import axios from 'axios';
import Details from './detals';



export default class Main extends Component {
  state = {
    name: '',
    users: [],
    loading: false,
  };



  async componentDidMount() { //carrega os dados do storage
    //busca os dados do storage
    const users = await AsyncStorage.getItem('users');
    
    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  async componentDidUpdate(_, prevState) {  
    //salva os dados no storage
    const { users } = this.state;

    if (prevState.users !== users) {
      await AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    try {
      const { name, users, loading } = this.state;

      this.setState({ loading: true });
      this.setState({ loading: true });

      const res = await api.get("/pets/1");
      const data = res.data;

      this.setState({
        users: [data, ...users],
        name: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      alert('Usuário não encontrado');
      this.setState({ loading: false });
    }
  };

  render() {
 
    
    const { name, users, loading } = this.state;
    console.log("🚀 ~ file: main.js:81 ~ Main ~ render ~ users:", users)

    return (
      <Container>
        <Image style={styles.image} source={require('../img/logo_pet.png')} />
        
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('create-pet');
          }}>
            <Text style={styles.buttonText}>Cadastrar PET</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('statistic'); 
          }} >
            <Text style={styles.buttonText}>Estatísticas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.handleAddUser();
          }} >
            <Text style={styles.buttonText}>Teste</Text>
          </TouchableOpacity>
        
        <ScrollView>
          <List
                    showVerticalScrollIndicator={false}
                    data={users}
                    keyExtractor={user => user.id}
                    renderItem={({ item }) => (
                        <Form>
                            <DivContainer>
                            {item.type === 'cachorro' ?
                             <Avatarperfil onPress={() => {
                              this.props.navigation.navigate('detail');
                            }} source={require('../img/cachorro.png')}
                             /> : <Avatarperfil source={require('../img/gato.jpg')} />}
                            </DivContainer>

                            <DivContainer>
                                <Name>{item.name}</Name>
                                <Bio>Raça: <Name>{item.breed}</Name></Bio>                            
                                <Bio>Sexo <Name>{item.gender}</Name></Bio>
                                
                                <Form>

                                <ProfileButton onPress={() => {
                                    // this.props.navigation.navigate('detail');
                                    this.props.navigation.navigate('detail', { user: item });
                                }}>
                                    <ProfileButtonText>Detalhes</ProfileButtonText>
                                </ProfileButton>

                                <ProfileButton onPress={() => {
                                    this.setState({ users: users.filter(user => user.login !== item.login) })
                                }}
                                    style={{ backgroundColor: '#ffc0cb' }
                                    }>
                                    <ProfileButtonText>Excluir</ProfileButtonText>
                                </ProfileButton>
                                </Form>
                            </DivContainer>
                        </Form>
                    )}
                />
</ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 20,
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',

    backgroundColor: '#FF8C00',
    borderRadius: 40,
    padding: 10,
    width: '80%',
    height: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});