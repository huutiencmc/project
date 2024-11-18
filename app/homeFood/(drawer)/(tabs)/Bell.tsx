import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // Icons from Expo Vector Icons

const notifications = [
  {
    id: '1',
    category: 'Today',
    data: [
      {
        id: '1',
        title: '30% Special Discount!',
        description: 'Special promotion only valid today',
        icon: 'percent', // Icon name
        iconType: 'FontAwesome5', // Icon library
        time: '',
      },
      {
        id: '2',
        title: 'Your Order Has Been Taken by the Driver',
        description: 'Recently!',
        icon: 'check-circle', // Icon name
        iconType: 'MaterialIcons',
        time: '',
      },
      {
        id: '3',
        title: 'Your Order Has Been Canceled',
        description: '19 Jun 2023',
        icon: 'cancel',
        iconType: 'MaterialIcons',
        time: '',
      },
    ],
  },
  {
    id: '2',
    category: 'Yesterday',
    data: [
      {
        id: '4',
        title: '35% Special Discount!',
        description: 'Special promotion only valid today',
        icon: 'mail',
        iconType: 'MaterialIcons',
      },
      {
        id: '5',
        title: 'Account Setup Successful!',
        description: 'Special promotion only valid today',
        icon: 'user',
        iconType: 'FontAwesome5',
      },
      {
        id: '6',
        title: 'Special Offer! 60% Off',
        description: 'Special offer for new account, valid until 20 Nov 2022',
        icon: 'percent',
        iconType: 'FontAwesome5',
      },
      {
        id: '7',
        title: 'Credit Card Connected',
        description: 'Special promotion only valid today',
        icon: 'credit-card',
        iconType: 'FontAwesome5',
      },
    ],
  },
];

export default function Bell() {
  const renderItem = ({ item }: any) => (
    <View style={styles.notificationItem}>
      <View style={styles.iconContainer}>
        {item.iconType === 'MaterialIcons' ? (
          <MaterialIcons name={item.icon} size={24} color="#F85F4C" />
        ) : (
          <FontAwesome5 name={item.icon} size={20} color="#F85F4C" />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons name="arrow-back" size={24} color="#333" style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Notification</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.categoryTitle}>{item.category}</Text>
            {item.data.map((notification) => renderItem({ item: notification }))}
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backIcon: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7C7C7C',
    marginVertical: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEECEB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  listContent: {
    paddingBottom: 20,
  },
});
