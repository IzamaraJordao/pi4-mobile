import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import api from '../services/api';


const CreatePet = () => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const navi = useNavigation();

    const handleLogin = () => {
        if(name && breed && type && gender && birthdate){
            api.post('/pets', {
                setName,
                setBreed,
                setType,
                setGender,
                setBirthdate
            })
            navi.navigate('login')
        }else{
            alert('Todos os campos são obrigatórios!')
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../img/logo_pet.png')}/>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Raça"
                value={breed}
                onChangeText={setBreed}
            />
            <TextInput
                style={styles.input}
                placeholder="Data de Nascimento"
                value={birthdate}
                onChangeText={setBirthdate}
            />
            <TextInput
                style={styles.input}
                placeholder="Tipo"
                secureTextEntry={true}
                value={type}
                onChangeText={setType}
            />
            <TextInput
                style={styles.input}
                placeholder="Sexo"
                secureTextEntry={true}
                value={gender}
                onChangeText={setGender}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCancel} onPress={() => navi.navigate('main')}>
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
    image: {
        width: 280,
        height: 150,
        marginBottom: 50,
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
    },
    buttonCancel:{
        backgroundColor: '#D33B28FF',
        borderRadius: 40,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default CreatePet;