import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Fruit extends React.Component {
  render() {
    const { name } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.txtFruitName}>{name}</Text>
      </View>
    );
  }
}

var styles = require('../../components/fruit/fruit-styles');