import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView, FlatList} from 'react-native';

export default function App() {

  const [word, setWord] = useState('');
  const [wordList, setWordList] = useState([]);

  const wordInputHandler = (text) => {
    setWord(text);
  }

  const addWordHandler = () => {
    console.log(word);
    setWordList(currentList => [...currentList, {key: Math.random().toString(),value: word}]);
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
      <FlatList data={wordList} 
        renderItem={itemData =>
          <View style={styles.item}>
          <Text >{itemData.item.value}</Text>
        </View>
         }
         />
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