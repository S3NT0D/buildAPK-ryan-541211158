import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {

    const handleLoginScreen = () => {
        navigation.navigate('Index')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginScreen}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.loginText}>Register</Text>
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
    marginTop: 30,
  },
  loginButton2: {
    width: '100%',
    backgroundColor: '#CDB891',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  Text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
