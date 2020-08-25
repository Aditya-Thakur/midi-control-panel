import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/fullcalendar/dist/fullcalendar.min.js';
import { createStore ,combineReducers } from 'redux';
import  UIreducer from './store/reducers/reducer';
import  Tinyreducer from './store/reducers/TinychartReducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    ui_red:UIreducer,
    tiny_red:Tinyreducer
});
const store = createStore(rootReducer);
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
