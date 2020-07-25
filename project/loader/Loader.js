import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    View,
    Modal,
    Platform,
    ActivityIndicator,
} from 'react-native';
import Colors from '../constants/AppColors';
import styles from '../constants/styles/rootStyle';
import rootStyles from '../constants/styles/rootStyle';

export default class Loader extends Component {
    render() {
        const { animationType, modalVisible } = this.props;
        return (
            <Modal
                transparent={true}
                animationType={animationType}
                visible={modalVisible}>
                <View style={styles._loader.container}>
                    <View style={styles._loader.loaderContainer}>
                        <ActivityIndicator
                            color={Colors.blueColor}
                            animating={true}
                            size="large"
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

Loader.prototypes = {
    animationType: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired,
};
