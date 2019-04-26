import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Alert,
  Image
} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator, SafeAreaView ,createDrawerNavigator, DrawerItems, createBottomTabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements'
import Login from './src/pages/Login'
import Signup from './src/pages/Signup'
import Dashboard from './src/pages/Dashboard'
import List from './src/pages/List'
import NewEnquiry from './src/pages/NewEnquiry'
import About from './src/pages/About'
import Contact from './src/pages/Contact'

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#212121"
           barStyle="light-content"
         />
        <AppContainer/>
      </View>
    );
  }
}

const DashboardStack = createStackNavigator({
  Dashboard1: {
    screen: Dashboard
  },
},
{
  defaultNavigationOptions: ({ navigation }) => {
    return {   
        headerTitle : 'Dashboard',
        headerStyle: {
          backgroundColor: '#ff6600'
        },
        headerLeft: (          
        <Icon
          style={{ paddingLeft: 10}}
          onPress={() => navigation.openDrawer()}
          name = "menu"
          size={30}
        />
      )
    };
  }
})

const ListStack = createStackNavigator({
  List1: {
    screen: List
  },
},
{
  defaultNavigationOptions: ({ navigation }) => {
    return {   
        headerTitle : 'List',
        headerStyle: {
          backgroundColor: '#ff6600'
        },
        headerLeft: (          
        <Icon
          style={{ paddingLeft: 10}}
          onPress={() => navigation.openDrawer()}
          name = "menu"
          size={30}
        />
      )
    };
  }
})

const AboutStack = createStackNavigator({
  About: {
    screen: About
  }
},
{
  defaultNavigationOptions: ({ navigation }) => {
    return {   
        headerTitle : 'About',
        headerStyle: {
          backgroundColor: '#ff6600'
        },
        headerLeft: (          
        <Icon
          style={{ paddingLeft: 10}}
          onPress={() => navigation.openDrawer()}
          name = "menu"
          size={30}
        />
      )
    };
  }
})

const ContactStack = createStackNavigator({
  Contact: {
    screen: Contact
  }
},
{
  defaultNavigationOptions: ({ navigation }) => {
    return {   
        headerTitle : 'Contact',
        headerStyle: {
          backgroundColor: '#ff6600'
        },
        headerLeft: (          
        <Icon
          style={{ paddingLeft: 10}}
          onPress={() => navigation.openDrawer()}
          name = "menu"
          size={30}
        />
      )
    };
  }
})

const TabNavigator = createMaterialTopTabNavigator({  
  Dashboard : {screen : DashboardStack},
  List : {screen : ListStack},
},
{
  tabBarPosition : 'bottom',
  swipeEnabled:true,
  tabBarOptions: {
    activeTintColor: '#000000',
    labelStyle: {
      fontSize: 15,
    },  
    style: {
      backgroundColor: '#ff6600',
    },
    indicatorStyle: {
      borderBottomColor: '#000000',
      borderBottomWidth: 4
    },
  }
})

const TabStack = createStackNavigator(
{
  TabNavigatorStack: {screen:TabNavigator,
    navigationOptions: ({ navigation }) => {
    return {
      header: null,
      }; 
    }
  },
  NewEnquiry: { screen: NewEnquiry },
}); 

const AppDrawerNavigator = createDrawerNavigator(
{
  CRMDashboard: {
    screen: TabStack,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("./src/images/dashboard.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      )
    }
  },
  About: {
    screen: AboutStack,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image 
          source={require("./src/images/about.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      )
    }
  },
  Contact: {
    screen: ContactStack,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image 
          source={require("./src/images/contact.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      )
    }
  },

},
{
    contentComponent:(props) => (
    <View style={{flex:1 }}>
      <SafeAreaView  style={{flex: 1,flexDirection: 'column'}} forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerItems {...props} />
      <TouchableOpacity style={styles.logout}onPress={()=>
      Alert.alert(
        'Log out',
        'Do you want to logout?',
        [
          {text: 'Cancel', onPress: () => {return null}},
          {text: 'Confirm', onPress: () => {      
            props.navigation.navigate('Login')
          }},
        ],
        { cancelable: false }
      ) 
      }>
      <Text style={{margin: 20, textAlign:'center',fontWeight: 'bold',color: 'black'}}>Logout</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </View>
    ),
})

const StackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      }; 
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  },
})

const switchNavigator = createSwitchNavigator({
    Stack : StackNavigator, 
    Drawer : AppDrawerNavigator
})

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  logout : {
    position: 'absolute', 
    bottom: 0,
    width: '100%',
    backgroundColor:'#ff6600', 
    
  }
});

