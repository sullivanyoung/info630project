import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Button } from '../components/linkButton';

export const Register = () => {
	return (
		<div className="">
			<img src={Logo} alt="logo" className="ml-auto mr-auto" />
			<h1 className="font-bold text-center text-3xl mb-5 underline">
				Register
			</h1>
			<div className="my-2">
				<div className="flex justify-center my-2">
					<h1 className="pr-4 py-2 font-bold w-48 text-right">Email:</h1>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="enter email here"
						className="bg-gray-200 rounded p-2"
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
					/>
				</div>
				<div className="flex justify-center my-2">
					<h1 className="pr-4 py-2 font-bold w-48 text-right">
						Confirm Password:
					</h1>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="re-type password here"
						className="bg-gray-200 rounded p-2"
					/>
				</div>
			</div>
			<div className="py-2">
				<Link className="text-gray-400 block py-2 text-center hover:text-blue-600">
					Already have an account? Sign in
				</Link>
				<div className="block my-4 text-center">
					<Button
						name="Continue with Google"
						location="/"
						class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-10 rounded text-center focus:outline-none"
					/>
				</div>
				<div className="block my-6 text-center">
					<Button
						name="Continue with Facebook"
						location="/"
						class="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-16 rounded text-center focus:outline-none"
					/>
				</div>
				<div className="block my-6 text-center">
					<Button
						name="Submit"
						location="/home"
						class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-24 rounded text-center focus:outline-none"
					/>
				</div>
			</div>
		</div>
	);
};
