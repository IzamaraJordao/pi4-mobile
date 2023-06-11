import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Container, Header, Avatarperfil, Nameperfil, Bioperfil, Stars, Starred, OwnerAvatar, Info, Title, Author, Bio, Name, List, NameDetal, ContainerDetal, Curiosity } from './styles';

const Details = () => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [type, setType] = useState('dog');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const navi = useNavigation();

    const handleLogin = () => {
        if (email === '' && password === '') {
            navi.navigate('login')
        } else {
            alert('E-mail ou senha inválidos!')
        }
    };
    
    return (
        <Container>
            <Header>
                {type === 'dog' ? <Avatarperfil source={require('../img/cachorro.png')} /> : <Avatarperfil source={require('../img/gato.jpg')} />}
                <Avatarperfil source={require('../img/gato.jpg')} />
                <Curiosity>Detalhes</Curiosity>
            </Header>
            <ContainerDetal>
                <NameDetal>Dados PET</NameDetal>
                <Bio>Nome:<Name>Teste</Name></Bio>
                <Bio>Espécie:  <Name>Teste</Name></Bio>
                <Bio>Raça:  <Name>Teste</Name></Bio>
                <Bio>Sexo:  <Name>Teste</Name></Bio>
                <Bio>Data de Nascimento:  <Name>Teste</Name></Bio>
            </ContainerDetal>
            <ContainerDetal>
                <NameDetal>Dados do Dono</NameDetal>
                <Bio>Nome:<Name>Teste</Name></Bio>
                <Bio>Email:  <Name>matheusbf.mf@gmail.com</Name></Bio>
                <Bio>Telefone:  <Name>123456789</Name></Bio>
            </ContainerDetal>
        </Container>
    )
}
export default Details;
