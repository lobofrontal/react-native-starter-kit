import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigator from './screens';
import { View } from 'react-native';
import store from './configuration/rematch';

console.ignoredYellowBox = ['Warning: Each', 'Warning:', 'Possible Unhandled', 'Native TextInput'];

class App extends Component {
  state = { openedUpdateAlert: false }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}
export default App
