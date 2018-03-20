import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';


import store from './redux/store';
import VideoFondo from './components/media/unimag.mp4';

import Login from './containers/login';
import Prescidencia from './containers/tarjPrescidencia';
import Jurado from './containers/jurado';

const App = (
	<Provider store={store}>
		<div id="container-general" >
			<video autoPlay loop id="video-fondo" >
				<source src={VideoFondo} type="video/mp4" />
			</video>
			<Router>
				<div>
					<Route exact path="/" component={Login} />
					<Route path="/prescidente" component={Prescidencia} />
					<Route path="/jurado" component={Jurado} />
				</div>
			</Router>
		</div>
	</Provider>
);

export default App;
