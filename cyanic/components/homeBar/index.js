// homeBar/index.js
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
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
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ListaExercices")}
        style={styles.iconContainer}
      >

        <Feather name="search" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("CalcScreen")}
        style={styles.iconContainer}
      >

        <Feather name="search" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserProfileScreen")}
        style={styles.iconContainer}
      >
        <Feather name="user" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1F2122",
    paddingBottom: 10,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  iconContainer: {
    paddingHorizontal: 20,
    color: '#fff',
  },
});

export default NavBar;
