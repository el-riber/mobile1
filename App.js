import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Study Focus</Text>
      </View>

      {/* Image Display */}
      <Image 
        source={{ uri: 'https://emeritus.org/in/wp-content/uploads/sites/3/2023/03/types-of-machine-learning.jpg.optimal.jpg' }} 
        style={styles.profileImage} 
      />

      {/* Information Section */}
<ScrollView style={styles.infoSection}>
    <Text style={styles.infoText}>
        Machine learning is a branch of artificial intelligence that automates analytical model building.
    </Text>
    <Text style={styles.infoText}>
        It uses methods from neural networks, statistics, operations research, and physics to find hidden insights in data without explicitly being programmed for where to look or what to conclude.
    </Text>
    <Text style={styles.infoText}>
        A major focus within machine learning is to automatically learn complex patterns and make intelligent decisions based on data.
    </Text>
    <Text style={styles.infoText}>
        Common applications of machine learning include recommendations systems, self-driving cars, facial recognition, and many forms of automation.
    </Text>
</ScrollView>

      {/* Input Form */}
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Enter your name" />
        <TextInput style={styles.input} placeholder="Leave a comment" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  infoSection: {
    margin: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  form: {
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  }
});
