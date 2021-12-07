export const SupplierTable = () => {
	return (
		<>
			<table className="table-auto border-collapse border border-green-800 ml-5 my-4">
				<thead>
					<tr>
						<th className="border border-green-800 px-4">Supplier ID</th>
						<th className="border border-green-800 px-4">Company Name</th>
						<th className="border border-green-800 px-4">Contact Name</th>
						<th className="border border-green-800 px-4">Contact Title</th>
						<th className="border border-green-800 px-4">Contact Phone</th>
						<th className="border border-green-800 px-4">Contact Email</th>
						<th className="px-4"></th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-center">
						<td className="border border-green-800 px-4">s1</td>
						<td className="border border-green-800 px-4">Good Foods</td>
						<td className="border border-green-800 px-4">Jimmy John</td>
						<td className="border border-green-800 px-4">Manager</td>
						<td className="border border-green-800 px-4">(999) 999-9999</td>
						<td className="border border-green-800 px-4">
							fakegmail@gmail.com
						</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">s1</td>
						<td className="border border-green-800 px-4">Less Good Foods</td>
						<td className="border border-green-800 px-4">Which Which</td>
						<td className="border border-green-800 px-4">CDO</td>
						<td className="border border-green-800 px-4">(999) 999-9998</td>
						<td className="border border-green-800 px-4">
							imnotcreative@gmail.com
						</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">s1</td>
						<td className="border border-green-800 px-4">Subpar Foods</td>
						<td className="border border-green-800 px-4">Jersey Mike</td>
						<td className="border border-green-800 px-4">
							Richmond Branch Manager
						</td>
						<td className="border border-green-800 px-4">(999) 999-9997</td>
						<td className="border border-green-800 px-4">
							notarealemail@gmail.com
						</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">s1</td>
						<td className="border border-green-800 px-4">Decent Foods</td>
						<td className="border border-green-800 px-4">Sub Way</td>
						<td className="border border-green-800 px-4">Manager</td>
						<td className="border border-green-800 px-4">(999) 999-9996</td>
						<td className="border border-green-800 px-4">
							afakegmail@gmail.com
						</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
				</tbody>
			</table>
		</>
	);
};
