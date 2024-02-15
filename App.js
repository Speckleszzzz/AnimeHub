import React, { useState } from "react";
import Login from "./screens/Login";
import AppBar from "./components/Appbar";
import Register from "./screens/Register";
import LoginFeedback from "./screens/LoginFeedback";
import HomeScreen from "./screens/HomeScreen";
import UploadPostPage from "./screens/UploadPostPage";
import AnimeExperienceScreen from "./screens/AnimeExperienceScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UploadPage"
        screenOptions={{
          header: (props) => <AppBar {...props} />,
        }}
      >
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="More about you" component={LoginFeedback} />
        <Stack.Screen name="Weeb Level" component={AnimeExperienceScreen} />
        <Stack.Screen name="UploadPage" component={UploadPostPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
