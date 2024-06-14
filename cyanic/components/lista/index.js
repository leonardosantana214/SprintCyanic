import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { Picker } from "@react-native-picker/picker";
import exercisesData from '../react-native-fitness-app-main/react-native-fitness-app-main/data/fitness';

const ListaExercices = () => {
  const [exerciseCategories, setExerciseCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("CORPO INTEIRO");

  useEffect(() => {
    const categorizedExercises = {};

    exercisesData.forEach(category => {
      const exercises = category.exercises.map(exercise => ({
        id: exercise.id,
        name: exercise.name,
      }));

      categorizedExercises[category.name] = exercises;
    });

    setExerciseCategories(categorizedExercises);
  }, []);

  const renderItem = ({ item, drag }) => (
    <TouchableOpacity style={styles.item} onLongPress={drag}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={{uri : 'https://ironberg.com.br/assets/images/unidades-ironberg-3.jpg'}} style={styles.container}>
      <View style={styles.backdrop}>
        <Text style={styles.title}>Lista de Exercícios</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
          >
            {Object.keys(exerciseCategories).map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
          </Picker>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.listBackdrop}>
            <DraggableFlatList
              data={exerciseCategories[selectedCategory] || []}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.list}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(31, 33, 34, 0.8)', // fundo semi-transparente
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 16,
    textTransform: "uppercase"
  },
  pickerContainer: {
    backgroundColor: "#333",
    borderRadius: 40,
    marginBottom: 16,
    width: 250,
    borderColor: 'red',
    borderWidth: 1,
  },
  picker: {
    color: "#fff",
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  listBackdrop: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // fundo branco semi-transparente
    borderRadius: 20,
    padding: 8,
    width: '100%',
    flex: 1,
  },
  list: {
    flexGrow: 1,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#1F2122',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: "#fff",
    textTransform: "uppercase"
  },
});

export default ListaExercices;
