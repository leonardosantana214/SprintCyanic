import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavBar = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <NavItem iconName="calculator" screenName="CalcScreen" onPress={() => navigateToScreen('CalcScreen')} />
      <NavItem iconName="list" screenName="ListaExercices" onPress={() => navigateToScreen('ListaExercices')} />
      <NavItem iconName="heartbeat" screenName="AppExercicies" onPress={() => navigateToScreen('AppExercicies')} />
      <NavItem iconName="user" screenName="UserProfileScreen" onPress={() => navigateToScreen('UserProfileScreen')} />
    </View>
  );
};

const NavItem = ({ iconName, onPress }) => (
  <Pressable style={styles.navItem} onPress={onPress}>
    <Icon name={iconName} size={30} color="#000" />
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavBar;
