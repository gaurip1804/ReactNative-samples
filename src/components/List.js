import { Platform, StyleSheet, Text, View } from "react-native";
import CardView from "react-native-cardview28";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return this.props.list_data.map(item => (
      <View style={styles.container}
      key={item.Model}>
        <CardView
          style={styles.card_container}
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}
        >
          <View style={styles.card_view}>
            <View>
              <Text style={styles.heading}>Model</Text>
              <Text style={styles.subHeading}>{item.ModelName}</Text>
            </View>
            <View style={styles.HorizontalLine} />
            <View style={styles.bottom_view}>
              <View style={{ flex: 0.25 }}>
                <Text style={styles.heading}>ENQUIRY</Text>
                <Text style={styles.subHeading}>{item.TotalEnquiryCount}</Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={{ flex: 0.25 }}>
                <Text style={styles.heading}>RETAIL</Text>
                <Text style={styles.subHeading}>{item.TotalInvoiceCount}</Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={{ flex: 0.25 }}>
                <Text style={styles.heading}>CONVERSION</Text>
                <Text style={styles.subHeading}>
                  {item.ConversionPercetage}
                </Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={{ flex: 0.25 }}>
                <Text style={styles.heading}>BOOKINGS</Text>
                <Text style={styles.subHeading}>{item.TotalBookingCount}</Text>
              </View>
            </View>
          </View>
        </CardView>
      </View>
    ));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card_container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 10
  },
  card_view: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10
  },
  text_view: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: 3,
    marginHorizontal: 3
  },
  HorizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 5,
    marginHorizontal: 5
  },
  bottom_view: {
    flex: 1,
    flexDirection: "row"
  },
  verticalLine: {
    marginVertical: 4,
    marginHorizontal: 5,
    borderLeftWidth: 1,
    borderLeftColor: "black"
  },
  heading: {
    fontSize: 12,
    color: "#6c7a88"
  },
  subHeading: {
    fontSize: 15,
    color: "#2C3E50"
  }
});
