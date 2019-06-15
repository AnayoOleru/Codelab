import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Search from '../Components/Search.Component';

export default class DevList extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Java Developers!</Text>
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 55,
    borderBottomColor: '#FFFFFF', 
    borderBottomWidth: 50,
  },
});
