import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import TopBar from '../components/TopBar';
import ListItem from '../components/ListItem';
import BottomButton from '../components/BottomButton';



const PracticeComplete = ({ route, navigation }) =>{
  const imgPath = require('../assets/Home_fill.png');
  const { title, description, cards } = route.params;

  return(
      <View style={styles.container}>
        <TopBar objective="Practice" icon={imgPath} navigation={navigation} destination='Home'/>
        <BottomButton title={'Home'} navigation={navigation} destination='Home'/>  
        <View style={styles.midSection}>
          <Text style={styles.midHeader}>You're done!</Text>
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#2c2c2c',
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

export default PracticeComplete;