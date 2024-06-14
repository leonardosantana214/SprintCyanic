import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useFitnessContext } from '../Context'; // Ensure the correct path

const FitScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const exercise = route.params.exercises;
  const current = exercise[index];

  const {
    completed,
    setCompleted,
    calories,
    setCalories,
    minutes,
    setMinutes,
    workout,
    setWorkout,
  } = useFitnessContext();

  console.log('completed:', completed);
  console.log('setCompleted:', setCompleted);
  console.log('calories:', calories);
  console.log('setCalories:', setCalories);
  console.log('minutes:', minutes);
  console.log('setMinutes:', setMinutes);
  console.log('workout:', workout);
  console.log('setWorkout:', setWorkout);

  // Check for undefined values rather than falsy values
  if (completed === undefined || setCompleted === undefined || 
      calories === undefined || setCalories === undefined || 
      minutes === undefined || setMinutes === undefined || 
      workout === undefined || setWorkout === undefined) {
    return <Text>Erro: O contexto de dados não está disponível, tente mais tarde</Text>;
  }

  return (
    <SafeAreaView>
      <Image style={{ width: '100%', height: 400 }} source={{ uri: current?.image }} />
      <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 30, fontWeight: 'bold', marginTop: 30 }}>
        {current?.name} <Octicons name="question" size={22} color="#6d6868" />
      </Text>
      <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 45, fontWeight: 'bold', marginTop: 10 }}>x{current?.sets}</Text>
      {index + 1 >= exercise.length ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
            setCompleted([...completed, current?.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{ backgroundColor: '#198f51', marginLeft: 'auto', marginRight: 'auto', marginTop: 50, borderRadius: 30, padding: 10, width: '90%' }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
            <Ionicons name="checkmark-circle" size={24} color="white" /> CONCLUÍDO
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Rest');
            setCompleted([...completed, current?.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{ backgroundColor: '#198f51', marginLeft: 'auto', marginRight: 'auto', marginTop: 50, borderRadius: 30, padding: 10, width: '90%' }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
            <Ionicons name="checkmark-circle" size={24} color="white" /> CONCLUÍDO
          </Text>
        </TouchableOpacity>
      )}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 25 }}>
        <TouchableOpacity
          disabled={index === 0}
          onPress={() => {
            navigation.navigate('Rest');
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{ borderRadius: 30, padding: 10, width: '42%' }}
        >
          <Text style={{ color: '#6d6868', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
            <Ionicons name="play-skip-back" size={22} color="#6d6868" /> ANTERIOR
          </Text>
        </TouchableOpacity>
        {index + 1 >= exercise.length ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{ borderRadius: 30, padding: 10, width: '42%' }}
          >
            <Text style={{ color: '#3f3d3d', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
              <Ionicons name="play-skip-forward" size={22} color="#3f3d3d" /> PULAR
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Rest');
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{ borderRadius: 30, padding: 10, width: '42%' }}
          >
            <Text style={{ color: '#3f3d3d', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
              <Ionicons name="play-skip-forward" size={22} color="#3f3d3d" /> PULAR
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FitScreen;
