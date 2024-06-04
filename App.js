import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigationlearning from './Learning_Screen/navigator/stacknavigation';
import { persistor, store } from './src/Redux/Store/store';

 

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer> 
          <Navigationlearning />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
