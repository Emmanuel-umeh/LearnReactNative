import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

export default class ViewImage extends Component {
  render() {
    return (
      <View style={styles.background}>
          {/* <View style = {styles.row}> */}
          <View style={styles.backButton}></View>
        <View style={styles.backButton2}></View>
          {/* </View> */}
      
        <Image
          style={styles.image}
          resizeMode = "contain"
          source={require("../assets/images/chair.jpg")}
        ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },

  image: {
    height: "70%",
    width : "100%",
    justifyContent: "center",
    // marginTop : "30%"
  },

  backButton : {
      backgroundColor : "orange",
      height : 50,
      width : 50,
      position : "absolute",
      top : 50,
      left : 10
  },
  backButton2 : {
      backgroundColor : "orange",
      height : 50,
      width : 50,
      position : "absolute",
      top : 50,
      right : 10
  },
  row : {
      width : "100%",
    //   alignItems : "center",
      flexDirection : "column",
      justifyContent : "space-evenly",
  }
});
