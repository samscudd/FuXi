import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TopBar from '../components/TopBar';
import ListItem from '../components/ListItem';
import ItemSeparatorComponent from '../components/ItemSeparatorComponent';

import FlashcardData from '../data/FlashcardData';
import { Dekko_400Regular } from '@expo-google-fonts/dev';

const data = [
    { id: 1, title: 'Card Deck 1', description: '500' },
    { id: 2, title: 'Card Deck 2', description: '70' },
    { id: 3, title: 'Card Deck 3', description: '150' },
  ];

const Home = ({ navigation }) =>{
  const imgPath = require('../assets/AddIcon.png');
  //const svgPath = require('../assets/Add_Icon.svg')

  const [keyArray, setKeyArray] = useState([]);
  const [deckArray, setDeckArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    allDecks();
    createDeckList(keyArray);
    //removeDecks();
  }, [keyArray]);

  //Retrieve all of the Flaschard Decks
  async function allDecks() {
    try{
      let keys = await AsyncStorage.getAllKeys();
      setKeyArray(keys);
    }catch (e){
      //Error Message Here
    }
  }

  async function retrieveDeck(key) {
    try {
      let dataString = await AsyncStorage.getItem(key);
      let data = JSON.parse(dataString);
      console.log(data.cards[0])
    }catch (e){

    }
  }


  async function createDeckList(array, keys) {
    const deckList = []
    for(let i = 0; i < array.length; i++){
      try {
        let deckString = await AsyncStorage.getItem(array[i]);
        let deckInfo = JSON.parse(deckString);
        deckList.push(deckInfo);
      }catch (e){
        //Error Message
      }
    }
    setDeckArray(deckList);
    setLoading(false);
  }

  async function removeDecks() {
    try{
      await AsyncStorage.clear();
    } catch(error){
      console.log(error)
    }
  }


  return(
      <View style={styles.container}>
        <TopBar objective='Sets' icon={imgPath} navigation={navigation} destination='Add'/>
        <FlatList
        data={deckArray}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <ListItem title={item.title} description={item.length} cards={item.flashcards} onClick={true} navigation={navigation}/>}
        ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c2c2c',
    }
  
  });

export default Home