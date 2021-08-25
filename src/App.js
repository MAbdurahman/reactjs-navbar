import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

export default function App() {
	return (
		<Router>
			<main>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/about' exact>
						<About />
					</Route>
					<Route path='/services' exact>
						<Services />
					</Route>
					<Route path='/portfolio' exact>
						<Portfolio />
					</Route>
					<Route path='/contact' exact>
						<Contact />
					</Route>
          <Redirect to='/' />
				</Switch>
			</main>
		</Router>
	);
}
