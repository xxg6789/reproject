import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';

import './assets/css/base.css';
import './assets/css/style.css';
import './assets/css/bootstrap.css';

import App from './components/App';

import {Provider} from "react-redux"
import store from "./store";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}></Route>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);