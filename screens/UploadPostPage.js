import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const UploadPostPage = () => {
  const [session, setSession] = useState(null);
  const [formData, setFormData] = useState({
    username: "akash",
    caption: "",
    image: null,
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleUpload = async () => {
    const { title, content, image } = formData;
    if (title === "" || content === "" || image === null) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    const newPost = { ...formData };

    try {
      const { data, error } = await supabase
        .from("PostTable")
        .insert([newPost]);

      if (error) {
        console.error("Error inserting post:", error);
      } else {
        console.log("Post inserted successfully:", data);

        setFormData({
          caption: "",
          image: null,
        });
      }
    } catch (error) {
      console.error("Error inserting post:", error);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Square aspect ratio
      quality: 1,
    });

    console.log("Image Picker Result:", result);

    if (!result.cancelled) {
      setFormData({ ...formData, image: result.assets[0].uri });
    }
  };

  const { title, content, image } = formData;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Posting Page</Text>
      <Text style={styles.subHeading}>Cover</Text>
      <TouchableOpacity style={styles.imageUploadButton} onPress={pickImage}>
        <Text style={styles.uploadText}>Upload Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      
      <Text style={styles.subHeading}>Caption</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your content here..."
        value={content}
        onChangeText={handleInputChange}
      />

      <TouchableOpacity style={styles.postButton} onPress={handleUpload}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginBottom: 20,
    minHeight: 40,
  },
  imageUploadButton: {
    backgroundColor: "lightgray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 5,
  },
  postButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  postButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default UploadPostPage;
