import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const MyFlatList = () => {
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%', // Full width for the FlatList
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
  },
});

export default MyFlatList; 