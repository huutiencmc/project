import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';

const ProductItem = ({ item }: any) => {
  return (
    <View style={styles.productItem}>
      <Image source={item.imageUrl } style={styles.productImage} />
      
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
       
      </View>
      <View style={styles.offerText}>
            <Text style={styles.textPercent}>4% off your offer</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    offerText:{
        backgroundColor: '#332C45',
        color: '#FFFFFF',
        borderRadius: 20,
        padding: 5
    },
    offerTextRight:{
        position: 'absolute',
        bottom: 60,
        right: 0,
        backgroundColor: '#332C45',
        color: '#FFFFFF',
        borderRadius: 20,
        zIndex: 100,
        padding: 10
    },
textPercent:{
    color: '#FFFFFF',
    fontWeight: 'bold',
},
  productItem: {
    flexDirection: 'column',
    // alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
   
  },
  productImage: {

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  productInfo: {
    padding: 10,
    
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryText: {
    fontSize: 14,
    color: 'gray',
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
});

const ForYou = () => {
  const products = [
    {
      id: 1,
      imageUrl: require('../assets/images/foryou.png'),
      title: 'Seafood',
      rating: 4.5,
      deliveryTime: 45,
    },
    {
      id: 2,
      imageUrl: require('../assets/images/foryou.png'),
      title: 'Seafood',
      rating: 4.5,
      deliveryTime: 45,
    },
    {
      id: 3,
      imageUrl: require('../assets/images/foryou.png'),
      title: 'Seafood',
      rating: 4.5,
      deliveryTime: 45,
    },
  
  ];

  return (
        <View>
      <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 10}}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>For you</Text>
      </View>
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id as any}
      horizontal
    />
    </View>
  );
};

export default ForYou;