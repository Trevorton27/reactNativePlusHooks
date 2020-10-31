import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const friends = [
  { name: 'Friend #1', age: 632 },
  { name: 'Friend #2', age: 900 },
  { name: 'Friend #3', age: 900 },
  { name: 'Friend #4', age: 900 },
  { name: 'Friend #6', age: 900 },
  { name: 'Friend #7', age: 900 },
  { name: 'Friend #8', age: 900 },
  { name: 'Friend #9', age: 900 },
  { name: 'Friend #10', age: 900 },
  { name: 'Friend #11', age: 900 },
  { name: 'Friend #12', age: 900 },
  { name: 'Friend #13', age: 900 },
  { name: 'Friend #14', age: 900 }
];

const ListScreen = () => {
  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => {
        friend.name;
      }}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 25
  }
});

export default ListScreen;
