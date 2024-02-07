import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class LoginFeedback extends Component {
    render() {
        return (
          <View style={styles.container}>
            
    
            <View>
                <Text>What genere of anime do you like to watch</Text>
              <View style={styles.checkboxContainer}>
                <CheckBox />
                <Text style={styles.checkboxText}>Action</Text>
              </View>
              
              <View style={styles.checkboxContainer}>
                <CheckBox />
                <Text style={styles.checkboxText}>Romance</Text>
              </View>
              
              <View style={styles.checkboxContainer}>
                <CheckBox />
                <Text style={styles.checkboxText}>Comedy</Text>
              </View>
              
              <View style={styles.checkboxContainer}>
                <CheckBox />
                <Text style={styles.checkboxText}>Thriller</Text>
              </View>
            </View>
    
            <View>
                <Text>What genere of anime do you like to watch</Text>
              <View style={styles.checkboxContainer}>
                <CheckBox />
                <Text style={styles.checkboxText}>Action</Text>
              </View>
              
              <View style={styles.checkboxContainer}>
                <CheckBox />
                <Text style={styles.checkboxText}>Romance</Text>
              </View>
              
              <View style={styles.checkboxContainer}>
                <CheckBox />
                <Text style={styles.checkboxText}>Comedy</Text>
              </View>
              
              <View style={styles.checkboxContainer}>
                <CheckBox />
                <Text style={styles.checkboxText}>Thriller</Text>
              </View>
            </View>
          </View>
        );
      }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxText: {
        marginLeft: 8,
    },
});
      
