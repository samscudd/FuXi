import React, {useState, useEffect} from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const Flashcard = ( { chinese, pinyin, english } ) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false)
  }, [chinese, pinyin, english]);

  const flipCard = () => {
    setFlipped(!flipped)
  };


  if (!flipped) {
    cardFace = 
      <TouchableOpacity style={styles.card} onPress={flipCard}>
        <Text style={styles.cardText}>{chinese}</Text>
      </TouchableOpacity>
  } else {
    cardFace = 
      <TouchableOpacity style={styles.card} onPress={flipCard}>
        <View style={styles.cardChineseContainer}> 
          <Text style={styles.cardText}>{chinese}</Text>
          <Text style={styles.cardTextPinyin}>{pinyin}</Text>
        </View>
        <View>
          <Text style={styles.cardTextEnglish}>{english}</Text>
        </View>
      </TouchableOpacity>
  }

  return(
    <View style={styles.cardContainer}>
      {cardFace}
    </View>
  );


};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    width: 344,
    height: 312,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F2e5d7',
  },
  cardChineseContainer: {
    marginBottom: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginTop: 46,
    position: 'relative',
    alignItems: 'center'
  },
  cardText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 0,
    paddingBottom: 0
  },
  cardTextPinyin: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 26,
    color:  '#ffffff',
    marginTop: 0, 
    paddingTop: 0
  },
  cardTextEnglish: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 28,
    color: '#ffffff',
  }
});

export default Flashcard;

