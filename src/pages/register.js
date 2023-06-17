import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
    Container,
  } from './styles';

const Register = () => {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  const navi = useNavigation();

  const handleLogin = () => {
    // const {route} = this.props;
    // const {id} = route.params;
    if (name && cpf && password && tel && email) {
      navi.navigate('login');
    } else {
      alert('Todos os campos são obrigatórios!');
    }
  };

  return (
    <ScrollView>
      <Container style={styles.container}>
        <Image style={styles.image} source={require('../img/logo_pet.png')} />

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={tel}
          onChangeText={setTel}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCPF}
        />
        <TextInput
          style={styles.input}
          placeholder="E-Mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={() => navi.navigate('login')}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    marginBottom: 10,
},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#FF8C00',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonCancel: {
    backgroundColor: '#D33B',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Register;
