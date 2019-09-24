import React from 'react'
import ReactDOM from 'react-dom'
/*import { Provider } from 'react-redux'
import Store from './Store'*/
import App from './App'
import './Style.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // <Provider store={Store}>
        <App />
    // </Provider>,
    ,document.getElementById('root')
);

serviceWorker.register();
