import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  console.log("navigation", navigation);
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonTouch}
        onPress={() => {
          navigation.navigate("Course");
        }}
      >
        <Image
          style={styles.downImage}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/38/38792.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonTouch}
        onPress={() => {
          navigation.navigate("UserData");
        }}
      >
        <Image
          style={styles.downImage}
          source={{
            uri: "https://cdn4.vectorstock.com/i/1000x1000/26/28/group-of-people-icon-vector-15262628.jpg",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonTouch}
        onPress={() => {
          navigation.navigate("Contact");
        }}
      >
        <Image
          style={styles.downImage}
          source={{
            uri: "https://media.istockphoto.com/id/1135927602/vector/i-question-mark-in-blue-ask-dialog-bubble-faq-information-button-vector-icon.jpg?s=612x612&w=0&k=20&c=mpX4BMBbzyUTPQSYYTaj2sN1U-EYiLq6QRtnDN7cQ6k=",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonTouch}
        onPress={() => {
          navigation.navigate("About");
        }}
      >
      <Image
      style={styles.downImage}
      source={{
        uri: "https://w7.pngwing.com/pngs/193/250/png-transparent-blue-phone-inside-circle-icon-telephone-call-symbol-smartphone-ringing-phone-miscellaneous-blue-text.png",
      }}
    />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 35,
    justifyContent: "space-evenly",
    flex: 1,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 50,
    marginVertical:10
    
  },
  buttonTouch: {
    marginTop:20
  },
  downImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.1,
  
  },
});
