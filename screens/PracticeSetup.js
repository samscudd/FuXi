import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import TopBar from '../components/TopBar';
import ListItem from '../components/ListItem';
import BottomButton from '../components/BottomButton';



const PracticeSetup = ({ route, navigation }) =>{
  const imgPath = require('../assets/Home_fill.png');
  const { title, description, cards } = route.params;

  return(
      <View style={styles.container}>
        <TopBar objective="Practice" icon={imgPath} navigation={navigation} destination='Home'/>
        <ListItem title={title.title} disabled={true} description={description.description} onClick={false} navigation={navigation}/>
        <BottomButton title={'Start'} navigation={navigation} onPress={() => navigation.navigate('Practice', {cards:{cards}, title:{title}, description:{description}})} />  
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
  }
  
});

export default PracticeSetup;