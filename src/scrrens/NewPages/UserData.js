import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";


import axios from "axios";

const UserData = () => {
    const [studentdata, setStudentData] = useState([]);

    const gettingStudentData = async () => {
      try {
        const res = await axios.get(
          "https://thapatechnical.github.io/userapi/users.json"
        );
        if (res) {
          setStudentData(res.data);
        } else {
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      gettingStudentData();
    }, []);
  
  //   console.log("studentdata",studentdata)
  
    
  
    return (
      <View style={styles.mainConatainer}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>List of Students</Text>
        </View>
        <FlatList
          data={studentdata}
          keyExtractor={(item) => item.id}
        
   
          renderItem={({ item }) => {
  
              console.log("imag",item?.image)
             
            return (
              <View style={styles.displayContainer}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri:item.image}} resizeMode="cover" style={styles.image} />
                  
                </View>
  
                <View style={styles.textMain}>
                  <Text>{item?.userId}</Text>
                  <Text>{item?.name}</Text>
                  <Text>{item?.email}</Text>
                  <Text>{item?.mobile}</Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    );}
export default UserData

const styles = StyleSheet.create({
    heading: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
    },
    headingText: {
      fontSize: 30,
      color: "#fff",
    },
    imageContainer: {
      borderColor: "#000000",
      justifyContent: "center",
      alignItems: "center",
      width:100
    },
    image:{
      width:200,
      height:200
    },
    displayContainer:{
      justifyContent: "center",
      alignItems: "center",
      marginTop:50
      
    },
    textMain:{
      justifyContent: "center",
      alignItems: "center",
      marginTop:10
    }
  });