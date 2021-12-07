export const EmployeeTable = ({ page }) => {
	return (
		<div>
			<table className="table-auto border-collapse border border-green-800 ml-5 my-4">
				<thead>
					<tr>
						<th className="border border-green-800 px-4">Employee ID</th>
						<th className="border border-green-800 px-4">First Name</th>
						<th className="border border-green-800 px-4">Last Name</th>
						<th className="border border-green-800 px-4">Title</th>
						<th className="border border-green-800 px-4">Start Date</th>
						<th className="border border-green-800 px-4">Salary</th>
						<th className="border border-green-800 px-4">Supervisor</th>
						<th className="px-4"></th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-center">
						<td className="border border-green-800 px-4">e1</td>
						<td className="border border-green-800 px-4">Albin</td>
						<td className="border border-green-800 px-4">Chacko</td>
						<td className="border border-green-800 px-4">President</td>
						<td className="border border-green-800 px-4">08/12/2021</td>
						<td className="border border-green-800 px-4">120000</td>
						<td className="border border-green-800 px-4">-</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">e2</td>
						<td className="border border-green-800 px-4">Alexis</td>
						<td className="border border-green-800 px-4">Richard</td>
						<td className="border border-green-800 px-4">CEO</td>
						<td className="border border-green-800 px-4">08/12/2021</td>
						<td className="border border-green-800 px-4">100000</td>
						<td className="border border-green-800 px-4">e1</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">e3</td>
						<td className="border border-green-800 px-4">Kavina</td>
						<td className="border border-green-800 px-4">Koorana</td>
						<td className="border border-green-800 px-4">manager</td>
						<td className="border border-green-800 px-4">08/20/2021</td>
						<td className="border border-green-800 px-4">75000</td>
						<td className="border border-green-800 px-4">e2</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">e4</td>
						<td className="border border-green-800 px-4">Traci</td>
						<td className="border border-green-800 px-4">Luu</td>
						<td className="border border-green-800 px-4">employee</td>
						<td className="border border-green-800 px-4">08/22/2021</td>
						<td className="border border-green-800 px-4">32000</td>
						<td className="border border-green-800 px-4">e3</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
					<tr className="text-center">
						<td className="border border-green-800 px-4">e5</td>
						<td className="border border-green-800 px-4">Sullivan</td>
						<td className="border border-green-800 px-4">Young</td>
						<td className="border border-green-800 px-4">employee</td>
						<td className="border border-green-800 px-4">08/30/2021</td>
						<td className="border border-green-800 px-4">30000</td>
						<td className="border border-green-800 px-4">e3</td>
						<th className="border border-green-800 px-4 hover:text-red-600">
							<button className="font-bold">Edit</button>
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
