import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const CallScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> router.back()}>
          <Ionicons name="chevron-back" size={24} color="#" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Call</Text>
      </View>

      {/* Call Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.ring}>
          <View style={styles.innerRing}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={styles.avatarImage}
            />
          </View>
        </View>
      </View>

      {/* Caller Name and Timer */}
      <Text style={styles.callerName}>JackStauber</Text>
      <Text style={styles.timer}>02:25</Text>

      {/* Call Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <MaterialIcons name="volume-up" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="mic-off" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.hangupButton}>
          <MaterialIcons name="call-end" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#',
  },
  avatarContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  ring: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#FDE5C9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRing: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#FDE5C9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  callerName: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
  },
  timer: {
    fontSize: 16,
    color: 'gray',
  },
  controls: {
    flexDirection: 'row',
    marginTop: 50,
  },
  controlButton: {
    marginHorizontal: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 30,
    padding: 15,
  },
  hangupButton: {
    backgroundColor: 'red',
    borderRadius: 30,
    padding: 15,
    marginHorizontal: 15,
  },
});

export default CallScreen;
