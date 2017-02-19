/**
 * Created by nam on 2/19/2017.
 */
import React , {Component} from 'react';
import {Text,StyleSheet,View,ListView,ToastAndroid} from 'react-native';
export default class App extends Component{
    constructor(props){
        super(props);
        this.ds123 = new ListView.DataSource({rowHasChanged:(r1,r2)=>{
            return r1!=r2;
        }});
    }
    URL='http://58a98a0207165e12007cb032.mockapi.io/json/Subject';

    getListData(){

        var data=fetch(this.URL);
        console.log(data);
        return [];
    }
    render(){
        return(
            <View>
                <ListView
                    dataSource={
                    this.ds123.cloneWithRows(this.getListData())
                }
                renderRow={(rowData)=>{
                    return (
                        <Text>{rowData.id}</Text>
                    )
                }}
                >
                </ListView>
            </View>
        );
    }
}