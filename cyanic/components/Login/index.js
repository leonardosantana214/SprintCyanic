import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth'; // Importe os métodos corretamente
import { firebaseConfig } from '../firebase'; // Importe o arquivo de configuração do Firebase

const auth = getAuth();

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    // Configurar observador para o login com o Google
    getRedirectResult(auth)
      .then((result) => {
        if (result.credential) {
          // O usuário está logado
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          Alert.alert('Login com Google bem-sucedido!');
          this.props.navigation.replace('Main');  // Navegação para MainContainer
        }
      })
      .catch((error) => {
        Alert.alert('Erro ao fazer login com Google', error.message);
      });
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Login bem-sucedido!');
      this.props.navigation.replace('Main');  // Navegação para MainContainer
    } catch (error) {
      Alert.alert('Erro ao fazer login', error.message);
    }
  };

  handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
    } catch (error) {
      Alert.alert('Erro ao fazer login com Google', error.message);
    }
  };

  render() {
    return (
      <ImageBackground source={{uri: 'https://ironberg.com.br/assets/images/unidades-ironberg-1.jpg' }} style={styles.container}>
        <View style={styles.loginBox}>
          <Image source={{ uri: 'https://ironberg.com.br/assets/images/ironberg-id-logo-branco.png' }} style={styles.logoText} />
          <Text style={styles.textH1}>Faça o seu Login</Text>
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
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textH1:{
    textTransform: 'uppercase',
    fontSize:25,
    margin: 20,
    color:'#fff',
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
