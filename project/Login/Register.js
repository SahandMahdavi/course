import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import rootStyle from '../constants/styles/rootStyle';
import Loader from '../loader/Loader';
import {Header} from 'react-native-elements';
import {Parse} from 'parse/react-native.js';
import AsyncStorage from '@react-native-community/async-storage';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      familyName: '',
      password: '',
      phoneNumber: '',
      loadingVisible: false,
    };
  }

  static navigationOptions = {
    headerShown: null,
  };

  submitAndClear = () => {
    this.setState({
      username: '',
      familyName: '',
      password: '',
      phoneNumber: '',
    });
  };

  onRegisterButtonClick = () => {
    this.setState({loadingVisible: true});
    const {username} = this.state;
    const {email} = this.state;
    const {familyName} = this.state;
    const {phoneNumber} = this.state;
    const {password} = this.state;

    Parse.User.logOut();
    const user = new Parse.User();
    user.set('username', username.toString());
    user.set('email', email.toString());
    user.set('familyName', familyName.toString());
    user.set('phoneNumber', phoneNumber.toString());
    user.set('password', password.toString());
    // const result = user.signUp();

    // AsyncStorage.setItem('sessionToken', result.sessionToken);
    // AsyncStorage.setItem('userId', result.objectId);

    user.signUp().then((user) => {
      if (typeof document !== 'undefined') {
        document.write(`User signed up: ${JSON.stringify(user)}`);
      }
      console.log('=====User signed up', user);
      this.setState({loadingVisible: true});
      alert('کاربر با موفقیت ثبت شد');
      this.props.navigation.replace('Login');
    }).catch(error => {
      if (typeof document !== 'undefined') {
        document.write(`Error while signing up user: ${JSON.stringify(error)}`);
      }
      console.error('Error while signing up user', error);
      this.setState({loadingVisible: false});
      console.error('===Error while signing up user', error.message);
      if (error.message === 'Account already exists for this username.'){
        alert('این کاربر قبلا ثبت نام کرده');
      }
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
    return <View style={rootStyle._register.rootContainer}>

      <Header
        containerStyle={rootStyle._register.header}
        leftComponent={() => this.renderBackButtonImage()}

      />

      <View style={rootStyle._register.container}>
        <ScrollView style={rootStyle._register.registerBox}>
          <View style={rootStyle._register.inputGroups}>

            <View>
              <Text style={rootStyle._register.registerTitle}>ثبت نام</Text>
            </View>

            <TextInput style={rootStyle._register.inputText}
                       underlineColorAndroid="transparent"
                       placeholder="نام"
                       placeholderTextColor='#637581'
                       value={this.state.username}
                       onChangeText={(username) => this.setState({username})}
                       returnKeyType={'next'}
                       blurOnSubmit={false}
                       onSubmitEditing={() => this.familyNameRef.focus()}/>

            <TextInput style={rootStyle._register.inputText}
                       underlineColorAndroid="transparent"
                       placeholder="نام خانوادگی"
                       placeholderTextColor='#637581'
                       value={this.state.familyName}
                       onChangeText={(familyName) => this.setState({familyName})}
                       ref={familyNameRef => this.familyNameRef = familyNameRef}
                       onSubmitEditing={() => this.emailRef.focus()}
                       blurOnSubmit={false}
                       returnKeyType={'next'}/>

            <TextInput style={rootStyle._register.inputText}
                       underlineColorAndroid="transparent"
                       keyboardType={'email-address'}
                       placeholder="لطفا ایمیل خود را وارد کنید"
                       placeholderTextColor='#637581'
                       value={this.state.email}
                       onChangeText={(email) => this.setState({email})}
                       ref={emailRef => this.emailRef = emailRef}
                       onSubmitEditing={() => this.phoneNumberRef.focus()}
                       blurOnSubmit={false}
                       returnKeyType={'next'}/>

            <TextInput style={rootStyle._register.inputText}
                       underlineColorAndroid="transparent"
                       keyboardType={'phone-pad'}
                       placeholder="لطفا شماره موبایل خود را وارد کنید"
                       placeholderTextColor='#637581'
                       value={this.state.phoneNumber}
                       onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                       ref={phoneNumberRef => this.phoneNumberRef = phoneNumberRef}
                       onSubmitEditing={() => this.passwordRef.focus()}
                       blurOnSubmit={false}
                       returnKeyType={'next'}/>


            <TextInput style={rootStyle._register.inputText}
                       underlineColorAndroid="transparent"
                       secureTextEntry={true}
                       placeholder="لطفا رمز عبور خود را وارد کنید"
                       placeholderTextColor='#637581'
                       value={this.state.password}
                       onChangeText={(password) => this.setState({password})}
                       ref={passwordRef => this.passwordRef = passwordRef}
                       returnKeyType='done'/>

            <TouchableOpacity
              onPress={this.onRegisterButtonClick}
              activeOpacity={0.8}>
              <Text style={rootStyle._register.registerButton}>ثبت نام</Text>
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
