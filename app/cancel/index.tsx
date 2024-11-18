import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Modal, Image } from 'react-native';

const reasonsList: string[] = [
  "Late delivery",
  "Can not contact to the driver",
  "Driver denied to come to pickup",
  "Displayed wrong address",
  "Unfavorable price",
  "I want to order another restaurant",
  "I just want to cancel the order",
];

const CancelOrderScreen: React.FC = () => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [otherMessage, setOtherMessage] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleReason = (reason: string) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter(item => item !== reason));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const handleSubmit = () => {
    // Handle the submit logic here (e.g., API call)
    console.log("Selected Reasons:", selectedReasons);
    console.log("Other Message:", otherMessage);
    setShowModal(true); // Show the confirmation modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Navigate to homepage or reset form if needed
    router.push('/homeFood')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cancel Order</Text>
      <Text style={styles.subtitle}>Please select reasons</Text>
      <ScrollView style={styles.reasonsContainer}>
        {reasonsList.map((reason, index) => (
          <TouchableOpacity
            key={index}
            style={styles.reasonItem}
            onPress={() => toggleReason(reason)}
          >
            <View style={styles.checkbox}>
              {selectedReasons.includes(reason) && <View style={styles.checked} />}
            </View>
            <Text style={styles.reasonText}>{reason}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.subtitle}>Other</Text>
      <TextInput
        style={styles.input}
        placeholder="Do you have any message to the restaurant"
        value={otherMessage}
        onChangeText={setOtherMessage}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Send</Text>
      </TouchableOpacity>

      {/* Confirmation Modal */}
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Image
              source={require('../../assets/images/cry.png')} 
              style={styles.modalIcon}
            />
            <Text style={styles.modalTitle}>We are sorry that your order has been canceled</Text>
            <Text style={styles.modalMessage}>
              We will continue improving our service and pleasing you in the next order.
            </Text>
            <TouchableOpacity style={styles.homeButton} onPress={handleCloseModal}>
              <Text style={styles.homeButtonText}>Back to homepage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 8,
  },
  reasonsContainer: {
    marginBottom: 16,
  },
  reasonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#333',
  },
  reasonText: {
    fontSize: 16,
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FF5722',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalIcon: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
  },
  homeButton: {
    backgroundColor: '#FF5722',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CancelOrderScreen;
