/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginComponent from './components/loginComponent';

AppRegistry.registerComponent(appName, () => LoginComponent);
