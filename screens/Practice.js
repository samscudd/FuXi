import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

import TopBar from '../components/TopBar';
import Flashcard from '../components/Flashcard';
import FlashcardData from '../data/FlashcardData';

const SET_SIZE = 20;
const emptyCard = new FlashcardData({'english':' ', 'chinese':' ', 'pinyin':' '});


//A bunch of cards for testing.  This is radical

const testFlashcard = new FlashcardData({'english':'he', 'chinese':'他', 'pinyin':'tā'});
const testFlashcard2 = new FlashcardData({'english':'she', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard3 = new FlashcardData({'english':'it', 'chinese':'老', 'pinyin':'lào'});
const testFlashcard4 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard5 = new FlashcardData({'english':'we', 'chinese':'他', 'pinyin':'tā'});
const testFlashcard6 = new FlashcardData({'english':'you', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard7 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard8 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});  
const testFlashcard9 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard10 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard11 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard12 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard13 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard14 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard15 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard16 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard17 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard18 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard19 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard20 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard21 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});
const testFlashcard22 = new FlashcardData({'english':'they', 'chinese':'奶', 'pinyin':'nián'});


const miniDeck = [testFlashcard, testFlashcard2, testFlashcard3];
const fullDeck = [testFlashcard, testFlashcard2, testFlashcard3, testFlashcard4, testFlashcard5, testFlashcard6, 
  testFlashcard7, testFlashcard8, testFlashcard9, testFlashcard10, testFlashcard11, testFlashcard12, testFlashcard13,
  testFlashcard14, testFlashcard15, testFlashcard16, testFlashcard17, testFlashcard18, testFlashcard19, testFlashcard20, 
  testFlashcard21, testFlashcard22];


   
const Practice = ({ route, navigation }) =>{
  const { title, description, cards } = route.params;


  const [toBeReviewed, setToBeReviewed] = useState([]);
  const [successDeck, setSuccessDeck] = useState([]);
  const [failDeck, setFailDeck] = useState([]);
  const [currentDeck, setCurrentDeck] = useState([]);
  const [currentCard, setCurrentCard] = useState(emptyCard);
  const [isReview, setReview] = useState(false);

  const imgPath = require('../assets/Home_fill.png');
  const incorrectButtonPath = require('../assets/IncorrectButton.png');
  const correctButtonPath = require('../assets/CorrectButton.png');

  //Shuffle items in array.  Must come first because it is used in every following function
  const shuffleDeck = (array) => {
    const shuffleDeck = [...array];
    return shuffleDeck.sort(() => Math.random() - 0.5);
  }

  //Initiate all of the decks on the first render
  useEffect(() => {
    //Make copy of flashcard list and shuffle it
    //Why do the parameters get passed as an object like this?  Figure this one out eventually.
    const shuffledDeck = shuffleDeck([...cards.cards.cards]);
    //Choose the first 20 cards and but the rest in the review list
    const toBeReviewedList = shuffledDeck.splice(SET_SIZE);
    const initialReviewList = shuffledDeck.splice(0, SET_SIZE);
    //Set all of the decks and the first card
    setCurrentDeck(initialReviewList);
    setCurrentCard(initialReviewList[0]);
    setToBeReviewed(toBeReviewedList);
  }, []);

  //Move cards between decks as needed
  const moveCard = (startDeck, endDeck, repeatDeck, remainingCards=[]) => {
    //Check the length of the deck, if greater than 1, set everything 
    endDeck.push(startDeck.shift());
    if (startDeck.length > 0 ) {
      setCurrentCard(startDeck[0]);
    //If it is the final card in the deck and there are still cards in the repeat deck
    } else if (repeatDeck.length > 0 || remainingCards.length > 0){
      //Get up to 20 cards in the repeat deck
      while(repeatDeck.length < 20 && remainingCards.length > 0){
        repeatDeck.push(remainingCards.shift())
      }
      const tempDeck = shuffleDeck(repeatDeck);
      setCurrentCard(tempDeck[0]);
      setCurrentDeck(tempDeck);
      setFailDeck([]);
    //If the repead deck is empty, we are done.
    } else {
      navigation.navigate('PracticeComplete', {cards:{cards}, title:{title}, description:{description}});
    }
  }

 // console.log(cards.cards.cards);
  console.log(' ');
  console.log("Current Deck Length: ", currentDeck.length)
  console.log("To Be Reviewed Length: ", toBeReviewed.length)
  console.log("Success Deck Length: ", successDeck.length)
  console.log("Fail Deck Length: ", failDeck.length)

  return(
      <View style={styles.container}>
        <TopBar objective="Practice" icon={imgPath} navigation={navigation} destination='Home'/>
        <Flashcard chinese={currentCard.chinese} english={currentCard.english} pinyin={currentCard.pinyin} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.resultButton} onPress={() => moveCard(currentDeck, failDeck, failDeck, toBeReviewed)}>
            <Image source={incorrectButtonPath} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.resultButton} onPress={() => moveCard(currentDeck, successDeck, failDeck, toBeReviewed)}>
            <Image source={correctButtonPath} />
          </TouchableOpacity>
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    marginTop: 70,
    width: "100%",
    height: 90,
    paddingLeft: "10%",
    paddingRight: "10%"
  },  
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
  },
  resultButton: {
    height: 90,
    width: 90
  }
  
});

export default Practice;