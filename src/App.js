import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';


import store from './redux/store';

import Login from './containers/login';
import Prescidencia from './containers/tarjPrescidencia';

const App = (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Login} />
				<Route path="/prescidente" component={Prescidencia} />
			</div>
		</Router>
	</Provider>
);

export default App;
