import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  container: {},
});
