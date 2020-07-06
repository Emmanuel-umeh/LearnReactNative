import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  Alert,
  Button,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Platform,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      //       <View style ={{
      //           paddingTop : Platform.OS == "android" ? 30: 0,

      //           backgroundColor : "white",
      //           flex : 1,
      //           //  flexDirection : "column",
      //           //   justifyContent : "space-evenly",
      //             // alignItems : "center", //determines the allignemt of elements within each line

      //             // alignContent : "center", // determines the allignment of the entire content or div, only works if their is wrapping below
      //             // flexWrap : "wrap"
      //             }}>

      // {/*
      //           <View style ={{backgroundColor : "dodgerblue",  height :100,
      //           flexBasis : 400 ,//same with width or heighht depending on the flex direction
      //           flexGrow : 1, //same with flex
      //           flexShrink : 1 //same as flex : -1
      //         }} />
      //           <View style ={{backgroundColor : "gold", width : 100, height :100, top : 20}} />
      //           <View style ={{backgroundColor : "tomato", width : 100, height :100, top : 20}} />

      //           <View style ={{backgroundColor : "grey", width : 100, height :100}} />

      //           <View style ={{backgroundColor : "greenyellow", width : 100, height :100, top : -40}} />
      //    */}

      //                             {/* Done with it apppp */}

      // <Image

      // style ={{
      //   height : 200,
      //   width : 200,
      //   top : "10%",
      //   alignSelf : "center",
      //   // flex : 1,
      //   // resizeMode: 'cover',
      //   zIndex : 999,
      //   position : "absolute"

      // }}
      // source = { require("../assets/images/logo.png")}

      // />

      // {/* <Image
      //             // blurRadius ={10}
      //             style ={{
      //               position : "absolute",
      //               zIndex : 999,
      //               top : 40,
      //               alignSelf : "center"
      //             }}
      //             fadeDuration={1000}
      //             source={{
      //               width: 200,
      //               height: 200,
      //               uri:
      //                 "https://www.pngfind.com/pngs/m/5-57105_clipart-apple-icon-apple-logo-png-transparent-background.png",
      //             }}
      //           /> */}
      // <Image
      //             // blurRadius ={10}

      //             fadeDuration={1000}
      //             source={{
      //               width: "100%",
      //               height: "80%",
      //               uri:
      //               "https://c8.alamy.com/comp/2A9EKMC/male-hand-throw-off-a-mobile-phone-with-background-of-nice-mediterranean-sea-2A9EKMC.jpg"
      //             }}
      //           />

      //           <View style ={{flex : 1, backgroundColor : "pink"}}>

      //           </View>
      //           <View style ={{flex : 1, backgroundColor : "blue"}}>

      //           </View>

      //         </View>

      <React.Fragment>
        <ImageBackground
          style={styles.background}
          source={require("../assets/images/background.jpg")}
        ></ImageBackground>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo-red.png")}
          ></Image>

          <Text>Sell what you need</Text>
        </View>

        <View style={styles.button1}></View>

        <View style={styles.button2}></View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  logo: {
    height: 100,
    width: 100,
    // position: "absolute",
    // alignItems: "center",
    // top: "20%",
    // zIndex : 999
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    // marginLeft : "30%",
    alignItems: "center",
  },
  button1: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 70,
    justifyContent: "flex-end",
  },
  button2: {
    backgroundColor: "#4ecdc4",
    width: "100%",
    height: 70,
    justifyContent: "flex-end",
  },


});
