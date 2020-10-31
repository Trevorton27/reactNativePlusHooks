import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>CatBear 9000</Text>
      <Button
        title='Go To Components Demo'
        onPress={() => console.log('You done pressed me.')}
      />
      <TouchableOpacity
        onPress={() => console.log('You done pressed the list button.')}
      >
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginHorizontal: 100
  }
});

export default HomeScreen;
