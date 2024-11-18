import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Icon } from 'react-native-elements';

const Contact = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const contactSections = [
    { title: 'Customer service', icon: <FontAwesome5 name="headset" size={24} color="#E95322" /> },
    { title: 'Website', icon: <MaterialCommunityIcons name="web" size={24} color="#E95322" /> },
    { title: 'Whatsapp', icon: <FontAwesome name="whatsapp" size={24} color="#E95322" /> },
    { title: 'Facebook', icon: <FontAwesome name="facebook" size={24} color="#E95322" /> },
    { title: 'Instagram', icon: <FontAwesome name="instagram" size={24} color="#E95322" /> },
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

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.tabText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {contactSections.map((section, index) => (
          <View key={index}>
            <TouchableOpacity style={styles.sectionHeader} onPress={() => handleSectionPress(index)}>
              <View style={styles.sectionHeaderContent}>
                {section.icon}
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
            </TouchableOpacity>
            {expandedSection === index && (
              <Text style={styles.sectionContent}>
                Detailed information for {section.title}.
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F85F4C',
    marginBottom: 10,
    textAlign: 'center',
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
    padding: 10
  },
  activeTab: {
    backgroundColor: '#E95322',
    padding: 10,
    borderRadius: 8,
    width: 170,
    paddingTop: 10,
  },
  inactiveTab: {
    backgroundColor: '#FFDECF',
    padding: 10,
    borderRadius: 8,
    width: 170,
    paddingTop: 10,
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionHeader: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#E95322',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#E95322',
    marginLeft: 10,
  },
  sectionContent: {
    padding: 15,
    backgroundColor: '#FFF',
    color: '#333',
  },
});

export default Contact;
