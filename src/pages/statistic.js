import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {
    PieChart,
} from 'react-native-svg-charts';
import { Text as Tex } from 'react-native-svg';
import { Container, Header, Avatarperfil, Bio, Name, NameDetal, ContainerDetal, Curiosity, TitleStatstic } from './styles';
import {
    mean,
    median,
    mode,
    standardDeviation,
} from 'simple-statistics';
import api from '../services/api';


const Statistic = () => {
    const [media, setMedia] = useState(0);
    const [moda, setModa] = useState(0);
    const [mediana, setMediana] = useState(0);
    const [desvio, setDesvio] = useState(0);
    const [success, setSuccess] = useState([]);

    useEffect(() => {
        EstatisticDescrible();
        graph();
    }, []);

    const EstatisticDescrible = async () => {
        const res = await api.get("/weight_month");
        console.log(res.data);
        const data = res.data;
        const peso = data.map((item) => item.weight / 1000);
        setMedia(mean(peso));
        setModa(mode(peso));
        setMediana(median(peso));
        setDesvio(standardDeviation(peso));
    }

    const graph = async () => {
        const res = await api.get("/food");
        const success = res.data.filter((item) => item.success === true).length;
        const fail = res.data.length - success;
        setSuccess([success, fail]);
    }

    const navi = useNavigation();
   
    const randomColor = () =>
        ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);

    const binomialData = [4, 8];

    const pieData = success
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
            </Header>
            <Curiosity>Dados Gerais</Curiosity>

            <ContainerDetal>
                <TitleStatstic>Consumo de Ração</TitleStatstic>

                <Bio>Média:<Name>{media}</Name></Bio>
                <Bio>Moda:  <Name>{moda}</Name></Bio>
                <Bio>Mediana:  <Name>{mediana}</Name></Bio>
                <Bio>Desvio Padrão:  <Name>{desvio}</Name></Bio>
            </ContainerDetal>
            <ContainerDetal>

                <View >
                    <TitleStatstic>Sucesso e Falha do Alimentador</TitleStatstic>

                    <PieChart style={{ height: 200 }} data={pieData} >
                        <LabelBinomial />
                    </PieChart>
                </View>
            </ContainerDetal>

        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 20,
        width: 180,
        height: 100,
        marginBottom: 20,
    },
});
export default Statistic;
