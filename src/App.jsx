import { MainScreen } from './pages/main-screen';
import { Register } from './pages/register';
import { Home } from './pages/home';
import { Switch, Route } from 'react-router-dom';
import { ProductPage } from './pages/products';
import { Footer } from './components/footer';
import { Checkout } from './pages/checkout';
import { Cart } from './pages/cart';
import { Account } from './pages/account';
import { SignIn } from './pages/sign-in';
import { Admin } from './pages/admin';
import { Supplier } from './pages/suppliers';
import { Inventory } from './pages/inventory';
import { Employees } from './pages/employees';
import { Tracking } from './pages/tracking';
import { BudgetReport } from './pages/budget-report';

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
				<Route path="/checkout">
					<Checkout />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/account">
					<Account />
				</Route>
				<Route path="/signin">
					<SignIn />
				</Route>
				<Route path="/admin">
					<Admin />
				</Route>
				<Route path="/suppliers">
					<Supplier />
				</Route>
				<Route path="/inventory">
					<Inventory />
				</Route>
				<Route path="/employees">
					<Employees />
				</Route>
				<Route path="/tracking">
					<Tracking />
				</Route>
				<Route path="/budgetreport">
					<BudgetReport />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
