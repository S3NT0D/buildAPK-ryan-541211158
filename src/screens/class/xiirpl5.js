import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // Perubahan import disini

export default function Xiirpl5() {
    const [selectedValue, setSelectedValue] = useState("XIIRPL5");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState({});
  
    const students = [
      { name: 'Fakhri Erlanga Crespo',      id: '54121184' },
      { name: 'Reza Sahrul Nurmadani',      id: '54121151' },
      { name: 'Riftiana Ersi Utami',        id: '54121152' },
      { name: 'Risang Agnijati',            id: '54121153' },
      { name: 'Rivaldo Ilham Kurniawan',    id: '54121154' },
      { name: 'Rizal Nurdianto',            id: '54121155' },
      { name: 'Rizfi Lintang Salfadililah', id: '54121156' },
      { name: 'Rosita Dwi Anggraini',       id: '54121157' },
      { name: 'Ryan Diphda Fortunate',      id: '54121158' },
      // Tambahkan siswa lain di sini
    ];

    const openModal = (student) => {
        setSelectedStudent(student);
        setModalVisible(true);
      };

      return (
        <View style={styles.container}>
          <Text style={styles.header}>XII RPL 5</Text>
          <View style={styles.form}>
            {students.map((student, index) => (
              <TouchableOpacity key={index} style={styles.card} onPress={() => openModal(student)}>
                <Text>{student.name}</Text>
                <Text>{student.id}</Text>
              </TouchableOpacity>
            ))}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{selectedStudent.name}</Text>
                  <Text style={styles.modalText}>{selectedStudent.id}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
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
    height: 70,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#9d5e36',
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
