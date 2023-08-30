import React, {useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TopBar from '../components/TopBar';
import BottomButton from '../components/BottomButton';
import ListItem from '../components/ListItem';


const NewDeckConfirm = ({ route, navigation }) => {
  const { deck } = route.params;
  
  /*
    I don't believe this was necessary
    const myDeck = {
    length: deck.length,
    cards: deck.flashcards
  }
  */

  useEffect(() => {
    saveFlascards(deck.title, deck)
  }, []);

  //Save the flashcards passed to this page.  Does this make sense or should it be on the button press?  Probably on the button press, but oh well.
  async function saveFlascards(key, value) {
    try{
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log(key, 'Saved Properly');
    } catch (e){

    };
  }

  
  const imgPath = require('../assets/Home_fill.png');
  return(
    <View style={styles.container}>
      <TopBar objective="Add Set" icon={imgPath} navigation={navigation} destination='Home'/>
      <ListItem title={deck.title} description={deck.length} onClick={false} navigation={navigation}/>
      <View style={styles.midSection}>
        <Text style={styles.midHeader}>New Deck Created!</Text>
      </View>
      <BottomButton title={'Home'} navigation={navigation} destination='Home' />  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c'
  },
  midSection: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    flexDirection: 'row'
  },
  midHeader: {
    fontFamily: 'OpenSans-ExtraBold',
      fontSize: 24,
      color: '#ffffff'
  }
});

export default NewDeckConfirm;
