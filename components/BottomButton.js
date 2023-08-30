import React, {useState, useEffect} from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import * as FileSystem from 'expo-file-system';

import FlashcardData from '../data/FlashcardData';
import FlashcardDeck from "../data/FlashcardDeck";

const BottomBotton = ( {title, disabled=false, destination, navigation, onPress} ) => {

  //In the case that flashCards need to be created
  //Set the styles based on if the button is enabled or disabled
  const buttonBackgroundStyle = disabled ? styles.buttonDisabled : styles.buttonEnabled;
  const buttonTextStyle = disabled ? styles.buttonTextDisabled : styles.buttonTextEnabled;

  //Handle the press based on whether flashcards are being created
  //<TouchableOpacity disabled={disabled} onPress={file_uri ? () => createFlashcards(file_uri, deck_name) : () => navigation.navigate(destination)}>


  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity disabled={disabled} onPress={onPress ? onPress : () => navigation.navigate(destination)}>
        <View style={buttonBackgroundStyle}>
          <Text style={buttonTextStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default BottomBotton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 173,
    width: '100%',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#BABABA',
    width: 138,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonEnabled: {
    backgroundColor: '#2AB881',
    width: 138,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonTextDisabled: {
    fontFamily: 'OpenSans-ExtraBold',
    color: '#818181',
    fontSize: 24
  },
  buttonTextEnabled: {
    fontFamily: 'OpenSans-ExtraBold',
    color: '#FFFFFF',
    fontSize: 24
  }
});