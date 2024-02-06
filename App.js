
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

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
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  const login = (e) => {
    console.log("logged in");
  };

  const config = {
    androidClientId:
      "707825525864-d58p1o45a6hagqu4f82hg0ojo1dtbm64.apps.googleusercontent.com",
    webClientId:
      "707825525864-vba1qagigrt7be56h4rmprughbmude2r.apps.googleusercontent.com",
  };


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
