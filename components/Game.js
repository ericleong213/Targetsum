import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Button, StyleSheet } from 'react-native';

import RandomNumber from './RandomNumber';
import shuffle from 'lodash.shuffle';


class Game extends React.Component {

  state = {
    selectedIds: [],
  } 


  RandomNumbers = Array.from({ length: this.props.randomNumberCount}).map(
    () => Math.floor(1 + 10*Math.random())
  )

  target = this.RandomNumbers.slice(0,this.props.randomNumberCount -2).reduce((arr,curr) => arr+curr)
  
  isNumberSelected = (numberIndex) => {
    return this.state.selectedIds.indexOf(numberIndex) >= 0;
  };

  selectNumber = (numberIndex) => {
    this.setState((prevState) => ({
      selectedIds: [...prevState.selectedIds,numberIndex],}
      ));
  }

  componentDidMount(){
    
  }

  render() {
    
    return (
      <View style={styles.container}>     
        <Text style = {styles.target}>{this.target}</Text>
          <View style = {styles.randomContainer}>
            {this.RandomNumbers.map(
              (number,index) =>
            <RandomNumber 
            number = {number} 
            key = {index} 
            id = {index} 
            onPress = {this.selectNumber}
            isDisabled = {this.isNumberSelected(index)}           
            />
            )}
          </View>
          <Button title = {"selectedIds log on"} onPress = {() => console.log(this.state.selectedIds)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    flex: 1,
  },

  target: {
    fontSize: 50,
    margin: 50,
    textAlign: 'center',
  },

  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },

  STATUS_WON: {
    backgroundColor: 'green',
  },

  STATUS_LOST: {
    backgroundColor: 'red',
  },
});

export default Game;
