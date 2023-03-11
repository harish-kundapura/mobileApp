import { React, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Hooking = () => {
  const [counter, setCounter] = useState(0);

  const incrementButtonHandler = () => {
    setCounter(counter + 10);
  };

  const decrementButtonHandler = () => {
    if (counter > 0) {
      setCounter(counter - 10);
    }
  };
  const resetButtonHandler = () => {
    setCounter(0);
  };

  return (
    <View style={styles.numberChangeMain}>
      <Text style={styles.numberChange}>{counter}</Text>
      <TouchableOpacity
        onPress={incrementButtonHandler}
        title="Press Me"
        style={styles.buttonMain}
      >
        <Text style={styles.buttonText}>+10</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={resetButtonHandler}
        title="Press Me"
        style={styles.buttonMain}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={decrementButtonHandler}
        title="Press Me"
        style={styles.buttonMain}
      >
        <Text style={styles.buttonText}>-10</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  numberChangeMain: {
    justifyContent: "center",
  },
  numberChange: {
    color: "#000000",
    textAlign: "center",
    fontSize: 30,
  },

  buttonMain: {
    width: 260,
    height: 70,
    alignItems: "center",
    backgroundColor: "#000000",
    marginBottom: 30,
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 25,
  },
});

export default Hooking;
