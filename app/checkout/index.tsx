import { StyleSheet, Text, View, Image,TouchableHighlight,ScrollView, Modal,TouchableOpacity } from 'react-native'
import NavBar from '@/components/navBar'
import React from 'react'
import { Icon } from 'react-native-elements'
import ForYou from '@/components/ForYou'
import { router } from 'expo-router'
import { useState } from 'react'
import RedirectPage from '@/components/RedirectPage'


const Checkout = () => {

    const [isVisable, setIsVisable] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
            <View style={styles.navBar}>
                
                <NavBar/>
                <Image
                    style={{ margin: 30, marginTop: 100, borderRadius:  10 }}
                    source={require("../../assets/images/Maps.png")}
                />
                <View style={{ display :'flex', flexDirection :'row', alignItems : 'center', marginLeft : 30}}>
                <Icon name="home" type="font-awesome" size={20} style={{ borderRadius: 5, padding:5}} />
                    <Text>NYC, Board....</Text>
                </View>
            </View>

            <View style={{ backgroundColor : '#F5CB58', marginTop :10}}>
            <View style={[styles.flex,{padding: 20}]}>
          <Image
            style={{
              height: 100,
              width: 100,
              objectFit: "cover",
              borderRadius: 10,
            }}
            source={require("../../assets/images/cart.png")}
          />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Hambuger</Text>
            <Text style={{ fontSize: 14 }}>No onions, extra chicken</Text>
            <View>
              <Text style={{ fontWeight: "bold", color: "#E95322" }}>
                50.000d
              </Text>
              <Text
                style={{
                  textDecorationLine: "line-through",
                  fontWeight: "bold",
                  color: "#9CA4AB",
                }}
              >
                70.000d
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.flex,
              {
                padding: 5,
                borderColor: "#9CA4AB",
                borderWidth: 1,
                borderRadius: 20,
                width: 80,
              },
            ]}
          >
            <TouchableHighlight
              onPress={() => {}}
              style={{
                padding: 5,
              }}
            >
              <Text>-</Text>
            </TouchableHighlight>
            <Text>01</Text>
            <TouchableHighlight
              onPress={() => {}}
              style={{
                padding: 5,
              }}
            >
              <Text>+</Text>
            </TouchableHighlight>
          </View>
            </View>
            <ForYou/>

            <View style={{backgroundColor :'#fff', height: 10}}></View>
            <View>
                <Text style={[styles.textCheckout]}>
                    Checkout detail
                </Text>
                <View style={{ display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent: 'space-between', margin: 10}}>
                    <Text  style={[styles.textCheckout, styles.textSecondary]}>Mastercard</Text>
                    <Icon name="arrow-right" type="font-awesome" size={17} color="black" />
                </View>
                <View style={{ display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent: 'space-between', margin: 10}}>
                    <Text  style={[styles.textCheckout, styles.textSecondary]}>Enter your Promotion code</Text>
                    <Icon name="arrow-right" type="font-awesome" size={17} color="black" />
                </View>
                <View style={{ display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent: 'space-between', margin: 10}}>
                    <Text  style={[styles.textCheckout, styles.textSecondary]}>Merchandise Subtotal</Text>
                    <Text style={{color :'#F87146'}}>23$</Text>
                </View>
                <View style={{ display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent: 'space-between', margin: 10}}>
                    <Text  style={[styles.textCheckout, styles.textSecondary]}>Shipping total</Text>
                    <Text style={{color :'#F87146'}}>1$</Text>
                </View>
                <View style={{ display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent: 'space-between', margin: 10}}>
                    <Text  style={[styles.textCheckout]}>Total Payment</Text>
                    <Text style={{color :'#F24822', fontWeight : 'bold'}}>24$</Text>
                </View>
            </View>
            <RedirectPage isCheckout={false} name="Checkout" path="/delivery"
            action={()=>{ setIsVisable(true)}}
            style={{
                
                marginTop:40
        }}/>
            </View>
        </View>

        <Modal
        visible={isVisable}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../../assets/images/partying-face.png')} style={styles.checkIcon} />
            <Text style={styles.modalTitle}>Ordered successfully</Text>
            <Text style={styles.modalMessage}>
              03456*****
            </Text>
          
            <TouchableOpacity style={styles.continueButton} onPress={()=>{router.push("/delivery")}}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#F5CB58',
        marginBottom: 60,
      },
      navBar:{
        backgroundColor: '#F5CB58',
        height: 300
      },
      flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      textCheckout:{
        color: '#fff',
        fontWeight : 'bold',
        fontSize : 18
      },
       textSecondary: {
        fontSize : 16,
         fontWeight : 'light'
       },
       modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius:   
     10,
        alignItems:   
     'center',
      },
      checkIcon: {
        width: 150,
        height: 150,
        marginBottom: 20,
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalMessage: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
      },

      continueButton: {
        backgroundColor: '#F87146',
        padding: 15,
        width: '100%',
        borderRadius: 10,
      },
      continueButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
      },
})