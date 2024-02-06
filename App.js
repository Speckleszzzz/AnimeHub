import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import "./globals.css";
import { TouchableOpacity } from "react-native-web";

export default function App() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  const login = (e) => {
    console.log("logged in");
  };

  return (
    <SafeAreaView style={styles.mainDiv}>
      <View>
        <Image source={"./assets/itachi.png"} style={styles.logo}></Image>
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType="text"
          placeholder="Enter your email..."
        />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter password..."
        keyboardType="text"
      />

      <TouchableOpacity onPress={login} style={styles.button}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "white" }}>Log In </Text>
        </View>
      </TouchableOpacity>
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
    paddingVertical: 10,
    borderColor: "#121212",
    backgroundColor: "#FFFFFF",
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
    marginTop: 30,
    borderRadius: 10,
    paddingVertical: 20,
  },
});
