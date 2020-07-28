import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import rootStyle from '../../constants/styles/rootStyle';
import {Header} from 'react-native-elements';
import Strings from '../../constants/Strings';
const Parse = require('parse/react-native.js');

export default class ProductDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: '',
    };
  }

  static navigationOptions = {
    headerShown: null,
  };

  componentDidMount() {
    const item = this.props.navigation.getParam('item');
    this.setState({
      item: item,
    });
  }

  //Shopping Button
  onShoppingButtonClicked = () => {
    const {item} = this.state;
    const user = Parse.User.current();
    const id = user.id;
    console.log('=====User Id', id);

    const data = {
      "userId": id,
      "image": item.image,
      "title": item.title,
      "price": item.price,
    };
    fetch('https://class-react.back4app.io/classes/Shopping', {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': 'tRAzuwYGenZLCp5xWxPhNQBtXqIwyRQX5jkygeo6',
        'X-Parse-REST-API-Key': 'ZLpDXRc2yCUAfbFZRnARrtYoiqOOiKbhOOoUf9pi',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        alert('خرید شما با موفقیت ثبت شد');
      }).catch((error) => {
      console.error(error);
      this.errorMessage('پیغام سیستم', 'خطا در برقراری ارتباط با سرور');
    });
  };

  renderHeaderLeft = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.popToTop();
        }}>
        <Image
          style={rootStyle._productDetails.backIcon}
          source={require('../../constants/images/back.png')}/>
      </TouchableOpacity>
    );
  };

  renderHeaderText = () => {
    const {item} = this.state;
    return (
      <Text style={rootStyle._productDetails.headerTitle}>{item.title}</Text>
    );
  };

  render() {
    const {item} = this.state;
    return (
      <View style={rootStyle._productDetails.container}>
        {/*Header*/}
        <View>
          <Header
            containerStyle={rootStyle._productDetails.header}
            leftComponent={() => this.renderHeaderLeft()}
            centerComponent={() => this.renderHeaderText()}
          />
        </View>

        {/*Details List*/}
        <ScrollView>
          <View style={rootStyle._productDetails.detailsContainer}>
            <View>
              <Text style={rootStyle._productDetails.titleText}>{item.title}</Text>
            </View>

            <View>
              <Text style={rootStyle._productDetails.priceText}>{item.price}</Text>
            </View>

            <View style={rootStyle._productDetails.imageContainer}>
              <Image
                style={rootStyle._productDetails.image}
                source={{uri: item.image}}/>
            </View>

            <View>
              <TouchableOpacity
                onPress={this.onShoppingButtonClicked}
                style={rootStyle._productDetails.detailsButton}
                activeOpacity={0.7}>
                <Text style={rootStyle._productDetails.detailsButtonText}>{Strings.shop}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
