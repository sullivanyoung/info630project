import { Navbar } from '../components/navbar';

export const Account = () => {
	return (
		<>
			<Navbar />
			<div className="ml-96 flex">
				<h1 className="font-bold text-3xl pr-56">Your Account:</h1>
				<button className="text-gray-400 block py-2 hover:text-blue-600">
					Edit Account Information
				</button>
			</div>
			<div className="ml-96 my-2">
				<div className="my-2">
					<h1 className="pr-4 py-2 font-bold">Name:</h1>
					<h2>Sullivan Young</h2>
				</div>
				<div className="justify-center my-2">
					<h1 className="pr-4 py-2 font-bold">Password:</h1>
					<div className="flex">
						<h2>**************</h2>
						<button className="text-gray-400 block pl-4 hover:text-blue-600">
							Change Password
						</button>
					</div>
				</div>
				<div className="justify-center my-2">
					<h1 className="pr-4 py-2 font-bold">Email Address:</h1>
					<div className="flex">
						<h2>***********@gmail.com</h2>
						<button className="text-gray-400 block pl-4 hover:text-blue-600">
							Update Notification Settings
						</button>
					</div>
				</div>
				<div className="justify-center my-2">
					<h1 className="pr-4 py-2 font-bold">Archived Orders:</h1>
					<div className="flex">
						<button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-10 rounded text-center focus:outline-none">
							View Archived Orders
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
