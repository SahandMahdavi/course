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
import Loader from '../../loader/Loader';
import ShoppingListData from './data/ShoppingListData';

export default class ShoppingList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loadingVisible: false,
    };
  }

  static navigationOptions = {
    headerShown: null
  };

  componentDidMount(): void {
    this.setState({loadingVisible: true});
    fetch('https://class-react.back4app.io/classes/Shopping', {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': 'tRAzuwYGenZLCp5xWxPhNQBtXqIwyRQX5jkygeo6',
        'X-Parse-REST-API-Key': 'ZLpDXRc2yCUAfbFZRnARrtYoiqOOiKbhOOoUf9pi',
      },
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson.results,
          loadingVisible: false,
        });
      }).catch((error) => {
      console.error(error.message);
      this.setState({loadingVisible: false});
    });
  }

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

  renderShoppingProduct(items) {
    return <ShoppingListData
      navigation={this.props.navigation}
      objectId={items.objectId}
      image={items.image}
      title={items.title}
      price={items.price}
      createdAt={items.createdAt}
      />;
  }

  render() {
    const{data} = this.state;
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
          {/*<View>*/}
            <FlatList
              style={rootStyle._shoppingList.flatList}
              data={data}
              renderItem={({item}) => this.renderShoppingProduct(item)}
              keyExtractor={(item, index) => index.toString()}/>
          {/*</View>*/}
        </View>
    );
  }
}
