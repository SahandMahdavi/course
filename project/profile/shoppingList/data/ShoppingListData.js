import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image, ImageBackground,
} from 'react-native';
import Colors from '../../../constants/AppColors';
import Sizes from '../../../constants/Sizes';
import Strings from '../../../constants/Strings';
import rootStyle from '../../../constants/styles/rootStyle';

export default class ShoppingListData extends Component {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const {image, title, price, createdAt} = this.props;
    return (
      <ImageBackground
        style={{
          marginTop: Sizes.marginEight,
          marginBottom: Sizes.marginEight,
          marginRight: Sizes.marginDefault,
          marginLeft: Sizes.marginDefault,
          borderRadius: 8,
          borderTopWidth: 1,
          borderColor: Colors.whiteColor,
          elevation: 3,
          shadowColor: Colors.shadowColor,
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.01,
          overflow: 'hidden',
          padding: Sizes.paddingDefault,
        }}
        resizeMode={'cover'}
        source={require('../../../constants/images/dark_blue.jpg')}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
          <View style={{
            marginLeft: Sizes.marginEight,
            marginRight: Sizes.marginEight,
          }}>
            <View>
              <Text style={{
                marginLeft: Sizes.marginDefault,
                fontFamily: Strings.fontFamily,
                fontSize: Sizes.textSizeDefault,
                color: Colors.whiteColor,
                textAlign: 'right',
              }}>{title}</Text>
            </View>

            <View>
              <Text style={{
                marginLeft: Sizes.marginDefault,
                fontFamily: Strings.fontFamily,
                fontSize: Sizes.textSizeDefault,
                color: Colors.whiteColor,
                textAlign: 'right',
              }}>{price}</Text>
            </View>

            <View>
              <Text style={{
                marginLeft: Sizes.marginDefault,
                fontFamily: Strings.fontFamily,
                fontSize: Sizes.textSizeDefault,
                color: Colors.whiteColor,
                textAlign: 'right',
              }}>{createdAt}</Text>
            </View>
          </View>

          <View style={{
            borderRadius: 8,
            overflow: 'hidden',
            flex: 1
          }}>
            <Image
              style={{
                aspectRatio: 2/3,
              }}
              source={{uri: image}}/>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
