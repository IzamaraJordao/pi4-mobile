import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity, Image, DatePicker } from 'react-native';


const CreatePet = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [breed, setBreed] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [weigth, setWeigth] = useState('');

    const navi = useNavigation();

    const handleLogin = async () => {

        if (name && breed && type && gender && birthdate) {

            navi.navigate('register')
        } else {
            alert('Todos os campos são obrigatórios!')
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../img/logo_pet.png')} />
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
                <TextInput
                    style={styles.input}
                    placeholder="Peso"
                    type="number"
                    secureTextEntry={true}
                    value={weigth}
                    onChangeText={setWeigth}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Continuar Cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancel} onPress={() => navi.navigate('login')}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        width: 200,
        height: 100,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    button: {
        backgroundColor: '#FF8C00',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonCancel: {
        backgroundColor: '#D33B',
        borderRadius: 10,
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