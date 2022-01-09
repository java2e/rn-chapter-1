import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView} from 'react-native';

export default function App() {

  const [word, setWord] = useState('');
  const [wordList, setWordList] = useState([]);

  const wordInputHandler = (text) => {
    setWord(text);
  }

  const addWordHandler = () => {
    console.log(word);
    setWordList(currentList => [...currentList, word]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput
          placeholder='Enter Word'
          onChangeText={wordInputHandler}
          style={styles.inputStyle} />
        <Button title="ADD" onPress={addWordHandler} />
      </View>
      <ScrollView>
        {wordList.map((word) => (
          <View key={word} style={styles.item}>
            <Text >{word}</Text>
          </View>
        ))}
      </ScrollView>
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
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})