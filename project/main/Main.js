import React, {Component} from 'react';
import {
  Image,
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import ProfileStack from '../profile/ProfileStack';
import HomeStack from '../home/HomeStack';
import ShopMap from '../maps/mapView/ShopMap';
import Strings from '../constants/Strings';
import AppColors from '../constants/AppColors';

const bottomNavigation = createBottomTabNavigator(
  {
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        title: 'پروفایل',
        headerShown: null,
        tabBarIcon: ({tintColor}) =>
          <Image
            style={{
              tintColor: tintColor,
            }}
            source={require('../constants/images/icn_profile.png')}/>,
      },
    },
    ShopMap: {
      screen: ShopMap,
      navigationOptions: {
        title: 'نقشه',
        headerTitleStyle: {
          fontFamily: Strings.fontFamily,
        },
        headerShown: null,
        tabBarIcon: ({tintColor}) =>
          <Image
            style={{
              tintColor: tintColor,
                width: 25,
                height:20,
            }}
            source={require('../constants/images/icn_map.png')}/>,
      },
    },
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'خانه',
        headerTitleStyle: {
          fontFamily: Strings.fontFamily,
        },
        headerShown: null,
        tabBarIcon: ({tintColor}) =>
          <Image
            style={{
              tintColor: tintColor,
            }}
            source={require('../constants/images/icn_home.png')}/>,
      },
    },
  },
  {
    initialRouteName: 'Home',
    style: {
      fontFamily: Strings.fontFamily,
    },
    tabBarOptions: {
      activeTintColor: AppColors.greenColor,
      inactiveTintColor: AppColors.darkGrey,
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
      },
    },
  },
);
const AppContainer = createAppContainer(bottomNavigation);

export default class Main extends Component {

  static navigationOptions = {
    headerShown: null,
  };

  render() {
    return (
      <AppContainer/>
    );
  }
}
