import React from 'react';
import { View, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

const innerStyle = {
  defaultContainer: {
    height: 20,
    width: 20,
    border: 'black',
    borderWidth: 1,
    padding : 1,
  },
  defaultCheckBoxChecked: {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
  },
  defaultCheckBoxUnChecked: {
    border: 'blue',
    borderWidth: 2,
    width: '100%',
    height: '100%',
  }
};

const CheckBox = ({ checked, onPress, style = {}}) => (
  <View style={[innerStyle.defaultContainer, style.container]}>
    <TouchableHighlight onPress={() => onPress()}>
      {checked ? <View style={[innerStyle.defaultCheckBoxChecked, style.checked]}/> :  <View style={[innerStyle.defaultCheckBoxUnChecked, style.unChecked]}/> }
    </TouchableHighlight>
  </View>
);

export default CheckBox;