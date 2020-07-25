import React, { Component } from 'react';
import {
    Image,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import ProfileStack from '../profile/ProfileStack';
import HomeStack from '../home/HomeStack';
import Strings from '../constants/Strings';
import AppColors from '../constants/AppColors';

const bottomNavigation = createBottomTabNavigator(
    {
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                title: 'پروفایل',
                headerShown: null,
                tabBarIcon: ({ tintColor }) =>
                    <Image
                        style={{
                            tintColor: tintColor,
                        }}
                        source={require('../constants/images/icn_profile.png')} />
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
                tabBarIcon: ({ tintColor }) =>
                    <Image
                        style={{
                            tintColor: tintColor,
                        }}
                        source={require('../constants/images/icn_home.png')} />,
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
            <AppContainer />
        );
    }
}
