import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Href, router } from "expo-router";

interface PropsRedirect {
  name: string;
  path: Href;
  isCheckout: boolean;
  style: any;
  action?: () => void;
}

const RedirectPage = ({ name, path, isCheckout, style, action }: PropsRedirect) => {

  const handleAction = () =>{
    if(action){
      action() 
      router.push(path)
    }else{

      router.push(path)
    }
  }


  return (
    <View>
      {isCheckout ? (
        <TouchableOpacity
          style={[style, styles.mainButton]}
          onPress={() => router.push(path)}
        >
          <View style={styles.size}>
            <View><Text style={{color: '#000', fontSize :20, backgroundColor: '#fff', padding: 10, borderRadius: 50}}>x4</Text></View>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight : 'bold', marginLeft: 10}}>23$</Text>
          </View>
        
            <View style={styles.size}>
              <Text style={{
                color: '#fff', fontSize: 20, fontWeight : 'bold',
                marginRight: 10
              }}>{name}</Text>
              <Icon
                name="arrow-right"
                type="font-awesome"
                size={20}
                color="#fff"
                backgroundColor={"#e95322"}
                style={{}}
              />
            </View>
         
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.mainButton]}
          onPress={() => handleAction()}
        >
          <View style={{flex: 1, display: 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'center', padding :10}}>
          <Text style={{color :'#fff', fontWeight: 'bold'}}>{name}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RedirectPage;

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: "#F87146",
    borderRadius: 40,
    padding: 5,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  size: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
