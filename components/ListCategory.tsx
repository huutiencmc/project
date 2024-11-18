import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const MENU_ITEMS = [
  { id: 1, name: 'Chicken Rice', description: 'Boiled free-range chicken, fragrant rice, fresh vegetables', price: 35000, image: require('../assets/images/sp1.png'), category: 'Meals' },
  { id: 2, name: 'Potato Snack', description: 'Crispy fried potatoes, served with chili sauce', price: 15000, image: require('../assets/images/sp2.png'), category: 'Snacks' },
  { id: 3, name: 'Chocolate Cake', description: 'Soft cake with a layer of melting chocolate cream', price: 50000, image: require('../assets/images/sp3.png'), category: 'Desserts' },
  { id: 4, name: 'Avocado Smoothie', description: 'Sweet avocado smoothie with a touch of condensed milk', price: 30000, image: require('../assets/images/sp4.png'), category: 'Vegan' },
  { id: 5, name: 'Vegetable Salad', description: 'Fresh green vegetables, served with a sweet and sour dressing', price: 25000, image: require('../assets/images/sp5.png'), category: 'Drinks' },
];


const MenuItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.menuItemList}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
};

const ListCategory = () => {
  const [activeCategory, setActiveCategory] = useState('Snacks'); // Danh mục đang chọn
  const [filteredItems, setFilteredItems] = useState(() => MENU_ITEMS.filter(item => item.category === 'Snacks'));

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category); // Cập nhật danh mục hiện tại
    setFilteredItems(MENU_ITEMS.filter(item => item.category === category)); // Lọc danh sách món ăn
  };

  const menuCategories = [
    { label: 'Snacks', image: require('../assets/images/Snacks.png') },
    { label: 'Meals', image: require('../assets/images/Meals.png') },
    { label: 'Vegan', image: require('../assets/images/Vegan.png') },
    { label: 'Desserts', image: require('../assets/images/Desserts.png') },
    { label: 'Drinks', image: require('../assets/images/Drinks.png') },
  ];

  return (
    <>
      {/* Menu Danh mục */}
      <View style={styles.container}>
        {menuCategories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoryChange(category.label)}
            style={[styles.menuItem, activeCategory === category.label ? styles.active : styles.nomal]}
          >
            <Image source={category.image} style={{ height: 40, width: 30, objectFit: 'cover' }} />
            <Text style={styles.menuItemText}>{category.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Danh sách món ăn */}
      <FlatList
        data={filteredItems}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={item => item.id.toString()}
        style={{ marginBottom: 70 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E95322',
    paddingTop: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 40,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#F5CB58',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuItemText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    paddingBottom: 10,
  },
  menuItemList: {
    borderRadius: 10,
    flexDirection: 'column',
    padding: 20,
    marginBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#E95322',
    fontWeight: 'bold',
  },
  nomal: {
    backgroundColor: '#F3E9B5',
    borderRadius: 20,
    margin: 5,
  },
});

export default ListCategory;
