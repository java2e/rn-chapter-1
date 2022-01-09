import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 40 }}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TextInput
          placeholder='Enter Word'
          style={{ width:'80%', borderColor: 'black', borderWidth: 1, padding: 10 }} />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}


