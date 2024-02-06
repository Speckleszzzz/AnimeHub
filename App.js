import { StatusBar } from "expo-status-bar";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Sae, Makiko, Hoshi } from "react-native-textinput-effects";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import "./globals.css";

export default function App() {
  WebBrowser.maybeCompleteAuthSession();
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [userInfo, setUserInfo] = useState(null);

  const login = (e) => {
    console.log("logged in");
  };

  const config = {
    androidClientId:
      "707825525864-d58p1o45a6hagqu4f82hg0ojo1dtbm64.apps.googleusercontent.com",
    webClientId:
      "707825525864-vba1qagigrt7be56h4rmprughbmude2r.apps.googleusercontent.com",
  };

  const getUserInfo = async (token) => {
    //absent token
    if (!token) return;
    //present token
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      //store user information  in Asyncstorage
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.error(
        "Failed to fetch user data:",
        response.status,
        response.statusText
      );
    }
  };

  const signInWithGoogle = async () => {
    try {
      // Attempt to retrieve user information from AsyncStorage
      const userJSON = await AsyncStorage.getItem("user");

      if (userJSON) {
        // If user information is found in AsyncStorage, parse it and set it in the state
        setUserInfo(JSON.parse(userJSON));
      } else if (response?.type === "success") {
        // If no user information is found and the response type is "success" (assuming response is defined),
        // call getUserInfo with the access token from the response
        getUserInfo(response.authentication.accessToken);
      }
    } catch (error) {
      // Handle any errors that occur during AsyncStorage retrieval or other operations
      console.error("Error retrieving user data from AsyncStorage:", error);
    }
  };

  //add it to a useEffect with response as a dependency
  useEffect(() => {
    signInWithGoogle();
  }, [response]);

  //log the userInfo to see user details
  console.log(JSON.stringify(userInfo));

  const [request, response, promptAsync] = Google.useAuthRequest(config);

  return (
    <SafeAreaView style={styles.mainDiv}>
      <View>
        <Image source={"./assets/itachi.png"} style={styles.logo}></Image>
      </View>
      <View>
        <Text style={{ marginLeft: 15 }}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType="text"
          placeholder="anyachan@74"
          selectionColor={"white"}
        />
      </View>

      <View style={{ height: 10 }}></View>

      <View>
        <Text style={{ marginLeft: 15 }}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType="text"
          placeholder="......."
        />
        <Text style={{ marginLeft: 15, fontSize: 12 }}>Forgot Password ?</Text>
      </View>

      <TextInput />
      <Pressable onPress={login} style={styles.button}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "white" }}>Log In </Text>
        </View>
      </Pressable>

      <Pressable
        onPress={() => {
          promptAsync();
        }}
        style={styles.button}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "white" }}>Google </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    width: 300,
    borderRadius: 7,
    paddingHorizontal: 20,
    borderWidth: 0.3,

    borderColor: "#ffffff",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

  mainDiv: {
    flex: "1",

    alignItems: "center",
    backgroundColor: "#DEDEDE",
  },

  logo: {
    height: 500,
    width: 200,
    resizeMode: "contain",
  },

  button: {
    backgroundColor: "#121212",
    width: "70%",

    borderRadius: 10,
    paddingVertical: 20,
  },
});
