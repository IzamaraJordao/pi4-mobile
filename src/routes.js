import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from './pages/register'
import Main from './pages/main'
import Login from './pages/login'
import Statistic from './pages/statistic'
import Details from './pages/detals'
import CreatePet from './pages/create-pet'
import { Image } from "react-native-svg";


const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{
                    title: 'LOGIN PET',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#FF8C00'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                }} />

                <Stack.Screen name="statistic" component={Statistic} options={{
                    title: 'Estatistica',
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#FF8C00'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                }} />
                <Stack.Screen name="register" component={Register} options={{
                    title: 'Cadastrar Usuário',
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#FF8C00'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                }} />
                <Stack.Screen name="detail" component={Details} options={{
                    title: 'Detalhes do Pet',
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#FF8C00'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                }} />
                <Stack.Screen name="create-pet" component={CreatePet} options={{
                    title: 'Cadastrar Pet',
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#FF8C00'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                }} />

                <Stack.Screen name="main" component={Main} options={{
                    title: 'Home',
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#FF8C00'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                }} />
              
            </Stack.Navigator>
        </NavigationContainer>
    )
}