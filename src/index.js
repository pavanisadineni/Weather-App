import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './Reducers';
import Weather from './weather';
import thunk from 'redux-thunk';



const store=createStore(allReducers,applyMiddleware(thunk));//Contains Entire applications State


let rootElement=document.getElementById('root')

ReactDOM.render(<Provider store={store}>
<Weather/>
</Provider>
,rootElement);