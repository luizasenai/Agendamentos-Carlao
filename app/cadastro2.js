import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Explorar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Consultas</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/images/logo.jpg')} style={styles.logo} />
            </View>
            <Text style={styles.title}>Agora, mais alguns dados sobre você</Text>
            <Text style={styles.subtitle}>CEP</Text>
            <TextInput style={styles.input} placeholder="Insira seu CEP" />
            <Text style={styles.subtitle}>Endereço</Text>
            <TextInput style={styles.input} placeholder="Insira seu endereço" />
            <Text style={styles.subtitle}> Numero e complemento</Text>
            <TextInput style={styles.input} placeholder="Insira o numero e complemento" />
            <Text style={styles.subtitle}> Telefone</Text>
            <TextInput style={styles.input} placeholder="(00)00000-0000" />
           
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
        width: '100%',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
        width: '100%',
    },
    footerButton: {
        padding: 10,
    },
    footerButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});