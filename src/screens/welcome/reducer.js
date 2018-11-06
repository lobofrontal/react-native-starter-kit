import { state, reducer } from '@hookcompany/rematch-decorators';

class Reducer {
  @state init = false;

  @reducer
  setInit = (actualState, payload) => ({
    ...actualState,
    init: payload
  });
}

export default Reducer;
