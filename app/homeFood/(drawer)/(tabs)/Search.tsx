import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // Icons from Expo Vector Icons

const recentSearches = ['Burgers', 'Fast food', 'Dessert', 'French', 'Pastry'];

const recentOrders = [
  {
    id: '1',
    title: 'Ordinary Burgers',
    subtitle: 'Burger Restaurant',
    rating: 4.9,
    distance: '190m',
    image: 'https://via.placeholder.com/80', // Replace with your image URL
  },
  {
    id: '2',
    title: 'Ordinary Burgers',
    subtitle: 'Burger Restaurant',
    rating: 4.9,
    distance: '190m',
    image: 'https://via.placeholder.com/80', // Replace with your image URL
  },
  {
    id: '3',
    title: 'Ordinary Burgers',
    subtitle: 'Burger Restaurant',
    rating: 4.9,
    distance: '190m',
    image: 'https://via.placeholder.com/80', // Replace with your image URL
  },
];

export default function Search() {
  const renderRecentSearch = (item: any, index: number) => (
    <View style={styles.recentSearchItem} key={index}>
      <FontAwesome5 name="search" size={16} color="#999" style={styles.icon} />
      <Text style={styles.recentSearchText}>{item}</Text>
      <TouchableOpacity>
        <MaterialIcons name="close" size={20} color="#999" />
      </TouchableOpacity>
    </View>
  );

  const renderOrderItem = ({ item }: any) => (
    <View style={styles.orderItem}>
      <Image source={{ uri: item.image }} style={styles.orderImage} />
      <View style={styles.orderTextContainer}>
        <Text style={styles.orderTitle}>{item.title}</Text>
        <Text style={styles.orderSubtitle}>{item.subtitle}</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome5 name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
          <MaterialIcons name="location-pin" size={14} color="#999" style={styles.icon} />
          <Text style={styles.distanceText}>{item.distance}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="close" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Food</Text>
      </View>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="#999" style={styles.searchIcon} />
        <TextInput placeholder="Search Food" style={styles.searchInput} />
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent searches</Text>
          <TouchableOpacity>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
        {recentSearches.map(renderRecentSearch)}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My recent orders</Text>
        <FlatList
          data={recentOrders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrderItem}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 20
  },
  listContainer:{

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteText: {
    fontSize: 14,
    color: '#F85F4C',
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  recentSearchText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  orderItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  orderTextContainer: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  orderSubtitle: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
    marginRight: 15,
  },
  distanceText: {
    fontSize: 14,
  },
  icon:{

  }
});
