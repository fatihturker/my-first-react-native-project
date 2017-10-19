import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FruitBox from './components/fruitbox/fruitbox';
export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      fruits: []
    }
  }

  componentWillMount() {
    this.loadFruits()
  }

  loadFruits() {
    var fruitsArr = []
    fruitsArr.push("Apple")
    fruitsArr.push("Orange")
    fruitsArr.push("Banana")
    this.setState({fruits: fruitsArr})
  }

  render() {
    return (
      <View style={styles.container}>
        <FruitBox fruits={this.state.fruits}></FruitBox>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
