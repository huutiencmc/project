import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBar from '@/components/navBar';
import { router } from 'expo-router';

const DeliveryScreen = () => {
  const driverLocation = { latitude: 32.8288, longitude: -96.7994 };
  const restaurantLocation = { latitude: 32.8076, longitude: -96.8089 };
  const estimatedTime = "6:00 PM - 6:10 PM";

  return (
    <View style={styles.container}>
      {/* Map Section */}
      <View style={styles.navBar}>
                
                <NavBar/>
                
            </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.8188,
          longitude: -96.8030,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Polyline for route */}
        <Polyline
          coordinates={[driverLocation, restaurantLocation]}
          strokeColor="black"
          strokeWidth={4}
        />
        
        {/* Driver Marker */}
        <Marker coordinate={driverLocation}>
          <Icon name="delivery-dining" size={30} color="orange" />
        </Marker>
        
        {/* Restaurant Marker */}
        <Marker coordinate={restaurantLocation}>
          <Icon name="home" size={30} color="red" />
        </Marker>
      </MapView>

      {/* Bottom Panel */}
      <View style={styles.bottomPanel}>
        <View style={styles.driverInfo}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.driverImage}
          />
          <View style={styles.driverDetails}>
            <Text style={styles.driverName}>Michael Scoffield</Text>
            <Text style={styles.driverSubtitle}>Will deliver your order</Text>
          </View>
          <View style={styles.contactIcons}>
            <TouchableOpacity>
              <Icon name="phone" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> router.push('/chat')}>
              <Icon name="message" size={24} color="black" style={styles.iconMargin} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.estimatedTimeTitle}>Estimated delivery time</Text>
        <Text style={styles.estimatedTime}>{estimatedTime}</Text>

        {/* Order Status */}
        <View style={styles.orderStatus}>
          <Icon name="restaurant" size={20} color="orange" />
          <Text style={styles.orderStatusText}>Your order is being notified to the restaurant</Text>
        </View>

        {/* Information Button */}
        <TouchableOpacity onPress={()=> router.push('/information')} style={styles.infoButton}>
          <Text style={styles.infoButtonText}>Information</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  navBar:{
    backgroundColor: '#F5CB58',
    height: 100
  },
  bottomPanel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  driverImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  driverSubtitle: {
    color: 'gray',
  },
  contactIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginLeft: 12,
  },
  estimatedTimeTitle: {
    color: 'gray',
    marginBottom: 4,
  },
  estimatedTime: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
  },
  orderStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  orderStatusText: {
    marginLeft: 8,
    color: 'gray',
  },
  infoButton: {
    backgroundColor: '#F87146',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  infoButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DeliveryScreen;
