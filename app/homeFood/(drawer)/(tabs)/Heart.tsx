import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { router } from 'expo-router';

const favoriteItems = [
  {
    id: '1',
    title: 'Chicken Curry',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    image: require('../../../../assets/images/food_favorite1.png')
  },
  {
    id: '2',
    title: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    image: require('../../../../assets/images/food_favorite1.png')
  },
  {
    id: '3',
    title: 'Broccoli Lasagna',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    image: require('../../../../assets/images/food_favorite1.png')
  },
  {
    id: '4',
    title: 'Mexican Appetizer',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    image: require('../../../../assets/images/food_favorite1.png')
  },
  {
    id: '5',
    title: 'Chicken Curry',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    image: require('../../../../assets/images/food_favorite1.png')
  },
  {
    id: '6',
    title: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    image: require('../../../../assets/images/food_favorite1.png')
  },
];

export default function Heart() {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity style={styles.heartIcon}>
          <Text style={{ color: '#F85F4C', fontWeight: 'bold' }}>❤️</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <View style={{backgroundColor: '#F5CB58', padding: 20}}>
      <TouchableOpacity onPress={()=> router.back()} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
        <Icon name="arrow-back" size={24} color="#f85f4c" />
        </TouchableOpacity>
      <Text style={[styles.headerTitle,{color:'#fff'}]}>Favorites</Text>
      </View>
      <View style={{backgroundColor: '#fff', padding: 10}}>
      <Text style={styles.subtitle}>It's time to buy your favorite dish.</Text>
      <FlatList
        data={favoriteItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E9', // Background color
    // padding: 20,
    marginTop: 40
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F85F4C',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imageContainer: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 5,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#7C7C7C',
    textAlign: 'center',
    marginTop: 5,
  },
});
