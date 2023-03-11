import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const About = () => {
  return (
    <View>
      <View style={styles.aboutMain}>
        <Text style={styles.profileText}>Harish Sheregar</Text>
        <Text style={styles.profileText}>
          I am Harish Working as a Full Stack Developer
        </Text>
        <Image
          style={styles.imageMain}
          source={{
            uri: "https://scontent.fblr4-3.fna.fbcdn.net/v/t39.30808-6/311016682_2022001817995334_5996226376265599278_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Sneze031ztAAX-lG34o&_nc_ht=scontent.fblr4-3.fna&oh=00_AfCFaQM6yKIaTwK6OqHK5vDePcpkzOboNfpuoe17ZNm5xA&oe=6410D881",
          }}
        />
      </View>
      <View style={styles.descriptionMain}>
        <Text style={styles.aboutMeText}>ABOUT ME</Text>
        <Text style={styles.descriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </View>
      <View>
        <Text style={styles.iconText}>FOLLOW ME ON SOCIAL NETWORK</Text>
        <View style={styles.iconImageSocial}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/harishsheregar/")}>
          <Image
            source={{
              uri: "https://cdn.mos.cms.futurecdn.net/uE49BtPU4iDJAoHFEHn8m7.jpg",
            }}
            style={styles.iconImage}
          /></TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://www.youtube.com/")}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
            }}
            style={styles.iconImage}
          /></TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://www.facebook.com/")}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png",
            }}
            style={styles.iconImage}
          /></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  descriptionMain: {
    backgroundColor: "#4c00b0",
  },
  descriptionText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 30,
  },
  imageMain: {
    width: 300,
    height: 300,
    marginTop: 30,
    borderRadius: 10,
  },
  aboutMain: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  aboutMeText: {
    textAlign: "center",
    color: "#fff",
  },
  profileText: {
    fontSize: 20,
    textAlign: "center",
  },
  iconImage:{
    width:50,
    height:50
  },
  iconImageSocial:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:20
  },iconText:{
    textAlign:"center",
    marginTop:5
  }
});
