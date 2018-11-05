// Core
import React, { Component } from 'react';
import { Page } from '../../components';
import styles from './styles';
import {
    Text,
  } from 'react-native';
class Welcome extends Component {
  render() {
    return (
      <Page style={styles.container}>
        <Text>Hello World</Text>
      </Page>
    );
  }
}

export default Welcome;
