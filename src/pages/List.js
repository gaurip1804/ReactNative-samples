import React, {Component} from 'react';
import { View ,Text, Alert} from 'react-native';
import ActionButton from 'react-native-action-button'; 
import list_data from '../data/ListResponse.json'
import ListDisplay from '../components/ListDisplay';

export default class Settings extends Component {
  static navigationOptions={
    headerTitle:"List"
  }
  state = {
    isLoading: true,
    users: [],
    error: null,
    showModal: false,   
  }

  onOpenModal = (response) => {
    var newUserList = this.state.users;
   
    if(response.ID){
      var filteredList = newUserList.filter((item) => item.ID !==response.ID);  
      filteredList.push(response);
      this.setState({
        users : filteredList
      })
    }else{
      newUserList.push(response);
      this.setState({
        users : newUserList
      })
    }

    
  } 

  deleteFromList = (response) => {
    var newUserList = this.state.users;
    const filteredList = newUserList.filter((item) => item.ID !== response.ID);  
    this.setState({
      users : filteredList 
    })
  }

  // onEdit=(data)=>{
  //   Alert.alert(data.CustomerName)
  // }

  componentDidMount()
  {
    this.setState({users:list_data.Data.Table})
  }

 render() 
 {
   return (
     <View>
       <ListDisplay listData={this.state.users} deleteFromList={this.deleteFromList} onOpenModal={this.onOpenModal}>
       </ListDisplay>
       <ActionButton buttonColor="#ff6600" 
        onPress={() => {this.props.navigation.push('NewEnquiry',{
        onOpenModal: this.onOpenModal,
       
    });
}}
/> 
     </View> 
   )
 }
}









