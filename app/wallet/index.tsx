import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const YummyWalletSetup = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My wallet</Text>
      
      <View style={styles.iconContainer}>
        {/* Add any icon library or SVG to represent the wallet icon */}
      </View>
      
      <Text style={styles.safetyText}>For your own safety</Text>
      <Text style={styles.description}>
        For your information safety when setting up Yummy wallet of Yummyfood app, please read and agree to Terms and Policies.
      </Text>
      
      <View style={styles.agreementContainer}>
        <Switch
          value={isAgreed}
          onValueChange={(value) => setIsAgreed(value)}
        />
        <Text style={styles.agreementText}>I agree with Terms and Policies</Text>
      </View>
      
      <TouchableOpacity
        style={[styles.button, !isAgreed && styles.disabledButton]}
        disabled={!isAgreed}
        onPress={() => {
          // Handle wallet setup action here
          console.log('Setting up Yummy wallet');
        }}
      >
        <Text style={styles.buttonText}>Setup Yummy wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5CB58',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    // Add icon styles here
    marginBottom: 20,
  },
  safetyText: {
    fontSize: 18,
    color: '#d96459',
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  agreementText: {
    fontSize: 14,
    color: '#d96459',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#e2e2e2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default YummyWalletSetup;
