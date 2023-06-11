import React, { Component } from 'react';
import {
  Keyboard,
  ActivityIndicator,
  Button,
  ContainerDetal,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
} from './styles';
import api from '../services/api';



export default class Main extends Component {
  state = {
    name: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
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

  getChart = async () => {
  }


  handleAddUser = async () => {
    try {
      const { name, users, loading } = this.state;

      this.setState({ loading: true });
      this.setState({ loading: true });

      const respLine = await api.get(`/RegulationAliment`);
      const data = respLine.data;
      console.log(respLine.data);

      //   const response = await api.get(`/character/?name=${name}`);
      //   const episodeId = await response.data.results[0].episode[0]
      //     .split('/')
      //     .pop();
      //   const locationId = await response.data.results[0].location.url
      //     .split('/')
      //     .pop();
      //   const responseEpisode = await api.get(`/episode/${episodeId}`);

      //   const data = {
      //     image: response.data.results[0].image,
      //     name: response.data.results[0].name,
      //     status: response.data.results[0].status,
      //     locationName: response.data.results[0].location.name,
      //     locationUrl: locationId,
      //     species: response.data.results[0].species,
      //     episode: responseEpisode.data.episode,
      //     episodeQtd: response.data.results[0].episode.length,
      //   };

      this.setState({
        users: [data, ...users],
        name: '',
        loading: false,
      });

      console.log(
        '🚀 ~ file: main.js:51 ~ Main ~ handleAddUser= ~ data:',
        data,
      );
      Keyboard.dismiss();
    } catch (error) {
      alert('Usuário não encontrado');
      this.setState({ loading: false });
    }
  };


  render() {
    ///////////Linha
    const fill = '#FF8C00';



    return (
      <Container>
        <Image style={styles.image} source={require('../img/logo_pet.png')} />
        
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('create-pet');
          }}>
            <Text style={styles.buttonText}>Cadastrar PET</Text>
            {/* <Icon name='add' size={20} color='#fff' /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('detail');
          }} >
            <Text style={styles.buttonText}>Detalhes do pet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('statistic');
          }} >
            <Text style={styles.buttonText}>Estatísticas</Text>
          </TouchableOpacity>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 20,
    width: 300,
    height: 150,
    marginBottom: 50,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',

    backgroundColor: '#FF8C00',
    borderRadius: 40,
    padding: 10,
    width: '100%',
    height: 80,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});