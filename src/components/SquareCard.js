import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import CardView from "react-native-cardview28";

export default class SquareCard extends React.Component {
  render() {
    return (
      <CardView
        style={[
          styles.card_container,
          { backgroundColor: this.props.cardColor }
        ]}
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
      >
        <View style={styles.container}>
          <Text style={styles.heading}>{this.props.header_text}</Text>
          <Text style={styles.subHeading}>{this.props.header_second_text}</Text>
          <View style={styles.HorizontalLine} />
          {this.props.add_render && (
            <TouchableOpacity>
              <View>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("../images/add.png")}
                />
              </View>
            </TouchableOpacity>
          )}
          {this.props.no_render && (
            <Text style={styles.Numbers}>{this.props.Numbers}</Text>
          )}
          <View style={styles.HorizontalLine} />
          <TouchableOpacity>
            <View style={styles.Bottom_View}>
              <Text style={styles.subHeading}>{this.props.bottom_text}</Text>
              <Image
                style={{ width: 15, height: 15 }}
                source={require("../images/rightarrow.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </CardView>
    );
  }
}

const styles = StyleSheet.create({
  card_container: {
    flex: 1
  },
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 8,
    justifyContent: "center"
  },
  HorizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 5,
    marginRight: 10
  },
  Bottom_View: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  subHeading: {
    fontFamily: "Arial",
    fontSize: 12,
    color: "#2C3E50",
    flex: 90
  },
  heading: {
    fontFamily: "Arial",
    fontSize: 12,
    color: "#6c7a88"
  },
  Numbers: {
    fontFamily: "Arial",
    fontSize: 20
  }
});
