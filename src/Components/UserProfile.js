import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const UserProfile = ({ photoUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUrl }} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default UserProfile;
