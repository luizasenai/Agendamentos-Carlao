import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

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
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/images/logo.jpg')} style={styles.logo} />
            </View>
            <Text style={styles.title}>Insira seus dados:</Text>
            <Text style={styles.subtitle}>Nome Completo</Text>
            <TextInput style={styles.input} placeholder="Insira seu nome completo" />
            <Text style={styles.subtitle}>Email</Text>
            <TextInput style={styles.input} placeholder="Insira seu email" />
            <Text style={styles.subtitle}> Crie uma Senha</Text>
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Insira sua senha" />
            <Text style={styles.subtitle}> Repita a Senha</Text>
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Insira sua senha" />
            <TouchableOpacity style={styles.button} onPress={() => router.push('/cadastro2')}>
                <Text style={styles.buttonText}>Avançar</Text>
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
