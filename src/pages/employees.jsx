import { AdminNavbar } from '../components/adminNavbar';
import { EmployeeTable } from '../components/employeeTable';

export const Employees = () => {
	return (
		<>
			<AdminNavbar />
			<div className="m-auto w-1/2">
				<div className="flex justify-between w-full">
					<h1 className="font-bold">Employees</h1>
					<a
						className="bg-green-400 hover:bg-green-700 text-black text-lg ml-5 px-3 py-2 rounded-md font-medium ml-2"
						href="https://www.briandunning.com/sample-data/us-500.zip"
						download
					>
						Download Time Report
					</a>
				</div>
				<EmployeeTable />
			</div>
		</>
	);
};
