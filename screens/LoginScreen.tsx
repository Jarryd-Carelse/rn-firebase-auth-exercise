import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { loginUser } from '../services/authService';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../theme';

type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
  Registration: undefined;
};

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const user = await loginUser(email, password);
      if (user && user.email) {
        Alert.alert('Login Success', `Welcome ${user.email}`);
        
      } else {
        Alert.alert('Login Success', 'Welcome!');
        
      }
    } catch (error: any) {
      Alert.alert('Login Failed', error.message || 'Invalid email or password.');
    }
  }

  const goToRegister = () => {
    navigation.navigate('Registration');
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
            style={styles.inputField}
            placeholder="Your Email"
            placeholderTextColor={colors.inputBorder}
            onChangeText={newText => setEmail(newText)}
            value={email}
        />
        <TextInput
            style={styles.inputField}
            placeholder="Your Password"
            placeholderTextColor={colors.inputBorder}
            onChangeText={newText => setPassword(newText)}
            value={password}
            secureTextEntry={true}
        />
        <TouchableOpacity style={[styles.button, {backgroundColor: colors.primary}]} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton} onPress={goToRegister}>
            <Text style={styles.linkButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>  
    </SafeAreaView>
  )
}

export default LoginScreen

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
  linkButton: {
    backgroundColor: 'transparent',
    padding: 0,
    marginTop: 18,
    shadowColor: 'transparent',
    elevation: 0,
    alignItems: 'center',
  },
  linkButtonText: {
    color: colors.secondary,
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});