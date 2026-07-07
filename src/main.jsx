import * as React from 'react';
import ReactDOM from 'react-dom/client';
// expose React as a global to avoid runtime reference issues in the
// production bundle (ensures `React` is available in all module scopes)
if (typeof window !== 'undefined') window.React = React;
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
