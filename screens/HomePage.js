import React from "react";
import Post from "../screens/Post"; // Assuming the Post component is in a separate file
import { View } from "react-native";

const HomePage = () => {
  // Dummy data for demonstration
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
    <View>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </View>
  );
};

export default HomePage;
