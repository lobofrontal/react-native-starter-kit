// Core
import React, { Component } from 'react';
import { Page } from '../../components';
import styles from './styles';
import { FadeUp, FadeDown } from '../../tools';
import {
    Text,
  } from 'react-native';
class Welcome extends Component {
  render() {
    return (
      <Page style={styles.container}>
        <FadeUp pose={'visible'}>
          <Text>Hello World</Text>
        </FadeUp>
        <FadeDown pose={'visible'}>
          <Text>Exemplo FadeDow</Text>
        </FadeDown>
      </Page>
    );
  }
}

export default Welcome;