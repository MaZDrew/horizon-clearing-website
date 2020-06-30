import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './utils/i18n';
import * as serviceWorker from './serviceWorker';
import './index.css';

const Index = {
    initialize: async function () {
      let _promise = [];
      
      // initialize all required utils
      _promise.push(i18n.initialize());

      try {
        await Promise.all(_promise)
      } catch(e) {
        console.error('Index.initialize 1 or more dependencies failed to load.')
      }

      this.run();
    },
    run: function () {
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root'),
      );
    }
};

Index.initialize();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();