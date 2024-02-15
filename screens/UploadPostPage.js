import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  StyleSheet,
  Picker,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const UploadPostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [genre, setGenre] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([
    "Solo Leveling",
    "Naruto",
    "One Piece",
    "Sword Art Online",
    "Boruto",
    "Death Note",
    "Jujustu",
  ]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Square aspect ratio
      quality: 1,
    });

    console.log("Image Picker Result:", result);

    if (!result.cancelled && result.assets.length > 0) {
      // Access the URI from the first asset in the array
      setImage(result.assets[0].uri);
    }
  };

  const handleGenreChange = (text) => {
    setGenre(text);

    if (text === "") {
      // If the input is empty, reset the filtered options
      setFilteredOptions([
        "Solo Leveling",
        "Naruto",
        "One Piece",
        "Sword Art Online",
        "Boruto",
        "Death Note",
      ]);
      setShowDropdown(false); // Hide the dropdown
    } else {
      // Filter options based on user input
      const filtered = filteredOptions.filter((option) =>
        option.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowDropdown(true); // Show the dropdown
    }
  };

  const handlePost = () => {
    if (title === "" || content === "" || image === null || genre === "") {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    // Implement your logic for posting the content here
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Image:", image);
    console.log("Genre:", genre);

    // Reset fields after posting
    setTitle("");
    setContent("");
    setImage(null);
    setGenre("");
    setShowDropdown(false);

    // Display a success message to the user
    Alert.alert("Success", "Your content has been posted successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Posting Page</Text>
      <Text style={styles.subHeading}>Cover</Text>
      <TouchableOpacity style={styles.imageUploadButton} onPress={pickImage}>
        <Text style={styles.uploadText}>Upload Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      <Text style={styles.subHeading}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your title..."
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.subHeading}>Content</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your content here..."
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Text style={styles.subHeading}>Genre</Text>
      <TextInput
        style={styles.input}
        placeholder="Type to show dropdown"
        value={genre}
        onChangeText={handleGenreChange}
      />
      {showDropdown && (
        <Picker
          selectedValue={genre}
          onValueChange={(itemValue) => setGenre(itemValue)}
          style={styles.picker}
        >
          {filteredOptions.map((option) => (
            <Picker.Item
              key={option}
              label={option}
              value={option.toLowerCase().replace(" ", "_")}
            />
          ))}
        </Picker>
      )}
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
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
    borderRadius: 5, // Add border radius for a square shape
  },
  picker: {
    height: 40,
    marginBottom: 20,
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
