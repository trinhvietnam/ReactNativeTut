/**
 * Created by nam on 2/19/2017.
 */
import React , {Component} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import SectionCustomTText from './components/SectionCustomText';
export default class App extends Component{
    render(){
        return(
          <View>
              {/*<CustomText title="Custom Text Write By Nam Trinh Viet"/>*/}
              <SectionCustomTText title="Custom Text Write By Nam Trinh Viet"/>
          </View>
        );
    }
}
class CustomText extends Component{
    render(){
        return(
            <Text>{this.props.title}</Text>
        );
    }
}