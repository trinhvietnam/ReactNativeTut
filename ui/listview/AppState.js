/**
 * Created by nam on 2/19/2017.
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View, ListView, ToastAndroid,TouchableOpacity} from 'react-native';
var DATA = [];

export default class App extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {dataSource: this.ds.cloneWithRows(DATA)};
    }

    rowPressed(rowData) {
        ToastAndroid.show(JSON.stringify(rowData), ToastAndroid.SHORT);
    }

    renderRow(rowData) {
        return (
            <View style={{padding: 10}}>
                <TouchableOpacity onPress={()=>{this.rowPressed(rowData)}}>
                    <Text>{rowData.id}</Text>
                    <Text>{rowData.imageUrl}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                />
            </View>
        );
    }

    componentDidMount() {
        var URL = 'http://58a98a0207165e12007cb032.mockapi.io/json/Subject';
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                DATA = JSON.parse(request.responseText);
                this.setState({
                    dataSource: this.ds.cloneWithRows(DATA)
                })
            } else {
                console.warn('error');
            }
        };

        request.open('GET', URL);
        request.send();
    }
}