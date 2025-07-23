import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { signUp } from '../services/authService';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../theme';

type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
  Registration: undefined;
};

const RegistrationScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleRegister = async () => {
    if (password !== retypePassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    try {
      const user = await signUp(email, password, username);
      if (user && user.email) {
        Alert.alert('Success', `Account created for ${user.email}`);
        navigation.navigate('Login');
      } else {
        Alert.alert('Success', 'Account created!');
        navigation.navigate('Login');
      }
    } catch (error: any) {
      Alert.alert('Registration Failed', error.message || 'Could not create account.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Username"
          placeholderTextColor={colors.inputBorder}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          placeholderTextColor={colors.inputBorder}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          placeholderTextColor={colors.inputBorder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.inputField}
          placeholder="Retype Password"
          placeholderTextColor={colors.inputBorder}
          value={retypePassword}
          onChangeText={setRetypePassword}
          secureTextEntry
        />
        <TouchableOpacity style={[styles.button, {backgroundColor: colors.primary}]} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputField: {
    height: 48,
    borderWidth: 1.5,
    borderColor: colors.inputBorder,
    marginTop: 18,
    paddingHorizontal: 14,
    borderRadius: 8,
    fontSize: 16,
    color: colors.text,
    backgroundColor: '#F8F8F8',
  },
  button: {
    borderRadius: 8,
    padding: 14,
    marginTop: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: colors.buttonText,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
});

export default RegistrationScreen;