// homeBar/index.js
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TrainingCenterScreen")}
        style={styles.iconContainer}
      >
        <Feather name="home" size={30} color="#fff" />
        <Text style={styles.Text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ListaExercices")}
        style={styles.iconContainer}
      >
        <Feather name="list" size={30} color="#fff" />
        <Text style={styles.Text}>Lista</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CalcScreen")}
        style={styles.iconContainer}
      >
     
        <Feather name="percent" size={3000} color="#fff" />
        <Text style={styles.Text}>IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("UserProfileScreen")}
        style={styles.iconContainer}
      >
        <Feather name="user" size={30} color="#fff" />
        <Text style={styles.Text}>User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#1F2122",
    paddingBottom:5,
    paddingTop: 5,
    borderTopWidth: 1,

  },
  iconContainer: {
    paddingHorizontal: 20,
    color: '#fff',
  },
  Text: {
    color: '#fff',
    textTransform: "uppercase",
    fontWeight:"bold",
    fontSize:20
  }
});

export default NavBar;
