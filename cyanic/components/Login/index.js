import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { auth } from '../firebase'; // Importar o Firebase configurado
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Login bem-sucedido!');
      // Redirecionar para outra tela ou realizar outra ação após o login bem-sucedido
    } catch (error) {
      Alert.alert('Erro ao fazer login', error.message);
    }
  };

  handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      Alert.alert('Login com Google bem-sucedido!');
      // Redirecionar para outra tela ou realizar outra ação após o login bem-sucedido
    } catch (error) {
      Alert.alert('Erro ao fazer login com Google', error.message);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.logoText}>IRONBERG</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={this.handleLogin}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton} onPress={this.handleGoogleLogin}>
            <Text style={styles.googleButtonText}>Continue com o Google</Text>
          </TouchableOpacity>
          <Text style={styles.privacyText}>
            Você concorda com a nossa POLÍTICA DE PRIVACIDADE.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Background color
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
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
