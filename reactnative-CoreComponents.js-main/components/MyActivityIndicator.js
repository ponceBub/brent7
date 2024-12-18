import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const MyActivityIndicator = ({ size, color, label }) => (
  <View style={styles.indicatorWrapper}>
    <ActivityIndicator size={size} color={color} />
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  indicatorWrapper: {
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center',  // Center items vertically
    justifyContent: 'center', // Center items horizontally
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    margin: 5,
    flex: 1, // Allow it to grow and center properly
  },
  label: {
    marginLeft: 10, // Space between the ActivityIndicator and the label
    fontSize: 14,
    color: '#333',
  },
});

export default MyActivityIndicator;