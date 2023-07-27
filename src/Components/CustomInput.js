import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useForm, Controller } from 'react-hook-form';

const CustomInput = ({ leftIconName, rightIconName, placeholder, secureEntry, validateEmail, validatePassword }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(secureEntry);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
    setError('');
  };

  const handleBlur = () => {
    setIsFocused(false);
    validateInput();
  };

  const handleRightIconPress = () => {
    setIsSecureEntry(!isSecureEntry);
  };

  const handleChangeText = (text) => {
    setValue(text);
    setError('');
  };

  const validateInput = () => {
    if (value === '') {
      setError('This field is required');
    } else if (placeholder === 'Email' && validateEmail && !isValidEmail(value)) {
      setError('Please enter a valid email address');
    } else if (placeholder === 'Password' && validatePassword && !isValidPassword(value)) {
      setError('Password must contain at least 8 characters, including capital letters, small letters, special characters, and numbers');
    }
  };

  const isValidEmail = (email) => {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password, confirmPassword) => {
  // Regular expression pattern for password validation
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password) && password === confirmPassword;
};

  
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleFocus}>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: isFocused ? '#2979FF' : '#e8e8e8',
              borderWidth: isFocused ? 2 : 1,
              backgroundColor: isFocused ? '#F4F9FF' : 'white',
            },
          ]}
        >
          <Icon name={leftIconName} size={26} color="#555" style={styles.icon} />
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="black"
            secureTextEntry={isSecureEntry}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
            value={value}
            style={styles.input}
            autoCapitalize="none" // Dont auto capitalize the text
            autoCorrect={false}
          />
          <TouchableWithoutFeedback onPress={handleRightIconPress}>
            <Icon
              name={isSecureEntry ? 'eye-off-outline' : rightIconName}
              size={22}
              color="#555"
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomInput;
