import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store.getState())

root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CookiesProvider>
        <App />
        </CookiesProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
