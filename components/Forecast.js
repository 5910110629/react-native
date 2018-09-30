import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
  render() {
    return (
      <View>
        <Text style = {styles.mainText}>{this.props.main}</Text>
        <Text style = {styles.descriptionText}>{this.props.description}</Text>
        <Text style = {styles.mainText}>{this.props.temp}<Text style = {styles.descriptionText}>°C</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingTop: 25 },
  mainText: {fontSize: 50, color: '#e6ffff' , textAlign: 'center', paddingTop: '5%'},
  descriptionText: {fontSize: 20, color: '#e6ffff', textAlign: 'center', paddingTop: '5%'}
});
