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
import {Parse} from "parse/react-native.js";
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

     onRegisterButtonClick = async () => {

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
