import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {

      navigation.replace('LoginScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxSNgYVQ8OcrzvbWVJJIQ4SSijgY2MMImqQ&s'}} 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Image source={{uri : 'https://ironberg.com.br/assets/images/ironberg-id-logo-branco.png'}} style={styles.ImageLogo}></Image>
          <Text style={styles.tagline}>Foco, força, disciplina e</Text>
          <Text style={styles.result}>RESULTADO!</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  ImageLogo: {
    width: 300,
    height: 250
  },
  tagline: {
    fontSize: 25,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '300'
  },
  result: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default SplashScreen;
