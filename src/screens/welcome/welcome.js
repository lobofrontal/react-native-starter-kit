// Core
import React, { Component } from 'react';
import { Page } from '../../components';
import styles from './styles';
import { FadeUp, FadeDown } from '../../tools';
import { connect } from 'react-redux';

import {
    Text,
  } from 'react-native';
class Welcome extends Component {
  componentDidMount = () => {
    setTimeout(() => this.props.setInit(true), 200);
  };

  render() {
    return (
      <Page style={styles.container}>
        <FadeUp pose={this.props.init ? 'visible' : 'hidden'}>
          <Text>Hello World</Text>
        </FadeUp>
        <FadeDown pose={this.props.init ? 'visible' : 'hidden'}>
          <Text>Exemplo FadeDow</Text>
        </FadeDown>
      </Page>
    );
  }
}
const mapStateToProps = ({ initial, global }) => ({
  init: initial.init,
});

const mapDispatchToProps = ({ initial, global }) => ({
  setInit: payload => initial.setInit(payload),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);