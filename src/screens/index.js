// Core
import { StackNavigator } from 'react-navigation';
// Scenes
import Welcome from './welcome';
// RootStack
const RootStack = StackNavigator({
    Welcome: { screen: Welcome }
}, {
  initialRouteName: 'Welcome',
  navigationOptions: { header: false }
}
);
export default RootStack;
