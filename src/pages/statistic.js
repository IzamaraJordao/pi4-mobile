import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {
    PieChart,
} from 'react-native-svg-charts';
import { Text as Tex } from 'react-native-svg';
import { Container, Header, Avatarperfil, Bio, Name, NameDetal, ContainerDetal, Curiosity } from './styles';


const Statistic = () => {
    

    const navi = useNavigation();

    const randomColor = () =>
        ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);

    const binomialData = [4, 8];

    const pieData = binomialData
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }));

    const LabelBinomial = ({ slices }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, data } = slice;
            return (
                <Tex
                    key={index}
                    x={labelCentroid[0]}
                    y={labelCentroid[1]}
                    fill={'black'}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize={24}>
                    {data.value}%
                </Tex>
            );
        });
    };


    return (
        <Container>
            <Header>
        <Image style={styles.image} source={require('../img/logo_pet.png')} />
                <Curiosity>Estatistica</Curiosity>
            </Header>
            <ContainerDetal>
                <Bio>Média:<Name>Teste</Name></Bio>
                <Bio>Moda:  <Name>Teste</Name></Bio>
                <Bio>Mediana:  <Name>Teste</Name></Bio>
                <Bio>Desvio Padrão:  <Name>Teste</Name></Bio>
            </ContainerDetal>
            <View >
                <PieChart style={{ height: 200 }} data={pieData} >
                    <LabelBinomial />
                </PieChart>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
      marginLeft: 20,
      width: 300,
      height: 150,
      marginBottom: 20,
    },
});
export default Statistic;
