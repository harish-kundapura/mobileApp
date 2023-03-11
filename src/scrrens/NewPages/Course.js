import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CoursesData from "../../api/CourseApi";
import { useNavigation } from "@react-navigation/native";
import CourseDetails from "./CourseDeatils";

const Course = () => {
    const navigation=useNavigation()
  return (
    <View>
      <Text style={styles.Courses}>Courses Offered</Text>

      <View style={styles.mainContainer}>
        <FlatList
          data={CoursesData}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.courseContainer}>
                <View style={styles.courseImageContanier}>
                  <Image
                    style={styles.courseImage}
                    source={{ uri: `${item.image}` }}
                  />
                </View>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.descriptionText}>{item.description}</Text>
                <TouchableOpacity style={styles.buttonCourse} onPress={()=>navigation.navigate("CourseDetails",{courseId:item.id})}>
                  <Text style={styles.buttonText}>Course Details</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(key) => key.id}
        ></FlatList>
      </View>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  courseContainer: {
    borderColor: "#808080",
    width: 250,
    height: 380,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    margin: 30,
    shadowColor: "#808080",
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 4.5,
    shadowRadius: 10,
    borderRadius: 15,
    paddingBottom: 20,
  },
  courseImageContanier: {
    justifyContent: "center",
    alignItems: "center",
  },
  courseImage: {
    width: 250,
    height: 200,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCourse: {
    backgroundColor: "#809fff",
    width: 180,
    height:35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderRadius:10
  },
  buttonText: {
    fontSize: 20,
    color:"#fff"
  },
  descriptionText: {
    textAlign: "center",
  },
  Courses: {
    textAlign: "center",
    fontSize: 35,
    marginTop: 10,
  },
  titleText: {
    fontSize: 25,
  },
});
