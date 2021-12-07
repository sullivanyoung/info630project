import { useState } from 'react';

export const ReplenishInventory = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="relative flex flex-col justify-items-center">
			<button
				type="button"
				style={{ transition: 'all .15s ease' }}
				onClick={() => {
					setShowModal(true);
				}}
			>
				<h2 className="hover:text-blue-500">Replenish Inventory</h2>
			</button>
			<div>
				<div>
					{showModal ? (
						<>
							<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
								<div className="relative w-auto my-6 mx-auto max-w-3xl">
									{/*content*/}
									<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
										{/*header*/}
										<div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
											<h3 className="text-3xl font-semibold">
												Replenish Inventory
											</h3>
											<button
												className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
												onClick={() => setShowModal(false)}
											>
												<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
													×
												</span>
											</button>
										</div>
										{/*body*/}
										<div className="relative p-6 flex-auto inline-block">
											<br />
											<div className="w-full mx-auto text-gray-600 text-lg leading-relaxed">
												<div>
													<label htmlFor="item name" className="font-bold pr-4">
														Item:
													</label>
													<select className="text-right">
														<option>Apples</option>
														<option>Bananas</option>
														<option>Oranges</option>
														<option>Peaches</option>
														<option>Cantaloupe</option>
														<option>Lasagna</option>
														<option>Pizza</option>
														<option>Frozen Chicken Strips</option>
														<option>Velveta</option>
													</select>
												</div>
												<div>
													<label
														htmlFor="item amount"
														className="font-bold pr-4"
													>
														Amount:
													</label>
													<select className="ml-28">
														<option>10</option>
														<option>20</option>
														<option>50</option>
														<option>100</option>
														<option>200</option>
													</select>
												</div>
												<div>
													<label
														htmlFor="supplier name"
														className="font-bold pr-4"
													>
														Supplier:
													</label>
													<select className="text-right">
														<option>Good Foods</option>
														<option>Less Good Foods</option>
														<option>Subpar Foods</option>
														<option>Decent Foods</option>
													</select>
												</div>
												<div className="mt-4">
													<label
														htmlFor="order cost"
														className="font-bold pr-4"
													>
														Cost:
													</label>
													<label className="ml-40 font-bold text-xl">
														${Math.round(100 * Math.random())}
													</label>
												</div>
											</div>
										</div>
										{/*footer*/}
										<div className="flex items-center justify-between p-6 border-t border-solid border-gray-300 rounded-b">
											<button className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
												Place Order
											</button>
											<button
												className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
												type="button"
												style={{ transition: 'all .15s ease' }}
												onClick={() => setShowModal(false)}
											>
												Close
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};
