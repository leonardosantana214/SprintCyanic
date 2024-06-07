import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    // Validação dos dados de login
    if (email === 'teste@teste' && password === '12345678') {

      navigation.replace('TrainingCenterScreen')
    }
    else if(email =='' && password == '') {
      Alert.alert('Erro', 'Preencha os campos para efetuar o login');
    }
     else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
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
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
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

export default LoginScreen;
