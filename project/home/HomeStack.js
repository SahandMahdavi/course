import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './Home';
import ProductDetails from './details/ProductDetails';
import CategoryDetails from './details/CategoryDetails';

const HomeStack = createStackNavigator({
  Home: {screen: Home},
  ProductDetails: {screen: ProductDetails},
  CategoryDetails: {screen: CategoryDetails},
});

const stack = createAppContainer(HomeStack);

export default stack;
