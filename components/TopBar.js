import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';

const TopBar = ({ objective, navigation, icon, destination }) => {


  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{objective}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate(destination)}>
        <Image style={styles.navIcon} source={icon} />
      </TouchableOpacity>
    </View>
  );
};

/*        
<Image source={icon} />
*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c2c2c',
    },
    sectionHeader: {
       paddingTop: 79,
       paddingLeft: 16,
       paddingRight: 17,
       paddingBottom: 18,
       borderBottomColor: '#F2E5D7',
       borderBottomWidth: 2,
       flexDirection: 'row',
       justifyContent: 'space-between',
    },
    sectionTitle: {
      fontFamily: 'OpenSans-ExtraBold',
      fontSize: 24,
      color: '#ffffff',
    },
    navIcon: {
      height:28,
      width:28,
    }
});  

export default TopBar;