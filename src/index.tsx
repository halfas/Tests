import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css';
import {
  applyPolyfills,
  defineCustomElements,
} from '@telekom/scale-components-neutral/loader';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));

applyPolyfills().then(() => {
  defineCustomElements();
});


reportWebVitals();
