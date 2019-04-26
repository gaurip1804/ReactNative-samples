import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import CardView from "react-native-cardview28";

export default class CircularProgressCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardView
          style={styles.cardViewStyle}
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}
        >
          <View style={{ flex: 50, marginVertical: 5, marginHorizontal: 10 }}>
            <ProgressCircle
              percent={30}
              radius={52}
              borderWidth={5}
              color="#f2771a"
              shadowColor="#1c1919"
              bgColor="#F5FCFF"
            >
              <Text style={{ fontSize: 22 }}>{"30"}</Text>
            </ProgressCircle>
          </View>

          <View
            style={{
              flex: 50,
              marginVertical: 5,
              marginHorizontal: 10,
              flexDirection: "column"
            }}
          >
            <Text style={styles.heading}>{this.props.header_text}</Text>
            <Text style={styles.subHeading}>
              {this.props.header_second_text}
            </Text>
            <View style={styles.HorizontalLine} />
            <Text style={styles.subHeading}>{this.props.bottom_text}</Text>
          </View>
        </CardView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardViewStyle: {
    flex: 1,
    flexDirection: "row"
  },
  heading: {
    fontSize: 20,
    color: "#6c7a88"
  },
  subHeading: {
    fontSize: 25,
    color: "#2C3E50"
  },
  HorizontalLine: {
    borderBottomColor: "rgba(96, 8, 4,0.6)",
    borderBottomWidth: 5,
    marginVertical: 5,
    marginRight: 25
  }
});
