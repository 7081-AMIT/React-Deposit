
import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity,onPress,Image } from 'react-native'







const Login = ({navigation}) => {
    return (

        

        <View style={styles.container}> 
            <Text>FOur Screen</Text>
            <TouchableOpacity style={StyleSheet.Btn} onPress ={() =>navigation.navigate("Google") }>
                <Text>Click ME</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default Login;
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }
})
















