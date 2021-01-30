import React, {useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'
import { Feather } from '@expo/vector-icons'
import { Header } from 'react-native-elements'


export default function Conta({ navigation }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');


    async function handleSubmit() {
        Alert.alert(
            nome,
            email,
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                { text: "OK" }
            ],
            { cancelable: false }


        );


    }

    return (
        <>
            <Header
                leftComponent={<Feather name="menu" color="#fff" size={25} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />}
                centerComponent={<Text style={{ color: '#F6F5F5', fontSize: 15 }}>Minha Conta</Text>}
                containerStyle={{
                    backgroundColor: '#000',
                    paddingTop:'15%',
                    borderBottomWidth: 2,
                    borderBottomColor: '0px 4px 4px rgba(0, 0, 0, 0.25),blur(4px)'

                }}
            />
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.label}>NOME</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="digite o seu nome"
                        placeholderTextColor="#000"
                        keyboardType="email-address"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.label}>E-MAIL</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="digite o seu e-mail"
                        placeholderTextColor="#000"
                        autoCapitalize="words"
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={nome}
                        onChangeText={setNome}
                    />
                    <View style={{ backgroundColor: '#fff', borderRadius: 4 }}>
                        <Button
                            style={styles.buttonRegister}
                            onPress={() => handleSubmit()}
                            color="#000"
                            title="Cadastre-se"
                        />
                    </View>
                </View>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#000',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    }
})