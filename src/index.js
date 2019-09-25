import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counter from './Store'
import App from './App'
import './Style.css'
import * as serviceWorker from './serviceWorker';

const store = createStore(counter)

const render = () => ReactDOM.render(
    // <Provider store={Store}>
    <App store={store}/>
    // </Provider>,
    ,document.getElementById('root')
);

render()
store.subscribe(render)
serviceWorker.register();
