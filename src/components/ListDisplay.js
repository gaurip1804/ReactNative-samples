/*import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'
import CardView from 'react-native-cardview28';


 class ListDisplay extends Component {


  render() {
    return (
      <View>
        <ScrollView>
          {
            this.props.listData.map((item) => (
              <CardView
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}
                key={item.CustomerName} style={styles.item}>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.push('NewEnquiry', {
                    FormData: item,
                    onOpenModal:this.props.onOpenModal
                  });
                }}>
                  <Text>CustomerName: {item.CustomerName}</Text>
                  <Text>Address: {item.Address}</Text>
                  <Text>PhoneNo: {item.PhoneNo}</Text>
                  <Text>Email: {item.Email}</Text>
                  <Text>Branch: {item.Branch}</Text>
                  <Text>SalesPerson: {item.SalesPerson}</Text>
                  <Text>Model: {item.Model}</Text>
                </TouchableOpacity>
              </CardView>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

export default withNavigation(ListDisplay);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 30,
    margin: 2,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#fff'
  }

});*/



import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,Alert } from 'react-native';
import ProgressCircle from "react-native-progress-circle";
import CardView from "react-native-cardview28";
import { Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation'
import list_data from '../data/ListResponse.json';



class ListDisplay extends Component {

  static navigationOptions = {
    headerTitle: "List"
  }


  render() { 
    return (
      <View>
      <ScrollView>
        {
          this.props.listData.map((item) => (
            <View style={styles.container} key={item.CustomerName}>
              <CardView
                style={styles.cardViewStyle}
                cardElevation={7}
                cardMaxElevation={5}
                cornerRadius={3}>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.push('NewEnquiry', {
                    FormData: item,
                    onOpenModal: this.props.onOpenModal
                  });
                }}>

                  <Text style={styles.headingHead}>{item.DocName}</Text>


                  <View style={{ marginVertical: 5, marginHorizontal: 10, flexDirection: "row", padding: 10 }}>
                    <ProgressCircle
                      percent={parseInt(item.Progress)}
                      radius={30}
                      borderWidth={5}
                      color="#53FF53"
                      shadowColor="#B2BEB5"
                      bgColor="#F5FCFF"
                    >
                      <Text style={{ fontSize: 18 }}>{item.Progress}</Text>
                    </ProgressCircle>

                    <View style={{ flexDirection: 'column', padding: 10, flex: 0.95 }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.heading}>Name :</Text>
                        <Text style={styles.subheading}>{item.CustomerName}</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.heading}>Email :</Text>
                        <Text style={styles.subheading}>{item.Email}</Text>
                      </View>
                    </View>

                    <TouchableOpacity onPress={() =>
                      Alert.alert(
                        'Delete Post',
                        'Are you sure to delete Post?',
                        [
                          { text: 'Yes', onPress: () => { this.props.deleteFromList(item)} },
                          { text: 'No', onPress: () => { return null } }
                        ],
                        { cancelable: false }
                      )}>
                      <Image style={styles.imgDelete} source={require("../images/delete.png")} />
                    </TouchableOpacity>
                  </View>

                  <Divider style={styles.div_style} />
                  <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                    <Image style={styles.img} source={require("../images/open.png")} />

                    <View style={{ flexDirection: "column", flex: 0.33, alignItems: 'center' }}>
                      <Text style={styles.heading3}>Opening Date</Text>
                      <Text style={styles.heading3}>{item.CreatedDate}</Text>
                    </View>


                    <Image style={styles.img} source={require("../images/open.png")} />
                    <View style={{ flexDirection: "column", flex: 0.33, alignItems: 'center' }}>
                      <Text style={styles.heading3}>Closing Date</Text>
                      <Text style={styles.heading3}>{item.ClosedDate}</Text>
                    </View>

                    <Image style={styles.imgStatus} source={require("../images/status.png")} />
                    <View style={{ flexDirection: "column", flex: 0.33, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={styles.headingStatus}>Status</Text>
                      <Text style={styles.headingStatus}>{item.Status}</Text>
                    </View>
                  </View>

                </TouchableOpacity>
              </CardView>
            </View>
            

          ))
        }
      </ScrollView>
      </View>






    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  cardViewStyle: {
    flexDirection: "column",
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
  heading: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 15,
    color: '#000000',
    paddingLeft: 15

  },
  headingHead:
  {
    backgroundColor: '#313335',
    fontSize: 20,
    color: "#ffffff",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5

  },
  subHeading: {
    flexDirection: 'row',
    fontSize: 25,
    color: "#2C3E50"
  },
  HorizontalLine: {
    borderBottomColor: "rgba(96, 8, 4,0.6)",
    borderBottomWidth: 5,
    marginVertical: 5,
    marginRight: 25
  },
  div_style: {
    marginVertical: 0.5,
    borderColor: 'black',
    borderWidth: 0.5,
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

    fontSize: 12,
    color: "#6c7a88",

  },
  headingStatus: {
    fontSize: 12,
    color: "#6c7a88",
    marginRight: 25
  },
  div_style: {
    marginVertical: 0.5,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  button: {
    marginHorizontal: 40,
    backgroundColor: '#0099ff',
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: "#000000",
  },
  img: {

    marginLeft: 5,
    width: 30,
    height: 30
  },
  imgDelete:
  {
    marginVertical: 10,
    marginLeft: 5,
    width: 25,
    height: 25
  },
  subHeading: {
    fontSize: 25,
    color: "#2C3E50",
    padding: 10

  },
  imgStatus: {
    marginVertical: 8,
    marginLeft: 20,
    width: 15,
    height: 15
  }
});


export default withNavigation(ListDisplay);







