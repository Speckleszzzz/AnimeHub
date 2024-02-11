import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import FeedbackQuestion from "../components/FeedbackQuestion";

import { SafeAreaProvider } from "react-native-safe-area-context";
import AppBar from "../components/Appbar";

export default class LoginFeedback extends Component {
  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.heading}>Discover Your Anime Taste</Text>
          <Text style={styles.subheading}>
            Welcome! Let's find the perfect anime genre for you to start with.
          </Text>

          <View>
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

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 20,
                marginBottom: 30,
              }}
            >
              <Pressable
                style={styles.backbutton}
                onPress={() => navigation.navigate("AnimeExperienceScreen")}
              >
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Text style={{ color: "white" }}>Back</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.nextbutton}
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Text style={{ color: "white" }}>Next </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#23223C",
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
    gap: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  subheading: {
    fontSize: 15,
    fontWeight: "normal",
    marginBottom: 10,
    color: "#9A98BF",
  },

  nextbutton: {
    backgroundColor: "#6E4FC8",
    width: "45%",
    borderRadius: 5,
    paddingVertical: 14,
  },

  backbutton: {
    width: "45%",
    borderColor: "#6E4FC8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 14,
  },
});
