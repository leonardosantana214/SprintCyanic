import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Navigate } from 'react-router-native';

const UserProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('###');
  const [phone, setPhone] = useState('### ####-####');
  const [email, setEmail] = useState('#####@###.com');
  const [dob, setDob] = useState('##/##/####');

  return (
    <ImageBackground source={{uri : 'https://ironberg.com.br/assets/images/ironberg-santos-2.jpeg'}} style={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://ellun.com.br/wp-content/uploads/2024/04/png-transparent-computer-icons-profile-s-free-angle-sphere-profile-cliparts-free.png' }}
          style={styles.avatar}
        />
        <Text style={styles.greeting}>Olá, {name}!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone:</Text>
          <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nascimento:</Text>
          <TextInput style={styles.input} value={dob} onChangeText={setDob} />
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={() => {navigation.replace('LoginScreen')}}>
          <Text style={styles.logoutButtonText}>Sair da conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    width: '80%',
    backgroundColor: '#1F2122',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#D30505',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default UserProfileScreen;
