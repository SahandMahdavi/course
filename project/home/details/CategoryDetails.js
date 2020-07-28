import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import rootStyle from '../../constants/styles/rootStyle';
import {Header} from 'react-native-elements';
const Parse = require('parse/react-native.js');
import NewProductData from '../data/NewProductData';
import SearchableFlatList from 'react-native-searchable-list/src/SearchableFlatList';

export default class CategoryDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      listData: [],
      searchAttribute: 'title',
      ignoreCase: true,
      searchTerm: '',
      FlatListItems: [
        {
          image: 'https://radiokimiya.com/wp-content/uploads/2020/06/gold-gathering-300x170.png',
          title: 'پیراهن آستین کوتاه',
          price: '100.000 تومان',
        },
        {
          image: 'https://images.eu.christianlouboutin.com/media/catalog/product/cache/2/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/1/1/5/0/christianlouboutin-privatenumber-1150688_PK1A_1_1200x1200_1563531078.jpg',
          title: 'کفش زنانه',
          price: '100.000 تومان',
        },
        {
          image: 'https://cdn.childsplayclothing.co.uk/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/b/u/burberry_99651_1.jpg',
          title: 'کفش زنانه',
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
    const item = this.props.navigation.getParam('item');
    this.setState({
      data: item,
    });

    // Reading Parse Query
    const CategoryDetails = Parse.Object.extend('CategoryDetails');
    const query = new Parse.Query(CategoryDetails);
    query.equalTo('constant', item.constant);
    query.find().then((results) => {
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      if (typeof document !== 'undefined') {
        document.write(`===CategoryDetails found: ${JSON.stringify(results)}`);
      }
      console.log('CategoryDetails found', results);
      this.setState({
        listData: JSON.parse(JSON.stringify(results)),
      });
    }, (error) => {
      if (typeof document !== 'undefined') {
        document.write(`Error while fetching CategoryDetails: ${JSON.stringify(error)}`);
      }
      console.error('Error while fetching CategoryDetails', error);
    });
  }

  renderHeaderLeft = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.popToTop();
        }}>
        <Image
          style={rootStyle._categoryDetails.backIcon}
          source={require('../../constants/images/back.png')}/>
      </TouchableOpacity>
    );
  };

  renderHeaderText = () => {
    const {data} = this.state;
    return (
      <Text style={rootStyle._categoryDetails.headerTitle}>{data.title}</Text>
    );
  };

  renderNewProductItem(items) {
    return <NewProductData
      navigation={this.props.navigation}
      image={items.image}
      title={items.title}
      price={items.price}/>;
  }

  //this.state.FlatListItems
  render() {
    const {searchAttribute} = this.state;
    const {ignoreCase} = this.state;
    const {searchTerm} = this.state;
    const {listData} = this.state;
    return (
      <View style={rootStyle._categoryDetails.container}>
        {/*Header*/}
        <View>
          <Header
            containerStyle={rootStyle._categoryDetails.header}
            leftComponent={() => this.renderHeaderLeft()}
            centerComponent={() => this.renderHeaderText()}
          />
        </View>

        {/*Search Bar*/}
        <View
          style={rootStyle._categoryDetails.searchContainer}>
          <TextInput style={rootStyle._categoryDetails.inputText}
                     underlineColorAndroid="transparent"
                     keyboardType="email-address"
                     placeholder='جستجوی کالا'
                     placeholderTextColor='#637581'
                     blurOnSubmit={false}
                     onChangeText={searchTerm => this.setState({searchTerm})}/>
          <Image
            style={rootStyle._categoryDetails.searchIcon}
            source={require('../../constants/images/icn_search.png')}/>
        </View>

        {/*Flat List*/}
        {/*<ScrollView>*/}
          <View style={rootStyle._categoryDetails.searchableFlatList}>
            <SearchableFlatList
              data={listData}
              numColumns={2}
              renderItem={({item}) => this.renderNewProductItem(item)}
              searchAttribute={searchAttribute}
              searchTerm={searchTerm}
              ignoreCase={ignoreCase}
              keyExtractor={(item, index) => index.toString()}/>
          </View>
        {/*</ScrollView>*/}
      </View>
    );
  }
}
