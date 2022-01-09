import React,{useState} from "react";
import { View , TextInput, Button, StyleSheet} from "react-native";


const InputCustom = props => {

    const [word, setWord] = useState('');

    const wordInputHandler = (text) => {
        setWord(text);
      }
    

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter Word'
                onChangeText={wordInputHandler}
                style={styles.inputStyle} />
            <Button title="ADD" onPress={props.addWordHandler.bind(this,word)} />
        </View>
    )
}

const styles = StyleSheet.create({
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

export default InputCustom;