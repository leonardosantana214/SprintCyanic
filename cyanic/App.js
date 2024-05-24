import { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import LoginScreen from './components/Login';

class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        < LoginScreen />
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})