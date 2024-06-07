import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { Picker } from "@react-native-picker/picker";

const exercises = {
  Calistenia: [
    { id: "1", name: "Flexões" },
    { id: "2", name: "Abdominais" },
    { id: "3", name: "Agachamentos" },
    { id: "4", name: "Barra Fixa" },
    { id: "5", name: "Burpees" },
    { id: "6", name: "Mountain Climbers" },
    { id: "7", name: "Lunges" },
    { id: "8", name: "Plank" },
    { id: "9", name: "Dips" },
    { id: "10", name: "Jumping Jacks" },
  ],
  HiperMusculacao: [
    { id: "11", name: "Levantamento Terra" },
    { id: "12", name: "Supino" },
    { id: "13", name: "Agachamento Livre" },
    { id: "14", name: "Desenvolvimento com Halteres" },
    { id: "15", name: "Remada Curvada" },
    { id: "16", name: "Rosca Direta" },
    { id: "17", name: "Tríceps Pulley" },
    { id: "18", name: "Leg Press" },
    { id: "19", name: "Cadeira Extensora" },
    { id: "20", name: "Elevação Lateral" },
  ],
  Cardio: [
    { id: "21", name: "Corrida" },
    { id: "22", name: "Ciclismo" },
    { id: "23", name: "Pular Corda" },
    { id: "24", name: "Natação" },
    { id: "25", name: "Remo" },
    { id: "26", name: "Caminhada" },
    { id: "27", name: "Step" },
    { id: "28", name: "Dança Aeróbica" },
    { id: "29", name: "Boxe" },
    { id: "30", name: "HIIT" },
  ],
};

const ListaExercices = () => {
  const [selectedCategory, setSelectedCategory] = useState("Calistenia");

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
            {Object.keys(exercises).map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
          </Picker>
        </View>
        <View style={styles.listContainer}>
          <DraggableFlatList
            data={exercises[selectedCategory]}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: '#1F2122',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    textAlign: 'center',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#1F2122',
    padding: 16,
  },
  title: {
    fontSize: 35,
    fontWeight: "300",
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
    justifyContent: "center",
    alignItems: "center"
  },
  listContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent'

  },
  list: {
    flexGrow: 1,
    backgroundColor: 'transparent'
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#1F2122',
    borderWidth:1,
    borderTopWidth:0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#666',
    borderRadius: 8,
    alignItems: "center",
    width: '100%', 
  },
  itemText: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase"
  },
});

export default ListaExercices;
