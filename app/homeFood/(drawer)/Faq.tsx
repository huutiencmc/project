import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { router } from 'expo-router';


const Faq = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqSections = [
    'Lorem ipsum dolor sit amet?',
    'Sed do eiusmod tempor incididunt?',
    'Consectetur adipiscing elit?',
    'Pellentesque congue lorem?',
    'Integer nec odio praesent libero?'
  ];

  const handleSectionPress = (index: any) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <View style={styles.container}>
        <View style={{backgroundColor: '#F5CB58', padding: 20}}>
      <TouchableOpacity onPress={()=> router.back()} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
        <Icon name="arrow-back" size={24} color="#f85f4c" />
        </TouchableOpacity>
      <Text style={[styles.headerTitle,{color:'#fff'}]}>Help Center</Text>
      </View>
      <View style={{padding: 20}}>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.tabText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButtonActive}>
          <Text style={styles.categoryText}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Services</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <ScrollView>
        {faqSections.map((section, index) => (
          <View key={index}>
            <TouchableOpacity style={styles.sectionHeader} onPress={() => handleSectionPress(index)}>
              <Text style={styles.sectionTitle}>{section}</Text>
            </TouchableOpacity>
            {expandedSection === index && (
              <Text style={styles.sectionContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F85F4C',
    marginBottom: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D98C30',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    color: '#D98C30',
    textAlign: 'center',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  activeTab: {
    backgroundColor: '#E95322',
    padding: 10,
    borderRadius: 8,
  },
  inactiveTab: {
    backgroundColor: '#FFDECF',
    color:'#E95322',
    padding: 10,
    borderRadius: 8,
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  categoryButton: {
    backgroundColor: '#FFDECF',
    padding: 8,
    borderRadius: 6,
  },
  categoryButtonActive: {
    backgroundColor: '#E95322',
    padding: 8,
    borderRadius: 6,
  },
  categoryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    borderColor: '#D98C30',
    borderWidth: 1,
  },
  sectionHeader: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#D98C30',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#E95322',
    fontWeight: 'bold',
  },
  sectionContent: {
    padding: 15,
    backgroundColor: '#FFF',
    color: '#333',
  },
});

export default Faq;
