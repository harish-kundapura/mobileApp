import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";

const Randomgenreator = () => {
  const [randomColor, setRandomColor] = useState([]);
  const onPressButton = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red},${blue},${green})`;
  };

  console.log("randomColor", randomColor);
  return (
    <View style={styles.buttonMainHead}>
      <TouchableOpacity
        onPress={() => {
          // Alert.alert(onPressButton())
          setRandomColor([...randomColor, onPressButton()]);
        }}
        style={styles.buttonMain}
      >
        <Text style={styles.buttonText}>Generate Random Color</Text>
      </TouchableOpacity>

      <View style={styles.showGenerator}>
        <FlatList
          keyExtractor={(key) => key}
          data={randomColor}
          renderItem={({ item }) => {
            console.log("item", item);
            return (
              <View style={styles.imagesContainer}>
                <View
                  style={{
                    backgroundColor: item,
                    width: "80%",
                    height: 100,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>{item}</Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonMainHead: {
    marginTop: 50,
  },

  buttonMain: {
    backgroundColor: "#1e90ff",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    textTransform: "uppercase",
  },
  showGenerator: {
    backgroundColor: "rgb(200,222,245)",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  imagesContainer:{
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:50
  }
});

export default Randomgenreator;
