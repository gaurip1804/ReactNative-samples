import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  Alert,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import Signup from './Signup'
import Home from './Dashboard'

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username   : '',
      password: '',
    }
  }

  onLogin = (data) => 
  { 
    if(data.username==='admin' && data.password==='admin')
    {
      this.props.navigation.navigate('Dashboard1')
    }
    else{
      Alert.alert("Invalid Username or Password..!!")
    }
  } 

	render() {
		return(            
			<View style={styles.container}>    
				<Logo/>
				<Form type="Login" onFormSubmit={this.onLogin}/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress= {() =>{this.props.navigation.navigate('Signup')}}>
            <Text style={styles.signupButton}> Signup </Text>
          </TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#070000',
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