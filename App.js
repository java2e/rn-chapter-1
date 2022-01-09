import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput
          placeholder='Enter Word'
          style={styles.inputStyle} />
        <Button title="ADD" />
      </View>
      <View style={styles.container}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputStyle: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
})