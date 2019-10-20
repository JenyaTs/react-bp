import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from './Calendar';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { initStore } from './store';
import { thisMonth } from './connectors/index';

const ConnectedCalendar = thisMonth(Calendar);

ReactDOM.render((
    <Provider store={initStore()}>
        <ConnectedCalendar />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
