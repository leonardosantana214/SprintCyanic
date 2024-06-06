import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

const exercises = {
  Calistenia: [
    { id: '1', name: 'Flexões' },
    { id: '2', name: 'Abdominais' },
    { id: '3', name: 'Agachamentos' },
    { id: '4', name: 'Barra Fixa' },
    { id: '5', name: 'Burpees' },
    { id: '6', name: 'Mountain Climbers' },
    { id: '7', name: 'Lunges' },
    { id: '8', name: 'Plank' },
    { id: '9', name: 'Dips' },
    { id: '10', name: 'Jumping Jacks' },
  ],
  HiperMusculacao: [
    { id: '11', name: 'Levantamento Terra' },
    { id: '12', name: 'Supino' },
    { id: '13', name: 'Agachamento Livre' },
    { id: '14', name: 'Desenvolvimento com Halteres' },
    { id: '15', name: 'Remada Curvada' },
    { id: '16', name: 'Rosca Direta' },
    { id: '17', name: 'Tríceps Pulley' },
    { id: '18', name: 'Leg Press' },
    { id: '19', name: 'Cadeira Extensora' },
    { id: '20', name: 'Elevação Lateral' },
  ],
  Cardio: [
    { id: '21', name: 'Corrida' },
    { id: '22', name: 'Ciclismo' },
    { id: '23', name: 'Pular Corda' },
    { id: '24', name: 'Natação' },
    { id: '25', name: 'Remo' },
    { id: '26', name: 'Caminhada' },
    { id: '27', name: 'Step' },
    { id: '28', name: 'Dança Aeróbica' },
    { id: '29', name: 'Boxe' },
    { id: '30', name: 'HIIT' },
  ],
};

const ListaExercices = () => {
  const [selectedCategory, setSelectedCategory] = useState('Calistenia');
  const [exerciseData, setExerciseData] = useState(exercises);

  const handleDragEnd = ({ data }) => {
    setExerciseData((prevData) => ({
      ...prevData,
      [selectedCategory]: data,
    }));
  };

  const renderItem = ({ item, drag }) => (
    <TouchableOpacity
      style={styles.item}
      onLongPress={drag}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {Object.keys(exerciseData).map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <DraggableFlatList
        data={exerciseData[selectedCategory]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onDragEnd={handleDragEnd}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  categoryButton: {
    flex: 1,
    padding: 8,
    margin: 4,
    borderRadius: 8,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#888',
  },
  categoryButtonText: {
    fontWeight: 'bold',
  },
  list: {
    padding: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
});

export default ListaExercices;
