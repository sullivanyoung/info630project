export const Inventory = () => {
	return (
		<div>
			<h1>Inventory Table</h1>
			<table className="table-autp border-collapse border border-green-800">
				<thead>
					<tr>
						<th className="border border-green-800 px-4">Title</th>
						<th className="border border-green-800 px-4">Author</th>
						<th className="border border-green-800 px-4">Views</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border border-green-800 px-4">Intro to CSS</td>
						<td className="border border-green-800 px-4">Adam</td>
						<td className="border border-green-800 px-4">858</td>
					</tr>
					<tr className="bg-green-200">
						<td className="border border-green-800 px-4">
							A Long and Winding Tour of the History of UI Frameworks and Tools
							and the Impact on Design
						</td>
						<td className="border border-green-800 px-4">Adam</td>
						<td className="border border-green-800 px-4">112</td>
					</tr>
					<tr>
						<td className="border border-green-800 px-4">
							Intro to JavaScript
						</td>
						<td className="border border-green-800 px-4">Chris</td>
						<td className="border border-green-800 px-4">1,280</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
