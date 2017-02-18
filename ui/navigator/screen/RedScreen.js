/**
 * Created by nam on 2/19/2017.
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View,Button} from 'react-native';
export default class RedScreen extends Component {
    render() {
        return (
            <View style={{backgroundColor:'red', flex: 1}}>
                <Button onPress={this.props.onPress} title="Next to Yellow Screen"></Button>
            </View>
        );
    }
}