import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Notification = () => {
  const [settings, setSettings] = useState({
    generalNotification: true,
    sound: true,
    soundCall: true,
    vibrate: false,
    specialOffers: false,
    payments: false,
    promoAndDiscount: false,
    cashback: false,
  });

  const toggleSwitch = (key: any) => {
    setSettings((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification Setting</Text>
      </View>

      {/* Notification Settings List */}
      <ScrollView contentContainerStyle={styles.settingsList}>
        {Object.entries(settings).map(([key, value]) => (
          <View style={styles.settingItem} key={key}>
            <Text style={styles.settingText}>{formatKeyToLabel(key)}</Text>
            <Switch
              trackColor={{ false: "#FFE8DB", true: "#E76F51" }}
              thumbColor={value ? "#FFF" : "#F4A261"}
              ios_backgroundColor="#FFE8DB"
              onValueChange={() => toggleSwitch(key)}
              value={value}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Helper function to format keys to labels
const formatKeyToLabel = (key: any) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str: any) => str.toUpperCase())
    .trim();
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
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  settingText: {
    fontSize: 16,
    color: "#E95322",
    fontWeight: "bold",
  },
});

export default Notification;
