import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView , DrawerItemList} from '@react-navigation/drawer';
import { StyleSheet, View, Image,Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

function CustomDrawerContent(props: any) {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
        {/* Header Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }} // Replace with user image
            style={styles.profileImage}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Alena Sabyan</Text>
            <Text style={styles.profileStatus}>Silver Member</Text>
          </View>
          <TouchableOpacity style={styles.profileArrow}>
            <Icon name="arrow-right" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
  
        {/* Divider */}
        <View style={styles.divider} />
  
        {/* Drawer Items */}
        <DrawerItemList {...props} />
  
        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Icon name="sign-out-alt" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    );
  }

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: styles.drawerStyle,
        headerShown: true,
        drawerLabelStyle: styles.drawerLabel,
        drawerItemStyle: styles.drawerItem,
        drawerActiveBackgroundColor: '#F85F4C',
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#fff',
      }}
    >
      <Drawer.Screen
        name="/Faq"
        options={{
          drawerLabel: 'Help Center',
          drawerIcon: ({ color }) => <Icon name="shopping-bag" size={18} color={'#fff'} />,
        }}
      />
      <Drawer.Screen
        name="/Contact"
        options={{
          drawerLabel: 'Contact',
          drawerIcon: ({ color }) => <Icon name="shopping-bag" size={18} color={'#fff'} />,
        }}
      />
      <Drawer.Screen
        name="/Setting"
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({ color }) => <Icon name="shopping-bag" size={18} color={'#fff'} />,
        }}
      />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: '#E85C4C',
      },
      drawerContent: {
        flex: 1,
      },
      profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#F85F4C',
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 10,
      },
      profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      profileDetails: {
        flex: 1,
      },
      profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      },
      profileStatus: {
        fontSize: 12,
        color: '#fff',
      },
      profileArrow: {
        padding: 5,
        backgroundColor: '#F07160',
        borderRadius: 50,
      },
      divider: {
        height: 1,
        backgroundColor: '#FFFFFF50',
        marginHorizontal: 10,
        marginVertical: 10,
      },
      drawerLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
      },
      drawerItem: {
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF30',
        paddingBottom: 10,
        marginBottom: 5,
      },
      logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#F85F4C',
      },
      logoutText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        marginLeft: 10,
      },
      icon: {
        marginLeft: 10,
      },
})