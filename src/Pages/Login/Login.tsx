import React from "react";
import { View,TextInput } from "react-native";

const Login = () => {
    return(
        <View>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Password"></TextInput>
        </View>
    );
}

export default Login;