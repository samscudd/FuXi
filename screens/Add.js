import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

import TopBar from '../components/TopBar';
import BottomButton from '../components/BottomButton';

const Add = ({ navigation }) =>{
  const [text, onChangeText] = useState('');
  const [singleFile, setSingleFile] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  const imgPath = require('../assets/Home_fill.png');

  // Changing the button status based on the input  
  useEffect(() => {
    if (singleFile?.name && text) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [singleFile, text]);
  // Set the file to the results when a file is chosen
  const selectFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({},);
    console.log(result.type);
    if (result.type != 'cancel') {
      setSingleFile(result);
    }
  };

  //Create the flaschards from the file
  async function createFlashcards(filePath, deckTitle) {
    try{
      //Open up the file and read lines
      const csvContent = await FileSystem.readAsStringAsync(filePath);
      const lines = csvContent.split('\n')
      const flashcards = []
      
      //Loop through lines to create a dictionary item for each flashcard
      for (let i = 0; i < lines.length; i++){
        const fields = lines[i].split(',');
        if (fields.length >= 3){
          const chinese = fields[0].trim();
          const pinyin = fields[1].trim();
          const english = fields[2].trim();
          //To start, the variables for the flashcard will be fixed.
          //const flashcard = new FlashcardData({'english':english, 'chinese':chinese, 'pinyin':pinyin});
          const flashcard = ({'english': english, 'chinese': chinese, 'pinyin': pinyin})
          flashcards.push(flashcard);
        }
      }
      //const deck = new FlashcardDeck({'title':deckTitle, 'flashcards': flashcards, 'length': flashcards.length});
      const deck = {'title': deckTitle, 'flashcards': flashcards, 'length': flashcards.length}
      navigation.navigate('NewDeckConfirm', {deck: deck});
    } catch (error) {
      console.error(error)      
    } finally {
      console.log('Test Complete')
    }
  }

  // Setting up the file selector.  Active vs inactive
  if(singleFile.name) {
    fileSelector = 
      <View style={styles.input}>
        <Text style={styles.inputFileText}>{singleFile.name}</Text>
      </View>
  }
  else {
    fileSelector = 
      <TouchableOpacity onPress={selectFile}>
        <View style={styles.input}>
          <Text style={styles.inputNonActive}>Select File</Text>
        </View>
      </TouchableOpacity>
  }

  return(
      <View style={styles.container}>
        <TopBar objective="Add Set" icon={imgPath} navigation={navigation} destination='Home'/>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Set Name"
        placeholderTextColor="#818181"
        keyboardType="default"
        />

        {fileSelector}

        <BottomButton title={'Add'} disabled={isDisabled} navigation={navigation} destination='NewDeckConfirm' onPress={() => createFlashcards(singleFile.uri, text)} />  

      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
  },
  input: {
    height: 34,
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 19,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    justifyContent: 'center',
  },
  inputButton: {
    backgroundColor: '#ffffff',
    height: 40
  },
  inputFile: {
    height: 34,
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 19,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    justifyContent: 'center',
  },
  inputFileText: {
    fontFamily:'OpenSans-SemiBold',
    fontSize: 16,
  },
  inputNonActive: {
    fontFamily:'OpenSans-SemiBold',
    fontSize: 16,
    color: '#818181'
  }
});
  

export default Add

/*<View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.buttonInactive}>
              <Text style={styles.button}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>*/