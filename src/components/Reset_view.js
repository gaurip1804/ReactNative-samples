import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default class Reset_view extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.reset}>
            <Text style={styles.text}>RESET ALL</Text>
            <View style={styles.images}>
              <Image
                style={{ width: 13, height: 13 }}
                source={require("../images/refresh.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  reset: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginVertical: 5,
    marginHorizontal: 10
  },
  text: {
    fontFamily: "Arial",
    marginRight: 4
  },
  images: {
    justifyContent: "center",
    alignItems: "center"
  }
});
