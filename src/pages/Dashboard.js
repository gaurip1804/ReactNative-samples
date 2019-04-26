import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import CardComponent from "../components/CardComponent";
import HeaderFilterComponent from "../components/HeaderFilterComponent";
import Reset_view from "../components/Reset_view";
import CircularProgressCard from "../components/CircularProgressCard";
import SquareCard from "../components/SquareCard";
import data from "../data/dashboard.json"
import List from '../components/List'

export default class Dashboard extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flex: 1, backgroundColor: "#ff6600" }}>
            <View style={styles.Header}>
              <HeaderFilterComponent 
                year={data.Data.Table[0].EnquiryYear}
              />
            </View>
            <View style={styles.reset_view}>
              <Reset_view />
            </View>
            <View style={styles.Heading}s>
              <Text style={{color:'#FFF'}}>ENQUIRY STATUS</Text>
            </View>
            <View style={styles.circular_Card}>
              <CircularProgressCard 
                header_text="TOTAL"
                header_second_text="ENQUIRY"
                bottom_text={data.Data.Table[0].TotalEnquiryCount}
              />
            </View>
            <View style={styles.card_square}>
              <View style={styles.multiple_card_view}>
                <SquareCard
                  style={[styles.SquareCard]}
                  cardColor="#FFF"
                  bottom_text="ADD"
                  header_text="NEW"
                  header_second_text='ENQUIRY'
                  add_render='true'
                />
              </View>
              <View style={styles.multiple_card_view}>
                <SquareCard
                  style={styles.SquareCard}
                  bottom_text="VIEW"
                  header_text="OPEN"
                  cardColor="#f95234"
                  header_second_text='ENQUIRY'
                  no_render='true'
                  Numbers={data.Data.Table[0].OpenEnquiryCount}
                />
              </View>
              <View style={styles.multiple_card_view}>
                <SquareCard
                  style={styles.SquareCard}
                  bottom_text="VIEW"
                  header_text="PARTIAL"
                  cardColor="#c2c2c2"
                  header_second_text='ENQUIRY'
                  no_render='true'
                  Numbers={data.Data.Table[0].PartialEnquiryCount}
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 2, backgroundColor: "#E5E5E5" }}>
          <View style={styles.Heading}s>
              <Text style={{color:'#000',marginTop:4}}>ACTIVITY DETAILS</Text>
            </View>
            <View style={styles.circular_Card}>
              <CircularProgressCard 
                 header_text="TOTAL"
                header_second_text="BOOKINGS"
                bottom_text={data.Data.Table[0].EnquiryOpenBookingCount+data.Data.Table[0].EnquiryBookingCount}
              />
            </View>
            <View style={styles.card_square}>
              <View style={styles.multiple_card_view}>
                <SquareCard
                  style={styles.Below_SquareCard}
                  bottom_text="VIEW"
                  header_text="OVERDUE"
                  header_second_text='ACTIVITIES'
                  cardColor='rgba(255, 96, 5,0.8)'
                  no_render='true'
                  Numbers={data.Data.Table[0].PendingActivitiesCount}
                />
              </View>
              <View style={styles.multiple_card_view}>
                <SquareCard
                  style={styles.Below_SquareCard}
                  bottom_text="VIEW"
                  header_text="TODAY'S"
                  header_second_text='ACTIVITIES'
                  cardColor='rgba(66, 165, 245,0.8)'
                  no_render='true'
                  Numbers={data.Data.Table[0].TodayActivitiesCount}
                />
              </View>
              <View style={styles.multiple_card_view}>
                <SquareCard
                  style={styles.Below_SquareCard}
                  bottom_text="VIEW"
                  header_text="FUTURE"
                  header_second_text='ACTIVITIES'
                  cardColor='rgba(142, 153, 243,0.8)'
                  no_render='true'
                  Numbers={data.Data.Table[0].FutureActivityCount}
                />
              </View>
              <View style={styles.multiple_card_view}>
                <SquareCard
                  style={styles.Below_SquareCard}
                  bottom_text="VIEW"
                  header_text="TOTAL"
                  header_second_text='INVOICES'
                  cardColor='#F8f8f8'
                  no_render='true'
                  Numbers={data.Data.Table[0].EnquiryInvoiceCount}
                />
              </View>
            </View>
            <View style={styles.Heading}s>
              <Text style={{color:'#000',marginTop:4}}>ENQUIRY CLASSIFICATION</Text>
            </View>
            <View style={styles.card}>
              <CardComponent 
                hotLeads={data.Data.Table[0].HotEnquiryCount}
                warmLeads={data.Data.Table[0].WarmEnquiryCount}
                coldLeads={data.Data.Table[0].ColdEnquiryCount}               
              />
            </View>
            <View style={styles.Heading}s>
              <Text style={{color:'#000',marginTop:4}}>ENQUIRY CONVERSION</Text>
            </View>
            <View>
            <List style={styles.List} 
            list_data={data.Data.Table1}
            />
            </View> 

            </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 10,
    marginVertical: 10
  },
  circular_Card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 10,
    marginVertical: 10
  },
  card_square: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 10,
    marginVertical: 10
  },
  multiple_card_view: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 4,
    marginVertical: 4
  },
  SquareCard: {
    flex:0.33,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 4,
    marginVertical: 4
  },
  Below_SquareCard: {
    flex:0.25,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 4,
    marginVertical: 4
  },
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10
  },
  reset_view: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: 5,
    marginVertical: 5
  },
  text: {
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 4
  },
  List: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10
  },
  Heading:{
    fontFamily:'Arial',
    fontSize:15,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10 
  }
});