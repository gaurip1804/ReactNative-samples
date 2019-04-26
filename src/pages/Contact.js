import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity 
} from 'react-native';

export default class Contact extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

	render(){
		return(
		<View style={styles.container}>
        <Text style={styles.text}>CONTACT US</Text>
        <Text style={styles.text1}>And we will get back to you</Text>
        <Text></Text>
        <Text></Text>
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#ffffff"
              />
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#ffffff"
                /> 
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Subject"
              placeholderTextColor = "#ffffff"
              selectionColor="#ffffff"
                />  
            <TextInput multiline style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Message"
              placeholderTextColor = "#ffffff"
              selectionColor="#ffffff"
            /> 
 
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Send Email</Text>
           </TouchableOpacity>     
  		</View>
			)
  }
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'#494949',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color : '#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#ff6600',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  text : {
    color : '#000000',
    textAlign : 'center',
    fontSize : 35
  },
  text1 : {
    color : '#ff6600',
    textAlign : 'center',
    fontSize : 25
  }
  
});