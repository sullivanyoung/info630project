import Logo from '../images/logo.png';
import Cart from '../images/cart.png';
import { Link } from 'react-router-dom';
import LocationIcon from '../images/location-icon.png';

const navigation = [
	{ name: 'Home', href: '/home', current: true },
	{ name: 'Products', href: '/products', current: false },
	{ name: 'Online Order', href: '#', current: false },
	{ name: 'Find a Store', href: '#', current: false },
];

export const Navbar = ({ count }) => {
	return (
		<>
			<div className="flex bg-green-500 fixed full w-full">
				<div className="flex py-2 justify-between">
					<a href="/">
						<img src={Logo} alt="logo" className="h-10 w-25" />
					</a>
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={
								'hover:bg-green-700 text-white text-lg hover:underline px-3 py-2 rounded-md text-sm font-medium'
							}
							aria-current={item.current ? 'page' : undefined}
						>
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:p-2 lg:w-8/12 lg:flex lg:justify-end">
					<a
						key="checkout"
						href="/checkout"
						className="hover:bg-green-700 text-white text-lg hover:underline px-3 py-2 rounded-md text-sm font-medium mr-2"
					>
						Checkout
					</a>
					<input
						className="border-2 border-gray-300 bg-white h-10 px-5 pr-5 rounded-lg text-sm focus:outline-none justify-end"
						type="search"
						name="search"
						placeholder="Search"
					/>
				</div>
				<div className="py-2 px-2 relative">
					<button>
						<Link to="/cart">
							<img src={Cart} alt="cart" className="h-10 w-25 float" />
						</Link>
					</button>
				</div>
				<div className="pt-4">
					{count > 0 ? (
						<h1 className="text-center font-bold">{count}</h1>
					) : null}
				</div>
			</div>
			<div className="text-center py-20 justify-center font-bold font-serif">
				<img
					src={LocationIcon}
					alt="logo"
					className="h-5 w-5 ml-auto mr-auto"
				/>
				<h3>Richmond, VA</h3>
			</div>
		</>
	);
};
