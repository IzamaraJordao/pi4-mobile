import { useNavigation } from '@react-navigation/native';
import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        if(email === '' && password === ''){
            navigation.navigate('main')
        }else{
            alert('E-mail ou senha inválidos!')
        }
    };
    const handleRegister = () => {
        navigation.navigate('create-pet')
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../img/logo_pet.png')}/>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
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

                <Text style={styles.buttonTextRegister} onPress={handleRegister}>Cadastre-se</Text>
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
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: '81%',
    },
    image: {
        width: 280,
        height: 150,
        marginBottom: 10,
    },
    button:{
        backgroundColor: '#FF8C00',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginTop: 20,  },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonTextRegister: {
        color: '#B7E4EDFF',
        marginTop: 50,
        fontWeight: 'bold',
    },
})

export default Login;