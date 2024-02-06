import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log("logged in");
  };

  return (
    <SafeAreaView style={styles.mainDiv}>
      <View>
        <Image source={require("./assets/itachi.png")} style={styles.logo} />
      </View>
      <View>
        <Text style={{ marginLeft: 15 }}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="anyachan@74"
          selectionColor={"white"}
        />
      </View>

      <View style={{ height: 10 }} />

      <View>
        <Text style={{ marginLeft: 15 }}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="......."
          secureTextEntry={true}
        />
        <Text style={{ marginLeft: 15, fontSize: 12 }}>Forgot Password ?</Text>
      </View>

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
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#DEDEDE",
  },

  logo: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },

  button: {
    backgroundColor: "#121212",
    width: "70%",
    borderRadius: 10,
    paddingVertical: 20,
    marginTop: 20,
  },
});
