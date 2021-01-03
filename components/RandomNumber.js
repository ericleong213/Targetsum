import React from 'react';

import PropTypes from 'prop-types';

import { Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

class RandomNumber extends React.Component {

  handlePress = () => {
    if(this.props.isDisabled(this.props.id)){ 
      return 
    } else {
      return this.props.onPress(this.props.id)
    }  
  }

  render() {
    return (
      <TouchableOpacity 
      style = {[styles.random,this.props.isDisabled && styles.disabled]} 
      onPress = {this.handlePress}>
        <Text>{this.props.number}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 5,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.3,
  },
});

export default RandomNumber;
