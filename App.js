import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hooking from "./src/scrrens/Hooking";
import LoginForm from "./src/scrrens/LoginForm";
import Randomgenreator from "./src/scrrens/Randomgenreator";
import Student from "./src/scrrens/Student";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeYoutube from "./src/scrrens/Home";
import HomePage from "./src/scrrens/NewPages/HomePage";
import About from "./src/scrrens/NewPages/About";
import Contact from "./src/scrrens/NewPages/Contact";
import Course from "./src/scrrens/NewPages/Course";
import UserData from "./src/scrrens/NewPages/UserData";
import CourseDetails from "./src/scrrens/NewPages/CourseDeatils";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
       
        <Stack.Screen
          name="HomePage"
          options={{ title: "Welcome To Home Page" }}
        >
          {(props) => (
            <HomePage
              {...props}
              channelName={"harish Sheregar youtube channel"}
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen
          name="About"
          options={{ headerTitleStyle:{
            fontSize:25
          } ,headerTitle:"About",headerTitleAlign:"center"}}
          component={About}
        />
        
        <Stack.Screen
          name="Course"
          options={{ headerTitleStyle:{
            fontSize:25
          } ,headerTitle:"Courses",headerTitleAlign:"center"}}
          component={Course}
        />
      
        <Stack.Screen
          name="Contact"
          options={{ headerTitleStyle:{
            fontSize:25
          } ,headerTitle:"Contact",headerTitleAlign:"center"}}
          component={Contact}
        />
      
        <Stack.Screen
          name="UserData"
          options={{ headerTitleStyle:{
            fontSize:25
          } ,headerTitle:"UserData",headerTitleAlign:"center"}}
          component={UserData}
        />

        <Stack.Screen
        name="CourseDetails"
        options={{ headerTitleStyle:{
          fontSize:25
        } ,headerTitle:"CourseDetails",headerTitleAlign:"center"}}
        component={CourseDetails}
      />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
