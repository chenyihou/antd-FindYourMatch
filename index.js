import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/components/App.js'
import configureStore from './src/store/configureStore.js'
import { Provider } from 'react-redux'

let store = configureStore()

const Root = () => (
    <Provider store={store}>
    <App/>
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));