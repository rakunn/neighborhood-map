import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const render = () => {
  console.log(store.getState());
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();

store.subscribe(render);

registerServiceWorker();

