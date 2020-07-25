import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../constants/styles/login';
import Loader from '../loader/Loader';
import {Parse} from 'parse/react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this)
    this.state = {
      email: '',
      password: '',
      loadingVisible: false,
      result: '',
    };
  }

  static navigationOptions = {
    headerShown: null,
  };

  onLoginButtonClick = () => {
    this.setState({loadingVisible: true});
    const {email} = this.state;
    const {password} = this.state;
    Parse.User.logIn(email.toString(), password.toString()).then((user) => {
      // Do stuff after successful login
      if (typeof document !== 'undefined') {
        document.write(`Logged in user: ${JSON.stringify(user)}`);
      }
      console.log('=====Logged in user', user);
      this.setState({loadingVisible: false});
      this.props.navigation.replace('Main');
    }).catch(error => {
      if (typeof document !== 'undefined') {
        document.write(`Error while logging in user: ${JSON.stringify(error)}`);
      }
      console.error('Error while logging in user', error);
      this.setState({loadingVisible: false});
      alert('ورود با خطا مواجه شد')
    });
  };

  render() {
    const {loadingVisible} = this.state;
    return <View style={styles.container}>
      <ScrollView style={styles.loginBox}>
        <View style={styles.inputGroups}>

          <View>
            <Text style={styles.loginTitle}>ورود</Text>
          </View>
          <TextInput style={styles.inputText}
                     underlineColorAndroid="transparent"
                     keyboardType="email-address"
                     placeholder='لطفا ایمیل خود را وارد کنید'
                     placeholderTextColor='#637581'
                     value={this.state.email}
                     onChangeText={(email) => this.setState({email})}
                     returnKeyType={'next'}
                     blurOnSubmit={false}
                     onSubmitEditing={() => this.passwordRef.focus()}/>

          <TextInput style={styles.inputText}
                     underlineColorAndroid="transparent"
                     secureTextEntry={true}
                     placeholder="لطفا رمز عبور خود را وارد کنید"
                     placeholderTextColor='#637581'
                     value={this.state.password}
                     onChangeText={(password) => this.setState({password})}
                     ref={passwordRef => this.passwordRef = passwordRef}
                     returnKeyType='done'/>

          <TouchableOpacity
            onPress={this.onLoginButtonClick}
            activeOpacity={0.8}>
            <Text style={styles.loginButton}>ورود</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}
            activeOpacity={0.8}>
            <Text style={styles.registerButton}>ثبت نام</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
            activeOpacity={0.8}>
            <Text style={styles.forgetPassword}>فراموشی رمز عبور</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Loader
        animationType="fade"
        modalVisible={loadingVisible}/>
    </View>;
  }
}
