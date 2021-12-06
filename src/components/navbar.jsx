import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../images/logo.png';
import Cart from '../images/cart.png';
import LocationIcon from '../images/location-icon.png';
import { Link } from 'react-router-dom';

const navigation = [
	{ name: 'Home', href: '/home', current: true },
	{ name: 'Products', href: '/products', current: false },
	// { name: 'Online Order', href: '#', current: false },
	// { name: 'Find a Store', href: '#', current: false },
];

export const Navbar = ({ count }) => {
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
									{/* Profile dropdown */}
									<Menu as="div" className="flex ml-3 relative">
										<div>
											<Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
												<span className="sr-only">Open user menu</span>
												<img className="h-8 w-8" src={Cart} alt="cart" />
												{count > 0 ? (
													<h1 className="text-center pt-1 pl-2 text-lg font-bold">
														{count}
													</h1>
												) : null}
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="origin-top-right absolute right-0 mt-8 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Menu.Item>
													<a
														href="/cart"
														className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
													>
														Cart
													</a>
												</Menu.Item>
												<Menu.Item>
													<a
														href="/home"
														className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
													>
														Orders
													</a>
												</Menu.Item>
												<Menu.Item>
													<a
														href="/account"
														className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
													>
														Account
													</a>
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
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
