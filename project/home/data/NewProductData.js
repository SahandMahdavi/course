import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import Colors from '../../constants/AppColors';
import Sizes from '../../constants/Sizes';
import Strings from '../../constants/Strings';
import rootStyle from '../../constants/styles/rootStyle';

export default class NewProductData extends Component {
    render() {
        const { image, title, price } = this.props;
        const { navigate } = this.props.navigation;
        return (
            <View style={rootStyle._newProductDetails.container}>
                <View
                    style={rootStyle._newProductDetails.imageContainer}>
                    <Image
                        source={{uri: 'https://radiokimiya.com/wp-content/uploads/2020/06/gold-gathering-300x170.png'}} />
                </View>

                <View>
                    <Text
                        style={rootStyle._newProductDetails.titleText}>{title}</Text>
                </View>
                <View>
                    <Text
                        style={rootStyle._newProductDetails.priceText}>{price}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={ () => navigate('ProductDetails',
                          {
                            item: {
                              image, title, price,
                            },
                          }
                          )}
                        style={rootStyle._newProductDetails.detailsButton}
                        activeOpacity={0.7}>
                        <Text style={rootStyle._newProductDetails.detailsButtonText}>مشاهده جزئیات</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
