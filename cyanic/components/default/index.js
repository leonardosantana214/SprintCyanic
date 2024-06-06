import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TrainingCenterScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{uri: 'https://your-image-url.png'}} // Replace with the path to your image
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>IRONBERG</Text>
          <Text style={styles.subtitle}>O MAIOR CENTRO DE TREINAMENTO DO BRASIL</Text>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
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
