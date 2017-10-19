import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Fruit from '../fruit/fruit';

export default class FruitBox extends React.Component {
  render() {
    const { fruits } = this.props
    return (
      <View style={styles.container}>
        <ScrollView>
            {
              fruits.map(f => (
                (<Fruit name={f}></Fruit>)
              ))
            }
        </ScrollView>
      </View>
    );
  }
}

var styles = require('../../components/fruitbox/fruitbox-styles');