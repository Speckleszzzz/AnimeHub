import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppBar from "../components/Appbar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Icon } from "react-native-elements";

const AnimeExperienceScreen = () => {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.question}>
          How experienced are you with watching anime?
        </Text>
        <View style={{ height: 10 }}></View>
        
        <TouchableOpacity style={styles.section}>
          <View style={styles.innerSection}>
            <Text style={styles.sectionText}>Basic</Text>
            <Icon
              type="font-awesome"
              name="angle-right"
              size={24}
              color="#000"
            />
          </View>
          <Text style={styles.sectionDescription}>
            New to anime? Start here to explore popular series and genres!
          </Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.section}>
          <View style={styles.innerSection}>
            <Text style={styles.sectionText}>Intermediate</Text>
            <Icon
              type="font-awesome"
              name="angle-right"
              size={24}
              color="#000"
            />
          </View>
          <Text style={styles.sectionDescription}>
            Ready for more depth? Dive into complex plots and character
            development.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section}>
          <View style={styles.innerSection}>
            <Text style={styles.sectionText}>Advanced</Text>
            <Icon
              type="font-awesome"
              name="angle-right"
              size={24}
              color="#000"
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
    backgroundColor: "#fff",
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
    backgroundColor: "#fff",
    borderColor: "#8888E7",
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1C6BE7",
  },
  sectionDescription: {
    fontSize: 16,
    color: "#000",
  },
  question: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1C6BE7",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default AnimeExperienceScreen;
