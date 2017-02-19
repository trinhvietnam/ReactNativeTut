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
    getListData(){
        var results=[];
        for (var i = 0; i < 100; i++) {
            results.push({tenGiangVien:'Mr. '+i,tenKhoaHoc:'Lập trình '+i});
        }
        return results;
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
                        <Text>{rowData.tenKhoaHoc}</Text>
                    )
                }}
                >
                </ListView>
            </View>
        );
    }
}