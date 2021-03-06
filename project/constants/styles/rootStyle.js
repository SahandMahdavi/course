import EstyleSheet from 'react-native-extended-stylesheet';
import Colors from '../AppColors';
import Sizes from '../Sizes';
import Strings from '../Strings';
import AppColors from '../AppColors';

const rootStyles = EstyleSheet.create({
  _loader: {
    container: {
      zIndex: 9,
      backgroundColor: 'rgba(0,0,0,0.6)',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loaderContainer: {
      width: 90,
      height: 90,
      backgroundColor: Colors.whiteColor,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loaderImage: {
      width: 90,
      height: 90,
      borderRadius: 16,
    },
  },
  _splash: {
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.whiteColor,
    },
    image: {
      alignItems: 'center',
      width: 250,
      height: 100,
    },
    text: {
      fontSize: Sizes.textSizeEighteen,
      textAlign: 'center',
      color: Colors.backgroundColor,
      fontFamily: Strings.fontFamily,
    },
  },
  _register: {
    rootContainer: {
      flex: 1,
    },
    header: {
      backgroundColor: Colors.greenColor,
      borderBottomColor: Colors.greenColor,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.greenColor,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    registerBox: {
      flex: 1,
      marginLeft: 16,
      marginRight: 16,
    },
    registerTitle: {
      textAlign: 'center',
      marginTop: 32,
      fontSize: Sizes.textSizeTwentyTwo,
      fontFamily: Strings.fontFamily,
      color: Colors.whiteColor,
    },
    inputGroups: {
      marginTop: 24,
      paddingBottom: 16,
    },
    inputText: {
      marginTop: 16,
      textAlign: 'right',
      borderColor: Colors.lightGrey,
      backgroundColor: Colors.whiteColor,
      borderWidth: 1,
      borderRadius: 5,
      padding: 12,
      fontFamily: Strings.fontFamily,
      color: Colors.darkGrey,
    },
    registerButton: {
      textAlign: 'center',
      marginTop: 32,
      backgroundColor: Colors.blueColor,
      color: Colors.whiteColor,
      marginRight: 16,
      marginLeft: 16,
      borderRadius: 8,
      padding: 10,
      fontSize: Sizes.textSizeEighteen,
      elevation: 3,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
      fontFamily: Strings.fontFamily,
    },
  },
  _forgotPassword: {
    rootContainer: {
      flex: 1,
    },
    header: {
      backgroundColor: Colors.greenColor,
      borderBottomColor: Colors.greenColor,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.greenColor,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    forgotPassTitle: {
      textAlign: 'center',
      marginTop: 16,
      fontSize: Sizes.textSizeTwentyTwo,
      fontFamily: Strings.fontFamily,
      color: Colors.whiteColor,
    },
    forgotPassBox: {
      flex: 1,
      marginLeft: 16,
      marginRight: 16,
    },
    inputGroups: {
      marginTop: 24,
    },
    inputText: {
      marginTop: 16,
      textAlign: 'right',
      borderColor: Colors.lightGrey,
      backgroundColor: Colors.whiteColor,
      borderWidth: 1,
      borderRadius: 5,
      padding: 12,
      fontFamily: Strings.fontFamily,
      color: Colors.darkGrey,
    },
    sendButton: {
      textAlign: 'center',
      marginTop: 32,
      backgroundColor: Colors.blueColor,
      color: Colors.whiteColor,
      marginRight: 16,
      marginLeft: 16,
      borderRadius: 8,
      padding: 10,
      fontSize: Sizes.textSizeEighteen,
      elevation: 3,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
      fontFamily: Strings.fontFamily,
    },
  },
  _home: {
    headerTitle: {
      fontSize: Sizes.textSizeDefault,
      fontFamily: Strings.fontFamily,
      color: AppColors.darkGrey,
    },
    header: {
      backgroundColor: Colors.whiteColor,
      borderBottomColor: Colors.whiteColor,
      elevation: 5,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
    },
    container: {
      flex: 1,
      backgroundColor: AppColors.whiteColor,

    },
    newProductText: {
      fontSize: Sizes.textSizeDefault,
      fontFamily: Strings.fontFamily,
      color: AppColors.darkGrey,
      textAlign: 'right',
      marginTop: Sizes.marginDefault,
      marginRight: Sizes.marginDefault,
    },
    flatList: {
      paddingLeft: Sizes.paddingEight,
    },
    topCategoryRow: {
      marginTop: Sizes.marginDefault,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomCategoryRow: {
      marginTop: Sizes.marginDefault,
      marginBottom: Sizes.marginDefault,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryContainer: {
      flex: .5,
      alignItems: 'center',
    },
    categoryContent: {
      backgroundColor: Colors.whiteColor,
      borderRadius: 8,
      elevation: 3,
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
      padding: 8,
      alignItems: 'center',
    },
    image: {
      aspectRatio: 2 / 3,
    },
    categoryText: {
      width: 85,
      fontSize: Sizes.textSizeFourteen,
      fontFamily: Strings.fontFamily,
      color: Colors.darkGrey,
      textAlign: 'center',
      marginTop: Sizes.marginEight,
    },
  },
  _newProductDetails: {
    container: {
      flex: .5,
      backgroundColor: Colors.whiteColor,
      borderColor: Colors.whiteColor,
      borderWidth: 1,
      borderRadius: 8,
      elevation: 3,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
      marginTop: Sizes.marginEight,
      marginBottom: Sizes.marginEight,
      marginRight: Sizes.marginEight,
      marginLeft: Sizes.marginEight,
    },
    imageContainer: {
      flex: 1,
      marginTop: Sizes.marginEight,
      marginRight: Sizes.marginEight,
      marginLeft: Sizes.marginEight,
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 80,
      overflow: 'hidden',
      borderRadius: 8,
      aspectRatio: 3/2,
    },
    titleText: {
      fontSize: Sizes.textSizeTwelve,
      fontFamily: Strings.fontFamily,
      color: Colors.darkGrey,
      textAlign: 'right',
      marginTop: Sizes.marginDefault,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
    },
    priceText: {
      fontSize: Sizes.textSizeTwelve,
      fontFamily: Strings.fontFamily,
      color: Colors.lightGrey,
      textAlign: 'right',
      marginTop: Sizes.marginEight,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
    },
    detailsButton: {
      textAlign: 'center',
      backgroundColor: Colors.blueColor,
      marginTop: Sizes.marginDefault,
      marginRight: Sizes.marginDefault,
      marginBottom: Sizes.marginEight,
      marginLeft: Sizes.marginDefault,
      borderRadius: 8,
      padding: 10,
      fontSize: Sizes.textSizeEighteen,
      elevation: 3,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
      fontFamily: Strings.fontFamily,
    },
    detailsButtonText: {
      fontSize: Sizes.textSizeTwelve,
      fontFamily: Strings.fontFamily,
      color: Colors.whiteColor,
      textAlign: 'center',
    },
  },
  _productDetails: {
    container: {
      flex: 1,
      backgroundColor: Colors.whiteColor,
    },
    headerTitle: {
      fontSize: Sizes.textSizeDefault,
      fontFamily: Strings.fontFamily,
      color: AppColors.darkGrey,
    },
    header: {
      backgroundColor: Colors.whiteColor,
      borderBottomColor: Colors.whiteColor,
      elevation: 5,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
    },
    backIcon: {
      tintColor: Colors.darkGrey,
    },
    detailsContainer: {
      backgroundColor: Colors.whiteColor,
      marginTop: Sizes.marginDefault,
      marginBottom: Sizes.marginDefault,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
      elevation: 3,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
      borderRadius: 8,
    },
    imageContainer: {
      marginTop: Sizes.marginEight,
      marginRight: Sizes.marginEight,
      marginLeft: Sizes.marginEight,
      alignItems: 'center',
    },
    image: {
      width: '100%',
      aspectRatio: 3/2,
      borderRadius: 8,
      overflow: 'hidden'
    },
    titleText: {
      fontSize: Sizes.textSizeFourteen,
      fontFamily: Strings.fontFamily,
      color: Colors.darkGrey,
      textAlign: 'right',
      marginTop: Sizes.marginDefault,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
    },
    priceText: {
      fontSize: Sizes.textSizeFourteen,
      fontFamily: Strings.fontFamily,
      color: Colors.lightGrey,
      textAlign: 'right',
      marginTop: Sizes.marginEight,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
    },
    detailsButton: {
      textAlign: 'center',
      backgroundColor: Colors.blueColor,
      marginTop: Sizes.marginDefault,
      marginRight: Sizes.marginDefault,
      marginBottom: Sizes.marginEight,
      marginLeft: Sizes.marginDefault,
      borderRadius: 8,
      padding: 10,
      fontSize: Sizes.textSizeEighteen,
      elevation: 3,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
      fontFamily: Strings.fontFamily,
    },
    detailsButtonText: {
      fontSize: Sizes.textSizeTwelve,
      fontFamily: Strings.fontFamily,
      color: Colors.whiteColor,
      textAlign: 'center',
    },
  },
  _categoryDetails: {
    container: {
      flex: 1,
      backgroundColor: Colors.whiteColor,
    },
    headerTitle: {
      fontSize: Sizes.textSizeDefault,
      fontFamily: Strings.fontFamily,
      color: AppColors.darkGrey,
    },
    header: {
      backgroundColor: Colors.whiteColor,
      borderBottomColor: Colors.whiteColor,
      elevation: 5,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
    },
    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.whiteColor,
      borderWidth: 1,
      borderColor: Colors.lightGrey,
      borderRadius: 8,
      marginTop: Sizes.marginThirtyTwo,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
      paddingRight: 10,
    },
    searchIcon: {
      paddingRight: 10,
      paddingLeft: 10,
    },
    inputText: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      color: Colors.darkGrey,
      fontFamily: Strings.fontFamily,
      textAlign: 'right',
    },
    backIcon: {
      tintColor: Colors.darkGrey,
    },
    searchableFlatList: {
      flex: 1,
      flexDirection: 'column',
      marginRight: 8,
      marginLeft: 8,
    },
  },
  _profile: {
    headerTitle: {
      fontSize: Sizes.textSizeDefault,
      fontFamily: Strings.fontFamily,
      color: AppColors.darkGrey,
    },
    header: {
      backgroundColor: Colors.whiteColor,
      borderBottomColor: Colors.whiteColor,
      elevation: 5,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
    },
    container: {
      flex: 1,
      backgroundColor: AppColors.whiteColor,
      paddingBottom: Sizes.paddingDefault,
    },
    userImageContainer: {
      alignItems: 'center',
      marginTop: Sizes.marginDefault,
      marginBottom: Sizes.marginThirtyTwo,
    },
    userImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    textInputContainer: {
      marginTop: Sizes.marginDefault,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
    },
    inputText: {
      textAlign: 'right',
      borderColor: Colors.lightGrey,
      backgroundColor: Colors.whiteColor,
      borderWidth: 1,
      borderRadius: 8,
      padding: 12,
      fontFamily: Strings.fontFamily,
      color: Colors.darkGrey,
    },
    editProfileBtnContainer: {
      marginTop: Sizes.marginThirtyTwo,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
    },
    editProfileButton: {
      textAlign: 'center',
      backgroundColor: Colors.blueColor,
      color: Colors.whiteColor,
      borderRadius: 8,
      padding: Sizes.paddingEight,
      fontSize: Sizes.textSizeDefault,
      elevation: 3,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
      fontFamily: Strings.fontFamily,
    },
    drawer: {
      elevation: 3,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
    },
    drawerContainer: {
      flex: 1,
      backgroundColor: Colors.whiteColor,
      paddingTop: Sizes.paddingHundred,
    },
    drawerText: {
      fontSize: Sizes.textSizeDefault,
      fontFamily: Strings.fontFamily,
      color: Colors.darkGrey,
      textAlign: 'center',
      marginTop: Sizes.marginDefault,
    },
    modalContainer: {
      flex: 1,
      borderRadius: 10,
      paddingTop: Sizes.paddingThirtyTwo,
      backgroundColor: Colors.whiteColor,
      marginTop: Sizes.marginThirtyTwo,
      marginBottom: Sizes.marginThirtyTwo,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
      elevation: 5,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
    },
    supportTextInput: {
      marginTop: Sizes.marginDefault,
      textAlign: 'right',
      borderColor: Colors.lightGrey,
      borderWidth: 1,
      borderRadius: 8,
      padding: Sizes.paddingDefault,
      fontFamily: Strings.fontFamily,
      color: Colors.darkGrey,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
    },
    modalButtonsSection: {
      position: 'absolute',
      width: '100%',
      bottom: Sizes.marginThirtyTwo,
    },
    sendSupportBtnContainer: {
      marginTop: Sizes.marginThirtyTwo,
      marginRight: Sizes.marginDefault,
      marginLeft: Sizes.marginDefault,
    },
    cancelBtnContainer: {
      marginTop: Sizes.marginThirtyTwo,
      marginRight: Sizes.marginThirtyTwo,
      marginLeft: Sizes.marginThirtyTwo,
    },
    cancelButton: {
      textAlign: 'center',
      backgroundColor: Colors.pink,
      color: Colors.whiteColor,
      borderRadius: 8,
      padding: Sizes.paddingEight,
      fontSize: Sizes.textSizeDefault,
      elevation: 3,
      shadowColor: Colors.shadowColor,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.01,
      overflow: 'hidden',
      fontFamily: Strings.fontFamily,
    },
  },
  _shoppingList: {
    container: {
      flex: 1,
      backgroundColor: Colors.whiteColor,
    },
    flatList: {
      marginBottom: 8,
      marginTop: 8,
    },
    backIcon: {
      tintColor: Colors.darkGrey,
    },
  },
});

export default rootStyles;
