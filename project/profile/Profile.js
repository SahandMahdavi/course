import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking, Modal,
} from 'react-native';
import rootStyle from '../constants/styles/rootStyle';
import {Header} from 'react-native-elements';
import Strings from '../constants/Strings';
import Drawer from 'react-native-drawer';
import Loader from '../loader/Loader';
import Colors from '../constants/AppColors';
const Parse = require('parse/react-native.js');

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.openDrawerProfile = this.openDrawerProfile.bind(this);
    this.state = {
      username: '',
      familyName: '',
      phoneNumber: '',
      email: '',
      userImage: '',
      supportMessage: '',
      modalVisible: false,
      loadingVisible: false,
    };
  }

  static navigationOptions = {
    headerShown: null,
  };

  componentDidMount() {
    const user = Parse.User.current();
    const id = user.id;
    console.log('=====User Id', id);
    fetch(`https://class-react.back4app.io/users/${id}`, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': 'tRAzuwYGenZLCp5xWxPhNQBtXqIwyRQX5jkygeo6',
        'X-Parse-REST-API-Key': 'ZLpDXRc2yCUAfbFZRnARrtYoiqOOiKbhOOoUf9pi',
      },
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson,
          userImage: responseJson.userImage.url,
          username: responseJson.username,
          familyName: responseJson.familyName,
          phoneNumber: responseJson.phoneNumber,
          // email: responseJson.email,
        });
      }).catch((error) => {
      console.error(error);
      this.errorMessage('پیغام سیستم', 'خطا در برقراری ارتباط با سرور');
    });
  }

  openDrawerProfile() {
    this.drawerProfile.openDrawer();
  }

  openControlPanel = () => {
    this.drawerProfile.open();
  };

  // Support Modal
  // Check state
  openModal() {
    this.setState({modalVisible: true});
  }

  closeModal() {
    this.setState({modalVisible: false});
  }

  //Logout
  onLogoutClick = () => {
    this.setState({loadingVisible: true});
    Parse.User.logOut().then(
      (success) => {
        console.log('======successfully logged out', success.message);
        const user = Parse.User.current();
        console.log('Parse User is now: ', user);  //the same user!!
        this.setState({loadingVisible: false});
        //To reload the app
        DevSettings.reload();
      },
      (error) => {
        console.log('error logging out.');
        this.setState({loadingVisible: false});
      });
  };

  //Support Modal Button
  sendSupport = () => {
    if (this.state.supportMessage === '') {
      alert('لطفا پیام خود را بنویسید!!');
    } else {
      this.setState({loadingVisible: true});
      const data = {
        'supportMessage': this.state.supportMessage,
      };
      fetch('https://class-react.back4app.io/classes/Support', {
        method: 'POST',
        headers: {
          'X-Parse-Application-Id': 'tRAzuwYGenZLCp5xWxPhNQBtXqIwyRQX5jkygeo6',
          'X-Parse-REST-API-Key': 'ZLpDXRc2yCUAfbFZRnARrtYoiqOOiKbhOOoUf9pi',
        },
        body: JSON.stringify(data),
      }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({loadingVisible: false});
          this.closeModal();
          alert('پیام شما با موفقیت ثبت شد');
        }).catch((error) => {
        console.error(error);
        this.setState({loadingVisible: false});
        alert('خطا در برقراری ارتباط با سرور');
      });
    }
  };

  renderHeaderLeft = () => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('ShoppingList')}
        activeOpacity={0.9}>
        <Image
          source={require('../constants/images/icn_product_list.png')}/>
      </TouchableOpacity>
    );
  };

  renderHeaderText = () => {
    return (
      <Text style={rootStyle._profile.headerTitle}>{Strings.profile}</Text>
    );
  };

  renderHeaderRight = () => {
    return (
      <TouchableOpacity
        onPress={() => this.openControlPanel()}
        activeOpacity={0.9}>
        <Image
          source={require('../constants/images/icn_menu.png')}/>
      </TouchableOpacity>

    );
  };

  render() {
    const {loadingVisible} = this.state;
    //Drawer Data
    const drawer = (
      <View style={rootStyle._profile.drawerContainer}>
        <View>
          <TouchableOpacity
            onPress={() => this.openModal()}
            activeOpacity={0.9}>
            <Text style={rootStyle._profile.drawerText}>ارسال نظر</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://google.com/')}
            activeOpacity={0.9}>
            <Text style={rootStyle._profile.drawerText}>مشاهده وبسایت</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={this.onLogoutClick}
            activeOpacity={0.9}>
            <Text style={rootStyle._profile.drawerText}>خروج از برنامه</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    return (
      // tweenHandler={Drawer.tweenPresets.parallax} ===> use if type is not displace
      //https://github.com/root-two/react-native-drawer
      <Drawer
        side="right"
        type={'overlay'}
        open={false}
        content={drawer}
        openDrawerOffset={100}
        tapToClose={true}
        styles={rootStyle._profile.drawer}
        ref={_drawer => (this.drawerProfile = _drawer)}>
        <View style={rootStyle._profile.container}>
          <View>
            <Header
              containerStyle={rootStyle._profile.header}
              leftComponent={() => this.renderHeaderLeft()}
              centerComponent={() => this.renderHeaderText()}
              rightComponent={() => this.renderHeaderRight()}
            />
          </View>

          <ScrollView>
            <View>
              {/*User Image*/}
              <View style={rootStyle._profile.userImageContainer}>
                <Image
                  style={rootStyle._profile.userImage}
                  source={{uri: this.state.userImage}}/>
              </View>

              {/*UserName Text Input*/}
              <View style={rootStyle._profile.textInputContainer}>
                <TextInput style={rootStyle._profile.inputText}
                           underlineColorAndroid="transparent"
                           value={this.state.username}
                           onChangeText={(userName) => this.setState({userName})}
                           blurOnSubmit={false}/>
              </View>

              {/*FamilyName Text Input*/}
              <View style={rootStyle._profile.textInputContainer}>
                <TextInput style={rootStyle._profile.inputText}
                           underlineColorAndroid="transparent"
                           value={this.state.familyName}
                           onChangeText={(familyName) => this.setState({familyName})}
                           blurOnSubmit={false}/>
              </View>

              {/*PhoneNumber Text Input*/}
              <View style={rootStyle._profile.textInputContainer}>
                <TextInput style={rootStyle._profile.inputText}
                           underlineColorAndroid="transparent"
                           value={this.state.phoneNumber}
                           onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                           blurOnSubmit={false}/>
              </View>

              {/*Email Text Input*/}
              {/*<View style={rootStyle._profile.textInputContainer}>*/}
              {/*  <TextInput style={rootStyle._profile.inputText}*/}
              {/*             underlineColorAndroid="transparent"*/}
              {/*             keyboardType="email-address"*/}
              {/*             value={this.state.email}*/}
              {/*             onChangeText={(email) => this.setState({email})}*/}
              {/*             blurOnSubmit={false}/>*/}
              {/*</View>*/}

              {/*Edit Profile Button*/}
              <View style={rootStyle._profile.editProfileBtnContainer}>
                <TouchableOpacity
                  onPress={this.onRegisterButtonClick}
                  activeOpacity={0.8}>
                  <Text style={rootStyle._profile.editProfileButton}>{Strings.editProfile}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {/*Modal*/}
          <View>
            <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              transparent={true}
              presentationStyle={'overFullScreen'}
              onRequestClose={() => this.closeModal()}>
              <View style={rootStyle._profile.modalContainer}>
                <View>
                  <TextInput style={rootStyle._profile.supportTextInput}
                             underlineColorAndroid="transparent"
                             placeholderTextColor='#637581'
                             placeholder="لطفا انتقاد یا پیشنهاد خود را وارد کنید"
                             textAlignVertical={'top'}
                             value={this.state.message}
                             multiline={true}
                             numberOfLines={10}
                             onChangeText={(supportMessage) => this.setState({supportMessage})}
                             returnKeyType='done'/>
                </View>

                {/* Modal Buttons */}
                <View style={rootStyle._profile.modalButtonsSection}>
                  <View style={rootStyle._profile.sendSupportBtnContainer}>
                    <TouchableOpacity
                      onPress={this.sendSupport}
                      activeOpacity={0.8}>
                      <Text style={rootStyle._profile.editProfileButton}>{Strings.sendSupport}</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={rootStyle._profile.cancelBtnContainer}>
                    <TouchableOpacity
                      onPress={() => this.closeModal()}
                      activeOpacity={0.8}>
                      <Text style={rootStyle._profile.cancelButton}>{Strings.cancel}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <Loader
            animationType="fade"
            modalVisible={loadingVisible}/>
        </View>
      </Drawer>
    );
  }
}
