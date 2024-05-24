import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

class LoginScreen extends Component {
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
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
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
