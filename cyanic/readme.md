<!-- Login
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { auth } from '../firebase'; // Certifique-se de que está importando corretamente o auth
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getAuth, getRedirectResult } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Configurar observador para o login com o Google
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          // O usuário está logado
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          Alert.alert('Login com Google bem-sucedido!');
          navigation.replace('Main');  // Navegação para MainContainer
        }
      })
      .catch((error) => {
        if (error.message !== 'auth/no-current-user') {
          Alert.alert('Erro ao fazer login com Google', error.message);
        }
      });
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Login bem-sucedido!');
      navigation.replace('Main');  // Navegação para MainContainer
    } catch (error) {
      Alert.alert('Erro ao fazer login', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      Alert.alert('Erro ao fazer login com Google', error.message);
    }
  };

  return (
    <ImageBackground source={{ uri: 'https://ironberg.com.br/assets/images/unidades-ironberg-1.jpg' }} style={styles.container}>
      <View style={styles.loginBox}>
        <Image source={{ uri: 'https://ironberg.com.br/assets/images/ironberg-id-logo-branco.png' }} style={styles.logoText} />
        <Text style={styles.textH1}>Faça o seu Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <Text style={styles.googleButtonText}>Continue com o Google</Text>
        </TouchableOpacity>
        <Text style={styles.privacyText}>
          Você concorda com a nossa POLÍTICA DE PRIVACIDADE.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  textH1: {
    textTransform: 'uppercase',
    fontSize: 25,
    margin: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '80%',
    padding: 20,
    backgroundColor: '#1c1c1c',
    borderRadius: 40,
    alignItems: 'center',
  },
  logoText: {
    height: 100,
    width: 120,
    margin: 5
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#333',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#bbb',
    marginBottom: 20,
  },
  loginButton: {
    width: '45%',
    height: 40,
    backgroundColor: '#D30505',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  googleButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  privacyText: {
    color: '#bbb',
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default LoginScreen; -->
