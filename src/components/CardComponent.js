import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CardView from "react-native-cardview28";

export default class CardComponent extends React.Component {
  render() {
    return (
      <CardView
        style={styles.card_container}
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
      >
        <View style={styles.container}>
          <View style={{ flex: 0.33 }}>
            <View styles={styles.card}>
              <View style={styles.images}>
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("../images/fire.png")}
                />
              </View>
              <View style={styles.text_container}>
                <Text style={styles.text}>HOT</Text>
                <Text style={styles.text}>{this.props.hotLeads}</Text>
              </View>
            </View>
          </View>
          <View style={styles.verticalLine} />
          <View style={{ flex: 0.33 }}>
            <View styles={styles.card}>
              <View style={styles.images}>
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("../images/temperature.png")}
                />
              </View>
              <View style={styles.text_container}>
                <Text style={styles.text}>WARM</Text>
                <Text style={styles.text}>{this.props.warmLeads}</Text>
              </View>
            </View>
          </View>
          <View style={styles.verticalLine} />
          <View style={{ flex: 0.33 }}>
            <View styles={styles.card}>
              <View style={styles.images}>
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("../images/snowflake.png")}
                />
              </View>
              <View style={styles.text_container}>
                <Text style={styles.text}>COLD</Text>
                <Text style={styles.text}>{this.props.coldLeads}</Text>
              </View>
            </View>
          </View>
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
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 10
  },
  card: {
    flexDirection: "column",
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text_container: {
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 4
  },
  verticalLine: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderLeftWidth: 1,
    borderLeftColor: "black"
  },
  images: {
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
