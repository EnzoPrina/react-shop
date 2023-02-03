import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '../templates/Home';
import Login from '../templates/Login';
import RecoveryPassword from '../templates/RecoveryPassword';
import SendEmail from '../templates/SendEmail';
import NewPassword from '../templates/NewPassword';
import MyAccount from '../templates/MyAccount';
import CreateAccount from '../templates/CreateAccount';
import Checkout from '../templates/Checkout';
import Orders from '../templates/Orders';
import NotFound from '../templates/NotFound'
import AppContext from '../context/AppContext';
import '@styles/global.css';
import useInitialState from '../hooks/useInitialState';
import About from '../templates/About';

const App = () => {
	const InitialState = useInitialState();
	return (
		<AppContext.Provider value={InitialState}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/password-recovery" component={RecoveryPassword} />
						<Route exact path="/send-email" component={SendEmail} />
						<Route exact path="/new-password" component={NewPassword} />
						<Route exact path="/account" component={MyAccount} />
						<Route exact path="/signup" component={CreateAccount} />
						<Route exact path="/checkout" component={Checkout} />
						<Route exact path="/orders" component={Orders} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;