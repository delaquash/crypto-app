import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import App from './App';
import 'antd/dist/antd.css';
import store from './app/store';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </React.StrictMode>  
);