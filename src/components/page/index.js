// Core
import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';

const Page = ({ background, children, style, statusBarStyle, statusBarColor, barStyle, loading, ...props }) => (
  <View style={styles.container} {...props} >
    <View>
      <StatusBar barStyle={barStyle || 'dark-content'} backgroundColor={'#000000'} />
    </View>
    {children}
  </View>
);

Page.defaultProps = {
  background: undefined,
  style: undefined,
  statusBarStyle: undefined
};

export default Page;
