import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Quote = props => <Text style={styles.text}>{props.children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#ff9800',
    textAlign: 'center',
    padding: 5,
  },
});

export default Quote;
