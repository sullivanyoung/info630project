import { Navbar } from '../components/navbar';
import { useState } from 'react';

export const Cart = () => {
	const [count, setCount] = useState(3);
	const [cart, setCart] = useState([
		{
			id: '1',
			name: 'Apples',
			price: 0.99,
			qty: 3,
			img: 'https://lh3.googleusercontent.com/proxy/w8X1QKw6IAGdfXSALEZW5sQ67o6ZXBRlcpNLO9Ut6qpiRweNdY1JZCO2uVDsC-uExHRlCVIqA15fzK_BFkw3i6ug',
			inventory: 20,
		},
		{
			id: '2',
			name: 'Lasagna',
			price: 4.99,
			qty: 4,
			img: 'https://www.goodnes.com/sites/g/files/jgfbjl131/files/styles/gdn_hero_pdp_product_image/public/gdn_product/field_product_images/stouffers-fzjleuokzb74uwwi15sl.png.webp?itok=zQP4NbXG',
			inventory: 12,
		},
		{
			id: '3',
			name: 'Pizza',
			price: 6.32,
			qty: 1,
			img: 'https://i5.walmartimages.com/asr/94f8eec3-a197-4bbb-9305-85cea4a43665.5631c100b474672cdfdd2e21b9a514ed.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
			inventory: 34,
		},
	]);

	var total = 0;

	const changeCart = () => {
		setCount(count - 1);
	};

	const handleDelete = (id) => {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
	};

	const buttonClick = (id) => {
		changeCart();
		handleDelete(id);
	};

	var getLocation;
	return (
		<>
			<Navbar count={count} />
			<div className="m-auto w-1/2">
				<h1 className="font-bold text-2xl">Cart:</h1>
				<table className="table-auto border-collapse border border-green-800 ml-5 my-4">
					<thead>
						<tr>
							<th className="border border-green-800 px-4">ID</th>
							<th className="border border-green-800 px-4">Product Name</th>
							<th className="border border-green-800 px-4">Quantity</th>
							<th className="border border-green-800 px-4">Price</th>
							<th className="border border-green-800 px-4">Total</th>
							<th className="border border-green-800 px-4">Delete</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((item) => {
							total = total + item.price * item.qty;
							if (total > 0) {
								getLocation = '/checkout';
							} else {
								getLocation = '/#';
							}
							return (
								<tr className="text-center">
									<td className="border border-green-800 px-4">{item.id}</td>
									<td className="border border-green-800 px-4">{item.name}</td>
									<td className="border border-green-800 px-4">{item.qty}</td>
									<td className="border border-green-800 px-4">
										${item.price}
									</td>
									<td className="border border-green-800 px-4">
										${(item.price * item.qty).toFixed(2)}
									</td>
									<th className="border border-green-800 px-4 hover:text-red-600">
										<button
											className="font-bold"
											onClick={() => buttonClick(item.id)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												/>
											</svg>
										</button>
									</th>
								</tr>
							);
						})}
					</tbody>
				</table>
				<div className="flex">
					<h1 className="ml-44 py-2 font-bold">
						Cart Total: ${total.toFixed(2)}
					</h1>
					{/* TODO: Disable Checkout button if total == 0 */}
					<a
						key="checkout"
						href={getLocation}
						className="bg-green-400 hover:bg-green-700 text-black text-lg ml-5 px-3 py-2 rounded-md font-medium ml-2"
					>
						Checkout
					</a>
				</div>
			</div>
		</>
	);
};
