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
import {Parse} from "parse/react-native.js";
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nameError: null,
            loadingVisible: false,
        };
    }

    static navigationOptions = {
        headerShown: null,
    };

    onLoginButtonClick = async() => {

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
