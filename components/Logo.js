import React from 'react';
import { Image, StyleSheet } from 'react-native';
import imgLogo from '../images/logo.png';
import * as colors from '../colors';

const Logo = (props) => (
    
    <Image source={imgLogo} style={StyleSheet.img}/>
);

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 200,
        marginBottom:50,
        tintColor: colors.PRIMARYX,
    },
});

export default Logo;