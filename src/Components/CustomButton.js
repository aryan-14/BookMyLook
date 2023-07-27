import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';


const CustomButton = ({
  title,
  type,
  onPress,
  containerStyle,
  iconImage,
  rightIcon,
  Iconcolor,
  typeColors,
  disabled,
  titleColor,
  solidColor, 
}) => {
  let buttonStyle = styles.button;
  let titleStyle = styles.title;

  switch (type) {
    case 'outline':
      buttonStyle = [styles.outlineButton, { borderColor: typeColors?.outline || '#2979FF' }];
      titleStyle = styles.outlineTitle;
      break;
    case 'clear':
      buttonStyle = styles.clearButton;
      titleStyle = styles.clearTitle;
      break;
    case 'solid':
      buttonStyle = [
        styles.solidButton,
        { backgroundColor: solidColor || typeColors?.solid || '#2979FF' }, // Use solidColor prop or fallback to typeColors.solid or default color
      ];
      titleStyle = styles.solidTitle;
      break;
    default:
      break;
  }

  if (titleColor) {
    titleStyle = [titleStyle, { color: titleColor }];
  }

  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={[buttonStyle, containerStyle]}
      titleStyle={titleStyle}
      containerStyle={styles.container}
      icon={
        <View style={styles.iconContainer}>
          {iconImage && <Image source={iconImage} style={styles.iconImage} />}
          {rightIcon && <Icon name={rightIcon} color={Iconcolor} />}
        </View>
      }
      disabled={disabled}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  clearButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  solidButton: {
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  outlineTitle: {
    color: '#2979FF',
    fontWeight: 'bold',
  },
  clearTitle: {
    color: '#2979FF',
    fontWeight: 'bold',
  },
  solidTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  iconImage: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
});

export default CustomButton;
