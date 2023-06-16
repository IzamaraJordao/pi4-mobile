import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import api from '../services/api';


const Register = () => {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [password, setPassword] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');

    const navi = useNavigation();

    const handleLogin = () => {
        const { route } = this.props;
        const { id } = route.params;
        if(name && breed && type && gender && birthdate){
            api.post('/user', {
                setName,
                setBreed,
                setType,
                setGender,
                setBirthdate,
                id
            })
            navi.navigate('login')
        }else{
            alert('Todos os campos são obrigatórios!')
        }
    };

    return (
        <View style={styles.container}>
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
            <TouchableOpacity style={styles.buttonCancel} onPress={() => navi.navigate('login')}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 40,
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    button:{
        backgroundColor: '#FF8C00',
        borderRadius: 40,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonCancel:{
        backgroundColor: '#D33B28FF',
        borderRadius: 40,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default Register;