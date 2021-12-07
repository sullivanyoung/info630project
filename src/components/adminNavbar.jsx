import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../images/logo.png';
import LocationIcon from '../images/location-icon.png';
import { Link } from 'react-router-dom';

const navigation = [
	{ name: 'Home', href: '/admin', current: true },
	{ name: 'Inventory', href: '/inventory', current: false },
	{ name: 'Employees', href: '/employees', current: false },
	{ name: 'Budget Report', href: '#', current: false },
	{ name: 'Suppliers', href: '/suppliers', current: false },
];

export const AdminNavbar = ({ count }) => {
	return (
		<>
			<Disclosure as="nav" className="bg-green-500 fixed w-full">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
							<div className="relative flex items-center justify-between h-16">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<MenuIcon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
									<div className="flex-shrink-0 flex items-center">
										<Link to="/">
											<img
												className="block lg:hidden h-8 w-auto"
												src={Logo}
												alt="Workflow"
											/>
											<img
												className="hidden lg:block h-8 w-auto"
												src={Logo}
												alt="Workflow"
											/>
										</Link>
									</div>
									<div className="hidden sm:block sm:ml-6">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									<input
										className="border-2 border-gray-300 bg-white h-10 px-5 pr-5 rounded-lg text-sm focus:outline-none justify-end"
										type="search"
										name="search"
										placeholder="Search"
									/>
								</div>
							</div>
						</div>
					</>
				)}
			</Disclosure>
			<div className="text-center py-5 justify-center font-bold font-serif">
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
