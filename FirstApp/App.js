/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput,TouchableHighlight} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

    render() {
        return (

            <ImageBackground source={{uri: 'http://img15.3lian.com/2015/f2/128/d/132.jpg'}} style={styles.bjcss}>
                <Text style={styles.name1}>登录</Text>
                <TextInput style={styles.username} placeholder={'请输入用户名'} placeholderTextColor={"#fff"}/>
                <TextInput style={styles.password} placeholder={'请输入用户名'} placeholderTextColor={"#fff"}
                           secureTextEntry={true}/>

                <TouchableHighlight
                    style={styles.button}
                   >
                    <Text style={styles.loginbtntext}> 登录 </Text>
                </TouchableHighlight>
            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({

    bjcss: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: "100%",
        height: "100%",
    },
    name1: {
        fontSize: 25,
        fontWeight: "bold",
    },
    username: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 220,
    },
    password: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 220,
        marginTop: 10,
    },
    loginbtn: {
        width: 100,
        height: 30,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'red',

    },
    button: {
        marginTop: 10,
        padding: 10,
        backgroundColor:"blue",
        width:"40%",
        alignItems: 'center',
        borderRadius: 10,
    },
    loginbtntext: {
        color: 'white',
    }

});
