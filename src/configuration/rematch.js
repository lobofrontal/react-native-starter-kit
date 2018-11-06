import init, { state } from '@hookcompany/rematch-decorators';

import { reducer as InitialReducer } from '../screens/welcome';

import Immutable from 'seamless-immutable';

// Global Reducer
class GlobalReducer {
  @state navigation = null;
  @state user = {};
  @state loading = false;
}

export default init({
  models: {
    global: new GlobalReducer(),
    initial: new InitialReducer()
  }
}, Immutable);
