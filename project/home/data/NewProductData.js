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

export default class NewProductData extends Component {
    render() {
        const { image, title, price } = this.props;
        const { navigate } = this.props.navigation;
        return (
            <View style={{
                flex: 1,
                borderRadius: 8,
                elevation: 5,
                shadowColor: Colors.shadowColor,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.01,
                overflow: 'hidden',
            }}>
                <View
                    style={{
                        marginTop: 8,
                        alignItems: 'center',
                    }}>
                    <Image
                        source={{ uri: image }} />
                </View>

                <View>
                    <Text
                        style={{
                            fontSize: Sizes.textSizeFourteen,
                            fontFamily: Strings.fontFamily,
                            color: AppColors.darkGrey,
                            textAlign: 'right',
                            marginTop: Sizes.marginEight,
                            marginRight: Sizes.marginEight,
                        }}>{title}</Text>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: Sizes.textSizeFourteen,
                            fontFamily: Strings.fontFamily,
                            color: Colors.lightGrey,
                            textAlign: 'right',
                            marginTop: Sizes.marginEight,
                            marginRight: Sizes.marginEight,
                        }}>{price}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={{
                            textAlign: 'center',
                            marginTop: Sizes.marginDefault,
                            backgroundColor: Colors.blueColor,
                            color: Colors.whiteColor,
                            marginRight: 16,
                            marginLeft: 16,
                            borderRadius: 8,
                            padding: 10,
                            fontSize: Sizes.textSizeEighteen,
                            elevation: 3,
                            shadowColor: Colors.shadowColor,
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.01,
                            overflow: 'hidden',
                            fontFamily: Strings.fontFamily
                        }}
                        activeOpacity={0.7}>
                        <Text style={{
                             fontSize: Sizes.textSizeDefault,
                             fontFamily: Strings.fontFamily,
                             color: Colors.whiteColor,
                        }}>مشاهده جزئیات</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
