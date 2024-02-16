import React from "react";
import { View, StyleSheet } from "react-native";
import PostComponent from "../components/PostComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const FeedPage = () => {
  const posts = [
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/NB3yk47eYP5qBjtrelhONpUWM9aRTj9req99aqx8Y3xFgUtDnGTkUwTKavLzpyjyHt_kTRVcm7NAM3ZM_GQer1AzUdRnf2X7s5ffasuOIGgyo5PH4sk4bRdllMhT69orssC1XILPoN0esuyPptBb780",
      caption: "Beautiful sunset!",
      user: "user123",
    },
    {
      id: 2,
      image:
        "https://wallpapers.com/images/hd/luffy-1920-x-1920-picture-ee9gghzfh6x5rq4k.jpg",
      caption: "Lovely beach day!",
      user: "user456",
    },
    {
      id: 3,
      image:
        "https://wallpapers.com/images/hd/luffy-1920-x-1920-picture-ee9gghzfh6x5rq4k.jpg",
      caption: "Lovely beach day!",
      user: "user",
    },
  ];

  return (
    <SafeAreaProvider styles={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default FeedPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
    gap: 20,
  },
});
