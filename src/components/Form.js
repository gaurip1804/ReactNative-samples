import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity 
} from 'react-native';

export default class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username   : '',
      password   : '',
      confirmPassword : '',
    }
  }

 onForm(){
    this.props.onFormSubmit(this.state);
  }

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Username"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              onChangeText={(username) => this.setState({username})}
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              onChangeText={(password) => this.setState({password})}
              ref={(input) => this.password = input}
              /> 
              {
                  this.props.type==='Signup' ? <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  placeholderTextColor = "#ffffff"
                  onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                  ref={(input) => this.confirmPassword = input}/> : null   
              } 
           <TouchableOpacity style={styles.button} onPress={() => this.onForm()}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
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
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
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
  }
  
});