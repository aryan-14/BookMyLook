import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ImageComponent = ({ source, style }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={[styles.image, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default ImageComponent;
