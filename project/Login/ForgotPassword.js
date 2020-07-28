import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import rootStyle from '../constants/styles/rootStyle';
import Loader from '../loader/Loader';
import {Header} from 'react-native-elements';
import {Parse} from 'parse/react-native.js';

export default class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loadingVisible: false,
    };
  }

  static navigationOptions = {
    headerShown: null,
  };

  onForgotPassButtonClick = () => {
    this.setState({loadingVisible: true});
    const {email} = this.state;

    Parse.User.requestPasswordReset(email.toString()).then(() => {
      // Password reset request was sent successfully
      if (typeof document !== 'undefined') {
        document.write('Reset password email sent successfully');
      }
      console.log('Reset password email sent successfully');
        this.setState({loadingVisible: false});
        alert('ایمیل بازیابی رمز عبور برای شما ارسال شد.');
        this.props.navigation.replace('Login');
    }).catch((error) => {
      if (typeof document !== 'undefined') {
        document.write(`Error while creating request to reset user password: ${JSON.stringify(error)}`);
      }
      console.error('Error while creating request to reset user password', error);
        this.setState({loadingVisible: false});
    });
  };

  renderBackButtonImage = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.popToTop();
        }}>
        <Image
          source={require('../constants/images/back.png')}/>
      </TouchableOpacity>
    );
  };

  render() {
    const {loadingVisible} = this.state;
    return <View style={rootStyle._forgotPassword.rootContainer}>
      <Header
        containerStyle={rootStyle._forgotPassword.header}
        leftComponent={() => this.renderBackButtonImage()}

      />
      <View style={rootStyle._forgotPassword.container}>

        <ScrollView style={rootStyle._forgotPassword.forgotPassBox}>
          <View style={rootStyle._forgotPassword.inputGroups}>
            <View>
              <Text style={rootStyle._forgotPassword.forgotPassTitle}>فراموشی رمز عبور</Text>
            </View>

            <TextInput style={rootStyle._forgotPassword.inputText}
                       underlineColorAndroid="transparent"
                       keyboardType={'email-address'}
                       placeholder='لطفا ایمیل خود را وارد کنید'
                       placeholderTextColor='#637581'
                       value={this.state.email}
                       onChangeText={(email) => this.setState({email})}
                       blurOnSubmit={false}
                       ref={passwordRef => this.passwordRef = passwordRef}
                       returnKeyType='done'/>

            <TouchableOpacity
              onPress={this.onForgotPassButtonClick}
              activeOpacity={0.8}>
              <Text style={rootStyle._forgotPassword.sendButton}>ارسال اطلاعات</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Loader
          animationType="fade"
          modalVisible={loadingVisible}/>

      </View>
    </View>;
  }
}
