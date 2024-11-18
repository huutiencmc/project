import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Setting = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Settings List */}
      <ScrollView contentContainerStyle={styles.settingsList}>
        <TouchableOpacity style={styles.settingItem} onPress={()=> router.push('/homeFood/(drawer)/Notification')}>
          <View style={styles.iconContainer}>
            <Icon name="notifications-outline" size={24} color="#E76F51" />
          </View>
          <Text style={styles.settingText}>Notification Setting</Text>
          <Icon name="chevron-down" size={20} color="#E95322" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={()=> router.push('/homeFood/(drawer)/PasswordSetting')}>
          <View style={styles.iconContainer}>
            <Icon name="key-outline" size={24} color="#E76F51" />
          </View>
          <Text style={styles.settingText}>Password Setting</Text>
          <Icon name="chevron-down" size={20} color="#E95322" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="person-outline" size={24} color="#E76F51" />
          </View>
          <Text style={styles.settingText}>Delete Account</Text>
          <Icon name="chevron-down" size={20} color="#E95322" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBEF",
  },
  header: {
    backgroundColor: "#F5CB58",
    height: 100,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 16,
  },
  headerTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  settingsList: {
    padding: 16,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF5E9",
    marginRight: 16,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: "#E95322",
    fontWeight: "bold",
  },
});

export default Setting;
