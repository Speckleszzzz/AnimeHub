import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const ProfileHeader = ({
  profileImageUri,
  profileName,
  profileBio,
  numPosts,
  numFollowers,
  numFollowing,
}) => (
  <View style={styles.profileHeader}>
    <Image source={{ uri: profileImageUri }} style={styles.profileImage} />
    <Text style={styles.profileName}>{profileName}</Text>
    <Text style={styles.profileBio}>{profileBio}</Text>
    <View style={styles.profileStats}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{numPosts}</Text>
        <Text style={styles.statText}>Posts</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{numFollowers}</Text>
        <Text style={styles.statText}>Followers</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{numFollowing}</Text>
        <Text style={styles.statText}>Following</Text>
      </View>
    </View>
    <TouchableOpacity
      onPress={() => console.log("clicked")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>...</Text>
    </TouchableOpacity>
  </View>
);

const ProfilePhoto = ({ photoUri }) => (
  <Image source={{ uri: photoUri }} style={styles.photo} />
);

const ProfilePage = () => {
  // Mock data
  const profileData = {
    profileImageUri: "https://via.placeholder.com/150",
    profileName: "Speckles",
    profileBio:
      "I watch anime and hentai yes.. u going to judge me ?? tf u nub",
    numPosts: 100,
    numFollowers: 1000,
    numFollowing: 500,
  };

  const photos = [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
  ];

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader {...profileData} />
      <View style={styles.photosContainer}>
        {photos.map((photoUri, index) => (
          <ProfilePhoto key={index} photoUri={photoUri} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileHeader: {
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileBio: {
    marginTop: 5,
    textAlign: "center",
  },
  profileStats: {
    flexDirection: "row",
    marginTop: 10,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontWeight: "bold",
  },
  statText: {
    color: "#777",
  },
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 5,
  },
  photo: {
    width: "32%",
    aspectRatio: 1,
    marginBottom: 5,
  },
  button: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "transparent",
    padding: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#000",
  },
});

export default ProfilePage;
