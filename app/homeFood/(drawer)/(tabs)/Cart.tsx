import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Icon } from 'react-native-elements';

const ordersData = {
  active: [
    { id: 1, name: 'Strawberry Shake', price: '$20.00', items: 2, date: '29 Nov, 01:20 pm', image: require('../../../../assets/images/order.png') },
    { id: 2, name: 'Chicken Burger', price: '$20.00', items: 1, date: '17 Oct, 01:20 pm', image: require('../../../../assets/images/order.png') },
    { id: 3, name: 'Sushi Wave', price: '$20.00', items: 2, date: '22 Apr, 01:20 pm', image: require('../../../../assets/images/order.png') },
  ],
  completed: [
    { id: 4, name: 'Chicken Curry', price: '$50.00', items: 2, date: '29 Nov, 01:20 pm', image: require('../../../../assets/images/order.png') },
    { id: 5, name: 'Bean and Vegetable Burger', price: '$50.00', items: 2, date: '10 Nov, 06:05 pm', image: require('../../../../assets/images/order.png') },
    { id: 6, name: 'Coffee Latte', price: '$8.00', items: 2, date: '10 Nov, 08:30 am', image: require('../../../../assets/images/order.png') },
  ],
  cancelled: [
    { id: 7, name: 'Sushi Wave', price: '$103.00', items: 3, date: '02 Nov, 04:00 pm', image: require('../../../../assets/images/order.png') },
    { id: 8, name: 'Fruit and Berry Tea', price: '$15.00', items: 2, date: '12 Oct, 03:15 pm', image: require('../../../../assets/images/order.png') },
  ],
};

const Cart = () => {
  const [selectedTab, setSelectedTab] = useState('active');

  const renderOrders = () => {
    return ordersData[selectedTab].map((order: any) => (
      <View key={order.id} style={styles.orderCard}>
        <Image source={ order.image} style={styles.orderImage} />
        <View style={styles.orderDetails}>
          <Text style={styles.orderName}>{order.name}</Text>
          <Text style={styles.orderDate}>{order.date}</Text>
        </View>
        <Text style={styles.orderPrice}>{order.price}</Text>
        {selectedTab === 'active' ? (
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trackButton}>
              <Text style={styles.buttonText}>Track Driver</Text>
            </TouchableOpacity>
          </View>
        ) : selectedTab === 'completed' ? (
          <TouchableOpacity style={styles.reviewButton}>
            <Text style={styles.buttonText}>Leave a review</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.reviewButton}>
            <Text style={styles.cancelledText}>Order cancelled</Text>
          </TouchableOpacity>
        )}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#F5CB58', padding: 20}}>
      <TouchableOpacity onPress={()=> router.back()} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
        <Icon name="arrow-back" size={24} color="#f85f4c" />
        </TouchableOpacity>
      <Text style={[styles.headerTitle,{color:'#fff'}]}>My Order</Text>
      </View>
      <View style={styles.tabContainer}>
        {['active', 'completed', 'cancelled'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView>{renderOrders()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E2',
    // padding: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  tabButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#FFF3E2',
    marginTop: 10,
  },
  activeTab: {
    backgroundColor: '#E95322',
  },
  tabText: {
    color: '#000',
    fontSize: 16,
  },
  activeTabText: {
    color: '#FFF',
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  orderDetails: {
    flex: 1,
    marginLeft: 10,
  },
  orderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDate: {
    color: '#888',
    fontSize: 12,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F38E82',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 5,
  },
  cancelButton: {
    backgroundColor: '#F38E82',
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
  },
  trackButton: {
    backgroundColor: '#D1E8E4',
    borderRadius: 5,
    padding: 5,
  },
  reviewButton: {
    backgroundColor: '#F38E82',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
  },
  cancelledText: {
    color: '#FF6B6B',
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F85F4C',
    marginBottom: 10,
    textAlign: 'center',
  }
});

export default Cart;
