import { StyleSheet } from 'react-native';
import Colors from '../AppColors';
import Sizes from '../Sizes';
import Strings from '../Strings';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.greenColor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loginBox: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
    },
    loginTitle: {
        textAlign: 'center',
        marginTop: 16,
        fontSize: Sizes.textSizeTwentyTwo,
        fontFamily: Strings.fontFamily,
        color: Colors.whiteColor,
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
        borderRadius: 8,
        padding: 12,
        fontFamily: Strings.fontFamily,
        color: '#000000',
    },
    loginButton: {
        textAlign: 'center',
        marginTop: 32,
        backgroundColor: Colors.blueColor,
        color: Colors.whiteColor,
        marginRight: 16,
        marginLeft: 16,
        borderRadius: 8,
        padding: 10,
        fontSize: 18,
        elevation: 3,
        shadowColor: Colors.shadowColor,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.01,
        overflow: 'hidden',
        fontFamily: Strings.fontFamily,
    },
    registerButton: {
        textAlign: 'center',
        marginTop: 16,
        backgroundColor: Colors.blueColor,
        color: Colors.whiteColor,
        marginRight: 16,
        marginLeft: 16,
        borderRadius: 8,
        padding: 10,
        fontSize: 18,
        elevation: 3,
        shadowColor: Colors.shadowColor,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.01,
        overflow: 'hidden',
        fontFamily: Strings.fontFamily,
    },
    forgetPassword: {
        textAlign: 'center',
        marginTop: 32,
        marginBottom: 16,
        color: Colors.whiteColor,
        fontSize: 18,
        fontFamily: Strings.fontFamily,
    },
});

export default styles;
