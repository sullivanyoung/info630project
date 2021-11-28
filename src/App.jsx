import { MainScreen } from './pages/main-screen';
import { Register } from './pages/register';
import { Home } from './pages/home';
import { Switch, Route } from 'react-router-dom';
import { ProductPage } from './pages/products';
import { Footer } from './components/footer';

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<MainScreen />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/products">
					<ProductPage />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
