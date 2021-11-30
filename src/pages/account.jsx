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
				<div className="flex my-2">
					<div className="">
						<h1 className="pr-4 py-2 font-bold">Expiration Date:</h1>

						<input
							type="text"
							id="expDate"
							name="exp date"
							placeholder="12/22"
							className="bg-gray-200 rounded p-2 m-2"
						/>
					</div>
					<div>
						<h1 className="pr-4 py-2 font-bold">CCV:</h1>
						<input
							type="text"
							id="securityCode"
							name="secCode"
							placeholder="Security Code"
							className="bg-gray-200 rounded p-2 m-2"
						/>
					</div>
				</div>
				<div className="justify-center my-2 mb-10">
					<h1 className="pr-4 py-2 font-bold">Zip Code:</h1>
					<input
						type="text"
						id="zip"
						name="zip"
						placeholder="Zipcode"
						className="bg-gray-200 rounded p-2"
					/>
				</div>
			</div>
		</>
	);
};
