import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  FlatList, TouchableOpacity,
} from 'react-native';
import {Header} from 'react-native-elements';
import rootStyle from '../../constants/styles/rootStyle';
import Strings from '../../constants/Strings';

export default class ShoppingList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  static navigationOptions = {
    headerShown: null
  };

  renderHeaderLeft = () => {
      return(
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.popToTop();
          }}>
          <Image
            style={rootStyle._shoppingList.backIcon}
            source={require('../../constants/images/back.png')}/>
        </TouchableOpacity>
      );
  };

  renderHeaderText = () => {
    return(
      <Text style={rootStyle._profile.headerTitle}>{Strings.shoppingList}</Text>
    );
  };

  render() {
    return (
        <View style={rootStyle._shoppingList.container}>
          {/*Header*/}
          <View>
            <Header
              containerStyle={rootStyle._profile.header}
              leftComponent={() => this.renderHeaderLeft()}
              centerComponent={() => this.renderHeaderText()}
            />
          </View>

          {/*Flat List*/}
          <View>

          </View>
        </View>
    );
  }
}
