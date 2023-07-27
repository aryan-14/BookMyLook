import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, parameters } from '../Global/Styles';

const Header = ({ title, name, onPress }) => {
  return (
    <View style={styles.header}>

      <View style={styles.leftContainer}>
        <Icon
          style={styles.arrowLeft}
          name={name}
          color={colors.arrowleft}
          size={36}
          onPress={onPress} // Use the onPress prop here
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.Header,
    flexDirection: 'row',
    height: parameters.headerheight,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },

  leftContainer: {
    marginRight: 10,
  },

  titleContainer: {
    flex: 1,
    paddingLeft: 40,
  },

  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Header;
