import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import CardView from "react-native-cardview28";

export default class HeaderFilterComponent extends React.Component {
  render() {
    return (
      <CardView
        style={styles.container}
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
      >
        <View style={styles.model_container}>
          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.heading}>Model</Text>
              <View style={styles.Bottom_View}>
                <Text style={styles.subHeading}>Select</Text>
                <Image
                  style={{ height: 15, width: 15 }}
                  source={require("../images/arrow-down.png")}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.card_container}>
          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.heading}>Month</Text>
              <View style={styles.Bottom_View}>
                <Text style={styles.subHeading}>Jan</Text>
                <Image
                  style={{ height: 15, width: 15 }}
                  source={require("../images/arrow-down.png")}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.card_container}>
          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.heading}>Year</Text>
              <View style={styles.Bottom_View}>
                <Text style={styles.subHeading}>{this.props.year}</Text>
                <Image
                  style={{ height: 15, width: 15 }}
                  source={require("../images/arrow-down.png")}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </CardView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  model_container: {
    flex: 0.5
  },
  card_container: {
    flex: 0.25
  },
  card: {
    flexDirection: "column",
    marginVertical: 5,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "flex-start"
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
    fontSize: 12,
    color: "#6c7a88"
  },
  subHeading: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "#2C3E50",
    flex: 90
  }
});
