import React from 'react';
import TabNavigator from './navigator/TabNavigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from './componets/redux/reducers';
const store = createStore(reducers);
const App = () => (
  <Provider store={store}>
    <TabNavigator />
  </Provider>
);

export default App;
