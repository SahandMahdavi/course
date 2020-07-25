import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Strings from '../constants/Strings';
import rootStyle from '../constants/styles/rootStyle';
import {Header} from 'react-native-elements';
import NewProductData from './data/NewProductData';
import {Parse} from 'parse/react-native';
import Colors from '../constants/AppColors';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  static navigationOptions = {
    headerShown: null,
  };

  componentDidMount() {
    fetch('https://class-react.back4app.io/classes/NewProduct', {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': 'tRAzuwYGenZLCp5xWxPhNQBtXqIwyRQX5jkygeo6',
        'X-Parse-REST-API-Key': 'ZLpDXRc2yCUAfbFZRnARrtYoiqOOiKbhOOoUf9pi',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson.results,
          loadingVisible: false,
        });
      }).catch((error) => {
      console.error(error);
      this.setState({loadingVisible: false});
    });
  }

  renderHeaderText = () => {
    return (
      <Text style={rootStyle._home.headerTitle}>{Strings.home}</Text>
    );
  };

  renderNewProductItem(items) {
    return <NewProductData
      navigation={this.props.navigation}
      image={items.image.url}
      title={items.title}
      price={items.price}/>;
  }

  render() {
    const {data} = this.state;
    return (
      <View style={rootStyle._home.container}>
        <View>
          <Header
            containerStyle={rootStyle._home.header}
            centerComponent={() => this.renderHeaderText()}
          />
        </View>

        <ScrollView>
          <View>
            <View>
              <Text style={rootStyle._home.newProductText}>{Strings.newProduct}</Text>
            </View>
            <View>
              <FlatList
                data={data}
                horizontal={true}
                maxToRenderPerBatch={2}
                renderItem={({item}) => this.renderNewProductItem(item)}
                keyExtractor={(item, index) => index}/>
            </View>

            <View>
              <Text style={rootStyle._home.newProductText}>{Strings.category}</Text>
            </View>

            <View>
              <View style={rootStyle._home.categoryRow}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ForgotPassword')}
                  activeOpacity={0.95}
                  style={rootStyle._home.categoryContainer}>
                  <View style={rootStyle._home.categoryContent}>
                    <Image

                      source={require('../constants/images/shirt.png')}/>
                    <Text style={rootStyle._home.categoryText}>{Strings.menShirt}</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ForgotPassword')}
                  activeOpacity={0.95}
                  style={rootStyle._home.categoryContainer}>
                  <View style={rootStyle._home.categoryContent}>
                    <Image

                      source={require('../constants/images/womens_shoes.png')}/>
                    <Text style={rootStyle._home.categoryText}>{Strings.womenShoes}</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={rootStyle._home.categoryRow}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ForgotPassword')}
                  activeOpacity={0.95}
                  style={rootStyle._home.categoryContainer}>
                  <View style={rootStyle._home.categoryContent}>
                    <Image
                      source={require('../constants/images/mens_suit.png')}/>
                    <Text style={rootStyle._home.categoryText}>{Strings.menSuit}</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ForgotPassword')}
                  activeOpacity={0.95}
                  style={rootStyle._home.categoryContainer}>
                  <View style={rootStyle._home.categoryContent}>
                    <Image
                      source={require('../constants/images/womens_formal.png')}/>
                    <Text style={rootStyle._home.categoryText}>{Strings.womenSuit}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
