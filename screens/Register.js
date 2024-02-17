import React, { useState } from "react";
import { supabase } from "../lib/supabase";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.mainDiv}>
      <View>
        <Image source={require("../assets/itachi.png")} style={styles.logo} />
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-evenly",
          gap: 20,
        }}
      >
        <View>
          <Text style={{ color: "white" }}>Email</Text>
          <TextInput
            placeholderTextColor={"#9A98BF"}
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="abc@gmail.com"
            selectionColor={"white"}
          />
        </View>
        <View>
          <Text style={{ color: "white" }}>Username</Text>
          <TextInput
            placeholderTextColor={"#9A98BF"}
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="anyachan@74"
            selectionColor={"white"}
          />
        </View>
        <View style={{ position: "relative" }}>
          <Text style={{ color: "white" }}>Password</Text>
          <TextInput
            placeholderTextColor={"#9A98BF"}
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="......."
            secureTextEntry={true}
          />
          <View style={{ height: 25 }}></View>
          <Text
            style={{
              fontSize: 12,
              color: "white",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
            Forgot Password ?
          </Text>
        </View>
      </View>

      <Pressable
        onPress={signUpWithEmail}
        style={styles.button}
        disabled={loading}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "white" }}>Sign Up </Text>
        </View>
      </Pressable>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#9A98BF" }}>Already have an account </Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "white" }}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    color: "white",
    marginTop: 10,
    width: 300,
    borderRadius: 7,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#6E4FC8",
  },

  mainDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#23223C",
  },

  logo: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    marginBottom: 50,
  },

  button: {
    backgroundColor: "#6E4FC8",
    width: "70%",
    borderRadius: 10,
    paddingVertical: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});
