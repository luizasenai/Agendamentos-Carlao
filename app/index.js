import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import { useRouter } from 'expo-router';
export default function App() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/logo.jpg')} style={styles.logo} />
      </View>
          <Text style={styles.title}>Faça login na sua conta</Text>
        <Text style={styles.subtitle}>Email</Text>
        <TextInput style={styles.input} placeholder="Insira seu endereço de email" />
        <Text style={styles.subtitle}>Senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Insira sua senha" />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        <Text style={styles.register} onPress={() => router.push('/cadastro1')}>Ainda não tem conta? Faça seu cadastro</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 142,
    marginTop: -250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    display: 'flex',
    marginLeft: -320,
  },
  input: {
    width: 370,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: 370,
    height: 60,
    backgroundColor: '#0B3B60',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 20,
    color: '#0B3B60',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  register: {
    marginTop: 100,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});