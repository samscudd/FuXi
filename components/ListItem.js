import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';




const ListItem = ({ title, description, navigation, cards, disabled=false }) => {

    return (
    <TouchableOpacity disabled={disabled} onPress={() => navigation.navigate('PracticeSetup', {title: {title}, description: {description}, cards: {cards}})}>
        <View style={styles.list}>
            <Text style={styles.listTitle}>{title}</Text>
            <Text style={styles.listDescription}>{description} cards</Text>
        </View>
    </TouchableOpacity>    
    );
    };

  const styles = StyleSheet.create({
    list: {
      paddingTop: 0,
      paddingBottom: 9,
    },
    listTitle: {
      paddingTop: 10,
      paddingLeft: 21,
      paddingRight: 21,
      fontFamily: 'OpenSans-Bold',
      fontSize: 21,
      color: '#ffffff',
      
    },
    listDescription: {
      color: '#ffffff',
      paddingLeft: 21,
      fontFamily: 'OpenSans-SemiBold',
      fontSize: 14,
      height: 22
    }
  
  
  });

  export default ListItem;
  