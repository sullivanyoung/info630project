import Logo from '../images/logo.png';

const navigation = [
	{ name: 'Home', href: '/home', current: true },
	{ name: 'Products', href: '/products', current: false },
	{ name: 'Online Order', href: '#', current: false },
	{ name: 'Find a Store', href: '#', current: false },
];

export const Navbar = () => {
	return (
		<div className="flex bg-green-500">
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
				<input
					className="border-2 border-gray-300 bg-white h-10 px-5 pr-5 rounded-lg text-sm focus:outline-none justify-end"
					type="search"
					name="search"
					placeholder="Search"
				/>
			</div>
			<div className="py-2">
				<a
					href="/login"
					className="flex hover:bg-green-700 text-white text-lg hover:underline px-3 py-2 rounded-md text-sm font-medium"
				>
					Login
				</a>
			</div>
		</div>
	);
};
