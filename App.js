import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 40 }}>
      <View>
        <TextInput
          placeholder='Enter Word'
          style={{ borderColor: 'black', borderWidth: 1, padding: 10 }} />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}
