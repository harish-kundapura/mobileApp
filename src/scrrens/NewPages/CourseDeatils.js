import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CoursesData from "../../api/CourseApi";

const CourseDetails = ({ navigation, route }) => {
  const id = route.params.courseId;
  console.log("id", id);

  const filteringParticularCourses = CoursesData.find((item) => item.id === id);
  console.log("filteringParticularCourses", filteringParticularCourses.course1);

  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View style={styles.courseImageContanier}>
            <Image
              style={styles.courseImage}
              source={{ uri: `${filteringParticularCourses.image}` }}
            />
          </View>
          <Text style={styles.titleText}>
            {filteringParticularCourses.title}
          </Text>
          <Text style={styles.descriptionText}>
            {filteringParticularCourses.description}
          </Text>

          <Text style={styles.courseText}>
            {filteringParticularCourses.course1}
          </Text>
          <Text style={styles.courseText}>
            {filteringParticularCourses.course2}
          </Text>
          <Text style={styles.courseText}>
            {filteringParticularCourses.course3}
          </Text>
          <View style={styles.priceButton}>
            <View style={styles.priceBut}>
              <Text style={styles.buttonText}>
                {filteringParticularCourses.price}
              </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.buttonCourse}>
                <Text
                  style={styles.buttonText}
                  onPress={() => navigation.navigate("Course")}
                >
                  Join Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  courseContainer: {
    borderColor: "#808080",
    width: 250,
    height: 480,
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
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
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
  courseText: {
    fontSize: 20,
    marginBottom: 2,
  },
  priceButton: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: 230,
  },
  priceBut: {
    backgroundColor: "#000",
    color: "#fff",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
