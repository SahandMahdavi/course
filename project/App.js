/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EStyleSheet from 'react-native-extended-stylesheet';
// import AsyncStorage from '@react-native-community/async-storage';
// import Parse from "parse/react-native.js";
import Keys from '../constants/Keys';

import Splash from './splash/Splash';
import Login from './Login/Login';
import Register from './Login/Register';
import ForgotPassword from './Login/ForgotPassword';
import Main from './main/Main';

// const Parse = require('parse/react-native');
// // const {AsyncStorage} = require('react-native');
// // Parse.setAsyncStorage(AsyncStorage);
// Parse.serverURL = 'https://class-react.back4app.io';
// Parse.initialize(
//     'tRAzuwYGenZLCp5xWxPhNQBtXqIwyRQX5jkygeo6',
//     'HA937XK05Nj28PNUYP1IMN7SHzDnVuXgxlCeV4Q9',
// );

const Parse = require('parse/react-native');
const {AsyncStorage} = require('react-native');
Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'https://learnoos123.back4app.io';
Parse.initialize(
  '7WIfgHtqiKMkkMekN76zkLxeAicKYSHNXnWxvDfg',
  'eYOAA3r5or66360CXGZAX2dRVlZSIwzvaiJOk2RN',
);

EStyleSheet.build();

const MainNavigator = createStackNavigator({
    Splash: { screen: Splash },
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword: { screen: ForgotPassword },
    Main: { screen: Main },
});

const App = createAppContainer(MainNavigator);

export default App;
