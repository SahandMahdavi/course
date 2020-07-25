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

// npm install parse --save

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      FlatListItems: [
        {
          image: 'https://radiokimiya.com/wp-content/uploads/2020/06/gold-gathering-300x170.png',
          title: 'پیراهن آستین کوتاه',
          price: '100.000 تومان',
        },
        {
          image: 'https://images.eu.christianlouboutin.com/media/catalog/product/cache/2/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/1/1/5/0/christianlouboutin-privatenumber-1150688_PK1A_1_1200x1200_1563531078.jpg',
          title: 'پیراهن آستین کوتاه',
          price: '100.000 تومان',
        },
        {
          image: 'https://cdn.childsplayclothing.co.uk/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/b/u/burberry_99651_1.jpg',
          title: 'پیراهن آستین کوتاه',
          price: '100.000 تومان',
        },
        {
          image: 'https://images.eu.christianlouboutin.com/media/catalog/product/cache/2/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/1/1/5/0/christianlouboutin-privatenumber-1150688_PK1A_1_1200x1200_1563531078.jpg',
          title: 'پیراهن آستین کوتاه',
          price: '100.000 تومان',
        },
      ],
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
      image={items.image}
      title={items.title}
      price={items.price}/>;
  }

  render() {
    const {data} = this.state;
    const {FlatListStaticDta} = this.state;
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
                style={rootStyle._home.flatList}
                data={this.state.FlatListItems}
                horizontal={true}
                maxToRenderPerBatch={2}
                renderItem={({item}) => this.renderNewProductItem(item)}
                keyExtractor={(item, index) => index.toString()}/>
            </View>

            <View>
              <Text style={rootStyle._home.newProductText}>{Strings.category}</Text>
            </View>

            <View>
              <View style={rootStyle._home.topCategoryRow}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('CategoryDetails',
                    {
                      item: {
                        title: 'پیراهن مردانه',
                      },
                    },
                  )}
                  activeOpacity={0.95}
                  style={rootStyle._home.categoryContainer}>
                  <View style={rootStyle._home.categoryContent}>
                    <Image
                      source={require('../constants/images/shirt.png')}/>
                    <Text style={rootStyle._home.categoryText}>{Strings.menShirt}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('CategoryDetails',
                    {
                      item: {
                        title: 'کفش زنانه',
                      },
                    },
                  )}
                  activeOpacity={0.95}
                  style={rootStyle._home.categoryContainer}>
                  <View style={rootStyle._home.categoryContent}>
                    <Image

                      source={require('../constants/images/womens_shoes.png')}/>
                    <Text style={rootStyle._home.categoryText}>{Strings.womenShoes}</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={rootStyle._home.bottomCategoryRow}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('CategoryDetails',
                    {
                      item: {
                        title: 'کت و شلوار',
                      },
                    },
                  )}
                  activeOpacity={0.95}
                  style={rootStyle._home.categoryContainer}>
                  <View style={rootStyle._home.categoryContent}>
                    <Image
                      source={require('../constants/images/mens_suit.png')}/>
                    <Text style={rootStyle._home.categoryText}>{Strings.menSuit}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('CategoryDetails',
                    {
                      item: {
                        title: 'کت و دامن',
                      },
                    },
                  )}
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
