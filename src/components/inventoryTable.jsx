export const InventoryTable = ({ page }) => {
	return (
		<div>
			<table className="table-auto border-collapse border border-green-800 ml-5 my-4">
				<thead>
					<tr>
						<th className="border border-green-800 px-4">Inventory ID</th>
						<th className="border border-green-800 px-4">Name</th>
						<th className="border border-green-800 px-4">Category</th>
						<th className="border border-green-800 px-4">Unit Price</th>
						<th className="border border-green-800 px-4">Stock</th>
						<th className="border border-green-800 px-4">Reorder Level</th>
						<th className="border border-green-800 px-4">Discontinued?</th>
						<th className="px-4"></th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-center">
						<td className="border border-green-800 px-4">9824651</td>
						<td className="border border-green-800 px-4">Apples</td>
						<td className="border border-green-800 px-4">Fruit</td>
						<td className="border border-green-800 px-4">$1.99</td>
						<td className="border border-green-800 px-4">64</td>
						<td className="border border-green-800 px-4">25</td>
						<td className="border border-green-800 px-4">False</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">2375628</td>
						<td className="border border-green-800 px-4">Bananas</td>
						<td className="border border-green-800 px-4">Fruit</td>
						<td className="border border-green-800 px-4">$0.50</td>
						<td className="border border-green-800 px-4">72</td>
						<td className="border border-green-800 px-4">35</td>
						<td className="border border-green-800 px-4">False</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">7462585</td>
						<td className="border border-green-800 px-4">Oranges</td>
						<td className="border border-green-800 px-4">Fruit</td>
						<td className="border border-green-800 px-4">$1.25</td>
						<td className="border border-green-800 px-4">87</td>
						<td className="border border-green-800 px-4">30</td>
						<td className="border border-green-800 px-4">False</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">9835217</td>
						<td className="border border-green-800 px-4">Peaches</td>
						<td className="border border-green-800 px-4">Fruit</td>
						<td className="border border-green-800 px-4">$1.50</td>
						<td className="border border-green-800 px-4">65</td>
						<td className="border border-green-800 px-4">30</td>
						<td className="border border-green-800 px-4">False</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">6647382</td>
						<td className="border border-green-800 px-4">Cantaloupe</td>
						<td className="border border-green-800 px-4">Fruit</td>
						<td className="border border-green-800 px-4">$2.00</td>
						<td className="border border-green-800 px-4">112</td>
						<td className="border border-green-800 px-4">0</td>
						<td className="border border-green-800 px-4">True</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">8095463</td>
						<td className="border border-green-800 px-4">Lasagna</td>
						<td className="border border-green-800 px-4">Frozen Foods</td>
						<td className="border border-green-800 px-4">$4.99</td>
						<td className="border border-green-800 px-4">46</td>
						<td className="border border-green-800 px-4">15</td>
						<td className="border border-green-800 px-4">False</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">1656842</td>
						<td className="border border-green-800 px-4">Pizza</td>
						<td className="border border-green-800 px-4">Frozen Foods</td>
						<td className="border border-green-800 px-4">$6.30</td>
						<td className="border border-green-800 px-4">78</td>
						<td className="border border-green-800 px-4">35</td>
						<td className="border border-green-800 px-4">False</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">9513564</td>
						<td className="border border-green-800 px-4">
							Frozen Chicken Strips
						</td>
						<td className="border border-green-800 px-4">Frozen Foods</td>
						<td className="border border-green-800 px-4">$5.00</td>
						<td className="border border-green-800 px-4">23</td>
						<td className="border border-green-800 px-4">10</td>
						<td className="border border-green-800 px-4">False</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">8523694</td>
						<td className="border border-green-800 px-4">Velveta</td>
						<td className="border border-green-800 px-4">Dairy</td>
						<td className="border border-green-800 px-4">$2.50</td>
						<td className="border border-green-800 px-4">0</td>
						<td className="border border-green-800 px-4">0</td>
						<td className="border border-green-800 px-4">True</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
