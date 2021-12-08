import { useState } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export const SignIn = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();

	var getLocation;

	if (username === 'admin' && password === 'admin') {
		getLocation = '/admin';
	} else if (username === 'testusername' && password === 'testpassword') {
		getLocation = '/home';
	}

	return (
		<form>
			<img src={Logo} alt="logo" className="ml-auto mr-auto" />
			<h1 className="font-bold text-center text-3xl mb-5 underline">Sign In</h1>
			<div className="my-2">
				<div className="flex justify-center my-2">
					<h1 className="pr-4 py-2 font-bold w-48 text-right">
						Username or Email:
					</h1>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="enter email here"
						className="bg-gray-200 rounded p-2"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="flex justify-center my-2">
					<h1 className="pr-4 py-2 font-bold w-48 text-right">Password:</h1>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="enter password here"
						className="bg-gray-200 rounded p-2"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<h1 className="text-red-500 font-bold text-center pt-2">{error}</h1>
			</div>
			<div className="py-2">
				<div className="block my-6 text-center">
					<Link
						to={getLocation}
						className="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-24 rounded text-center focus:outline-none"
						onClick={() =>
							setError('Sorry Your Credentials Were Invalid Please Try Again')
						}
					>
						Submit
					</Link>
				</div>
				<Link
					className="text-gray-400 block py-2 text-center hover:text-blue-600"
					to="/register"
				>
					Don't have an account? Register Here
				</Link>
			</div>
		</form>
	);
};
