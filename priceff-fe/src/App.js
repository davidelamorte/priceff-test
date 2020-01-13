import React from 'react';

// Redux
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import {configureStore} from './core/store';

import {ContentHandler} from 'components/entities/content-handler/content-handler';

const history = createBrowserHistory({
  basename: '/'
});
const store = configureStore({history});

function App() {
  return (
      <Provider store={store}>
        <ContentHandler history={history} />
      </Provider>
  );
}

export default App;