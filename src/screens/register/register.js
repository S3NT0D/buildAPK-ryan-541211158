import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confrim Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdd1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100, // Menaikkan header ke atas
  },
  header: {
    fontSize: 30,
    marginBottom: 40, // Memberi jarak antara header dan form
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#eee',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#9d5e36',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
