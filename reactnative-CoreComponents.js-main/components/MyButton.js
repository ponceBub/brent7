import React from 'react';
import { StyleSheet, Button, View, Alert, Text } from 'react-native';

const MyButton = () => (
  <>
    
    <View style={styles.buttonContainer}>
      {/* Container for Button 1 */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Press Button 1"
          onPress={() => Alert.alert('Button 1 pressed')}
        />
      </View>
      
      {/* Container for Button 2 */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Press Button 2"
          color="#f194ff"
          onPress={() => Alert.alert('Button 2 pressed')}
        />
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 8,
    padding: 16,  
    borderRadius: 10,  
  },
  buttonWrapper: {
    marginBottom: 20,  
    borderWidth: 1,  
    borderColor: '#ddd',  
    borderRadius: 5,  
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MyButton;