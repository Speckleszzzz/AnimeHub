import * as React from "react";
import { Appbar } from "react-native-paper";

const AppBar = (props) => (
  <Appbar.Header
    style={{
      backgroundColor: "rgb(245, 245, 245)",
    //   borderBottomColor: "#000",
    //   borderBottomWidth: 1,
      
    }}
  >
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content
      title={""}
      
    />
    {/* <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} /> */}
  </Appbar.Header>
);

export default AppBar;
