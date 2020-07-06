import { StatusBar } from "expo-status-bar";
import React from "react";
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
  Image
} from "react-native";
import { render } from "react-dom";
import Login from "./screens/Login"

export default class App extends React.Component{
   press = () => {
    alert("text pressed");
  };

  render(){

    console.log("height ", StatusBar.currentHeight)
    console.log("OS ", Platform.OS)
    return (

      <Login />
      // <SafeAreaView style ={styles.container}>
    
      // </SafeAreaView>
  
  
      // <SafeAreaView style={styles.container}>
      //   <Text style={{ marginTop: "10%" }} numberOfLines={1} onPress={press}>
      //     {" "}
      //     Hello world!, this is a very log text i want to test out how it will
      //     look like if truncated
      //   </Text>
      //   {/* https://picsum.photos/200/300 */}
  
      //   {/* for local images */}
      //   {/* <Image source={require("./assets/icon.png")} /> */}
  
      //   {/* for web images */}
  
      //   <TouchableOpacity
      //     onPress={() => {
      //       alert("image tapped");
      //     }}
      //   >
      //     <Image
      //       // blurRadius ={10}
  
      //       fadeDuration={1000}
      //       source={{
      //         width: 200,
      //         height: 300,
      //         uri:
      //           "https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
      //       }}
      //     />
      //   </TouchableOpacity>
  
      //   <TouchableNativeFeedback>
      //     <View
      //       style={{ height: "20%", width: "100%", backgroundColor: "blue" }}
      //     ></View>
      //   </TouchableNativeFeedback>
      //   <Button
      //     title="Click Me Twice"
      //     color="orange"
      //     onPress={() => {
      //       Alert.alert("Mega Title", "button tapped", [{text : "Yes" , onPress : ()=>alert("thank you")}, {text : "no"}]);
      //     }}
  
  
      //     // works only on ios
      //   //   onPress ={()=>{
      //   //     Alert.prompt("Title", "My  Message ", text =>{alert(text)})
      //   //   }}
      //   />
  
      //   <StatusBar style="auto" />
  
  
      //   <View style ={{ backgroundColor : "blue", flex : 1}}> 
  
      //   </View>
      // </SafeAreaView>
  
    );
  }
 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
