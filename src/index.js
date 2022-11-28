import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.min.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <HashRouter> {/*пока тут HashRouter чтоб на гите нормально работало*/}
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>

);

reportWebVitals();