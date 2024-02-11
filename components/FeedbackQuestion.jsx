import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { CheckBox, Icon } from "react-native-elements";

const FeedbackQuestion = (props) => {
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleOptionPress = (index) => {
    setCheckedIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{props.question}</Text>
      <View style={styles.optionsDiv}>
        {props.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              checkedIndex === index && styles.optionSelected,
            ]}
            onPress={() => handleOptionPress(index)}
          >
            <CheckBox
              checked={checkedIndex === index}
              checkedIcon={
                <Icon
                  type="material-community"
                  name="square-rounded"
                  size={24}
                  color="#fff" // Change color as needed
                />
              }
              // Change color as needed
              onPress={() => handleOptionPress(index)}
            />
            <Text
              style={[
                styles.optionText,
                checkedIndex === index && styles.optionTextSelected,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  option: {
    flexDirection: "row",
    borderColor: "#6E4FC8",
    borderWidth: 0.4,
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 5,
  },

  optionSelected: {
    backgroundColor: "#6E4FC8",
    color: "white",
  },

  optionsDiv: {
    marginTop: 8,
  },

  mainText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#fff",
  },

  optionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9A98BF",
  },

  optionTextSelected: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default FeedbackQuestion;
