// Import core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Image, View } from 'react-native';

// Import code
import { Page } from '../../components';
import { FadeUp, FadeDown } from '../../tools';

// Import assets
import logoHeader from '../../assets/image/logo-header.png';
import logoBottom from '../../assets/image/logo-bottom.png';

// Import Style
import styles from './styles';

class Welcome extends Component {

  componentDidMount = () => {
    setTimeout(() => this.props.setInit(true), 200);
  };

  render() {
    return (
      <Page style={styles.container}>
        <View style={styles.centerContent} >
          <FadeUp pose={this.props.init ? 'visible' : 'hidden'}>
            <Image style={styles.logoHeaderSize} source={logoHeader} />
          </FadeUp>
          <FadeDown pose={this.props.init ? 'visible' : 'hidden'}>
            <Image style={styles.logoBottomSize} source={logoBottom} />
          </FadeDown>
        </View>
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