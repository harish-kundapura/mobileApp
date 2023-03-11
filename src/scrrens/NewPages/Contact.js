import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import HomePage from "./HomePage";
const Contact = ({navigation}) => {
  const[name, setName] = useState(null);
  const[email, setEmail] = useState(null);
  const[mobile, setMobile] = useState(null);
  const[description, setDescription] = useState(null);
  const[checked, setChecked] = useState(false);
  const[error, setError] = useState(null);

  console.log("name",name)

  const nameHandler=(e)=>{
   setName(e.nativeEvent.text)
  }

  const emailHandler=(e)=>{
    setEmail(e.nativeEvent.text)
  }

  const mobileHandler=(e)=>{
     setMobile(e.nativeEvent.text)
  }

  const descriptionHandler=(e)=>{
    setDescription(e.nativeEvent.text)
  }

  const submitHandler = () => {
    if (name === null) {
      setError("Name Cannot be Empty");
    } else if (email === null) {
      setError("Email Cannot be Empty");
    } else if (mobile === null) {
      setError("mobile Cannot be Empty");
    } else if (description === null) {
      setError("description Cannot be Empty");
    } else if (checked === false) {
      setError("Please Accept terms and condition");
    } else {
      setError(null);
      console.log("nnn",name,mobile,description,checked)
      Alert.alert(`${name},${mobile},${description},${checked}`);
      navigation.navigate("HomePage")
    }
  };
  return (
    <View style={styles.mainDiv}>
      <View style={styles.topMost}>
        <Text style={styles.levelUpText}>Level Up Your Knowledge</Text>
        <Text style={styles.topMostDescription}>
          You can reach us anytime via @harishkundapura983@gmail.com
        </Text>
      </View>
      <View style={styles.textInputStyling}>
        <Text>Enter Your name</Text>
        <TextInput
          value={name}
          onChange={nameHandler}
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"Enter Your Name"}
          
        ></TextInput>
        <Text>Enter Your Email</Text>
        <TextInput
          value={email}
          onChange={emailHandler}
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"Enter Your Email"}
        
        ></TextInput>
        <Text>Enter Your Mobile</Text>
        <TextInput
          value={mobile}
          onChange={mobileHandler}
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"Enter Your Mobile Number"}
        
        ></TextInput>
        <Text>How can we help you?</Text>
        <TextInput
          value={description}
          onChange={descriptionHandler}
          style={styles.descriptionInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"Enter Your feedback"}
        
        ></TextInput>
        <View style={styles.checkBoxMain}>
          <Checkbox
            style={styles.checkBox}
            value={checked}
            onValueChange={() => setChecked(!checked)}
          ></Checkbox>

          <Text>I have read and agreed with terms and conditions</Text>
        </View>
        <View style={styles.buttonMain}>
          <TouchableOpacity
            style={styles.button}
            onPress={submitHandler}
          >
            <Text style={styles.contactText}>Contact Us</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.error}>{error}</Text>
        </View>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  mainDiv: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInputStyling: {
    marginTop: 30,
  },
  textInput: {
    borderWidth: 1,
    width: 350,
    height: 40,
    color: "#808080",
    borderRadius: 5,
    marginBottom: 20,
  },
  topMost: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  topMostDescription: {
    width: 300,
    marginTop: 30,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#A020F0",
    width: 150,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonMain: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  checkBoxMain: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  contactText: {
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  levelUpText: {
    fontSize: 30,
  },
  descriptionInput: {
    borderWidth: 1,
    width: 350,
    height: 90,
    color: "#808080",
    borderRadius: 5,
    marginBottom: 20,
  },
  error: {
    color: "#FF0000",
    textAlign: "center",
    marginTop: 3,
  },
});
