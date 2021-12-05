import { AdminNavbar } from '../components/adminNavbar';
import { Budget } from '../components/budget';
import { Employees } from '../components/employees';
import { Inventory } from '../components/inventory';

export const Admin = () => {
	return (
		<>
			<AdminNavbar />
			<h1 className="font-bold text-5xl ml-20">Dashboard</h1>
			<div className="ml-24 mt-5">
				<div className="my-4">
					<h2 className="font-bold text-xl">Inventory</h2>
					<Inventory />
				</div>
				<div className="my-4">
					<h2 className="font-bold text-xl">Employees</h2>
					<Employees />
				</div>
				<div className="my-4">
					<h2 className="font-bold text-xl">Budget Report</h2>
					<Budget />
				</div>
			</div>
		</>
	);
};
