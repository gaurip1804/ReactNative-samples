import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import Login from './Login'

export default class Signup extends Component{

  constructor(props) {
    super(props);
    this.state = {
      username   : '',
      password   : '',
      confirmPassword : ''
    }
  }

  onSignup = (data) => 
  {
      if(data.password===data.confirmPassword)
      {
        this.props.navigation.navigate('Login')
      }
      else
      {       
        Alert.alert("Password and ConfirmPassword should be same..!!")
      }
  }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Signup" onFormSubmit={this.onSignup}/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress= {() =>{this.props.navigation.navigate('Login')}}>
            <Text style={styles.signupButton}> Sign in</Text>
          </TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#000000',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'#ffffff',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});
