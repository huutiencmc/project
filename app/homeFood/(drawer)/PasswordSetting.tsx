import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PasswordSettingsScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field: any) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Password Setting</Text>
      </View>

      {/* Password Fields */}
      <View style={styles.form}>
        {/* Current Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword.current}
              value={currentPassword}
              onChangeText={setCurrentPassword}
            />
            <TouchableOpacity
              onPress={() => togglePasswordVisibility("current")}
            >
              <Icon
                name={showPassword.current ? "eye-off" : "eye"}
                size={20}
                color="#E95322"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* New Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword.new}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TouchableOpacity onPress={() => togglePasswordVisibility("new")}>
              <Icon
                name={showPassword.new ? "eye-off" : "eye"}
                size={20}
                color="#E95322"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm New Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm New Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword.confirm}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => togglePasswordVisibility("confirm")}
            >
              <Icon
                name={showPassword.confirm ? "eye-off" : "eye"}
                size={20}
                color="#E76F51"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Change Password Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
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
  form: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#8D4B32",
    fontWeight: "bold",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF3CD",
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#8D4B32",
  },
  forgotPassword: {
    color: "#E76F51",
    textAlign: "right",
    marginTop: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#E76F51",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PasswordSettingsScreen;
