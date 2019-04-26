import { Platform, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { Rating } from 'react-native-elements';

export default class About extends Component {
  render() {
    return (
     <View style={styles.container}>
         <View>
         <Rating
          type='star'
          ratingCount={3}
          imageSize={60}
          ratingColor='#ff6600'
          showRating
        />
         <Text></Text>
         <Text style={styles.text}> Rate Us </Text>
         <Text></Text>
         <Text></Text>
         <Text></Text>
         <Text style={styles.text}>Excellon Software</Text> 
         <Text></Text>
         <Text style={styles.text1}>402, 4th Floor, Nanasaheb Gaikwad Information Technology Park, Sarjaa Rd, Sahil, Park,, Sanewadi, Sahil Park, Sanewadi, Aundh, Pune, Maharashtra 411007</Text> 
         
         </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ffffff',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  text : {
    fontSize : 30,
    color : '#ff6600',
    textAlign : 'center'
  },
  text1 : {
    fontSize : 30,
    color : '#000000',
    textAlign : 'center',
    marginStart : 10,
    marginEnd : 10
  } 
})