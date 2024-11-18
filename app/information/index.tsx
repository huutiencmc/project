import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBar from '@/components/navBar';
import { router } from 'expo-router';

const InformationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.navBar}>
                
                <NavBar/>
                
            </View>

      {/* Order Status */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Status</Text>
        <Text style={styles.followOrder}>Follow the order {'>'}</Text>
      </View>

      {/* Order Items */}
      <View style={styles.itemsContainer}>
        {Array(3).fill(null).map((_, index) => (
          <View key={index} style={styles.item}>
            <Image source={require('../../assets/images/pizza.png')} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>Croissants</Text>
              <Text style={styles.itemSubtitle}>happy not angry</Text>
            </View>
            <Text style={styles.itemPrice}>$7.02</Text>
          </View>
        ))}
      </View>

      {/* Order Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Quantity (4 items) $12</Text>
        <Text style={styles.summaryText}>Shipping fee: 1.5 km $23</Text>
        <Text style={styles.summaryText}>Voucher -3</Text>
        <Text style={styles.summaryText}>Yummy -1</Text>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total payment</Text>
          <Text style={styles.originalPrice}>$34</Text>
          <Text style={styles.totalPrice}>$23</Text>
        </View>
      </View>

      {/* Payment Information */}
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Payment Method</Text>
        <Text style={styles.paymentMethod}>💵 Cash</Text>
        <Text style={styles.paymentDetails}>Order code: DBAJFI-55616_SD34V</Text>
        <Text style={styles.paymentDetails}>Receiver: Dinh Bao</Text>
        <Text style={styles.paymentDetails}>Phone number: 0356065691</Text>
        <Text style={styles.paymentDetails}>Address: 89 Pham Van Dong, Mai Dich, Cau Giay, Ha Noi, Viet Nam</Text>
      </View>

      {/* Cancel Order Button */}
      <TouchableOpacity style={styles.cancelButton} onPress={()=>{router.push('/cancel')}}>
        <Text style={styles.cancelButtonText}>Cancel order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5CB58',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginLeft: 16,
  },
  statusContainer: {
    backgroundColor: '#F4B400',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  followOrder: {
    color: 'white',
    marginTop: 8,
  },
  itemsContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    color: 'gray',
  },
  itemPrice: {
    fontWeight: 'bold',
  },
  summaryContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 14,
    color: 'gray',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  paymentContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paymentMethod: {
    color: 'gray',
    marginBottom: 8,
  },
  paymentDetails: {
    fontSize: 14,
    color: 'gray',
  },
  cancelButton: {
    backgroundColor: '#F87146',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 39
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navBar:{
    backgroundColor: '#F5CB58',
    height: 100
  },
});

export default InformationScreen;
