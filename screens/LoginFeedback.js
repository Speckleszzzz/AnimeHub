import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import FeedbackQuestion from "../components/FeedbackQuestion";

import { SafeAreaProvider } from "react-native-safe-area-context";
import AppBar from "../components/Appbar";

export default class LoginFeedback extends Component {
  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <AppBar title="Feedback" />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.heading}>Getting to know you</Text>
          <Text style={styles.subheading}>
            This anime survey will help us to understand your taste in anime and
            recommend you the best anime for you.
          </Text>

          <FeedbackQuestion
            question="1) What genre of anime do you like to watch"
            options={["Action", "Romance", "Comedy", "Thriller"]}
          />
          <FeedbackQuestion
            question="1) What genre of anime do you like to watch"
            options={["Action", "Romance", "Comedy", "Thriller"]}
          />
          <FeedbackQuestion
            question="1) What genre of anime do you like to watch"
            options={["Action", "Romance", "Comedy", "Thriller"]}
          />
          <FeedbackQuestion
            question="1) What genre of anime do you like to watch"
            options={["Action", "Romance", "Comedy", "Thriller"]}
          />
          <FeedbackQuestion
            question="1) What genre of anime do you like to watch"
            options={["Action", "Romance", "Comedy", "Thriller"]}
          />
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6FA",
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 40,
    paddingHorizontal: 40,
    gap: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 15,
    fontWeight: "normal",
    marginBottom: 10,
  },
});
