import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
} from 'react-native';

import rootStyle from '../constants/styles/rootStyle';
import Strings from '../constants/Strings';
import {Parse} from 'parse/react-native';

export default class Splash extends Component {

  static navigationOptions = {
    headerShown: null,
  };

  componentDidMount() {
    setTimeout(() => {
      // Parse.User.currentAsync().then(user => {
      //   console.log('============User', user);
      //   if (user !== null) {
      //     this.props.navigation.replace('Main');
      //   } else {
      //     this.props.navigation.replace('Login');
      //   }
      // });
        this.props.navigation.replace('Main');
    }, 3000);
  }

  render() {
    return (
      <SafeAreaView style={rootStyle._splash.container}>
        <View>
          <Image style={rootStyle._splash.image}
                 source={require('../constants/images/logo.png')}/>
        </View>

        <View>
          <Text style={rootStyle._splash.text}>{Strings.storeName}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
