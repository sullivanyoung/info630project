import { Navbar } from '../components/navbar';
import { Link } from 'react-router-dom';

export const Checkout = () => {
	return (
		<>
			<Navbar />
			<h1 className="text-center font-bold text-3xl">Checkout</h1>
			<div className="text-center my-2">
				<h1 className="text-center font-bold text-2xl pt-20 mb-5">Address:</h1>

				<div className="flex justify-center my-2">
					<div className="">
						<h1 className="pr-4 py-2 font-bold">Line 1:</h1>

						<input
							type="text"
							id="expDate"
							name="exp date"
							placeholder="Richmond"
							className="bg-gray-200 rounded p-2 m-2"
						/>
					</div>
					<div>
						<h1 className="pr-4 py-2 font-bold">Line 2:</h1>
						<input
							type="text"
							id="securityCode"
							name="secCode"
							placeholder="State"
							className="bg-gray-200 rounded p-2 m-2"
						/>
					</div>
				</div>

				<div className="flex justify-center my-2">
					<div className="">
						<h1 className="pr-4 py-2 font-bold">City:</h1>

						<input
							type="text"
							id="expDate"
							name="exp date"
							placeholder="Richmond"
							className="bg-gray-200 rounded p-2 m-2"
						/>
					</div>
					<div>
						<h1 className="pr-4 py-2 font-bold">State:</h1>
						<input
							type="text"
							id="securityCode"
							name="secCode"
							placeholder="State"
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

				<h1 className="text-center font-bold text-2xl pt-20 mb-5">
					Enter Payment Information:
				</h1>

				<div className="my-2">
					<h1 className="pr-4 py-2 font-bold">Name On Card:</h1>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Cardholder's Name"
						className="bg-gray-200 rounded p-2"
					/>
				</div>
				<div className="justify-center my-2">
					<h1 className="pr-4 py-2 font-bold">Card Number:</h1>
					<input
						type="text"
						id="cardNumber"
						name="card number"
						placeholder="Number on Card"
						className="bg-gray-200 rounded p-2"
					/>
				</div>
				<div className="flex justify-center my-2">
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
						<h1 className="pr-4 py-2 font-bold">CVV:</h1>
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
				<Link to="/tracking">
					<button
						class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-20 rounded"
						onClick={() => {
							alert('Thank you for your purchase');
						}}
					>
						Confirm Purchase
					</button>
				</Link>
			</div>
		</>
	);
};
