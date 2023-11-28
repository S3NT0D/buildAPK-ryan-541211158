import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // Perubahan import disini

export default function Xiirpl1() {
  const [selectedValue, setSelectedValue] = useState("XIIRPL5");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selamat Datang Boss</Text>
      <View style={styles.form}>
        
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
    marginBottom: 20, // Memberi jarak antara header dan form
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
});
