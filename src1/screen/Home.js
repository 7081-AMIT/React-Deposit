
import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity,onPress,Image } from 'react-native'







const Home = ({navigation}) => {
    return (

        

        <View style={styles.container}> 
            <Text>Third Screen</Text>
            <TouchableOpacity style={StyleSheet.Btn} onPress ={() =>navigation.navigate("Login") }>
                <Text>Click ME</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default Home;
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }
})
















