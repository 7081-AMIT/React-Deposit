import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Regis = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={{flexDirection: 'row', marginVertical: 80}}>
        <Text style={{fontSize: 25, alignItems: 'baseline', color: 'white'}}>
          ←
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginHorizontal: 120,
            color: 'white',
          }}>
          Deposit
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/crown.png')}></Image>
        <Text style={{marginVertical: 20}}>--------</Text>
        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/crown.png')}></Image>
        <Text style={{marginVertical: 20}}>---------</Text>

        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/crown.png')}></Image>
      </View>
      <View style={styles.txt}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{margin: 20}}>
            ✅ You're Registered Almost there . Make A Deposit and Get Started
          </Text>
        </View>
      </View>
      <Text style={{margin: 30, fontSize: 18, color: 'white'}}>Choose One</Text>
      <View style={styles.banking}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banking}
            source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/dow.png')}></Image>

          <Text>Online Banking</Text>
        </View>
      </View>
    </View>
  );
};

export default Regis;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'purple',
    height: height * 1,
  },
  image: {
    height: 50,
    marginTop: 20,
    width: 50,
    borderRadius: 800,
    alignSelf: 'center',
    backgroundColor: 'green',
    marginHorizontal: 22,
  },
  txt: {
    borderRadius: 20,
    height: 80,
    width: width / 1.05,
    backgroundColor: '#7500D1',
    borderColor: 'white',
    margin: 10,
  },
  banking:{
      borderRadius:100,
      height:80,
      width:width/4,
      backgroundColor:'white'
  }
});
