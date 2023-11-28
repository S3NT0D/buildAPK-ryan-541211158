import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // Perubahan import disini

export default function Index({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("XIIRPL5");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selamat Datang Boss</Text>
      <View style={styles.form}>
        <Image source={require('../../assets/campus.jpg')} style={styles.icon}/>
        <View style={styles.card}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: '100%' }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedValue(itemValue);
                if (itemValue === "XIIRPL5") {
                  navigation.navigate('Xiirpl5'); // Navigasi ke halaman 'Xiirpl5'
                }
              }}
            >
            <Picker.Item label="XII RPL 1" value="XIIRPL1" />
            <Picker.Item label="XII RPL 2" value="XIIRPL2" />
            <Picker.Item label="XII RPL 3" value="XIIRPL3" />
            <Picker.Item label="XII RPL 4" value="XIIRPL4" />
            <Picker.Item label="XII RPL 5" value="XIIRPL5" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.studentButton} onPress={() => navigation.navigate('Adds')}>
          <View style={styles.studentContent}>
            <Feather name="plus" size={24} color="white" style={styles.studentIcon} />
            <Text style={styles.studentText}>Student</Text>
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
});
