import React from "react";
import { Text,View,TextInput, StyleSheet, TouchableOpacity } from "react-native";

const Register = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.detailbox}>
                <View>
                    <Text style={styles.logintext}>Register Here</Text>
                </View>
                <View style={styles.input}>
                    <TextInput style={styles.textinput} placeholder="Name"/>
                    <TextInput style={styles.textinput} placeholder="Phone" />
                    <TextInput style={styles.textinput} placeholder="Email"/>
                    <TextInput style={styles.textinput} placeholder="Password" />
                </View>
                <View>
                    <TouchableOpacity style={styles.loginbtn}>
                        <Text style={styles.registertxt}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.regtxt}>Already have a Account? Login Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    input:{
        marginTop: 80,
        justifyContent: "center",
        alignItems: "center"

    },
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#6ac1f7'

    },
    detailbox:{
        flex: 0.7,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'

    },
    textinput:{
        height:50,
        width:250,
        margin: 10,
        borderRadius: 10,
        textAlign: 'center',
        borderWidth: 3,
        alignSelf: "center",
        
    },
    logintext:{
        fontWeight: "bold",
        fontSize: 50,
    },
    loginbtn:{
        width: 100,
        height:45,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
    },
    registertxt:{
        color: 'black',
    },
    regtxt:{
        marginTop:10,
        color: 'black',
    }
})

export default Register;