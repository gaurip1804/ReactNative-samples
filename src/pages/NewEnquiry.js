import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, Alert, ScrollView } from "react-native";
import { Divider, CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { Switch } from 'react-native-switch';

export default class NewEnquiry extends React.Component {
  static navigationOptions = {
    headerTitle : 'New Enquiry',
    headerStyle : {
      backgroundColor : '#ff6600'
    }
  }
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      CustomerName: params.FormData ? params.FormData.CustomerName : '',
      Address: params.FormData ? params.FormData.Address : '',
      PhoneNo: params.FormData ? params.FormData.PhoneNo : '',
      Email: params.FormData ? params.FormData.Email : '',
      Branch: params.FormData ? params.FormData.Branch : '',
      SalesPerson: params.FormData ? params.FormData.SalesPerson : '',
      Model: params.FormData ? params.FormData.Model : '',
      ID: params.FormData ? params.FormData.ID : '',
      // oldData : this.props.navigation.state.params.FormData
      //isEdit: this.props.navigation.state.params.FormData ? true : false
      date:' '
    }
  }

  submit = (response) => {
    const { params } = this.props.navigation.state;

    var newData = {
      CustomerName: this.state.CustomerName,
      Address: this.state.Address,
      PhoneNo: this.state.PhoneNo,
      Email: this.state.Email,
      Branch: this.state.Branch,
      SalesPerson: this.state.SalesPerson,
      Model: this.state.Model,
    }

    this.props.navigation.state.params.onOpenModal(this.state);
    this.props.navigation.goBack()
  }

  render() {
    const { params } = this.props.navigation.state;

    return (

      <ScrollView style={{marginStart : 10, marginTop:5}}>
        <View style={styles.container}>
          <View style={styles.container2}>
            <View flex={0.25} flexDirection='row'>
              <Text style={styles.heading1}>18</Text>
              <View style={styles.card1}>
                <Text style={styles.subHeading1}>Feb</Text>
                <Text style={styles.subHeading1}>2019</Text>
              </View>
            </View>


            <View style={styles.verticalLine} />
            <View flex={0.5}>

              <View style={styles.card}>
                <Text style={styles.heading}>BENQ12466180014</Text>



              </View>
            </View>
            <View style={styles.verticalLine} />
            <View flex={0.25}>

              <View style={styles.card}>

                <Text style={styles.heading3}>BFL Enquiry
              </Text>



              </View>
            </View>

          </View>



          <Divider style={styles.div_style} />

          <View style={styles.container2}>
            <View >

              <View style={styles.card}>
                <Text style={styles.heading}>Customer Name</Text>
                <View style={styles.Bottom_View}>
                  <View>
                    <TextInput
                      value={this.state.CustomerName}
                      onChangeText={(CustomerName) => this.setState({ CustomerName })}
                      style={styles.subHeading}
                      onSubmitEditing={() => this.Address.focus()}
                    ></TextInput>
                  </View>
                </View>
              </View>
            </View>
          </View>




          <Divider style={styles.div_style} />


          <View style={styles.container2}>
            <View>

              <View style={styles.card}>
                <Text style={styles.heading}>Address</Text>
                <View style={styles.Bottom_View}>
                  <TextInput onChangeText={(Address) => this.setState({ Address })}
                    style={styles.subHeading}
                    value={this.state.Address}
                    ref={(input) => this.Address = input}
                    onSubmitEditing={() => this.PhoneNo.focus()}

                  ></TextInput>

                  {/* <TextInput style={styles.subHeading}>Pune</TextInput> */}
                </View>
              </View>
            </View>
          </View>


          <Divider style={styles.div_style} />
          <View style={styles.container2}>
            <View flex={0.5}>

              <View style={styles.card}>
                <Text style={styles.heading}>Phone No.</Text>
                <View style={styles.Bottom_View}>
                  <TextInput onChangeText={(PhoneNo) => this.setState({ PhoneNo })}
                    style={styles.subHeading}
                    value={this.state.PhoneNo}
                    ref={(input) => this.PhoneNo = input}
                    onSubmitEditing={() => this.Email.focus()}

                  ></TextInput>
                  {/* <TextInput style={styles.subHeading}>9054362789</TextInput> */}

                </View>
              </View>

            </View>
            <View style={styles.verticalLine} />
            <View flex={0.5}>

              <View style={styles.card}>
                <Text style={styles.heading}>Email id</Text>
                <View style={styles.Bottom_View}>
                  <TextInput keyboardType='email-address' onChangeText={(Email) => this.setState({ Email })}
                    style={styles.subHeading}
                    value={this.state.Email}
                    ref={(input) => this.Email = input}
                    onSubmitEditing={() => this.Branch.focus()}
                  ></TextInput>
                </View>
              </View>

            </View>



          </View>


          <Divider style={styles.div_style} />
          <View style={styles.container2}>
            <View flex={0.5}>

              <View style={styles.card}>
                <Text style={styles.heading}>Branch</Text>
                <View style={styles.Bottom_View}>
                  <TextInput onChangeText={(Branch) => this.setState({ Branch })}
                    style={styles.subHeading}
                    value={this.state.Branch}
                    ref={(input) => this.Branch = input}
                    onSubmitEditing={() => this.SalesPerson.focus()}
                  ></TextInput>

                </View>
              </View>

            </View>
            <View style={styles.verticalLine} />
            <View flex={0.5}>

              <View style={styles.card}>
                <Text style={styles.heading}>SalesPerson</Text>
                <View style={styles.Bottom_View}>
                  <TextInput onChangeText={(SalesPerson) => this.setState({ SalesPerson })}
                    style={styles.subHeading}
                    value={this.state.SalesPerson}
                    ref={(input) => this.SalesPerson = input}
                    onSubmitEditing={() => this.Model.focus()}
                  ></TextInput>

                </View>
              </View>
            </View>

          </View>
          <Divider style={styles.div_style} />
          <View style={styles.container2}>
            <View style={{ flex: 1 }}>

              <View style={styles.card}>
                <Text style={styles.heading}>Model</Text>
                <View style={styles.Bottom_View}>
                  <TextInput onChangeText={(Model) => this.setState({ Model })}
                    style={styles.subHeading}
                    value={this.state.Model}
                    ref={(input) => this.Model = input}
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
          <Divider style={styles.div_style} />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.90 }}>
              <Text style={styles.heading}>Test Ride Avaiable</Text>
            </View>
            <CheckBox
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })} />
          </View>
          <Divider style={styles.div_style} />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.90 }}>
              <Text style={styles.heading}>Service Coupon Avaiable</Text>
            </View>
            <Switch style={{ width: 15, height: 15 }}
              onValueChange={(value) => this.setState({ toggled: value })}
              value={this.state.toggled} />
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text>Opening Date:</Text>
          <TextInput value={this.state.date} placeholder ='Select Date'/>
          <DatePicker style={{ width: 30 }} mode="date" format="DD-MM-YYYY" customStyles={{
              dateIcon: {
                width: 25,
                height: 25,
              },
              dateInput: {
                height: 0,
                width: 0,
              }
            }}
              onDateChange={(date) => { this.setState({ date: date }) }}
            />

              

            
          </View>
          <View>
            <TouchableOpacity
              onPress={this.submit} style={styles.button}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  container2: {
    flexDirection: "row"
  },
  model_container: {
    flex: 0.25
  },
  card_container: {
    flex: 0.5
  },
  card: {
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "flex-start",

  },
  card1: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  verticalLine: {
    marginVertical: 5,
    borderLeftWidth: 1,
    borderLeftColor: "black"
  },
  Bottom_View: {
    flexDirection: "row"
  },
  image: {
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "#6c7a88",
  },
  subHeading: {
    fontFamily: "Arial",
    fontSize: 18,
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: "#2C3E50"
  },
  heading1: {
    fontSize: 30,
    color: "#ff4800",
    opacity: 0.8,
  },
  subHeading1: {

    fontSize: 15,
    color: "#2C3E50"
  },
  heading3: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "#ff4800",
    opacity: 0.8,
  },
  div_style: {
    marginVertical: 0.5,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  button: {
    marginHorizontal: 40,
    backgroundColor: '#ff6600',
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: "#ffffff",
  },
  switchHeading: {
    height: 15,
    width: 15
  },
});




































// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';
// import CardView from 'react-native-cardview'




// export default class NewEnquiry extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       ID: '',
//       Mobile: '',
//       CompanyID: '',
//       DocName: '',
//       DocDate: '',

//     };
//   }

//   static navigationOptions={
//     headerTitle:"New Enquiry"
//   }
//   isValid() {
//     const { ID, Mobile, CompanyID, DocName, DocDate } = this.state;
//     if (ID.length === 0) {
//       Alert.alert(
//         'Alert Title',
//         'Enter id...',
//         [
//           { text: 'Enter id' },
//         ]
//       );
//     }
//     else if (Mobile.length === 0) {
//       Alert.alert(
//         'Alert Title',
//         'Enter Mobile...',
//         [
//           { text: 'Enter Mobile' },
//         ]
//       );
//     }
//     else if (CompanyID.length === 0) {
//       Alert.alert(
//         'Alert Title',
//         'Enter CompanyID...',
//         [
//           { text: 'Enter CompanyID' },
//         ]
//       );
//     } else if (DocName.length === 0) {
//       Alert.alert(
//         'Alert Title',
//         'Enter DocName...',
//         [
//           { text: 'Enter DocName' },
//         ]
//       );
//     }
//     else if (DocDate.length === 0) {
//       Alert.alert(
//         'Alert Title',
//         'Enter DocDate...',
//         [
//           { text: 'Enter DocDate' },
//         ]
//       );
//     }


