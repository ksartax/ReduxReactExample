import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Messages from './Messages';

class App extends React.Component {
    render() {
			return (
				<Provider store={store}>
					<Messages />
				</Provider>
			)
    }
}

ReactDOM.render( <App />, document.getElementById('examples'));