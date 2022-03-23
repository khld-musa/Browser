import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Browser from './Browser';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.browser}>
          <Browser/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  browser: {
    flex: 1,
    flexDirection: 'row'
  },
});
