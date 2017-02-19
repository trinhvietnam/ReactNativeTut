/**
 * Created by nam on 2/19/2017.
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View,Button} from 'react-native';
var Globals=require('../logic/Globals');
export default class YellowScreen extends Component {
    render() {
        console.log('render man hinh vang');
        return (
            <View style={{backgroundColor:'yellow', flex: 1, justifyContent: 'center'}}>
                <Button onPress={this.props.onPress} title={Globals.title}></Button>
            </View>
        );
    }
}