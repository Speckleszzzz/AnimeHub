import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import FeedbackQuestion from "../components/FeedbackQuestion";

import { SafeAreaProvider } from "react-native-safe-area-context";
import AppBar from "../components/Appbar";

export default class LoginFeedback extends Component {
  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <AppBar title="Anime Preference Survey" />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.heading}>Discover Your Anime Taste</Text>
          <Text style={styles.subheading}>
            Welcome! Let's find the perfect anime genre for you to start with.
          </Text>

          <FeedbackQuestion
            question="1. Do you enjoy stories with supernatural elements or magical powers?"
            options={[
              "Yes, I find them fascinating!",
              "Not particularly",
              "It depends",
            ]}
          />
          <FeedbackQuestion
            question="2. Are you interested in exploring philosophical or thought-provoking themes?"
            options={[
              "Absolutely!",
              "Not really my cup of tea",
              "I'm open to it",
            ]}
          />
          <FeedbackQuestion
            question="3. How do you feel about sports and competition-based storylines?"
            options={[
              "I love them!",
              "They're not my favorite",
              "I don't mind",
            ]}
          />
          <FeedbackQuestion
            question="4. Are you intrigued by stories involving mystery and detective work?"
            options={[
              "Yes, I love a good mystery!",
              "It's not my first choice",
              "I'm indifferent",
            ]}
          />
          <FeedbackQuestion
            question="5. Do you prefer stories with a strong focus on character development?"
            options={[
              "Yes, I love deep characters!",
              "It's not a priority for me",
              "I'm not sure",
            ]}
          />
          <FeedbackQuestion
            question="6. How do you feel about historical or period-based settings?"
            options={[
              "I'm interested in history!",
              "Not really my thing",
              "I'm open to it",
            ]}
          />
          <FeedbackQuestion
            question="7. Are you interested in stories with a dystopian or post-apocalyptic setting?"
            options={[
              "Yes, I find them intriguing!",
              "They're not my favorite",
              "I'm not sure",
            ]}
          />
          <FeedbackQuestion
            question="8. How do you feel about slice-of-life stories depicting everyday life?"
            options={[
              "I enjoy slice-of-life anime!",
              "It's not my preference",
              "I'm open to it",
            ]}
          />
          <FeedbackQuestion
            question="9. Are you interested in exploring anime with a focus on music and idols?"
            options={[
              "Yes, I'm curious!",
              "It's not my first choice",
              "I'm not sure",
            ]}
          />
          <FeedbackQuestion
            question="10. How do you feel about anime with mecha or giant robot themes?"
            options={[
              "I love mecha anime!",
              "It's not my favorite",
              "I'm open to it",
            ]}
          />
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(245,245,245,1)",
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 30,
    gap: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1C6BE7",
  },
  subheading: {
    fontSize: 15,
    fontWeight: "normal",
    marginBottom: 10,
  },
});
