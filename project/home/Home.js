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
import Colors from '../constants/AppColors';
import Loader from '../loader/Loader';

// npm install parse --save

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loadingVisible: false,
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

  componentDidMount()  {
    this.setState({loadingVisible: true});
    fetch('https://class-react.back4app.io/classes/CategoryDetails', {
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
  };

  renderHeaderText = () => {
    return (
      <Text style={rootStyle._home.headerTitle}>{Strings.home}</Text>
    );
  };

  renderNewProductItem(items) {
    return <NewProductData
      navigation={this.props.navigation}
      objectId={items.objectId}
      image={items.image}
      title={items.title}
      price={items.price}/>;
  }

  render() {
    const {data} = this.state;
    const {FlatListStaticDta} = this.state;
    const MEN_SHIRT = 'MEN_SHIRT';
    const WOMEN_SHOE = 'WOMEN_SHOE';
    const MEN_SUIT = 'MEN_SUIT';
    const WOMEN_SUIT = 'WOMEN_SUIT';

    const {loadingVisible} = this.state;
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
                data={data.slice(0, 5)}
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
                        constant: MEN_SHIRT,
                      },
                    },
                  )}
                  activeOpacity={0.95}
                  style={rootStyle._home.categoryContainer}>
                  <View style={rootStyle._home.categoryContent}>
                    <Image
                      style={rootStyle._home.image}
                      source={require('../constants/images/shirt.png')}/>
                    <Text style={rootStyle._home.categoryText}>{Strings.menShirt}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('CategoryDetails',
                    {
                      item: {
                        title: 'کفش زنانه',
                        constant: WOMEN_SHOE,
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
                        constant: MEN_SUIT,
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
                        constant: WOMEN_SUIT,
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
        <Loader
          animationType="fade"
          modalVisible={loadingVisible}/>
      </View>
    );
  }
}
