import React from 'react';
import { StyleSheet } from 'react-native';

var fruitStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    height: 40,
    alignSelf: "stretch",
    marginTop: 2,
    borderRadius: 5,
    marginLeft: 1,
    marginRight: 1,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    padding: 5
  },
  txtFruitName: {
      fontWeight: 'bold'
  }
});

module.exports = fruitStyles;