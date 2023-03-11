import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";

const LoginForm = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [error, setError] = useState(null);
  


  const onchangeSelected = () => {
    setIsSelected(!isSelected);
  };

  const onsubmitHandler = () => {
    
    if (userName === null) {
      setError("username cannot be empty");
    } else if (userName?.length >= 50) {
      setError("username cannot be more than 50 characters");
    } else if (password === null) {
      setError("password cannot be empty");
    } else if (password?.length > 8) {
      setError("password length should be 8");
    } else if(isSelected===false){
        setError("please accept the terms and condition");
    }
    
    else {
        setError(null)
    let objectData={
        userName:userName,
        password:password,
        isSelected:isSelected
    }

    console.log("objectData",objectData)

    let checked=isSelected ? 1 :0

      Alert.alert(`${userName},${password},${checked}`);

      navigation.navigate("Home",{myName:`${userName}`})
    }
  };
  return (
    <View style={styles.main}>
      <Text>CONTACT US</Text>
      <View style={styles.loginText}>
        <Text>Login Form</Text>
        <Text>You can reach us anytime via any@thapa.com</Text>
      </View>
      <View>
        <Text>Enter your userName</Text>
        <TextInput
          style={styles.input}
          onChangeText={(actualData) => setUserName(actualData)}
          value={userName}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View>
        <Text>Enter your password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(actualData) => setPassword(actualData)}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected}
          onValueChange={onchangeSelected}
          style={styles.checkbox}
          color={isSelected !== null ? "#4630EB" : undefined}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isSelected !== null ? "#4630EB" : "grey" },
          ]}
          onPress={()=>onsubmitHandler()}
        >
          <Text style={styles.labelButton}>Login</Text>
        </TouchableOpacity>
      </View>
      {!!error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    width: 300,
  },
  loginText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  checkboxContainer: {
    marginTop: 50,
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  labelButton: {
    fontSize: 14,
  },
  errorMessage:{
    color:"#FF0000"
  }
});

export default LoginForm;
