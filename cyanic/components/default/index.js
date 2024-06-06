import React from 'react';
import { View, Text, StyleSheet, ImageBackground,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TrainingCenterScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{uri: 'https://ironberg.com.br/assets/images/ironberg-santos-2.jpeg'}} // Replace with the path to your image
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.backDrop}>
            <Image source={{uri: 'https://ironberg.com.br/assets/images/ironberg-id-logo-branco.png'}} style={styles.title}></Image>
            <Text style={styles.subtitle}>O MAIOR CENTRO DE TREINAMENTO DO BRASIL</Text>
          </View>
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
  },
  backDrop:{
    alignItems: 'center',
    backgroundColor: '#1F2122',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 40,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    width:150,
    height: 120,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    fontStyle: 'italic',
    marginBottom: 20
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#e7e7e7',
  },
});

export default TrainingCenterScreen;
