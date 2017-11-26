import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './Main'

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/dashboard' component={Main} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
