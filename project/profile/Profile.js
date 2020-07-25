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

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.openDrawerProfile = this.openDrawerProfile.bind(this);
    this.state = {
      userName: 'sahand',
      familyName: 'mahdavi',
      phoneNumber: '09122222222',
      email: 'shnd@gmail.com',
      modalVisible: false,
      supportMessage: '',
    };
  }

  static navigationOptions = {
    headerShown: null,
  };

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
            onPress={() => this.props.navigation.navigate('Login')}
            activeOpacity={0.9}>
            <Text style={rootStyle._profile.drawerText}>خروج از برنامه</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    return (
      //https://github.com/root-two/react-native-drawer
      <Drawer
        side="right"
        type="static"
        content={drawer}
        openDrawerOffset={100}
        tapToClose={true}
        ref={_drawer => (this.drawerProfile = _drawer)}
        tweenHandler={Drawer.tweenPresets.parallax}>
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
                  source={require('../constants/images/user_image.png')}/>
              </View>

              {/*UserName Text Input*/}
              <View style={rootStyle._profile.textInputContainer}>
                <TextInput style={rootStyle._profile.inputText}
                           underlineColorAndroid="transparent"
                           value={this.state.userName}
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

              <View style={rootStyle._profile.textInputContainer}>
                <TextInput style={rootStyle._profile.inputText}
                           underlineColorAndroid="transparent"
                           keyboardType="email-address"
                           value={this.state.email}
                           onChangeText={(email) => this.setState({email})}
                           blurOnSubmit={false}/>
              </View>

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
                             value={this.state.supportMessage}
                             multiline={true}
                             numberOfLines={10}
                             onChangeText={(supportMessage) => this.setState({supportMessage})}
                             returnKeyType='done'/>
                </View>

                {/* Modal Buttons */}
                <View style={rootStyle._profile.modalButtonsSection}>
                  <View style={rootStyle._profile.sendSupportBtnContainer}>
                    <TouchableOpacity
                      onPress={() => alert('send support')}
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
        </View>
      </Drawer>

    );
  }
}
