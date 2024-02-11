import * as React from "react";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";

export default function AppBar({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (title == "Login" || title == "Register") ? null : (
    <Appbar.Header
      style={{
        backgroundColor: "#23223C",
        // borderBottomColor: "#000",
        // borderBottomWidth: 1,
      }}
    >
      <Appbar.BackAction onPress={() => navigation.goBack()} color="#fff" />
      <Appbar.Content title={title} color="#fff" titleStyle={{}}/>
      
    </Appbar.Header>
  ) ;
}
