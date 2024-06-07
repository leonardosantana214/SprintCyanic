import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CalcScreen() {
  const [gender, setGender] = useState("Feminino");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState(null);
  const [idealWeight, setIdealWeight] = useState(null);

  const calculateImcAndIdealWeight = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const imcValue = weightInKg / (heightInMeters * heightInMeters);
    let idealWeightValue;

    if (gender === "Feminino") {
      idealWeightValue = 45.5 + 2.3 * (heightInMeters * 39.37 - 60); // fórmula para mulheres
    } else {
      idealWeightValue = 50 + 2.3 * (heightInMeters * 39.37 - 60); // fórmula para homens
    }

    setImc(imcValue.toFixed(2));
    setIdealWeight(idealWeightValue.toFixed(2));
  };

  return (
    <ImageBackground
      source={{
        uri: "https://www.esportelandia.com.br/wp-content/uploads/2023/11/Ironberg.png.webp",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}> IMC </Text>
          <Text style={styles.label}>Gênero:</Text>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>
          <Text style={styles.label}>Altura (cm):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />

          <Text style={styles.label}>Peso Atual (kg):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={calculateImcAndIdealWeight}
          >
            <Text style={styles.buttonText}>Calcular IMC e Peso ideal</Text>
          </TouchableOpacity>
          {imc !== null && (
            <View style={styles.result}>
              <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
              <Text style={styles.resultText}>
                Seu peso ideal é: {idealWeight} kg
              </Text>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:307,
    textAlign: "center"

  },
  box: {
    padding: 30,
    height:650,
    width:280,
    backgroundColor: "#1c1c1c",
    borderRadius: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  label: {
    color: "#aaa",
    alignSelf: "flex-start",
    marginTop: 10,
    borderBottomColor:"gren",
    borderWidth:1,
    textAlign: "center",
    marginBottom: 7,
    width: '100%',
    borderTopColor:"transparent",
    borderRightColor:"transparent",
    borderLeftColor:"transparent",

  },
  picker: {
    width: 180,
    height:1,
    color: "#fff",
    marginBottom: 15,
    backgroundColor: "#333",   
   
  },
  input: {
    width: 200 ,
    height: 40,
    backgroundColor: "#333",
    borderRadius: 100,
    paddingHorizontal: 10,
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
    borderWidth:1,
    borderColor: "red",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#D30505",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,

  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
