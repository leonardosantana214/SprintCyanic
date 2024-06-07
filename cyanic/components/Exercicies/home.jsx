import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.backgroundImage} source={require('../../assets/images/welcome.png')} />

      <Animated.View style={styles.gradient}>
        <LinearGradient
          colors={['transparent', '#18181b']}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />

        <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.textContainer}>
          <Text style={styles.title}>
            Best <Text style={styles.highlight}>Workouts</Text>
          </Text>
          <Text style={styles.subtitle}>For You</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Exercises')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  gradient: {
    width: '100%',
    height: height * 0.7,
    justifyContent: 'flex-end',
    paddingBottom: height * 0.12,
    paddingHorizontal: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: height * 0.05,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  highlight: {
    color: '#ff00ff',
  },
  subtitle: {
    fontSize: height * 0.05,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    height: height * 0.07,
    width: width * 0.8,
    backgroundColor: '#ff00ff',
    borderRadius: height * 0.035,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: height * 0.03,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;
