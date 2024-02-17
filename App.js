import React, { useState, useEffect } from "react";
import Login from "./screens/Login";
import AppBar from "./components/Appbar";
import Register from "./screens/Register";
import LoginFeedback from "./screens/LoginFeedback";
import HomeScreen from "./screens/HomeScreen";
import FeedPage from "./screens/FeedPage";
import UploadPostPage from "./screens/UploadPostPage";
import AnimeExperienceScreen from "./screens/AnimeExperienceScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-url-polyfill/auto";
import { supabase } from "./lib/supabase";
import { Session } from "@supabase/supabase-js";

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
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
          header: (props) => <AppBar {...props} />,
        }}
      >
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="More about you" component={LoginFeedback} />
        <Stack.Screen name="Weeb Level" component={AnimeExperienceScreen} />
        <Stack.Screen name="UploadPage" component={UploadPostPage} />
        <Stack.Screen name="FeedPage" component={FeedPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
