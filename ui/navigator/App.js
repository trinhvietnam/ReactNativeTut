/**
 * Created by nam on 2/19/2017.
 */
import React, {Component} from 'react';
import {Text, StyleSheet, Viewk, Navigator} from 'react-native';
var Constants = require('./logic/Constants');
import RedScreen from './screen/RedScreen';
import YellowScreen from './screen/YellowScreen';
var Globals = require('./logic/Globals');
export default class App extends Component {
    renderScene(route, navigator) {
        Globals.title = new Date().toLocaleString();
        switch (route.name) {
            case Constants.RED_SCREEN:
                return (<RedScreen onPress={()=>{
                        navigator.push({name:Constants.YELLOW_SCREEN}
                    );
                }}/>);
                break;
            case Constants.YELLOW_SCREEN:
                return (<YellowScreen onPress={()=>{
                     navigator.pop({name:Constants.RED_SCREEN});
                }}/>);
                break;
        }

    }

    render() {
        return (
            <Navigator
                initialRoute={{name:Constants.RED_SCREEN}}
                renderScene={this.renderScene}
            >
            </Navigator>
        );
    }
}