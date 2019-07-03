import React, {Component} from 'react';
import {AppRegistry, FlatList, Image, Alert, TouchableOpacity, 
    Dimensions,TextInput,Platform,Animated, StyleSheet, Text, View} from 'react-native';

import firebase from 'react-native-firebase';
import { myWidth, myHeight } from '../utils';
import Logo from './Logo';
import imgLoading from '../images/loading.gif';
import * as colors from '../colors';


export default class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.unsubscriber = null;
    this.state = {
        isAuthenticated: false,
        isLoading: false,
        typeEmail: '',
        typePassword: '',
        user: null

    };

    this.buttonAnimated = new Animated.Value(0);
    this.onLogin = this.onLogin.bind(this);
}
/*componentDidMount(){
  //kullanıcı değiştiği zaman 
  this.unsubscriber = firebase.auth().onAuthStateChanged((changedUSer) => {
    this.setState({user: changedUser});
  });
}
componentWillUnmount(){
  if(this.unsubscriber){
    this.unsubscriber();
  }
}*/

//Buton animasyon için kullanılan method.
_animation(obj, toValue, duration) {
  Animated.timing(
      obj,
      {
          toValue,
          duration,
      }
  ).start();
}

// Firebase kayıt için kullanılan method.
onRegister = () => {
  firebase.auth().createUserWithEmailAndPassword(this.state.typeEmail, this.state.typePassword)
  .then(() => {
    this.setState({user: loggedInUSer});
    alert('Register successfuly');
    console.log('Register with user: ${JSON.stringfy(loggedInUSer.toJSON())}');
  
  }).catch((error) => {
    console.log('Register fail with error: $(error)');
  });

}

// Butona tıklandığında gerçekleşecek olaylar için kullanılan method.
onLogin = () => {
  //Buton animasyonu.
  if (this.state.isLoading) return;

        this.setState({ isLoading: true });
        this._animation(this.buttonAnimated, 1, 200);

        setTimeout(() => {
            this.setState({ isLoading: false });
            this._animation(this.buttonAnimated, 0, 200);
        }, 2000);

  // Firebase girişinin olup olmadığının kontrolü.
  firebase.auth().signInWithEmailAndPassword(this.state.typeEmail, this.state.typePassword)
  .then((loggedInUser) => {
    alert('Giriş Başarılı. ');
    console.log('Login with user: ${JSON.stringfy(loggedInUser.toJSON())}');    

  }).catch((error) => {
    alert('Email veya Şifre yanlış. ');
    console.log('Login fail with error ${error}');
  });
  
}

render() {
  const changeWidth = this.buttonAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [myWidth * 0.9, myHeight * 0.08],
});
  return (
    <View style={styles.container}>

      <Logo />
  
      <TextInput style={styles.textInput}
        keyboardType="Email"
        placeholder='Emailinizi giriniz.'
        autoCapitalize='none'
        onChangeText={
          (text) =>{
            this.setState({typeEmail: text});
          }
        }
        />
      <TextInput style={styles.textInput}
        keyboardType = 'default'
        placeholder = 'Şifrenizi giriniz.'
        secureTextEntry = {true}
        onChangeText  = {
          (text) => {
            this.setState({typePassword: text});
          }
        }
      />
      <Animated.View style={{width: changeWidth}}>
        <TouchableOpacity
          onPress={this.onLogin}
          activeOpacity={0.8}
          style={styles.btn}
        >
          { this.state.isLoading
            ? <Image source={imgLoading} style={styles.imgLoading}/>
            : <Text style={styles.txt}>GİRİŞ</Text>
          }
        </TouchableOpacity>
      </Animated.View>   
    </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6d6d6d',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},
  textInput: {
    width: myWidth * 0.9,
    height: myHeight * 0.08,
    borderRadius: myHeight * 0.04,
    paddingHorizontal: myWidth * 0.05,
    marginTop: 25,
    marginLeft:20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: 'gray',

  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: myHeight * 0.08,
    borderRadius: myHeight * 0.04,
    marginTop: 15,
    backgroundColor: colors.PRIMARY,
},
  txt: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: colors.BASIC,
},
  imgLoading: {
    width: myHeight * 0.08,
    height: myHeight * 0.08,
},

 
});

  