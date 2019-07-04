# ReactNativeLogin
<a href="https://imgflip.com/gif/34voh9"><img src="https://i.imgflip.com/34voh9.gif" title="made at imgflip.com"/></a>
## React Native İçin Gerekli Araçlar
NodeJS </br>
Java JDK </br>
Android Studio </br>
VS Code / Atom / WebStorm vs ..</br>

Daha sonra React Native Cli yüklenmeli. </br>
`npm install -g react-native-cli`</br>

Proje oluşturmak için;  </br>
`react-native init PrpjeName` </br>

 React Native projeyi çalıştırmak için;  
`react-native run-app`
## React Native Firebase Login
Proje oluşturduktan sonra Android platformuna Firebase eklenmeli. </br>
React Native uygulamasına react-native-firebase kütüphanesi yüklenmeli. </br>

`npm install --save react-native-firebase`</br>
`react-native link react-native-firebase`</br></br>
Android uygulamanızın proje build.gradle dosyasına gidip alttaki satırları dependencies alanına eklenmeli.</br>
`classpath 'com.google.gms:google-services:4.2.0'`</br></br>
App klasörünün altındaki build.gradle dosyasını açıp dosyanın en altına alttaki satır eklenmeli.</br>
```implementation "com.google.android.gms:play-services-base:16.1.0"
implementation "com.google.firebase:firebase-core:16.0.9"
implementation'com.google.firebase:firebase-auth:16.1.0'
implementation 'com.firebaseui:firebase-ui-auth:4.2.0'
```
### Firebase Register
```onRegister = () => {
  firebase.auth().createUserWithEmailAndPassword(this.state.typeEmail, this.state.typePassword)
  .then(() => {
    this.setState({user: loggedInUSer});
    alert('Register successfuly');
    console.log('Register with user: ${JSON.stringfy(loggedInUSer.toJSON())}');
  
  }).catch((error) => {
    console.log('Register fail with error: $(error)');
  });
}
```
### Firebase Login
```onLogin = () => {
  firebase.auth().signInWithEmailAndPassword(this.state.typeEmail, this.state.typePassword)
  .then((loggedInUser) => {
    alert('Giriş Başarılı. ');
    console.log('Login with user: ${JSON.stringfy(loggedInUser.toJSON())}');    

  }).catch((error) => {
    alert('Email veya Şifre yanlış. ');
    console.log('Login fail with error ${error}');
  });
}
```
### React Native Çalıştırmak
`react-native run-app`
