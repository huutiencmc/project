import { router } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> router.back()}>
        <Icon name="arrow-back" size={24} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('/call')}>
        <Icon name="call" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {/* Left Message */}
        <View style={styles.messageRowLeft}>
          <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
          <View style={styles.messageBubbleLeft}>
            <Text style={styles.messageText}>Lorem Ipsum is simply dummy text of the printing</Text>
          </View>
        </View>

        {/* Right Message */}
        <View style={styles.messageRowRight}>
          <View style={styles.messageBubbleRight}>
            <Text style={styles.messageText}>Lorem Ipsum</Text>
          </View>
          <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
        </View>

        {/* Left Message */}
        <View style={styles.messageRowLeft}>
          <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
          <View style={styles.messageBubbleLeft}>
            <Text style={styles.messageText}>Lorem Ipsum</Text>
          </View>
        </View>

        {/* Left Message with Timestamp */}
        <View style={styles.messageRowLeft}>
          <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
          <View style={styles.messageBubbleLeft}>
            <Text style={styles.messageText}>Lorem Ipsum is simply dummy text of the printing</Text>
          </View>
          <Text style={styles.timestamp}>6:52 PM</Text>
        </View>
      </ScrollView>

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color="#F36D34" style={styles.inputIcon} />
        <TextInput placeholder="Enter message..." style={styles.input} />
        <TouchableOpacity>
          <Icon name="send" size={24} color="#F36D34" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4B400',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#FFFFFF',
    marginTop: 30
  },
  chatContainer: {
    padding: 16,
  },
  messageRowLeft: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  messageRowRight: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  messageBubbleLeft: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 15,
    maxWidth: '70%',
  },
  messageBubbleRight: {
    backgroundColor: '#E76F51',
    padding: 10,
    borderRadius: 15,
    maxWidth: '70%',
  },
  messageText: {
    color: '#333333',
  },
  timestamp: {
    fontSize: 12,
    color: '#555555',
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputIcon: {
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    padding: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginHorizontal: 8,
  },
});

export default ChatScreen;
