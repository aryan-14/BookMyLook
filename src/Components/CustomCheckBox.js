import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';
import { Text, StyleSheet } from 'react-native';

const CustomCheckBox = ({ label, onCheckboxChange }) => {
  const [checked, setChecked] = useState(false);

  const handleLabelPress = () => {
    // Handle the onPress event for the label here
    console.log('Label Pressed');
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onCheckboxChange(!checked);
  };

  return (
    <CheckBox
      center
      title={
        <Text style={styles.label}>
          By Processing Further you agree to{' '}
          <Text style={styles.link} onPress={handleLabelPress}>
            Terms of service
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={handleLabelPress}>
            Privacy Policy
          </Text>
        </Text>
      }
      checked={checked}
      onPress={handleCheckboxChange}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default CustomCheckBox;
