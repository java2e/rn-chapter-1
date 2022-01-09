import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView, FlatList} from 'react-native';
import InputCustom from './components/InputCustom';
import Item from './components/Item';

export default function App() {

  const [wordList, setWordList] = useState([]);

  const addWordHandler = word => {
    console.log(word);
    setWordList(currentList => [...currentList, {key: Math.random().toString(),value: word}]);
  }

  const removeElement = id =>{
    setWordList(currentList => {
      return currentList.filter((item) => item.key !== id)
    })
  }

  return (
    <View style={styles.screen}>
      <InputCustom addWordHandler={addWordHandler} />
      <FlatList data={wordList} 
        renderItem={itemData =><Item id={itemData.item.key} onDelete={removeElement} value={itemData.item.value} />
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

})