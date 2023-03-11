import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "../../Components/Menu";

const HomePage = (props) => {
  return (
    <View>
      <View style={styles.mainDiv}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.boyImage}
            source={{
              uri: "https://www.shutterstock.com/image-photo/portrait-cute-africanamerican-boy-using-260nw-1734201014.jpg",
            }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.welcomeText}>Welcome to {props.channelName}</Text>

        <Text style={styles.descriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </Text>
      </View>
      <View style={styles.allImages}>
      <Menu />
      </View>
       
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  mainDiv: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  boyImage: {
    width: 300,
    height: 180,
    borderRadius: 10,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  welcomeText: {
    fontSize: 40,
    fontFamily: "sans-serif",
    fontWeight: "200",
    marginTop: 30,
    textAlign: "center",
  },
  descriptionText: {
    textAlign: "justify",
    width: 350,
    marginTop:10
   
  },
  downImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.1,
    
  },
  allImages: {
   
  },
  imageContainer: {
    // borderWidth: 0.1,
    // elevation:2
  },
});
