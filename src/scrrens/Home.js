import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    Button,
  } from "react-native";

const HomeYoutube = ({route,navigation}) => {
    console.log("route",route.params.myName)
    let name=route.params.myName

    console.log("name",name)
      return (
    <View style={styles.mainDiv}>
       <Text style={styles.text}>Welcome {name}</Text>

       <Button title="Go Back" onPress={()=>navigation.goBack()} />
     </View>
  )
}

const styles=StyleSheet.create({
    text:{
        fontSize:20
    },
    mainDiv:{
        justifyContent:"center",
        alignItems:"center"
    }
})

export default HomeYoutube