//     else if(ID.length > 0 && Mobile.length > 0 && CompanyID.length > 0 && DocName.length > 0 && DocDate.length > 0 ) {
//       Alert.alert(
//         'Alert Title',
//         'Working to append the data in the list...',

//       );
//     }




//   }

//   submit = (response) => {
//     this.props.navigation.state.params.onOpenModal(this.state);
//     this.props.navigation.goBack()
//   }

//   render() {
//     const { params} = this.props.navigation.state;

//     return (
//       <View style={styles.container}>


//           <View style={styles.layout}>
//             <Text style={styles.input}>ID</Text>
//             <TextInput style={styles.inputBox}
//               onChangeText={(ID) => this.setState({ ID })}
//               underlineColorAndroid='black'
//               placeholderTextColor='white'
//               selectionColor='#ffffff'
//               onSubmitEditing={() => this.Mobile.focus()} />
//           </View>
//           <View style={styles.layout}>
//             <Text style={styles.input}>Mobile</Text>
//             <TextInput style={styles.inputBox}
//               onChangeText={(Mobile) => this.setState({ Mobile })}
//               underlineColorAndroid='black'
//               placeholderTextColor='white'
//               selectionColor='#ffffff'
//               ref={(input) => this.Mobile = input}
//               onSubmitEditing={() => this.CompanyID.focus()} />
//           </View>
//           <View style={styles.layout}>
//             <Text style={styles.input}>CompanyID</Text>
//             <TextInput style={styles.inputBox}
//               onChangeText={(CompanyID) => this.setState({ CompanyID })}

//               underlineColorAndroid='black'
//               placeholderTextColor='white'
//               selectionColor='#ffffff'
//               ref={(input) => this.CompanyID = input}
//               onSubmitEditing={() => this.DocName.focus()} />
//           </View>
//           <View style={styles.layout}>
//             <Text style={styles.input}>DocName</Text>
//             <TextInput style={styles.inputBox}
//               onChangeText={(DocName) => this.setState({ DocName })}

//               underlineColorAndroid='black'
//               placeholderTextColor='white'
//               selectionColor='#ffffff'
//               ref={(input) => this.DocName = input}
//               onSubmitEditing={() => this.DocDate.focus()}

//             />
//           </View>
//           <View style={styles.layout}>
//             <Text style={styles.input}>DocDate</Text>
//             <TextInput style={styles.inputBox}
//              onChangeText={(DocDate) => this.setState({ DocDate })}


//               underlineColorAndroid='black'
//               placeholderTextColor='white'
//               selectionColor='#ffffff'
//               ref={(input) => this.DocDate = input}
//             />
//           </View>
//           <View style={styles.layout}>
//             <Button 
//               style={backgroundColor='#ff6600'}
//               onPress={this.submit}
//               title='Save' />
//           </View>


//       </View>
//     );
//   }
// }





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
//   inputBox:
//   {
//     fontSize: 15,
//     color: 'black',
//     alignItems: 'flex-start',
//   },
//   input:
//   {
//     fontSize: 15,
//   },
//   layout: {
//     marginHorizontal: 5,
//     marginVertical: 5,

//   },
//   layout2: {
//     marginHorizontal: 5,
//     marginVertical: 5,
//   },
//   model_container: {
//     flex: 0.5,

//     flexDirection: "row"

//   },
//   card_container: {
//     flex: 0.25
//   },
//   card: {
//     flexDirection: "column",
//     marginVertical: 5,
//     marginHorizontal: 8,
//     justifyContent: "center",
//     alignItems: "flex-start"
//   },
//   verticalLine: {
//     marginVertical: 5,
//     borderLeftWidth: 1,
//     borderLeftColor: "black"
//   },
//   Bottom_View: {
//     flexDirection: "row"
//   },
//   image: {
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   heading: {
//     fontFamily: "Arial",
//     fontSize: 12,
//     color: "#6c7a88"
//   },
//   subHeading: {
//     fontFamily: "Arial",
//     fontSize: 15,
//     color: "#2C3E50",
//     flex: 90
//   },

//   iconimg:
//   {
//     margin: 60

//   },




// });

