import React from 'react';
import Home from './navigator/TabNavigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from './componets/redux/reducers';
const store = createStore(reducers);
const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
