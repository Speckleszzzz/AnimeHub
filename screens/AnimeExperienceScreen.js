import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppBar from "../components/Appbar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Icon } from "react-native-elements";

const AnimeExperienceScreen = ({ navigation }) => {
  const [tappedIndex, setTappedIndex] = useState(0);

  const goToFeedback = (index) => {
    setTappedIndex(index);
    setTimeout(() => {
      navigation.navigate("More about you");
    }, 0);
  };

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.question}>
          How experienced are you with watching anime?
        </Text>
        <View style={{ height: 10 }}></View>

        <TouchableOpacity
          style={[styles.section, tappedIndex === 1 && styles.sectionTapped]}
          onPress={() => goToFeedback(1)}
        >
          <View style={styles.innerSection}>
            <Text style={styles.sectionText}>Basic</Text>
            <Icon
              type="font-awesome"
              name={`${tappedIndex != 1 ? "angle-right" : "spinner"}`}
              size={24}
              color="#fff"
            />
          </View>
          <Text style={styles.sectionDescription}>
            New to anime? Start here to explore popular series and genres!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.section, tappedIndex === 2 && styles.sectionTapped]}
          onPress={() => goToFeedback(2)}
        >
          <View style={styles.innerSection}>
            <Text style={styles.sectionText}>Intermediate</Text>
            <Icon
              type="font-awesome"
              name={`${tappedIndex != 2 ? "angle-right" : "spinner"}`}
              size={24}
              color="#fff"
            />
          </View>
          <Text style={styles.sectionDescription}>
            Ready for more depth? Dive into complex plots and character
            development.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.section, tappedIndex === 3 && styles.sectionTapped]}
          onPress={() => goToFeedback(3)}
        >
          <View style={styles.innerSection}>
            <Text style={styles.sectionText}>Advanced</Text>
            <Icon
              type="font-awesome"
              name={`${tappedIndex != 3 ? "angle-right" : "spinner"}`}
              size={24}
              color="#fff"
            />
          </View>
          <Text style={styles.sectionDescription}>
            Seasoned viewer? Challenge yourself with obscure titles and
            avant-garde works.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#23223C",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  innerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  section: {
    width: "100%",
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    height: 150,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#6E4FC8",
  },

  sectionTapped: {
    backgroundColor: "#6E4FC8",
    color: "white",
    transitionProperty: "background-color",
    transitionDuration: "0.5s",
  },

  sectionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  sectionDescription: {
    fontSize: 16,
    color: "#9A98BF",
  },
  question: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default AnimeExperienceScreen;
