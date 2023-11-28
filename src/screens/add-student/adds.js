import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // Perubahan import disini

export default function Adds({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("XIIRPL5");
    const [name, setName] = useState('');
    const [classValue, setClassValue] = useState('');
    const [nis, setNis] = useState('');
  
    const handleAddStudent = () => {
      // Lakukan logika untuk menambahkan data siswa
      // Contoh:
      console.log('Nama:', name);
      console.log('Kelas:', classValue);
      console.log('NIS:', nis);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Tambah Data Siswa</Text>
        <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nama"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Kelas"
              value={classValue}
              onChangeText={(text) => setClassValue(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="NIS"
              value={nis}
              onChangeText={(text) => setNis(text)}
              keyboardType="numeric"
            />
          {/* <TouchableOpacity style={styles.studentButton} onPress={handleAddStudent}> */}
          <TouchableOpacity style={styles.studentButton} onPress={() => navigation.navigate('Index')}>
            <View style={styles.studentContent}>
              <Feather name="plus" size={24} color="white" style={styles.studentIcon} />
              <Text style={styles.studentText}>ADD</Text>
            </View>
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
    marginBottom: 20, // Memberi jarak antara header dan form
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 70,
  },
  studentButton: {
    width: '100%',
    backgroundColor: '#9d5e36',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 40,
  },
  studentContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', // Untuk menengahkan konten ikon dan teks
  },
  studentText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    marginTop: -8,
  },
  studentIcon: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: -130,
  },
  icon: {
    width: '100%',
    height: '50%',
    backgroundColor: '#9d5e36',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#eee',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
});
