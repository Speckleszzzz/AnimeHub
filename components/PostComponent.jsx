import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PostComponent = ({ post }) => {
  const navigation = useNavigation();
  const [eyeCount, setEyeCount] = useState(0);
  const [isEyeClicked, setIsEyeClicked] = useState(false);
  const [thumbsUpCount, setThumbsUpCount] = useState(0);

  const handleSymbolClick = () => {
    if (!isEyeClicked) {
      setEyeCount(eyeCount + 1);
      setIsEyeClicked(true);
    }
    navigation.navigate("PostDetails", {
      image: post.image,
      user: post.user,
      caption: post.caption,
    });
  };

  const handleThumbsUpClick = () => {
    setThumbsUpCount(thumbsUpCount === 0 ? 1 : 0);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.user}</Text>
        </View>
        <Image source={{ uri: post.image }} style={styles.image} />
        <Text style={styles.caption}>{post.caption}</Text>
        <View style={styles.actionContainer}>
          <View style={styles.eyeContainer}>
            <TouchableOpacity onPress={handleSymbolClick}>
              <Text style={styles.eyeSymbol}>👁️</Text>
            </TouchableOpacity>
            <Text style={styles.eyeCount}>{eyeCount}</Text>
          </View>
          <TouchableOpacity
            onPress={handleSymbolClick}
            style={styles.clickableSymbol}
          >
            <Text>Clickable Symbol</Text>
          </TouchableOpacity>
          <View style={styles.thumbsUpContainer}>
            <TouchableOpacity onPress={handleThumbsUpClick}>
              <Text style={styles.thumbsUpSymbol}>
                {thumbsUpCount === 1 ? "👍" : "👍"}
              </Text>
            </TouchableOpacity>
            <Text style={styles.thumbsUpCount}>{thumbsUpCount}</Text>
          </View>
        </View>
        <TextInput
          style={styles.commentInput}
          placeholder="Previous comment..."
          value={post.comment} // Assuming post object has a comment property
          editable={false} // Make the input field readonly
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
    position: "relative",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 5,
  },
  caption: {
    fontSize: 16,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  eyeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeSymbol: {
    fontSize: 20,
    marginRight: 5,
  },
  eyeCount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  thumbsUpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  thumbsUpSymbol: {
    fontSize: 20,
    marginRight: 5,
  },
  thumbsUpCount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  commentInput: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  clickableSymbol: {
    alignItems: "center",
  },
});

export default PostComponent;
