import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fetchExercisesByBodypart } from './api/exerciseDB';
import ExerciseList from './ExerciseList';

const Exercises = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [exercises, setExercises] = useState([]);
    const { name, image } = route.params || {};

    useEffect(() => {
        if (name) getExercises(name);
    }, [name]);

    const getExercises = async (bodypart) => {
        let data = await fetchExercisesByBodypart(bodypart);
        setExercises(data);
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            {image && (
                <Image
                    source={image}
                    style={{ width: '100%', height: 200 }}
                />
            )}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    backgroundColor: 'red',
                    position: 'absolute',
                    top: 20,
                    left: 10,
                    borderRadius: 50,
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Ionicons name="caret-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>
                    {name} exercises
                </Text>
                <View style={{ marginBottom: 10 }}>
                    <ExerciseList data={exercises} />
                </View>
            </View>
        </View>
    );
};

export default Exercises;
