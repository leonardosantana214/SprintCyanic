// exerciseDetails.jsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';

const ExerciseDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.gifUrl }}
          style={styles.image}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <AntDesign name="closecircle" size={30} color="#f43f5e" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Animated.Text entering={FadeInDown.duration(300).springify()} style={styles.title}>
          {item.name}
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(100).duration(300).springify()} style={styles.info}>
          Equipment: <Text style={styles.boldText}>{item?.equipment}</Text>
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(200).duration(300).springify()} style={styles.info}>
          Secondary Muscles: <Text style={styles.boldText}>{item?.secondaryMuscles}</Text>
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(300).duration(300).springify()} style={styles.info}>
          Target: <Text style={styles.boldText}>{item?.target}</Text>
        </Animated.Text>

        <Animated.Text entering={FadeInDown.delay(400).duration(300).springify()} style={styles.instructionsTitle}>
          Instructions
        </Animated.Text>

        {item.instructions?.split(',').map((instruction, index) => (
          <Animated.Text
            key={index}
            entering={FadeInDown.delay((index + 5) * 100).duration(300).springify()}
            style={styles.instructions}
          >
            {instruction}
          </Animated.Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 300,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  instructionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ExerciseDetails;
