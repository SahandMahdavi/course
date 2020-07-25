import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Profile from './Profile';
import ShoppingList from './shoppingList/ShoppingList';

const ProfileStack = createStackNavigator({
  Profile: {screen: Profile},
  ShoppingList: {screen: ShoppingList},
});

const stack = createAppContainer(ProfileStack);

export default stack;
