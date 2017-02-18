/**
 * Created by nam on 2/19/2017.
 */
import React,{Component} from 'react';
import {
    Text
} from 'react-native';
export default  class SectionCustomText extends Component{
    render(){
        return(
            <Text>{this.props.title}</Text>
        );
    }
}
SectionCustomText.propType={
    title: React.PropTypes.string
}